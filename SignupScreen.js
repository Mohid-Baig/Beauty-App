import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { auth } from './firebase';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
 
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[loading,setloading]=useState(false)
const Signup=async()=>{
  setloading(true);
  try{
    const user = await createUserWithEmailAndPassword( auth,email, password);
    console.log(user)
  }
  catch(error){
    console.log(error);
    Alert('Signup failed'+error.message)
  }
  finally{
    setloading(false);  
  }
}


  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
     {
      loading?<ActivityIndicator size={'large'} color={'#0000ff'}/>:<>
      <Button title="Signup" onPress={()=>{Signup;
        navigation.navigate('Login')
       } } />
      </>
     }
      <Text style={styles.text}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'teal'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    color:'white',
    textAlign:'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color:'white'
  },
  link: {
    color: 'skyblue',
  },
});

export default SignupScreen;
