import {useState} from "react";
import {  Collapse } from 'antd';
import useTimeout from "./useTimeout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    useTimeout()
    Very similar to the useInterval hook, this React hook implements the native setTimeout function keeping the same interface.
    You can enable the timeout by setting delay as a number or disabling it using null.
    When the time finishes, the callback function is called.

    Create a custom hook that takes a callback and a delay.
    Use the useRef() hook to create a ref for the callback function.
    Use the useEffect() hook to remember the latest callback.
    Use the useEffect() hook to set up the timeout and clean up.

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
