import React from "react";
import { store } from "../state/appContext";

export default function useAppContext() {
    const { state, dispatch } = React.useContext(store);
    return { state, dispatch };
}

