import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTES} from '../navigation/routes';
import {RootStackNavigationProp} from '../navigation/types';
import {loginTestIDs} from '../testIDs';

export const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigation = useNavigation<RootStackNavigationProp>();

  async function signIn() {
    setLoading(true);
    await new Promise(res => setTimeout(res, 3000));
    if (login === 'gherkin' && password === 'test') {
      setIsError(false);
      navigation.navigate(ROUTES.HOME);
      setLogin('');
      setPassword('');
    } else {
      setIsError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    setIsError(false);
  }, [login, password]);

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Container
      edges={['bottom', 'left', 'right', 'top']}
      style={styles.container}
      testID={loginTestIDs.loginScreen}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scroll}>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setLogin}
            placeholder="Login"
            style={styles.input}
            testID={loginTestIDs.loginInput}
            value={login}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            testID={loginTestIDs.passwordInput}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={signIn}
            style={({pressed}) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            testID={loginTestIDs.signInButton}>
            {loading ? (
              <ActivityIndicator color="green" size="small" />
            ) : (
              <Text
                style={[styles.buttonText, isError && styles.buttonErrorText]}>
                {isError ? 'Invalid credentials' : 'Sign in'}
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 24,
    padding: 20,
    width: 200,
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonPressed: {
    opacity: 0.4,
  },
  buttonErrorText: {
    color: 'red',
  },
  buttonText: {
    color: 'lightgreen',
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
  },
  input: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    margin: 24,
    padding: 20,
  },
  inputContainer: {
    alignSelf: 'stretch',
  },
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    alignSelf: 'stretch',
    flex: 1,
    flexGrow: 1,
  },
});
