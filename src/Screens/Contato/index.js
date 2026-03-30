import {
  StyleSheet,
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
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Trabalhando com Icones
      </Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Produtos') }>
        <Text> Ir para página de Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
        <Text> Ir para página Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
