import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackNavigationProp} from '../navigation/types';
import {homeTestIDs} from '../testIDs';

export const Home: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  function signOut() {
    navigation.goBack();
  }

  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Container
      edges={['bottom', 'left', 'right', 'top']}
      style={styles.container}
      testID={homeTestIDs.homeScreen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={signOut}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          testID={homeTestIDs.signOutButton}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
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
  buttonText: {
    color: 'lightgreen',
    fontSize: 18,
    fontWeight: '400',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    padding: 24,
  },
  headerText: {
    color: 'green',
    fontSize: 24,
    fontWeight: '500',
    margin: 24,
    padding: 24,
  },
});
