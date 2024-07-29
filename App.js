import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import pages
import Home from './src/pages/Home';
import Gallery from './src/pages/About';
import Profile from './src/pages/Profile';
import About from './src/pages/About';
import ToastP from './src/pages/ToastP';
import ExpenseP from './src/pages/ExpenseP';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import Email from './src/pages/Email';
import TestQ from './src/pages/TestQ';
import Result from './src/pages/Result'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TestQ"
        component={TestQ}
        options={{
          title: 'Test Series',
          headerStyle: {
            backgroundColor: '#16a34a',
            height: 80,
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          title: 'Results',
          headerStyle: {
            backgroundColor: '#16a34a',
            height: 80,
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Test') {
              iconName = focused ? 'tablet-portrait' : 'tablet-portrait-outline';
            }
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          tabBarActiveTintColor: '#445b4b',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            height: 60,
            padding: 5,
            shadowColor: 'black',
          },
          tabBarLabelStyle: {
            paddingBottom: 5,
            marginTop: 5,
            color: 'black',
          },
          headerShown: true,
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="About"
          component={About}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          name="Test"
          component={TestStack}
          options={{ headerShown: false }}
        />
        {/* <Tab.Screen name="Email" component={Email} />
        <Tab.Screen name="Signup" component={Signup} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
