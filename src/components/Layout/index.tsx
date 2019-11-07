// Dependencies
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

interface LayoutProps {
  bgColor?: string;
  children: React.ReactChildren;
}

const Layout: React.FC<LayoutProps> = ({bgColor = '#FFFFFF', children}) => (
  <SafeAreaProvider>
    <SafeAreaView
      style={{backgroundColor: bgColor, flex: 1}}
      forceInset={{top: 'always', bottom: 'always'}}>
      {children}
    </SafeAreaView>
  </SafeAreaProvider>
);

export default Layout;
