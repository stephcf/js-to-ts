import React, { useState } from 'react';
import Button from './Button.jsx';
import ToDoItem from './ToDoItem.jsx';
import styled from 'styled-components';
import ToDoCounter from './ToDoCounter.jsx';

const StyledTodo = styled.div`
  background-color: white;
  margin: 10px auto;
  .todo__add  {
    padding: 10px;
  }
  justify-content: center
`;

const StyledInput = styled.input`
    border: 2px solid #000;
    height: 24px;
    width: 200px;
    border-radius: 2px;
    margin: 5px;
`

const DEFAULT_ITEMS = [
    { id: 1, text: 'Convert my App to TypeScript' },
    { id: 2, text: 'Get a coffee' },
];

const Todo = () => {
    const [items, setItems] = useState(DEFAULT_ITEMS);
    const [input, setInput] = useState('');

    const addItem = () => {
        setItems([...items, { id: items.length + 1, text: input }])
        setInput("");
    };
    const deleteItem = id => {setItems([...items.filter(i => i.id !== id)])};
    const deleteAllItems = () => {
        setItems([]);
    };

    return (
        <>
            <StyledTodo data-test-id="todo-wrapper">
                <ToDoCounter itemCount={items.length} />
                <StyledInput
                    type="text"
                    value={input}
                    onChange={e => setInput(e.currentTarget.value)}
                    data-test-id="todo-input"
                />
                <Button text="Add" onClick={addItem}/>
                    {items.map(item => (
                        <ToDoItem key={item.id} id={item.id} text={item.text} onDelete={deleteItem} deleteText="x"/>
                    ))}
                    <div style={{"padding": "5px"}}>
                    <Button text="Clear" onClick={deleteAllItems}/>
                    </div>
                
            </StyledTodo>
        </>
    );
};

export default Todo;