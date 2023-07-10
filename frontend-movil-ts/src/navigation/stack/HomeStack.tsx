import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/HomeScreen';
import { HeaderSIGESREC } from '../../components/HeaderSIGESREC'
import { TopNavigator } from '../../components/TopNavigator';

const Stack = createStackNavigator();

export const HomeStack = ({navigation}: any) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={{
                //headerShown: false,
                //title: '',
                headerStyle: {
                    backgroundColor: '#2E86C1',
                    height: 100,
                },
                header: () => {
                    return (
                        <View>
                            <HeaderSIGESREC />
                            <View style={styles.headerNav}>
                                <View style={styles.headerLeftView}>
                                    <Image 
                                        style={styles.headerImage}
                                        source={require('../../../assets/images/icon_user.jpg')}
                                    />
                                    <View style={{marginLeft: 10}}>
                                        <Text style={styles.headerNameUser}>
                                            Hola, Aurora M
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.headerRightView}>
                                    <TouchableOpacity
                                        onPress={() => {navigation.navigate('NotificationsScreen')}}
                                        >
                                        <FontAwesome5
                                        name="bell"
                                        size={25}
                                        color='black'
                                        ></FontAwesome5>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity
                                        style={{marginLeft: 10}}
                                        onPress={() => {navigation.toggleDrawer()}}
                                        >
                                        <FontAwesome5
                                        name="ellipsis-v"
                                        size={25}
                                        color='white'
                                        ></FontAwesome5>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                            <View style= {{
                               borderBottomWidth: 1,
                               borderBottomColor: '#F2F3F4',
                            }} />
                        </View>
                    )
                }
            }}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    headerNav: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    headerLeftView: {
        width: 40,
        height: 40,
        marginLeft: 15,
        borderRadius: 40/2,
        flexDirection: 'row',
        alignItems:'center', 
    },
    headerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#F2F3F4',
    },
    headerNameUser: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
    },
    headerRightView: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
  })

