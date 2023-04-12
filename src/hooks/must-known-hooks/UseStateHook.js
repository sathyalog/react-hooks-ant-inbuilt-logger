import React, { useState } from 'react';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function HookUseState() {
  const { Panel } = Collapse;
  const initialiseCount = () => {
    console.log('run function'); // this runs everytime when count updates
    return 0;
  }

  /* Normal way */
  // const [count, setCount] = useState(0);

  /* use initialise function instead of useState(0) -> useState(initialiseCount) just to see useState function called
  everytime count updates */
  // const [count, setCount] = useState(initialiseCount());

  /* Function version - this will run very first time */
  const [count, setCount] = useState(() => initialiseCount());

  const decrementCount = () => {
    console.log('Decrement');
    setCount(prevCount => prevCount - 1);
  }
  const incrementCount = () => {
    console.log('Increment');
    setCount(prevCount => prevCount + 1);
  }
  const onChange = (key) => {
    // console.log(key);
  };
  const codeString = `function HookUseState() {

    const initialiseCount = () => {
      console.log('run function'); // this runs everytime when count updates
      return 0;
    }

    /* Normal way */
    // const [count, setCount] = useState(0);

    /* use initialise function instead of useState(0) -> useState(initialiseCount) just to see useState function called
    everytime count updates */
    // const [count, setCount] = useState(initialiseCount());

    /* Function version - this will run very first time */
    const [count, setCount] = useState(() => initialiseCount());

    const decrementCount = () => {
      console.log('Decrement');
      setCount(prevCount => prevCount - 1);
    }

    const incrementCount = () => {
      console.log('Increment');
      setCount(prevCount => prevCount + 1);
    }

    return (
      <>
        <Space wrap>
          <Button onClick={decrementCount}>-</Button>
          <span>{count}</span>
          <Button onClick={incrementCount}>+</Button>
        </Space>
      </>
    )
  }`;
  return (
    <>
      <Space wrap>
        <Button onClick={decrementCount}>-</Button>
        <span>{count}</span>
        <Button onClick={incrementCount}>+</Button>
      </Space><br /><br />
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

export default HookUseState;
