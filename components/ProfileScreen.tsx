import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/cat.png')}
                    style={styles.profilePicture}
                />
                <Text style={styles.profileName}>Meow Meow</Text>
                <Text style={styles.profileBio}>Food lover and adventurer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileBio: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
