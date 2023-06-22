import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from './Themed';

export default function About() {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>TasteBudThai</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <ScrollView>
                <Text style={styles.description}>
                    TasteBudThai is an app dedicated to bringing you the authentic and diverse flavors of Thai cuisine. Our mission is to help you explore the rich culinary heritage of Thailand and discover your new favorite dishes.
                </Text>
                <Text style={styles.featuresTitle}>Features:</Text>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>Personalized Recommendations</Text>
                    <Text style={styles.featureDescription}>
                        TasteBudThai uses advanced algorithms to curate personalized food recommendations based on your unique preferences.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>Explore Thai Cuisine</Text>
                    <Text style={styles.featureDescription}>
                        Dive into the depths of Thai cuisine with our extensive collection of traditional and modern dishes.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>Meal Scheduling</Text>
                    <Text style={styles.featureDescription}>
                        Take control of your meal planning with our convenient scheduling feature.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>Favorites and Saved Meals</Text>
                    <Text style={styles.featureDescription}>
                        Keep track of your favorite dishes and easily access them whenever you want.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>Notifications and Reminders</Text>
                    <Text style={styles.featureDescription}>
                        Never miss a delicious meal! TasteBudThai sends timely notifications and reminders based on your chosen schedule.
                    </Text>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureText}>User Profile</Text>
                    <Text style={styles.featureDescription}>
                        Customize your TasteBudThai experience by creating a user profile.
                    </Text>
                </View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: '100%',
        backgroundColor: '#eee',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    featuresTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    feature: {
        marginBottom: 20,
    },
    featureText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 14,
    },
});
