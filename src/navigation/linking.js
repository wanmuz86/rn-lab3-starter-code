import { Linking } from "react-native";

export const linking = {
  // based on the prefixes  
  prefixes: ["myapp://"],

  async getInitialURL() {
    const url = await Linking.getInitialURL();
    console.log("Initial URL:", url);
    return url;
  },

  // listen to any update from the Swift code/ from AppDelegate.swift if anyone is opening an url
  // If it is opened, process it based on the configuration
  subscribe(listener) {
    const subscription = Linking.addEventListener("url", ({ url }) => {
      console.log("Incoming deep link URL:", url);
      listener(url);
    });

    return () => subscription.remove();
  },

  // based on the path that I defined here
  // Like the sitemap 
  // Double check the setting here with the "name" property in the configuration file
  config: {
    screens: {
      Main: {
        screens: {
          Tabs: {
            screens: {
              Home: "home",  // myapp://home
              Profile: "profile",  // myapp://profile
            },
          },
          Settings: "settings",   // myapp://settings
        },
      },
    },
  },
};
