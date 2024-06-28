// RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Button } from 'react-native';
import axios from 'axios';
import { decode } from 'html-entities';

const RecipeDetails = ({ route }) => {
    const [recipe, setRecipe] = useState(null);
    const { recipe: initialRecipe } = route.params;

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${initialRecipe.id}/information`, {
            params: {
                apiKey: '2c31e1f8655e43beb056ee69b5ad43d6'
            }
        }).then(response => {
            setRecipe(response.data);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, [initialRecipe.id]);

    if (!recipe) {
        return <Text>Loading...</Text>;
    }

    const summary = decode(recipe.summary.replace(/(<([^>]+)>)/gi, ''));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text>Ready in: {recipe.readyInMinutes} minutes</Text>
            <Text>{summary}</Text>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <TouchableOpacity onPress={() => Linking.openURL(recipe.sourceUrl)}>
                <Text style={styles.link}>View Recipe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 8,
        marginTop: 16
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
        fontSize: 40,
        fontFamily: 'San Francisco'
    },

});

export default RecipeDetails;
