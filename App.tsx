/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Amplify } from "aws-amplify"
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import config from "./src/aws-exports"

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { colorWhite, flexChild } from "./src/styles"
import { RootNavigation } from "./src/navigation"

Amplify.configure(config)


export const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colorWhite._1,
  };


  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {Platform.select({
        android: (
          <KeyboardAvoidingView behavior="height" style={flexChild}>
            <Authenticator.Provider>
              <Authenticator signUpAttributes={["name", "phone_number"]}>
                <RootNavigation />
              </Authenticator>
            </Authenticator.Provider>
          </KeyboardAvoidingView>
        ),
        ios: (
          <KeyboardAvoidingView behavior="padding" style={flexChild}>
            <Authenticator.Provider>
              <Authenticator signUpAttributes={["name", "phone_number"]}>
                <RootNavigation />
              </Authenticator>
            </Authenticator.Provider>
          </KeyboardAvoidingView>
        )
      })}
    </SafeAreaProvider>
  );
}
