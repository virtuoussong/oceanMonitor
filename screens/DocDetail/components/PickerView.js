import React, { useState, useEffect } from "react";
import { StyleSheet, View, Picker, TouchableOpacity } from "react-native";

 const PickerView = (props) => {
    const handleSelect = (item) => {
        // console.log(item)
        props.onSelect(item)
        hide()
    }

    const hide=()=>{
        props.hide()
    }

    return <TouchableOpacity style={styles.fill} onPress={()=>hide()}>
        <Picker 
            style={styles.pickerView} 
            onValueChange={(itemValue)=>handleSelect(itemValue)} 
        >
            {props.data.map((item) => {
                return <Picker.Item label={item} value={item} onPress={(itemValue)=>handleSelect(itemValue)}/>
            })}
        </Picker>
    </TouchableOpacity>
        
};

let styles = StyleSheet.create({
    fill: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 1, 0.5)",
    },
    pickerView: {
        height: "50%", 
        width: "50%",
        backgroundColor:'white',
        borderRadius: 30,
        paddingTop: 16
    }
});

export default PickerView;
