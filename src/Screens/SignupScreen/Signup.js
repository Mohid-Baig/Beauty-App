import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export const SignUp = ({navigation}) => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    
    const beep = () => {
        Alert.alert('Signed up successfully');
        navigation.navigate('Login' )
    }
    const inputCheck = () => {
        if (username === '' || email === '' || password === '' || confirmpassword === '') {
            Alert.alert('Error', 'Please fill all the fields')
        } else if (password != confirmpassword) {
            Alert.alert('Error', 'Passwords do not match')
        } else { beep() }
    }
    return (
        <ScrollView style={styles.main}>
        <View style={styles.main}>
            <View style={styles.parentContainer}>
                <View style={styles.container}>
                    <Text style={styles.headerText}>SignUp</Text>
                    <View style={styles.textContainer}>

                        <TextInput
                            style={styles.input}
                            value={username}
                            placeholder='Your Username'
                            placeholderTextColor="black"
                            onChangeText={(text) => setusername(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor="black"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setemail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setpassword(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Confirm Password'
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            value={confirmpassword}
                            onChangeText={(text) => setconfirmpassword(text)}
                        />
                        <TouchableOpacity style={styles.opacity} onPress={() => {
                            inputCheck();
                        }}>
                            <Text style={styles.opacityText}>SignUp</Text>
                        </TouchableOpacity>
                        <View style={styles.loginbtn}>
                            <Text style={styles.accountConfirmation}>Already have an Account?
                            </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.accountConfirmationText}>Login</Text>
                                </TouchableOpacity>
                        </View>
                            <Text style={[styles.accountConfirmation, { color: 'black' }, { marginTop: 20 }]}>---------------  Or  ---------------</Text>
                        <TouchableOpacity style={[styles.opacity, { backgroundColor: "#0c5cc4" }]}>
                            <Text style={styles.opacityText}>Login with Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.google]}>
                            <Text style={[styles.opacityText, { color: 'black' }]}>Login with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#008080',
    },
    headerText: {
        fontSize: 20,
        color: '#003366',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
        marginTop: 20,
    },
    parentContainer: {
        flex: 1,
        marginTop: '22%',
        alignItems: 'center',
    },
    container: {
        height: 660,
        width: '92%',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: '#DDDDDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 60,
        width: '87%',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#9da3ab',
        borderRadius: 8,
        color: 'black',
        fontFamily: 'Helvetica Neue',
        marginTop: 9,
    },
    textContainer: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacity: {
        height: 60,
        width: '87%',
        justifyContent: 'center',
        borderRadius: 8,
        color: 'black',
        fontFamily: 'Helvetica Neue',
        marginTop: 16,
        backgroundColor: '#3890fc',
    },
    opacityText: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    loginbtn: {
        marginTop: 8,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    accountConfirmation: {
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    },
    accountConfirmationText: {
        color: '#16a4dd',
        textDecorationLine: 'none',
    },
    google: {
        height: 60,
        width: '87%',
        justifyContent: 'center',
        borderRadius: 8,
        color: 'black',
        fontFamily: 'Helvetica Neue',
        marginTop: 9,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: "#DDDDD",
    },
})
