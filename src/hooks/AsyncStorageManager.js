import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AsyncStorageManager() {
    const [toDoList, toDoListChange] = React.useState([]);

    React.useEffect(() => {
        AsyncStorage.getItem("todolist").then((savedToDoList) => {
            if(savedToDoList){
                let parsedList = JSON.parse(savedToDoList);
                toDoListChange(parsedList);
            }
        });
    }, []);

    async function toDoCreate(toDo) {
        const newToDoList = [...toDoList];
        newToDoList.push(toDo);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
    }

    async function toDoUpdate(index, toDo) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1, toDo);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
    }

    async function toDoDelete(index) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index, 1);
        const jsonValue = JSON.stringify(newToDoList);
        await AsyncStorage.setItem("todolist", jsonValue);
    }

    return {toDoList, toDoCreate, toDoUpdate, toDoDelete};
}