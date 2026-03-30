import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    TextInput,
    Button
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from "@react-navigation/native";

export default function Produtos() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Contato')}
                        style={styles.pressionado}>
                        <Text> Ir para Contato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}
                        style={styles.pressionado}>
                        <Text> Ir para Home</Text>
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
                    <TextInput
                        style={styles.Quantidade}
                        placeholder=" Digite a quantidade"
                        keyboardType="number-pad"
                    />
                    <Button
                        style={styles.botao}
                        title="Adicionar ao carrinho"
                        onPress={() => alert("Produto adicionado ao carrinho")}
                    />

                    <View style={styles.separador}></View>

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
                    <TextInput
                        style={styles.Quantidade}
                        placeholder=" Digite a quantidade"
                        keyboardType="number-pad"
                    />
                    <Button
                        style={styles.botao}
                        title="Adicionar ao carrinho"
                        onPress={() => alert("Produto adicionado ao carrinho")}
                    />

                    <View style={styles.separador}></View>

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
                    <TextInput
                        style={styles.Quantidade}
                        placeholder=" Digite a quantidade"
                        keyboardType="number-pad"
                    />
                    <Button
                        style={styles.botao}
                        title="Adicionar ao carrinho"
                        onPress={() => alert("Produto adicionado ao carrinho")}
                    />

                    <View style={styles.separador}></View>

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
                    <TextInput
                        style={styles.Quantidade}
                        placeholder=" Digite a quantidade"
                        keyboardType="number-pad"
                    />
                    <Button
                        style={styles.botao}
                        title="Adicionar ao carrinho"
                        onPress={() => alert("Produto adicionado ao carrinho")}
                    />

                    <View style={styles.separador}></View>

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
                    <TextInput
                        style={styles.Quantidade}
                        placeholder=" Digite a quantidade"
                        keyboardType="number-pad"
                    />
                    <Button
                        style={styles.botao}
                        title="Adicionar ao carrinho"
                        onPress={() => alert("Produto adicionado ao carrinho")}
                    />
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
        backgroundColor: '#F5F5F5',
    },
    imagem: {
        height: 180,
        width: '95%',
        padding: '20%',
        borderRadius: 10,
        elevation: 15
    },
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2D6A4F',
        textAlign: 'center',
        marginTop: 10,
    },
    textoSecundario: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
    Quantidade: {
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
    },
    botao: {
        padding: 15,
        borderRadius: 15,
        width: '95%',
        alignItems: 'center',
        elevation: 10
    },
    separador: {
        marginBottom: 5,
        marginTop: 5,
        height: 1,
        backgroundColor: '#ccc',
        width: '95%',
        elevation: 2,
    },
    pressionado: {
        padding: 15,
        borderRadius: 15,
        width: '95%',
        alignItems: 'center'
    }
});
