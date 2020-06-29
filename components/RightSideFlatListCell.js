import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

export default RightSideCell = (props) => {
    const docTapped = () => {
        console.log("show doc")
        props.docTapped()
    }

    return (
        <View style={{width: '100%', flexDirection: 'row'}}>
            <TouchableOpacity onPress={props.onPress} >
                <Text style={styles.title}>{props.name}</Text>
            </TouchableOpacity>
            {props.isDocShown &&  <TouchableOpacity onPress={()=>docTapped()} style={{position: 'absolute',top: -8, right: 20, width: 24, height: 24}}>
                <Image  resizeMode={'contain'} style={{width: 24}} source={require("../assets/plusIcon.png")}/>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    title: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8 
    }
});