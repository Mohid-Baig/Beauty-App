import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const Signin = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', user);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log('Signin failed:', error.message);
      console.warn('Signin failed', error.message);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Text style={styles.title}>Login</Text>
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
      {
        loading ? (
          <ActivityIndicator size={'large'} color={'#0000ff'} />
        ) : (
          <>
            <Button title="Sign In" onPress={Signin} />
          </>
        )
      }
      <Text style={styles.text}>
        Don't have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign up
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
    backgroundColor: 'teal'
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
    borderRadius: 5,
    textAlign:'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
