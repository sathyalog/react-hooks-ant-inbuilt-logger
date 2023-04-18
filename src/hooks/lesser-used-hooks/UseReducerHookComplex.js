import React, {useReducer, useState, useEffect} from "react";
import Todo from './Todo';
import {  Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
export const ACTIONS = {
    "ADD_TODO": 'add_todo',
    "TOGGLE_TODO": "toggle_todo",
    "DELETE_TODO": "delete_todo"
}

function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

function HookUseReducerComplex() {
    const {Panel} = Collapse;
    const [name, setName] = useState("")
    const [todos, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO , payload : {name : name}});
        setName("")
    }


    return(
        <>
        <Space wrap>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </form>
        {todos.map((todo)=> {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
        </Space>
        
        </>
        )
}

`;

export const ACTIONS = {
    "ADD_TODO": 'add_todo',
    "TOGGLE_TODO": "toggle_todo",
    "DELETE_TODO": "delete_todo"
}
function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

function HookUseReducerComplex() {
    const {Panel} = Collapse;
    const [name, setName] = useState("")
    const [todos, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO , payload : {name : name}});
        setName("")
    }
    
    useEffect(() => {
        console.log(todos)
    }, [todos])
    
    const onChange = (key) => {
        console.log(key);
    };

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </form>
        {todos.map((todo)=> {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
        
        <br /><br />
        <Collapse defaultActiveKey={['0']} onChange={onChange}>
            <Panel header="Click here to view the code" key="1">
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </Panel>
        </Collapse>
        </>
        )
}

export default HookUseReducerComplex;