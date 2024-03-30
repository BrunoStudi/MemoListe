import React from "react";
import { StyleSheet, View } from 'react-native';

import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import Title from "@components/UI/Title";
import ListeManager from "@hooks/ListeManager";


export default function ToDoAddScreen() {
    const {fieldsTab, handleSubmit } = ListeManager();

    return (
    <View style={styles.container}>
        <Title>Ajouter une tâche</Title>
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
      alignItems: 'center',
      justifyContent: 'center',
      padding : 15,
      backgroundColor : "#f7f3e9"
    }
  });