import React, {useState, useEffect, useRef} from 'react';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
Why Refs: what makes refs so powerful is the fact that they are persisted between renders.
I like to think of refs very similarly to state, since they persist between renders,
but refs do not cause a component to re-render when changed.

Imagine that we want to count the number of times a component re-renders. Here is the code to do so with state and refs.

Example without ref: (throws error as re-renders will not stop because of using useState and useEffect)
function State() {
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    setRerenderCount(prevCount => prevCount + 1);
  });

  return <div>{rerenderCount}</div>;
}

Example with ref:
function Ref() {
  const rerenderCount = useRef(0);

  useEffect(() => {
    rerenderCount.current = rerenderCount.current + 1;
  });

  return <div>{rerenderCount.current}</div>;
}

Both of these components will correctly display the number of times a component has been re-rendered,
but in the state example the component will infinitely re-render itself since setting the state causes the component to re-render.
The ref example on the other hand will only render once since setting the value of a ref does not cause any re-renders.

Our current example:
 const [name, setName] = useState("");
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevInput = useRef('');

    /* Find how many times component actually should re-render but using ref we were avoiding re-renders */
    useEffect(()=> {
        renderCount.current = renderCount.current + 1;
    });
    
    /* Hold previous typed input value in a ref(Using Refs Beyond The DOM) */
    useEffect(()=> {
        prevInput.current = name;
    },[name])
    
    /* Regular usecase example of using ref for accessing DOM element */
    const focus = () => {
        inputRef.current.focus();
    }

return(
        <>
        <Space wrap>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <div> My Name is {name}</div>
        <div> Previous entered input is {prevInput.current}</div>
        <div>I rendered {renderCount.current} times</div>
            <Button onClick={focus}>Focus</Button>
        </Space>
        </>
    );
`
function HookUseRef() {
    const { Panel } = Collapse;
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevInput = useRef('');
    
    /* Find how many times component actually should re-render but using ref we were avoiding re-renders */
    useEffect(()=> {
        renderCount.current = renderCount.current + 1;
    });
    
    /* Hold previous typed input value in a ref(Using Refs Beyond The DOM) */
    useEffect(()=> {
        prevInput.current = name;
    },[name])
    
    /* Regular usecase example of using ref for accessing DOM element */
    const focus = () => {
        inputRef.current.focus();
    }
    
    const onChange = (key) => {
        console.log(key);
    };
    
    return(
        <>
        <Space wrap>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <div> My Name is {name}</div>
            <div> Previous entered input is {prevInput.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <Button onClick={focus}>Focus</Button>
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
export default HookUseRef;