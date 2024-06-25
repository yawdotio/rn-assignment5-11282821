import React, { useContext } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext, ThemeProvider } from "./styles/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
// Import your icon images
import homeIcon from "./assets/home.png";
import cardsIcon from "./assets/myCards.png";
import statsIcon from "./assets/statictics.png";
import settingsIcon from "./assets/settings.png";

const Tab = createBottomTabNavigator();

const Index = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "purple", // Color of the tab when active
          tabBarInactiveTintColor: theme.text, // Color of the tab when inactive
          tabBarStyle: {
            backgroundColor: theme.background, 
            borderTopWidth: 0,
            shadowOpacity: 0,
          }, 
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={homeIcon}
                style={{ width: 15, height: 15, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Cards"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={cardsIcon}
                style={{ width: 15, height: 15, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={statsIcon}
                style={{ width: 15, height: 15, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={settingsIcon}
                style={{ width: 15, height: 15, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;
