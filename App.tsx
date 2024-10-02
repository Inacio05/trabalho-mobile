import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const logo = require('./assets/inacio.jpeg'); // Altere o caminho para a sua imagem

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <br />
      <Text style={styles.text}>Inacio Assofra Adolfo da Silva</Text>
      <View style={styles.socialButtons}>
        <Button
          title="LinkedIn"
          onPress={() => Linking.openURL('http://linkedin.com/in/inacio-assofra-697190300')}
        />
        <br /><br />
        <Button
          title="GitHub"
          onPress={() => Linking.openURL('https://github.com/Inacio05')}
        />
        <br /><br />
        <Button
          title="Email"
          onPress={() => Linking.openURL('mailto:inacio0502@.com')}
        />
        <br /><br />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Home Secundaria"
          onPress={() => navigation.navigate('HomeSecundaria')}
        />
      </View>
    </View>
  );
}

function HomeSecundaria({ navigation }) {
  return (
    <View style={styles.container2}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.text}>Inacio Assofra Adolfo da Silva</Text>
      <Text style={styles.text}>Minhas Habilidades:</Text>
      
      <View style={styles.skillsContainer}>
        <SkillBox skill="HTML" />
        <SkillBox skill="CSS" />
        <SkillBox skill="React" />
        <SkillBox skill="PHP" />
      </View>
      
      <View style={styles.buttonContainer2}>
        <Button
          title="Fale Comigo!"
          onPress={() => Linking.openURL('https://wa.me/+5543996314479')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const SkillBox = ({ skill }) => (
  <View style={styles.skillBox}>
    <Text style={styles.text2}>
      {skill}: 
      <Icon name="star" size={30} color="#FFD700" />
      <Icon name="star" size={30} color="#FFD700" />
      <Icon name="star" size={30} color="#FFD700" />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
  text2: {
    color: 'black',
    fontSize: 24,
  },
  image: {
    width: 210,
    height: 210,
    marginBottom: 20,
    borderRadius: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
  socialButtons: {
    marginTop: 15,
    width: '15%',
  },
  buttonContainer2: {
    marginTop: 20,
  },
  skillBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '110%', // Defina uma largura
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeSecundaria" component={HomeSecundaria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
