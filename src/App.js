import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{

    const[inputList, setInputList] = useState("");
    const[items, setitems]  = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
        
    }

    const ListofItems = () =>{
        setitems((olditems) => {
            return [...olditems, inputList];
        });
        setInputList("");
    };
    const delItems = (id) =>{
        console.log("deleted");
        setitems((olditems) =>{
            return olditems.filter((arrEle, index) =>{
                return index !== id;
            });
        });
    };


    return(
    <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input value={inputList} type="text" placeholder="Add a Items" onChange={itemEvent}></input>
            <button onClick={ListofItems}> + </button>

            <ol>
                {/* <li> {inputList} </li> */}

                {items.map( (itemval,index) => {
                   return <ToDoList 
                    text = {itemval}
                    key={index}
                    id={index}
                    onSelect={delItems}
                    />
                } )}
            </ol>
        </div>
    </div>
    </>
    );
}
export default App;