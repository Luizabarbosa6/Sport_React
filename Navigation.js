import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import App2 from './App2';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={App} options={{ title: 'Sport Club do Recife' }} />
        <Stack.Screen name="Detalhes" component={App2} options={{ title: 'Resumo & Títulos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
