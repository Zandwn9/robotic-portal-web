import React, { createContext } from "react";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

export const FontsContext = createContext({});

export const FontsProvider = ({ children }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_700Bold,
    RobotoMono_300Light,
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });

  return (
    <FontsContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontsContext.Provider>
  );
};
