import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.button`
border: none;
background-color: black;
color: white;
border-radius: 2px;
cursor: pointer;
height: 18px;
`
const Item = styled.span`
  padding: 10px;
`

const ItemWrapper = styled.div`
  padding: 5px 0 5px 0;
`

const ToDoItem = ({ id, text, onDelete, deleteText }) => (
  <ItemWrapper>
    <Item>{text}</Item>
    <DeleteButton onClick={() => onDelete(id)}>{deleteText}</DeleteButton>
  </ItemWrapper>
);

export default ToDoItem;