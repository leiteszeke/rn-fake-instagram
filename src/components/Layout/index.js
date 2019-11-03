// Dependencies
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

const Layout = ({bgColor = '#FFFFFF', children}) => (
  <SafeAreaProvider>
    <SafeAreaView
      style={{backgroundColor: bgColor, flex: 1}}
      forceInset={{top: 'always', bottom: 'always'}}>
      {children}
    </SafeAreaView>
  </SafeAreaProvider>
);

export default Layout;
