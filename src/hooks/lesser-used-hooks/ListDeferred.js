import React, { useMemo, useDeferredValue, useEffect} from 'react';
import {  Space } from 'antd';

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
        console.log(`Input:, ${input}\n Deferred input:${deferredInput}`)
    },[input, deferredInput])
    
    return list;
}

export default DeferredList;