import { Typography } from '@/components';
import { sizes, spacing } from '@/constants';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface AuthProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
}

const Auth = ({ onLogin, onRegister }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setError(true);
      setErrorMsg('Debes rellenar todos los campos');
      setTimeout(() => {
        setErrorMsg('');
        setError(false);
      }, 3000);
      return;
    }

    if (isLogin) {
      onLogin(email, password);
    } else {
      onRegister(name, email, password);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Typography variant="h2" style={styles.title}>
            {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
          </Typography>
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
              placeholderTextColor={'grey'}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={'grey'}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'grey'}
          />

          {error && <Typography style={styles.error}>{errorMsg}</Typography>}

          <TouchableOpacity style={styles.button}>
            <Typography style={styles.buttonText}>
              {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Typography style={styles.switchText}>
              {isLogin
                ? '¿No tienes cuenta? Crear cuenta'
                : '¿Ya tienes cuenta? Iniciar sesión'}
            </Typography>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#624695',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    marginTop: 20,
    color: 'white',
  },
  error: {
    color: 'red',
    marginVertical: spacing.s,
    textAlign: 'center',
  },
});

export default Auth;
