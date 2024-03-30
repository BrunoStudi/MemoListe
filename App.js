import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigate from "@navigate/Navigate";
import { AppStateProvider } from "./src/state/appContext";

export default function App() {

  return (
      <AppStateProvider>
        <Navigate />
      </AppStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
