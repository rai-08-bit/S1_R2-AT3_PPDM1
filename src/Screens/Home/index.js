import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
        <Image
          source={require('./../../../assets/logo.png')}
          style={styles.imagem}></Image>
        <Text style={styles.texto}>
          Seja bem vindo ao nosso Hortifruti
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text> Ir para página de Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
          <Text> Ir para página de Produtos</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    height: '10%',
    width: '95%',
    padding: '20%',
    borderRadius: 10,
    elevation: 15
  },
  texto: {
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
  },
});
