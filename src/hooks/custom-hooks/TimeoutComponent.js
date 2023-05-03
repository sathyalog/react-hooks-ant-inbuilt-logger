import {useState} from "react";
import { Button, Collapse } from 'antd';
import useTimeout from "./useTimeout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    useTimeout.js:
    import {useEffect, useRef} from "react";

    const useTimeout = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
        }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
    };
    export default useTimeout;

    TimeoutComponent.js:

    const OneSecondTimer = props => {
    const [seconds, setSeconds] = useState(0);
    useTimeout(() => {
        setSeconds(seconds + 1);
        }, 1000);

    return <p>{seconds}</p>;
};

`;

const OneSecondTimer = props => {
    const { Panel } = Collapse;
    const onChange = (key) => {
        // console.log(key);
    };
    const [seconds, setSeconds] = useState(0);
    useTimeout(() => {
        setSeconds(seconds + 1);
        }, 1000);

    return (
        <>
        <p>{seconds}</p>
        <br /><br />
        <Collapse defaultActiveKey={['0']} onChange={onChange}>
            <Panel header="Click here to view the code" key="1">
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </Panel>
        </Collapse>
        </>);
};

export default OneSecondTimer
