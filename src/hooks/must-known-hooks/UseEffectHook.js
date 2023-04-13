import React, { useState, useEffect } from 'react';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/{resourceType}")
      .then(response => response.json())
      .then(json => console.log(json))
    return () => {
      console.log("useEffect Clean up code here")
    }
  }, [resourceType])

  return (
    <>
      <Space wrap>
        <Button onClick={() => setResourceType('posts')}>Posts</Button>
        <Button onClick={() => setResourceType('users')}>Users</Button>
        <Button onClick={() => setResourceType('comments')}>Comments</Button><br /><br />
        <h1>{resourceType}</h1>
      </Space>
    </>);
  `;
function HookUseEffect() {
  const { Panel } = Collapse;
  const [resourceType, setResourceType] = useState("posts")
  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
    return () => {
      console.log("useEffect Clean up code here")
    }
  }, [resourceType])
  return (
    <>
      <Space wrap>
        <Button onClick={() => setResourceType('posts')}>Posts</Button>
        <Button onClick={() => setResourceType('users')}>Users</Button>
        <Button onClick={() => setResourceType('comments')}>Comments</Button><br /><br />
        <h2>{resourceType}</h2>
      </Space>
      <Collapse defaultActiveKey={['0']} onChange={onChange}>
        <Panel header="Click here to view the code" key="1">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </Panel>
      </Collapse>
    </>);
}

export default HookUseEffect;
