import React, { useState} from 'react';
import {  Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DeferredList from "./ListDeferred";
const codeString = `
    Theoratical Example:
    useTransition():

    useTransition() can be used to tell React that certain state updates have a lower priority (i.e., all other state updates or UI rendering triggers have a higher priority).

    When calling useTransition(), you get back an array with exactly two elements: An isPending boolean value, telling you whether the low-priority state update is still pending,
    and a startTransition() function that can be wrapped around a state update to tell React, that it is a low-priority update.

    function App() {
      const [isPending, startTransition] = useTransition();
      const [filterTerm, setFilterTerm] = useState('');

      const filteredProducts = filterProducts(filterTerm);

      function updateFilterHandler(event) {
        startTransition(() => {
          setFilterTerm(event.target.value);
        });
      }

      return (
        <div id="app">
          <input type="text" onChange={updateFilterHandler} />
          {isPending && <p>Updating List...</p>}
          <ProductList products={filteredProducts} />
        </div>
      );
    }

    In such cases, you could use useDeferredValue() instead.

    useDeferredValue():

    useTransition() gives you full control since you decide which code should be wrapped and treated as "low priority". Sometimes though,
    you might not have access to the actual state updating code (e.g., because its performed by some third-party library). Or, for some reason, you cant use useTransition().

    With useDeferredValue(), you dont wrap the state updating code but instead the value thats in the end generated
    or changed because of the state update (either the state value itself or some value thats computed based on the state value.

    function ProductList({ products }) {
      const deferredProducts = useDeferredValue(products);
      return (
        <ul>
          {deferredProducts.map((product) => (
            <li>{product}</li>
          ))}
        </ul>
      );
    }

    When Should You Use Which?
    It makes sense to prefer useTransition(), if you have some state update that should be treated with a lower priority and you have access to the state updating code.
    If you dont have that access, use useDeferredValue().

    Practical Example:
    Our own example DeferredList.js:
    
    function DeferredList({input}) {
    const LIST_SIZE = 5000;
    /* useDeferredValue is something like debounce in JS.
    It will wait for certain time to get a latest update from input and then rest of the code from line 9 to line 16 runs.
    So, input what we entered previous will be shown in input box first and keep this deferredInput on low priority.
    Once the new update received and react stack is empty, it picks up and run later on.
    */
    const deferredInput = useDeferredValue(input);
    const list = useMemo(()=> {
        const l = [];
        for(let i=0; i< LIST_SIZE; i++) {
            l.push(<Space wrap><span key={i}>{deferredInput}</span></Space>)
        }
        return l;
        },[deferredInput])
        /* Just to demo how input vs deferred input works. Pls check the console */
        useEffect(()=> {
            console.log("Input:"+input+"Deferred input:"+"deferredInput");
        },[input, deferredInput])

        return list;
    }

    UseDeferredValueHook.js

    const [input, setInput] = useState("");
    return(
        <input type="text" value={input} onChange={handleChange} />
        <DeferredList input={input} />
    )
`;
function HookUseDeferredValue() {
    const { Panel } = Collapse;
    const [input, setInput] = useState("");
    
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const onChange = (key) => {
        console.log(key);
    };
    
    return(
        <>
        <input type="text" value={input} onChange={handleChange} />
        <Space wrap>
            <DeferredList input={input} />
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

export default HookUseDeferredValue;