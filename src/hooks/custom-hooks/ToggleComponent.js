import React from 'react';
import { Button, Collapse } from 'antd';
import useToggle from './useToggle';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    useToggle.js:
    import {useState} from 'react';

    export default function useToggle(defaultValue) {
        const [value, setValue] = useState(defaultValue);
        function toggleValue(value) {
            setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
        }
    
        return [value, toggleValue]
    }

    ToggleComponent.js:
    export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false);

    return (
        <>
            <div>{value.toString()}</div>
                <Button onClick={toggleValue}>Toggle </Button>
                <Button onClick={()=>toggleValue(true)}>Make True </Button>
                <Button onClick={()=>toggleValue(false)}>Make False </Button>
        </>
    )
    }
    
`;

export default function ToggleComponent() {
    const { Panel } = Collapse;
    const [value, toggleValue] = useToggle(false);
    
    const onChange = (key) => {
        // console.log(key);
    };
    
    return (
        <>
            <div>{value.toString()}</div>
            <Button onClick={toggleValue}>Toggle </Button>
            <Button onClick={()=>toggleValue(true)}>Make True </Button>
            <Button onClick={()=>toggleValue(false)}>Make False </Button>
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