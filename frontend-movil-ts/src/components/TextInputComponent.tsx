import React from 'react'
import { View, Text, StyleSheet, TextInput, Touchable } from 'react-native'
import { Card } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    inputContainer?: any,
    inputStyle?: any,
    name: any,
    label?: any,
    onSubmit?: any,
    labelOne?: any,
    labelTwo?: any,
    labelStyle?: any,
    containerStyle?: any,
    placeholder?: any,
}

export const TextInputComponent = ({inputContainer,inputStyle,name,label,onSubmit,labelOne,
    labelTwo,labelStyle,containerStyle,placeholder}: Props) => {
    return (
        <View style={[styles.container,containerStyle]}>
            {
                label?(
                    <Text style={[styles.labelStyle,labelStyle]}>{label}</Text>
                ):labelOne && labelTwo?(
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={[styles.labelStyle,labelStyle]}>
                            {labelOne}
                        </Text>
                        <TouchableOpacity
                            onPress={onSubmit}>
                            <Text style={[styles.labelStyle,{color:'#1B6ADF', fontSize:12}]}>
                                {labelTwo}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ):null
            }
            

            <Card >
                <View style={[styles.inputContainer,inputContainer]}>
                    <TextInput
                        style={[styles.inputStyle, inputStyle]}
                        value={name}
                        placeholder={placeholder}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal:15
    },
    inputContainer: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    inputStyle: {
        height: 30,
        paddingHorizontal: 10,
    },
    labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3B3D3F',
        marginBottom: 5,
    },
})