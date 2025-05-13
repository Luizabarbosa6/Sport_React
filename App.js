// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App2 from './App2'; // Importa sua tela separada

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sport Club do Recife</Text>
      <Text style={styles.description}>
        120 anos de glórias e conquistas! O Leão ruge mais forte.
      </Text>
     <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Detalhes')}>
  <Text style={styles.buttonText}>Leia mais</Text>
</TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#000000', // vermelho escuro
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
},

customButton: {
  backgroundColor: '#b22222', // preto
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginTop: 20,
},

buttonText: {
  color: '#ffffff', // vermelho escuro
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
});
