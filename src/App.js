import React from 'react';
import './style.css';
import ComponentC from './components/ComponentC';
import {UserProvider} from "./components/userContext"

export default function App() {
  return (
    <div>
      <UserProvider value="Vikram">
        <ComponentC />
      </UserProvider>
    </div>
  );
}
