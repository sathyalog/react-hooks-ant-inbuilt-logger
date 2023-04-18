import React from 'react';
import { Button, Space } from 'antd';
import {ACTIONS} from "./UseReducerHookComplex";

export default function Todo({todo, dispatch}) {
    return (
        <div><br/>
            <Space wrap>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>&nbsp;
            <Button type="primary" onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</Button>&nbsp;
            <Button danger onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</Button>
            </Space>
        </div>
    )
}