import React, { useRef} from "react";
import { Button, Collapse } from 'antd';
import CustomModal from "./CustomModal";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    useImperativeHandle is used with refs and a ref is just a way to control a DOM element in React.

    So instead of accessing an element via Vanilla Javascript we instead use refs so that we ensure React has control over these elements.

    In React we can pass refs to other components using a HOC (Higher order component) called forwardRef.

    Imperative code means is code that modifies the state of a program, in our case with useImperitiveHandle,
    it will modify the ref that we use elsewhere.
    
    The hook useImperativeHandle lets you modify the ref instance that is exposed from parent components when using refs.

    In other words, the useImperativeHandle gives you the ability to modify a ref that has been created.

    For example, let’s say you have an element that you need to track whenever it gets clicked on,
    you could use useImperativeHandle to overwrite the native click event to do this.

    So the parent creates a ref, the child modifies it with another ref and using useImperativeHandle,
    then the parent can use the modified ref.

    Why?
    The general pattern in React is to have a unidirectional flow of data.
    In cases where bidirectional dataflow is needed, we can use libraries such as Redux or React context.
    
    However, in some cases, using those is simply just overkill.
    This is where useImperativeHandle comes in.

    CustomModal.js
    import React, {useState, useImperativeHandle} from 'react';
    
    function CustomModal(props, ref) {
        const [count, setCount] = useState(0)
        useImperativeHandle(ref, ()=> ({
            increment
        }))
    
        function increment(){
            setCount(count+1)
        }
        return(
            <>
            {count}&nbsp;
            <button onClick = {increment}>Child Click</button>
            </>
            );
    }
    
    export default React.forwardRef(CustomModal)

    HookImperativeHandle.js
    
    function HookImperativeHandle() {
    const ref = useRef(null);
	return (
		<>
			<CustomModal ref={ref}/>&nbsp;
			<Button onClick={() => ref.current.increment()}>Parent Click</Button>
		</>

        );
    }
`;

function HookImperativeHandle() {
    const { Panel } = Collapse;
    const ref = useRef(null);
    const onChange = (key) => {
        // console.log(key);
    };
	return (
		<>
			<CustomModal ref={ref}/>&nbsp;
			<Button onClick={() => ref.current.increment()}>Parent Click</Button>
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

export default HookImperativeHandle