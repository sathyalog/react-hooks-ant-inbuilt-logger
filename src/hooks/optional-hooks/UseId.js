import React from 'react';
import EmailForm from "./EmailForm";
import {  Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
    import React,{useId} from 'react';

    function EmailForm() {
        const id = useId();
        return (
            <>
                <label htmlFor={id}>Email</label>
                <input id={id} type="email" />
            </>
        )
    }

    function HookUseId() {
    return (
        <>
            <EmailForm />
            <article>
                Lorem ipsum...
            </article>
            <EmailForm />
        </>
    )
    }
`;
function HookUseId() {
    const { Panel } = Collapse;
    
    const onChange = (key) => {
        // console.log(key);
    };
    
    return (
        <>
            <EmailForm />
            <article>
                Lorem ipsum...
            </article>
            <EmailForm />
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

export default HookUseId;