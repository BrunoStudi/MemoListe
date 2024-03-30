import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import ListeManager from "@hooks/ListeManager";


export default function ToDoAddScreen({ navigation }) {
    const {fieldsTab, handleSubmit } = ListeManager();

    function handlePress(){
        navigation.navigate("HomeScreen");
    }

    return (
    <View style={styles.container}>
        <Text style={styles.titre}>AJOUTER UNE TACHE</Text>
        {fieldsTab.map(({ value, onChange, placeholder }) => {
            return (
                <Input 
                key={placeholder} 
                placeholder={placeholder} 
                value={ value } 
                onChange={onChange} />
            );
        })}
        <Button onPress={handleSubmit}>Ajouter à ma liste</Button>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'left',
      padding : 15,
      backgroundColor : "rgba(0,0,0,0.05)"
    },
    titre: {
        fontWeight : "700",
        marginBottom : 300
    },
  });