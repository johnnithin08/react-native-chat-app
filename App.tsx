/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { colorWhite, flexChild } from "./src/styles"
import { RootNavigation } from "./src/navigation"


export const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

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
            <RootNavigation />
          </KeyboardAvoidingView>
        ),
        ios: (
          <KeyboardAvoidingView behavior="padding" style={flexChild}>
            <RootNavigation />
          </KeyboardAvoidingView>
        )
      })}
    </SafeAreaProvider>
  );
}
