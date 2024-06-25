import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext, ThemeProvider } from './styles/ThemeContext';
import Index from './Index';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
};

export default App;