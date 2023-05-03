import { useEffect, useState } from 'react'
import {  Collapse } from 'antd';
import  useDebounce  from './useDebounce'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
useDebounce()
This React hook helps to limit that the component is re-rendered too many times.
Imagine that you want to execute a function on an event that executes several hundred times per second such as moving the mouse or scrolling.
This may cause the application to lag. To prevent this, the debounce uses an internal timer to execute the callback function every xx seconds (2nd parameter).

Consider the example below. Each time the user enters the field, the onChange event is triggered.
On the other hand, the unfolded variable is updated at most every 500ms.
If you have to make an API call to find the elements that match the search term, you can do so by monitoring the unpacked variable, which will be more economical.

Debounces the given value.

Create a custom hook that takes a value and a delay.
Use the useState() hook to store the debounced value.
Use the useEffect() hook to update the debounced value every time value is updated.
Use setTimeout() to create a timeout that delays invoking the setter of the previous state variable by delay ms.
Use clearTimeout() to clean up when dismounting the component.
This is particularly useful when dealing with user input.

useDebounce.js
import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce

DebounceComponentUsage.js:
const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    // Fetch API (optional)
    useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
    }, [debouncedValue])

    return (
        <div>
            <p>Value real-time: {value}</p>
            <p>Debounced value: {debouncedValue}</p>

            <input type="text" value={value} onChange={handleChange} />
        </div>
    )

`;
export default function DebounceUsageComponent() {
    const { Panel } = Collapse;
    const onChange = (key) => {
        // console.log(key);
    };
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    // Fetch API (optional)
    useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
    }, [debouncedValue])

    return (
        <>
        <div>
            <p>Value real-time: {value}</p>
            <p>Debounced value: {debouncedValue}</p>

            <input type="text" value={value} onChange={handleChange} />
        </div>
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
