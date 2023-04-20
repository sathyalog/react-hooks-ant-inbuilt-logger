import { useDebugValue, useState } from "react";
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
The useDebugValue hook is simply used to print out debug information for custom hooks.
This is incredibly useful if you are creating a library for others to use since they can easily see information about your hook,
but it also is useful for your own hooks since you can quickly see detailed information about your hooks.

This debug information is displayed within the React dev tools.


    function useCount() {
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count + 1);
        }, 4000);

    useDebugValue(count);
    return count;
}

function HookUseDebugValue() {
    const { Panel } = Collapse;
    const count = useCount();

    const onChange = (key) => {
        // console.log(key);
    };

    return (
        <>
        <div> =>
            <button>{count}</button>
        </div>
        </>
        );
}
`;


function useCount() {
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count + 1);
        }, 4000);

    useDebugValue(count);
    return count;
}

function HookUseDebugValue() {
    const { Panel } = Collapse;
    const count = useCount();
    
    const onChange = (key) => {
        // console.log(key);
    };

    return (
        <>
        <Space wrap>
            <Button>{count}</Button>
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
        );
}

export default HookUseDebugValue;
