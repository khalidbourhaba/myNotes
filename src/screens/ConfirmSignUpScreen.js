import React, { memo, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';
import { confirmCodeValidator } from '../core/utils';

//amplify
import Auth from '@aws-amplify/auth'

const ConfirmSignUpScreen = ({ navigation }) => {
  const [confirmCode, setconfirmCode] = useState({ value: '', error: '' });

  // Confirm users and redirect them to the SignIn page
  async function confirmSignUp() {
    await Auth.confirmSignUp(navigation.getParam('username'), confirmCode.value)
      .then(() => {
        console.log('Confirm sign up successful')
        Alert.alert("Sign up completed ! Please log in...")
        navigation.navigate('LoginScreen')        
      })
      .catch(err => {
        if (!err.message) {
          console.log('Error when entering confirmation code: ', err)
          Alert.alert('Error when entering confirmation code: ', err)
        } else {
          console.log('Error when entering confirmation code: ', err.message)
          Alert.alert('Error when entering confirmation code: ', err.message)
        }
      })
  }

  const _onSendPressed = () => {
    const confirmCodeError = confirmCodeValidator(confirmCode.value);

    if (confirmCodeError) {
      setconfirmCode({ ...confirmCode, error: confirmCodeError });
      return;
    }

    confirmSignUp();

  };

  const _onReSendPressed = () => {
    // Resend code if not received already
    async function resendSignUp() {
      await Auth.resendSignUp(navigation.getParam('username'))
        .then(() => console.log('Confirmation code resent successfully'))
        .catch(err => {
          if (!err.message) {
            console.log('Error requesting new confirmation code: ', err)
            Alert.alert('Error requesting new confirmation code: ', err)
          } else {
            console.log('Error requesting new confirmation code: ', err.message)
            Alert.alert('Error requesting new confirmation code: ', err.message)
          }
        })
    }

    resendSignUp();

  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('RegisterScreen')} />

      <Logo />

      <Header>Enter confirm code</Header>

      <TextInput
        label="Code"
        returnKeyType="done"
        value={confirmCode.value}
        onChangeText={text => setconfirmCode({ value: text, error: '' })}
        error={!!confirmCode.error}
        errorText={confirmCode.error}
        autoCapitalize="none"


      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Confirm SignUp
      </Button>

      <Button mode="contained" onPress={_onReSendPressed} style={styles.button}>
        Resend confirmation code
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ConfirmSignUpScreen);
