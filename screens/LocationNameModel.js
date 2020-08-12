import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export default LocationNameModal = (props) => {
    const [textValue, onChangeText] = useState('')
    const completPressed = () => {
        if (textValue.length > 0 && textValue.length < 10) {
            props.addCompletion(textValue)
        } else {
            console.log("add more text")
        }
    }
    return (
        <KeyboardAvoidingView 
            style={style.modalCenter}
            behavior={'padding'}
            keyboardVerticalOffset={0}
        >
            <View style={style.modalView}>
                <TextInput 
                    style={style.textInputStyle}
                    onChangeText={text => onChangeText(text)}
                    value={textValue}
                    placeholder={"지역 이름 입력 (9자 이하)"}
                />
                <View style={style.inputButtonWrap}>
                    <TouchableOpacity 
                        style={style.buttonStyle}
                        onPress={props.toggle}
                    >
                        <Text style={style.buttonText}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={style.buttonStyle}
                        onPress={completPressed}
                    >
                        <Text style={style.buttonText}>완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const style = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: 'dodgerblue',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    inputButtonWrap : {
        flexDirection:'row',
        marginTop: 20,
        width: '80%',
        justifyContent: 'space-between'
    },
    modalCenter : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        padding: 35,
        width: '80%',
    
        backgroundColor: "white",
        borderRadius: 20,
        
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    textStyle:{
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInputStyle : {
        borderBottomWidth : 1,
        borderBottomColor : 'black',
        height: 40,
        width: '80%',
        fontSize: 24
    },
    
})