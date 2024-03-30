import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from "@components/UI/Button";
import AsyncStorageManager from "@hooks/AsyncStorageManager";
import ToDoCard from "@components/ToDoCard";


export default function HomeScreen({ navigation }) {
    const { toDoList, toDoDelete } = AsyncStorageManager();

    function handlePress(){
        navigation.navigate("ToDoAddScreen");
    }
    return (
    <View style={styles.container}>
        <Text style={styles.titre}>Mémo Liste</Text>
            {toDoList.map(({ title, description }, index) => {
                function handleDelete(){
                    toDoDelete(index);
                }
                return (
                    <ToDoCard key={index} 
                    title={title} 
                    description={description}
                    handleDelete ={handleDelete} />
                );
            })}
            <Button onPress={handlePress}>Modifer ma liste</Button>
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
    titre: {
        fontSize : 20,
        fontWeight : 700,
        
    },
});