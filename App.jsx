/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { linking } from "./src/navigation/linking";

function App() {


  // React / React Native -> tsx  (Typescript based React) or jsx (Javascript based)
  // Typescript -> will be more script, 
  return (
    <NavigationContainer
      linking={linking}
      onStateChange={(state) => {
        console.log("Nav state changed:", JSON.stringify(state, null, 2));
      }}
      onReady={() => {
        console.log("Navigation is ready");
      }}

    >
      <RootNavigator />
    </NavigationContainer>

  );
}

export default App;
