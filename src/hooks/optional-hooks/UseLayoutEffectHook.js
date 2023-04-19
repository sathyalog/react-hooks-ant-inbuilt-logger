import React, {useState, useLayoutEffect, useEffect} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Collapse } from 'antd';
const sleep = ms => new Promise(res => setTimeout(res, ms));
const codeString = `
    const [value, setValue] = useState('NOT INITIALISED ');
    const [value1, setValue1] = useState('NOT INITIALISED ');

    useEffect(() => {
        sleep(500000);
        setValue(() => 'INITIALISED')
    }, []);

    useLayoutEffect(() => {
        sleep(500000);
        setValue1(() => 'INITIALISED')
    }, []);


    return (
        <>
        <div>Pls reload the page and notice the useEffect value here: {value}</div>
        <div>Pls reload the page and notice the useLayoutEffect value here: {value1}</div>
        </>
        );
`;
function HookUseLayoutEffect() {
    const { Panel } = Collapse;
    const [value, setValue] = useState('NOT INITIALISED ');
    const [value1, setValue1] = useState('NOT INITIALISED ');

    useEffect(() => {
        sleep(500000);
        setValue(() => 'INITIALISED')
    }, []);
    
    useLayoutEffect(() => {
        sleep(500000);
        setValue1(() => 'INITIALISED')
    }, []);
    
    const onChange = (key) => {
        // console.log(key);
    };
    
    return (
        <>
        <div>Pls reload the page and notice the useEffect value here: {value}</div>
        <div>Pls reload the page and notice the useLayoutEffect value here: {value1}</div>
        <br /><br />
        <Collapse defaultActiveKey={['0']} onChange={onChange}>
            <Panel header="Click here to view the code" key="1">
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </Panel>
        </Collapse>
        </>
        );
    
}
export default HookUseLayoutEffect