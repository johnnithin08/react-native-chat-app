/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button } from 'react-native';
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




import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { colorWhite, flexChild } from "./src/styles"
import { RootNavigation } from "./src/navigation"
import config from "./src/amplify/aws-exports"

Amplify.configure(config)


export const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const SignOutButton = () => {
    const { signOut } = useAuthenticator();
    return <Button title="Sign Out" onPress={signOut} />;
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colorWhite._1,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Authenticator.Provider>
        <Authenticator signUpAttributes={["phone_number"]}>
          {Platform.select({
            android: (
              <KeyboardAvoidingView behavior="height" style={flexChild}>
                <RootNavigation />
              </KeyboardAvoidingView>
            ),
            ios: (
              <KeyboardAvoidingView behavior="padding" style={flexChild}>
                <RootNavigation />
              </KeyboardAvoidingView>
            )
          })}
        </Authenticator>
      </Authenticator.Provider>
    </SafeAreaProvider>
  );
}
