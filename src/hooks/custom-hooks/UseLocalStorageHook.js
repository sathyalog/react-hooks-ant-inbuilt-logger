import React from 'react';
import useLocalStorage from "./useLocalStorage";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Collapse } from 'antd';

const codeString = `
    useLocalStorage.js
    import React, {useState, useEffect} from 'react';

    function getSavedValue(key, initialValue) {
        const savedValue = JSON.parse(localStorage.getItem(key))
        //if you find saved value in local storage with key name, then return that saved value from local storage
        if(savedValue) return savedValue;
        // useState initialValue can also be a function in that case, call the function else return inital value
        if(initialValue instanceof Function) return initialValue()
        // if no saved value return initial value
        return initialValue
    }
    
    export default function useLocalStorage(key, initialValue) {
        const [value, setValue] = useState(()=> {
            return getSavedValue(key, initialValue)
        });
    
        useEffect(()=>{
            console.log("please check local storage for key as name & value as", value)
            localStorage.setItem(key, JSON.stringify(value))
        },[value])
    
        return [value, setValue];
    }
    
    CustomHookUseLocalStorage.js:
    
    const [name, setName] = useLocalStorage('name', '');

    return(
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    )

`;
export default function CustomHookUseLocalStorage() {
    const { Panel } = Collapse;
    const onChange = (key) => {
        // console.log(key);
    };
    const [name, setName] = useLocalStorage('name', '');
    
    return(
        <>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
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