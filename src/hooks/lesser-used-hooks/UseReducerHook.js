import React, {useReducer} from "react";
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `

const ACTIONS = {
    'INCREMENT': 'increment',
    'DECREMENT': 'decrement'
}
function reducer(state, action) {
    switch(action.type) {
            case ACTIONS.INCREMENT:
                return {count: state.count + 1};
            case ACTIONS.DECREMENT:
                return {count: state.count - 1};
            default:
                return state;
    }
}

function HookUseReducer() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    function increment() {
        dispatch({type: ACTIONS.INCREMENT})
    }

    function decrement() {
        dispatch({type: ACTIONS.DECREMENT})
    }

    return(
        <>
            <Button onClick={increment} >+</Button>
            <span>&nbsp;{state.count}&nbsp;</span>
            <Button onClick={decrement} > - </Button>
        </>
    )
}
`;
const ACTIONS = {
    'INCREMENT': 'increment',
    'DECREMENT': 'decrement'
}
function reducer(state, action) {
    switch(action.type) {
            case ACTIONS.INCREMENT:
                return {count: state.count + 1};
            case ACTIONS.DECREMENT:
                return {count: state.count - 1};
            default:
                return state;
    }
}

function HookUseReducer() {
    const {Panel} = Collapse;
    const [state, dispatch] = useReducer(reducer, {count: 0});
    
    function increment() {
        dispatch({type: ACTIONS.INCREMENT})
    }
    
    function decrement() {
        dispatch({type: ACTIONS.DECREMENT})
    }
    
    const onChange = (key) => {
        console.log(key);
    };
    
    return(
        <>
        <Space wrap>
            <Button onClick={increment} >+</Button>
            <span>&nbsp;{state.count}&nbsp;</span>
            <Button onClick={decrement} > - </Button>
        </Space>
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

export default HookUseReducer;