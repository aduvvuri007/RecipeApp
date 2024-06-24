import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Search For A Recipe">
        <Stack.Screen name="Search For A Recipe" component={HomeScreen} />
    </Stack.Navigator>
);

export default StackNavigator;