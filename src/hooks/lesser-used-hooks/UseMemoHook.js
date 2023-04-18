import React, {useState, useEffect, useMemo} from 'react';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    /* just an example of slow performance with a simple slow function */
    const slowFunction = (number) => {
        console.log('Calling slow function');
        for(let i =0; i< 1000000000; i++) {}
        return number * 2;
    }

    /* ################ our functional component code ################ */
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    /* execute slowFunction only when number changes and till that cache this function using useMemo */
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
        },[number]);

    /* Referencial Equality - everytime component executes, themeStyles acts as a new variable.
    removing useMemo for theme can notice theme changed message appears even input number updates.
    and also if theme changes then only we trigger this and hence using dark in dependency array.
    */
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark]);

    /* Run useEffect only when themeStyles updated */
    useEffect(() => {
        console.log('Theme changed')
    },[themeStyles])

    return(
        <>
        <Space wrap>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)} >Change Theme </Button>
            <div style={themeStyles}>{doubleNumber}</div>
        </Space>
        </>
        )
    /* ###################### end of functional component #################### */
`;

const slowFunction = (number) => {
    console.log('Calling slow function');
    for(let i =0; i< 1000000000; i++) {}
    return number * 2;
}
function HookUseMemo() {
    const { Panel } = Collapse;
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    
    /* execute slowFunction only when number changes and till that cache this function using useMemo */
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
        },[number]);
    
    /* Referencial Equality - everytime component executes, themeStyles acts as a new variable.
    removing useMemo for theme can notice theme changed message appears even input number updates.
    and also if theme changes then only we trigger this and hence using dark in dependency array.
    */
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark]);
    
    /* Run useEffect only when themeStyles updated */
    useEffect(() => {
        console.log('Theme changed')
    },[themeStyles])
    
    const onChange = (key) => {
        console.log(key);
    };
    
    return(
        <>
        <Space wrap>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)} >Change Theme </Button>
            <div style={themeStyles}>{doubleNumber}</div>
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

export default HookUseMemo;