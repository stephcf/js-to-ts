import React from "react";

const ToDoCounter = ({itemCount}) => {
  return (
    <>
       <p>{`Current items on my list is: ${itemCount}`}</p>
    </>
    );
}
 
export default ToDoCounter;