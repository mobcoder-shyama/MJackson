/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState,Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View, Keyboard,
  TouchableWithoutFeedback,
  Text,
  LogBox,I18nManager
} from 'react-native';
import RootStack from './navigation/RootStack';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;






const App: () => React$Node = () => {
   return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Fragment>
          <RootStack/>
        </Fragment>
    </TouchableWithoutFeedback>
     );
};



export default App;
