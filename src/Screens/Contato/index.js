import {
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

export default function Contato() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.conteudoPrincipal}>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.navigate('Produtos')}
          style={styles.pressionado}>
          <Text> Ir para Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}
          style={styles.pressionado}>
          <Text> Ir para Home</Text>

          <View style={styles.separador}></View>

        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          FORMAS DE CONTATO CONOSCO
        </Text>
        <View style={styles.conteudoSecundario}>
          <FontAwesome name="whatsapp" size={24} color="black" >
            <Text style={styles.texto}>   Whatsapp</Text>
          </FontAwesome>
          <Text style={styles.texto}>(19) 99999-9999</Text>

          <View style={styles.separador}></View>


          <AntDesign name="mail" size={24} color="black" >
            <Text style={styles.texto}>   Email</Text>
          </AntDesign>
          <Text style={styles.texto}>hortifruti.mail@email.com</Text>

          <View style={styles.separador}></View>

          <AntDesign name="phone" size={24} color="black">
            <Text style={styles.texto}>   Telefone</Text>
          </AntDesign>
          <Text style={styles.texto}>(19) 99999-9999</Text>

          <View style={styles.separador}></View>

          <FontAwesome name="location-arrow" size={24} color="black">
            <Text style={styles.texto}>   Endereço</Text>
          </FontAwesome>
          <Text style={styles.texto}>Rua Fulano, Nº 000, Cidadezinha - SP</Text>
          
          <View style={styles.separador}></View>

          <Text style={styles.texto}>CNPJ</Text>
          <Text style={styles.texto}>XX.XXX.XXX/0001-ZZ</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 17,
    textAlign: 'center',
    padding: 5,
  },
  conteudoPrincipal: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
  },
  conteudoSecundario: {
    marginTop: 50,
    padding: 20,
    marginBottom: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  botao: {
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
  },
  separador: {
    marginBottom: 5,
    marginTop: 5,
    height: 1,
    backgroundColor: '#000',
    width: '95%',
  }
});
