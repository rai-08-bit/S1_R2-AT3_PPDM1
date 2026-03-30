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

export default function Produtos() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                        <Text> Ir para página de Contato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text> Ir para página Home</Text>
                    </TouchableOpacity>
                    <Image
                        source={require('./../../../assets/tomato.jpg')}
                        style={styles.imagem}></Image>
                    <Text style={styles.texto}>
                        Tomate
                    </Text>
                    <Text style={styles.textoSecundario}>
                        R$ 9,00
                    </Text>
                    <Text style={styles.textoSecundario}>
                        Pagando no PIX: R$6,00
                    </Text>

                    <Image
                        source={require('./../../../assets/melancia.jpg')}
                        style={styles.imagem}></Image>
                    <Text style={styles.texto}>
                        Melancia
                    </Text>
                    <Text style={styles.textoSecundario}>
                        R$ 10,00
                    </Text>
                    <Text style={styles.textoSecundario}>
                        Pagando no PIX: R$7,00
                    </Text>

                    <Image
                        source={require('./../../../assets/laranja.jpg')}
                        style={styles.imagem}></Image>
                    <Text style={styles.texto}>
                        Laranja
                    </Text>
                    <Text style={styles.textoSecundario}>
                        R$ 6,00
                    </Text>
                    <Text style={styles.textoSecundario}>
                        Pagando no PIX: R$4,00
                    </Text>
                    
                    <Image
                        source={require('./../../../assets/alface.jpg')}
                        style={styles.imagem}></Image>
                    <Text style={styles.texto}>
                        Alface
                    </Text>
                    <Text style={styles.textoSecundario}>
                        R$ 5,00
                    </Text>
                    <Text style={styles.textoSecundario}>
                        Pagando no PIX: R$ 4,00
                    </Text>
                    
                    <Image
                        source={require('./../../../assets/banana.jpg')}
                        style={styles.imagem}></Image>
                    <Text style={styles.texto}>
                        Banana
                    </Text>
                    <Text style={styles.textoSecundario}>
                        R$ 9,00
                    </Text>
                    <Text style={styles.textoSecundario}>
                        Pagando no PIX: R$ 6,00
                    </Text>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        height: 180,
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
    textoSecundario: {
        fontSize: 17,
        textAlign: 'center',
        padding: 5,
    },
});
