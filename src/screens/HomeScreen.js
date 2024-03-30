import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Button from "@components/UI/Button";


export default function HomeScreen({ navigation }) {
    function handlePress(){
        navigation.navigate("ToDoAddScreen");
    }
    return (
    <View style={styles.container}>
            <Button onPress={handlePress}>Consulter ma liste</Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding : 15
    },
  });