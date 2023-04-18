import React, {useState, useTransition} from "react";
import { Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const LIST_SIZE = 10000;

    /* without useTransition - takes time to see the value entered in input
        startTransition - helps you to display what you type in  input immediately and the code inside startTransition will be delayed in rendering
    */
    function handleChange(e) {
        setInput(e.target.value);
        /* start transition says this is a low priority information and can be rendered later */
        startTransition(()=> {
            const l = [];
            for(let i=0; i< LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        })
    }

    return (
        <>
        <input type="text" value={input} onChange={handleChange} />

        {isPending ? "Loading" : list.map((item, index) => {
            return <div key={index}>{item}</div>
        })}
        </>
    )
`;
function HookUseTransition() {
    const { Panel } = Collapse;
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    
    const LIST_SIZE = 5000;
    
    /* without useTransition - takes time to see the value entered in input
        startTransition - helps you to display what you type in  input immediately and the code inside startTransition will be delayed in rendering
    */
    function handleChange(e) {
        setInput(e.target.value);
        /* start transition says this is a low priority information and can be rendered later */
        startTransition(()=> {
            const l = [];
            for(let i=0; i< LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        })
    }
    
    const onChange = (key) => {
        console.log(key);
    };
    
    return (
        <>
        <Space wrap>
        <input type="text" value={input} onChange={handleChange} />
        
        {isPending ? "Loading" : list.map((item, index) => {
            return <div key={index}>{item}</div>
        })}
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
export default HookUseTransition;