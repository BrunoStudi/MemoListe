import React from "react";

import AsyncStorageManager from "./AsyncStorageManager";

export default function ListeManager() {
    const [title, titleChange] = React.useState("");
    const [description, descriptionChange] = React.useState("");

    const {toDoCreate} = AsyncStorageManager();

    const fieldsTab = [{ value : title,
        onChange : (e) => titleChange(e),
        placeholder : "Titre de la tache à faire", 
    },
    { value : description,
        onChange : (e) => descriptionChange(e),
        placeholder : "Description (optionnel)", 
    },
];

async function handleSubmit() {
    if (title.length === 0){
        return alert("La tache requiert un titre");
    }
    await toDoCreate({ title, description });
    titleChange("");
    descriptionChange("");
}

    return { fieldsTab, handleSubmit };
}