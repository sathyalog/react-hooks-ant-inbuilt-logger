import React, { useState } from 'react';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function HookUseState() {
  const { Panel } = Collapse;

  /* initialise count */
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
  /* useState for objects */
  const [state, setState] = useState({ theme: true, systemOS: 'Mac' })
  /* useState for arrays */
  const [themes, setThemes] = useState(["docco", "gist", "one-dark"]);

  /* Decrement count */
  const decrementCount = () => {
    console.log('Decrement');
    setCount(prevCount => prevCount - 1);
  }

  /* Increment count */
  const incrementCount = () => {
    console.log('Increment');
    setCount(prevCount => prevCount + 1);
  }

  /* Update theme, array on click of change theme button*/
  const updateState = () => {

    setState(prevState => {
      return {
        ...prevState,
        theme: !prevState.theme
      }
    });

    setThemes(prevState => {
      if (prevState.indexOf("new-theme") > -1)
        return [...prevState]
      else
        return [...prevState, "new-theme"]
    })
  }

  const onChange = (key) => {
    // console.log(key);
  };

  /* render array of items */
  const renderThemes = themes.map((item, index) =>
    <span key={index}>{item} </span>
  );

  /* Code highlighter */
  const codeString = `function HookUseState() {

    /* initialise count */
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
    /* useState for objects */
    const [state, setState] = useState({ theme: true, systemOS: 'Mac' })
    /* useState for arrays */
    const [themes, setThemes] = useState(["docco", "gist", "one-dark"]);

    /* Decrement count */
    const decrementCount = () => {
      console.log('Decrement');
      setCount(prevCount => prevCount - 1);
    }

    /* Increment count */
    const incrementCount = () => {
      console.log('Increment');
      setCount(prevCount => prevCount + 1);
    }

    /* Update theme, array on click of change theme button*/
    const updateState = () => {
      setState(prevState => {
        return {
          ...prevState,
          theme: !prevState.theme
        }
      });

      setThemes(prevState => {
        if (prevState.indexOf("new-theme") > -1)
          return [...prevState]
        else
          return [...prevState, "new-theme"]
      })
    }

    /* render array of items */
    const renderThemes = themes.map((item, index) =>
      <span key={index}>{item} </span>
    );

    return (
      <>
        <Space wrap>
          <Button onClick={decrementCount}>-</Button>
          <span>{count}</span>
          <Button onClick={incrementCount}>+</Button>
          <Button onClick={updateState}>Change to github theme</Button>
        </Space>
        List of <strong>themes</strong> are: {renderThemes}
        <Collapse defaultActiveKey={['0']} onChange={onChange}>
          <Panel header="Click here to view the code" key="1">
            <SyntaxHighlighter language="javascript"  style={state.theme ? docco : github}>
              {codeString}
            </SyntaxHighlighter>
          </Panel>
        </Collapse>
      </>
    )
  }`;
  return (
    <>
      <Space wrap>
        <Button onClick={decrementCount}>-</Button>
        <span>{count}</span>
        <Button onClick={incrementCount}>+</Button>
        <Button onClick={updateState}>Change to github theme</Button><br />
      </Space>
      <br /><br />
      List of <strong>themes</strong> are: {renderThemes}

      <br /><br />
      <Collapse defaultActiveKey={['0']} onChange={onChange}>
        <Panel header="Click here to view the code" key="1">
          <SyntaxHighlighter language="javascript" style={state.theme ? docco : github}>
            {codeString}
          </SyntaxHighlighter>
        </Panel>
      </Collapse>
    </>
  )
}

export default HookUseState;
