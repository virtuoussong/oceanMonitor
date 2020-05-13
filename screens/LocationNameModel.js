import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Image, Easing } from "react-native";

export default LocationNameModal = (props) => {
    const [textValue, onChangeText] = useState('')
    const completPressed = () => {
        if (textValue.length > 1) {
            props.addCompletion()
        } else {
            console.log("add more text")
        }
    }
    return (
        <View style={style.modalCenter}>
            <View style={style.modalView}>
                <TextInput 
                    style={style.textInputStyle}
                    onChangeText={text => onChangeText(text)}
                    value={textValue}
                    placeholder={"지역 이름 입력"}
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
        </View>
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