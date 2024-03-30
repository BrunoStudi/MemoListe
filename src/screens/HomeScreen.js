import React from "react";
import { StyleSheet, ScrollView } from 'react-native';
import Button from "@components/UI/Button";
import Title from "@components/UI/Title";
import AsyncStorageManager from "@hooks/AsyncStorageManager";
import ToDoCard from "@components/ToDoCard";



export default function HomeScreen({ navigation }) {
    const { toDoList, toDoUpdate, toDoDelete } = AsyncStorageManager();

    function handlePress(){
        navigation.navigate("ToDoAddScreen");
    }
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Title>Mémo Liste</Title>
            {toDoList.map(({ title, description, checked }, index) => {
                function handleDelete(){
                    toDoDelete(index);
                }
                function handleCheckedChange() {
                    toDoUpdate(index, {title, description, checked : !checked});
                }
                return (
                    <ToDoCard key={index} 
                    title={title} 
                    description={description}
                    checked={checked}
                    handleDelete ={handleDelete}
                    handleCheckedChange={handleCheckedChange} />
                );
            })}
            <Button onPress={handlePress}>Modifer ma liste</Button>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding : 15
    }
});