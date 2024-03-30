import React from "react";

export default function ListeManager() {
    const [title, titleChange] = React.useState("");
    const [description, descriptionChange] = React.useState("");

    const fieldsTab = [{ value : title,
        onChange : (e) => titleChange(e),
        placeholder : "Titre de la tache à faire", 
    },
    { value : description,
        onChange : (e) => descriptionChange(e),
        placeholder : "Description (optionnel)", 
    },
];

function handleSubmit() {
    if (title.length === 0){
        return alert("La tache requiert un titre");
    }

}

    return { fieldsTab, handleSubmit };
}