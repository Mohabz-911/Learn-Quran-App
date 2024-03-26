//  Redux and friends
import { Provider } from "react-redux";
import { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./Redux/store";
import { RootSiblingParent } from "react-native-root-siblings";

// Fonts
import { useFonts } from "expo-font";
import { fonts } from "./Fonts";

// Status bar
import { StatusBar } from "expo-status-bar";

// Main app
import Navigation from "./Navigation";

const AppWrapper = () => {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootSiblingParent>
          <StatusBar style="light" />
          <Navigation />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};
export default AppWrapper;
