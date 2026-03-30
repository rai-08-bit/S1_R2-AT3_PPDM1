import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./../../../assets/logo.png')}
            style={styles.imagem}></Image>
          <Text style={styles.texto}>
            O Hortifruti Frescor é o destino certo para quem busca saúde e qualidade no dia a dia. Selecionamos cuidadosamente as melhores frutas, legumes e verduras diretamente dos produtores para garantir que cheguem à sua mesa sempre frescos e saborosos.
            Nosso compromisso é oferecer um ambiente limpo, organizado e com atendimento acolhedor, facilitando sua rotina com produtos de alta qualidade, prontos para o consumo. No Hortifruti Frescor, a natureza e o bem-estar da sua família vêm em primeiro lugar.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Contato')}
            style={styles.botao}>
            <Text> Ir para página de Contato</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => navigation.navigate('Produtos')}
          style={styles.botao}>
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
    height: 250,
    width: '95%',
    padding: '20%',
    borderRadius: 10,
    elevation: 15
  },
  texto: {
    fontSize: 17,
    textAlign: 'center',
    padding: 5,
  },
  botao: {
        padding: 15,
        borderRadius: 15,
        width: '95%',
        alignItems: 'center'
    },
});
