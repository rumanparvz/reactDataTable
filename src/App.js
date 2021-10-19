import React from "react"
import Table from './Table'
import { Container } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="app">
      <Container className="my-5">   
        <Table />
      </Container>
   
    </div>
  );
}

export default App;
