import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
);

export default StackNavigator;