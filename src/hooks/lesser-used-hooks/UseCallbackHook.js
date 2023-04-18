import React, {useState, useCallback} from "react";
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import List from './List';

const codeString = `
useMemo: Returns and stores the calculated value of a function in a variable.
useCallback: Returns and stores the actual function itself in a variable.

useMemo example:

List.js:
function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems()); //cannot pass params here using useMemo
        console.log('Updating items')
    },[getItems])
    return items.map((item) => <span key={item}>{item} &nbsp;</span>)
}

UseCallbackHook.js:
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    
    /* useMemo also memoise the return value but useCallback can memoise function. */
    const getItems = useMemo(() => {
        return [number, number + 1, number + 2];
    },[number]);
   

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333' 
    }
    
return (
        <>
        <Space wrap>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)}> Toggle theme </Button>
            <div style={theme}>
            <List getItems={getItems} />
            </div>
        </Space>
        </>
);

useCallback example: We are passing params inside List component which is being used in useCallback function as incrementor.

List.js:
function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems(5)); // we are passing params here
        console.log('Updating items')
    },[getItems])
    return items.map((item) => <span key={item}>{item} &nbsp;</span>)
}

UseCallbackHook.js:
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    /* useCallback memoise function and hence we can pass params from the function we are calling.
    In our case, we are calling getItems(5) inside List component. This params passing cannot be done in useMemo.
    */
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
        },[number]);


    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333' 
    }

return (
        <>
        <Space wrap>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)}> Toggle theme </Button>
            <div style={theme}>
            <List getItems={getItems} />
            </div>
        </Space>
        </>
);


`
function HookUseCallback() {
    const { Panel } = Collapse;
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    

    /* useMemo also memoise the return value but useCallback can memoise function. 
    const getItems = useMemo(() => {
        return [number, number + 1, number + 2];
    },[number]);
    */
    
    /* useCallback memoise function and hence we can pass params from the function we are calling.
    In our case, we are calling getItems(5) inside List component. This params passing cannot be done in useMemo.
    */
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
        },[number]);


    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333' 
    }
    
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
        <Space wrap>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)}> Toggle theme </Button>
            <div style={theme}>
            <List getItems={getItems} />
            </div>
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

export default HookUseCallback