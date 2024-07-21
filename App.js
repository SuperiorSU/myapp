import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Gallery from './src/pages/About';
import Profile from './src/pages/Profile';
import About from './src/pages/About';

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          tabBarActiveTintColor: '#445b4b',
          tabBarInactiveTintColor: 'black',
          tabBarStyle:{
            backgroundColor:'white',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height:60,
            padding:5,
          },
          tabBarLabelStyle:{
            paddingBottom:5,
            marginTop:5,
            color:'black',
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App