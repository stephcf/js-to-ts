import React from "react";
import ToDo from './components/ToDo.jsx'
import Title from "./components/Title.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: arial;
`;

export const App = () => {
  return (
    <Container>
      <Title text="Welcome to my To Do list" />
      <ToDo/>
    </Container>
  );
}

export default App;
