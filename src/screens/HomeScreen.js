import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const renderRecipe = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
            <View style={styles.recipeContainer}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search recipes..."
                value={search}
                onChangeText={setSearch}
            />
            <TouchableOpacity
                style={[styles.button, isPressed && styles.buttonActive]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => {
                    if (search.trim() !== '') {
                        axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                            params: {
                                apiKey: '2c31e1f8655e43beb056ee69b5ad43d6',
                                query: search
                            }
                        }).then(response => {
                            setRecipes(response.data.results);
                        }).catch(error => {
                            console.error('Error fetching data: ', error);
                        });
                    }
                }}
            >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderRecipe}
                style={styles.recipeList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        backgroundColor: '#f5f5f5',
        color: '#242424',
        paddingHorizontal: 10,
        paddingVertical: 8,
        minHeight: 40,
        borderRadius: 4,
        borderWidth: 0,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 1, // For Android shadow
        width: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0276FF',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 21,
        marginVertical: 10,
        shadowColor: 'rgba(255, 255, 255, 0.26)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    buttonActive: {
        backgroundColor: '#006AE8',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    recipeList: {
        marginTop: 20,
    },
    recipeContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    recipeTitle: {
        fontSize: 18,
        color: '#333',
    },
});

export default HomeScreen;
