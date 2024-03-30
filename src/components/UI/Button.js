import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Button({ children, onPress }) {
    
    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor : "#007AFF",
        borderRadius : 7,
        width : "100%",
        padding : 5,
        alignItems : "center",
        marginTop : 32
    },
    title: {
        color : "white",
        margin : 17,
        fontSize : 18,
        fontWeight : "600",
    }
  });