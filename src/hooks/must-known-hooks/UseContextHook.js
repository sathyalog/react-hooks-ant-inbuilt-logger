import React from 'react';
import { useTheme, useThemeUpdate } from '../../ThemeContext';
import { Button, Space, Collapse } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `
  ThemeContext.js
  #############################################################
  import React, { useContext, useState } from 'react';

  const ThemeContext = React.createContext();
  /* Update context provider */
  const ThemeUpdateContext = React.createContext();

  /* Custom hook to use theme */
  export function useTheme() {
    return useContext(ThemeContext);
  }

  /* Custom hook to apply theme update */
  export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
  }

  export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme() {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
      <ThemeContext.Provider value={darkTheme}>
        {/* Function to update our theme */}
        <ThemeUpdateContext.Provider value={toggleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    )
  }
  #############################################################
  import { useTheme, useThemeUpdate } from '../../ThemeContext';

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <>
      <Space wrap>
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <div style={themeStyle}>Function Theme</div>
      </Space>
    </>
  )
  `;
function HookUseContext() {
  const { Panel } = Collapse;
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Space wrap>
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <div style={themeStyle}>Function Theme</div>
      </Space>
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

export default HookUseContext
