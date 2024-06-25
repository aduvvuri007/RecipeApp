import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetails from '../screens/RecipeDetails';

const Stack = createStackNavigator();

const StackNavigator = () => (

    <Stack.Navigator initialRouteName="Search For A Recipe">
        <Stack.Screen name="Search For A Recipe" component={HomeScreen} />
        <Stack.Screen name="Recipe Details" component={RecipeDetails} />
    </Stack.Navigator>
);

export default StackNavigator;