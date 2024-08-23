import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
    const { userName, userEmail } = route.params; 
    const [name, setName] = useState(userName);
    const [uemail, setEmail] = useState(userEmail);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View style={styles.main}>
            <Text style={styles.header}>Profile Information</Text>
            
            <TextInput
                style={styles.input}
                value={name}
                placeholder="Name"
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                value={uemail}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                value={phone}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                value={address}
                placeholder="Address"
                onChangeText={setAddress}
            />
            
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Profile Updated')}>
                <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003366',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#003366',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        color:'black'
    },
    button: {
        backgroundColor: '#003366',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
