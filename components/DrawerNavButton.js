import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Image, Easing } from "react-native";

const DrawerNavButton = (props) => {
    return <View style={styles.leftButton}>
        <TouchableOpacity  style={styles.leftButton}  onPress={props.toggleDrawer}>
            <Image source={require('../assets/drawerNavIcon.png')} resizeMode={'contain'}/>
        </TouchableOpacity>   
    </View>
}

export default DrawerNavButton;

const styles = StyleSheet.create({
    leftButton: {
        flex : 1,
        justifyContent : "center",
        alignItems: 'center',
        position: "absolute",
        left: 20,
        top: 20
    }
})

