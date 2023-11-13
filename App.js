import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text } from 'react-native';
import ListScreen from './ListScreen';

const App = () => {
  const [screen, setScreen] = useState('Home');
  const [loggedInUsername, setLoggedInUsername] = useState(''); // Assuming you have a way to get the logged-in user

  const navigateToScreen = (screen) => {
    setScreen(screen);
  };

  return (
    <SafeAreaView>
      <View>
        {screen === 'Home' && (
          <View>
            <Text>This is the Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigateToScreen('Details')} />
            {/* Add a button or any other trigger to navigate to ListScreen */}
            <Button title="Go to List Screen" onPress={() => navigateToScreen('List')} />
          </View>
        )}
        {screen === 'Details' && (
          <View>
            <Text>This is the Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigateToScreen('Home')} />
          </View>
        )}
        {screen === 'List' && (
          <View>
            <Button title="Go to Home" onPress={() => navigateToScreen('Home')} />
            <ListScreen loggedInUsername={loggedInUsername} />

          </View>)}
      </View>
    </SafeAreaView>
  );
};

export default App;
