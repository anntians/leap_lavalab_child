import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TriviaScreen from './screens/TriviaScreen';


function HomeTab() {
  return (
      <HomeScreen/>
  );
}

function ProfileTab() {
  return (
    <ProfileScreen/>
    // <Text>Hi</Text>
  );
}

function TriviaTab() {
  return (
    <TriviaScreen/>
    // <Text>Hi</Text>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'card'
                : 'card-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Trivia') {
              iconName = focused ? 'help' : 'help-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#A0D995',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Trivia" component={TriviaTab} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}