import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                apiKey: '2c31e1f8655e43beb056ee69b5ad43d6',
                query: search
            }
        }).then(response => {
            setRecipes(response.data.results);
        });
    }, [search]);

    return (
        <View>
            <TextInput
                placeholder="Search recipes..."
                value={search}
                onChangeText={setSearch}
            />
        </View>
    );
}

export default HomeScreen;