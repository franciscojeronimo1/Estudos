// App.tsx
import React from 'react';
import QuickNoteApp from './src/QuickNote'; // Certifique-se de que o caminho está correto
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <QuickNoteApp />
    </>
  );
}
