// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home=()=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Login=(props)=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button onPress={()=>props.navigation.navigate("Home")} title='Submit'/>
    </View>
  );

}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;