import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export const Login = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const beep = () => {
        Alert.alert('Success', 'Logged in successfully',);
        navigation.navigate('Home')
    }
    const inputCheck = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please enter email and password')
        } else {
            beep()
        }
    }
    return (
        <ScrollView style={styles.main}>
        <View style={styles.main}>
            <View style={styles.iconAdjust}>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.opacityForIcon}>
                    <AntDesign name="left" size={17} color="#003366" />
                </TouchableOpacity>
            </View>
            <View style={styles.parentcontainer}>
                <View style={styles.container}>
                    <Text style={styles.Headertext}>Login</Text>
                    <View style={styles.textContainer}>
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
                        <TouchableOpacity style={styles.opacity} onPress={() => {
                            inputCheck();

                        }}>
                            <Text style={styles.opacityText}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.loginbtn}>
                            <Text style={styles.accountConfirmation}>Don't have an Account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                                <Text style={styles.accountConfirmationText}>Signup</Text>
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
        backgroundColor: '#008080'
    },
    iconAdjust: {
        margin: 8
    },
    opacityForIcon: {
        borderWidth: 0.4,
        borderColor: '#003366',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 40,
        width: 40
    },
    Headertext: {
        fontSize: 20,
        color: '#003366',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginTop: 20,
    },
    parentcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'25%'
    },
    container: {
        height: 530,
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
        flexDirection: 'row'
    },
    accountConfirmation: {
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 5
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
