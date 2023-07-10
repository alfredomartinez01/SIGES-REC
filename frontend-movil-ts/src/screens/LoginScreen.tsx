import React, {useEffect} from 'react'
import { ScrollView, Image, StyleSheet, Text, View, TextInput, ImageBackground, Dimensions,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useCustomFonts } from '../hooks/useCustomFonts';


export const LoginScreen = ({navigation}: any) => {
    
    useCustomFonts();

    return (
        <ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
            <ImageBackground 
                source={require('../../assets/images/brandViewBackground.png')} 
                style={{height: Dimensions.get('window').height / 2.5}}>
                
                <View style={styles.brandView}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logo_sinFondo.png')}
                    />
                    <Text style={styles.brandViewText}>SIGES-REC</Text>
                </View>
            </ImageBackground>

            <View style={styles.bottomView}>
                <View style={{padding: 30}}>
                    <Text style={{color:'#0296d5', fontSize:34}}>Bienvenido</Text>
                    <View style={{flexDirection: 'row',alignItems: 'center',}}>
                        <Text>¿No tienes una cuenta?</Text>
                        <TouchableOpacity 
                                onPress={() => {navigation.navigate('SignupScreen')}}>
                                <Text style={{color: '#2652e4', fontStyle: 'italic', fontWeight: 'bold'}}> 
                                    {' '}
                                    Registrate
                                </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginTop: 30}}>
                        <View style={{...styles.verticalItems, marginBottom: 30}}>
                            <TextInput 
                                style={styles.inputT} 
                                placeholder="Correo Institucional" 
                                keyboardType='email-address'
                            />
                            <FontAwesome5 
                                name="check" 
                                size={20} 
                                color="#0296d5" 
                                style={{marginRight:5}}
                            />
                         </View>

                        <View style={styles.verticalItems}>
                            <TextInput 
                                style={styles.inputT} 
                                placeholder="Contraseña" 
                                secureTextEntry={true}
                            />
                            <FontAwesome5 
                                name="eye"
                                size={20} 
                                color="#0296d5" 
                                style={{marginRight:5}} 
                            />
                        </View>
                    </View>

                    <TouchableOpacity 
                        style={{alignItems:'flex-end', marginVertical: 5}}
                        onPress={() => {}}>
                        <Text style={{color:'#8f9195', fontWeight:'500'}}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    <View style={{height: 100, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('HomeStack')}}
                            style={{
                                ...styles.buttonLogin,
                                ...styles.shadow}}>
                            <Text style={{textAlign:'center', color:'#ffffff', fontSize:16}}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, marginTop: 15}}>
                        <Text style={{textAlign: 'center'}}>O iniciar sesión con</Text>
                        <View style={styles.socialLoginView}>
                            <TouchableOpacity style={{marginHorizontal: 10}}>
                                <FontAwesome5 
                                    name="facebook" 
                                    size={41} 
                                    color="#3b5998" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal: 10}}>
                                <FontAwesome5 
                                    name="google" 
                                    size={40} 
                                    color="#db4a39" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    brandViewText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: -60,
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 40,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
    },
    verticalItems: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#2E86C1',
        borderBottomWidth: 1,
        paddingBottom: 6,
    },
    inputT: {
        flex: 1,
        paddingVertical: 0,
    },
    forgotPassView: {
        height:50,
        marginTop: 20,
        flexDirection: 'row',
    },
    buttonLogin: {
        alignSelf: 'center',
        backgroundColor: '#0296d5',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
        height: 40,
    },
    socialLoginView: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 25
    },
    shadow: {
        shadowOffset: {
            width: 1,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 15,
    },
})

