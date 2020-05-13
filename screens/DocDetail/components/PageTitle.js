import React from 'react';
import {StyleSheet, View, Text, TextInput, KeyboardAvoidingView} from 'react-native';


export default PageTitle = (props) => {

    return <View style={styles.container}>
        <Text style={styles.pageTitle}>{props.title}</Text>
    </View>

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%',
        height: 50,
        lineHeight: 50,
        textAlign: 'center',
        textAlignVertical: "center",
    }
})