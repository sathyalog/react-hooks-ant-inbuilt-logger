import { useEffect, useState } from 'react';
import { Console, Hook, Unhook } from 'console-feed'
import { Typography, Divider, Layout, Card, Space, Alert, Switch } from 'antd';
import { Menu } from 'antd';
import { CodeOutlined, SmileOutlined, BookOutlined, StopOutlined } from '@ant-design/icons';
import HookUseState from './hooks/must-known-hooks/UseStateHook';
import HookUseEffect from './hooks/must-known-hooks/UseEffectHook';
import HookUseContext from './hooks/must-known-hooks/UseContextHook';
import { useThemeUpdate } from './ThemeContext';
import HookUseRef from "./hooks/lesser-used-hooks/UseRefHook";
import HookUseMemo from "./hooks/lesser-used-hooks/UseMemoHook";
import HookUseCallback from "./hooks/lesser-used-hooks/UseCallbackHook";
import HookUseReducer from "./hooks/lesser-used-hooks/UseReducerHook";
import HookUseReducerComplex from "./hooks/lesser-used-hooks/UseReducerHookComplex";
import HookUseTransition from "./hooks/lesser-used-hooks/UseTransitionHook";
import HookUseDeferredValue from "./hooks/lesser-used-hooks/UseDeferredValueHook";
import HookUseLayoutEffect from "./hooks/optional-hooks/UseLayoutEffectHook";
import HookUseDebugValue from "./hooks/optional-hooks/UseDebugValueHook";
import HookUseImperativeHandle from "./hooks/optional-hooks/UseImperativeHandleHook"
import HookUseId from "./hooks/optional-hooks/UseId";
import CustomHookUseLocalStorage from "./hooks/custom-hooks/UseLocalStorageHook";
import ToggleComponent from "./hooks/custom-hooks/ToggleComponent";
const { Title, Text } = Typography;
const { Content } = Layout;

const items = [
  {
    label: 'Articles',
    key: 'articles',
    icon: <BookOutlined />,
  }]

function Dashboard({ navigate }) {
  const [logs, setLogs] = useState([]);
  const toggleTheme = useThemeUpdate();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  useEffect(() => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => Unhook(hookedConsole)
  }, [])
  return (
    <>
      <Content style={{ padding: '10px 50px', overflow: 'hidden', }}>
        <Title>React Hooks <SmileOutlined style={{ fontSize: '32px' }} /></Title>
        <Text type="danger">Dark Theme:</Text> <Switch defaultChecked onChange={onChange} onClick={toggleTheme} size="small" />
        <Menu onClick={() => navigate('/articles')} mode="horizontal" items={items}></Menu>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="1. Usage of useState:" size="small">
            <HookUseState />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="2. Usage of useEffect:" size="small">
            <HookUseEffect />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="3. Usage of useContext:" size="small">
            <HookUseContext />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="4. Usage of useRef:" size="small">
            <HookUseRef />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="5. Usage of useMemo:" size="small">
            <HookUseMemo />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="6. Usage of useCallback:" size="small">
            <HookUseCallback />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="7. Simple Usage of useReducer:" size="small">
            <HookUseReducer />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="8. Complex Usage of useReducer:" size="small">
            <HookUseReducerComplex />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="9. Usage of useTransition:" size="small">
            <HookUseTransition />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="10. Usage of useDeferredValue:" size="small">
            <HookUseDeferredValue />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="11. Usage of useLayoutEffect:" size="small">
            <HookUseLayoutEffect/>
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="12. Usage of useDebugValue:" size="small">
            <HookUseDebugValue/>
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="13. Usage of useImperativeHandle:" size="small">
            <HookUseImperativeHandle />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="14. Usage of useId:" size="small">
            <HookUseId />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="14. Usage of Custom Hook useLocalStorage:" size="small">
            <CustomHookUseLocalStorage />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="15. Usage of Custom Hook useToggle:" size="small">
            <ToggleComponent />
          </Card>
        </Space>
        <Divider />
        <Alert message="Console logger" type="info" />
        <div style={{
          margin: '1em 0',
          color: '#fff',
          minWidth: '540px',
          minHeight: '250px',
          maxHeight: '600px',
          overflowY: 'scroll',
          backgroundColor: '#242424',
          borderRadius: '3px'
        }}><CodeOutlined style={{ fontSize: '32px' }} />
          <span onClick={() => setLogs([])}><StopOutlined style={{ fontSize: '20px', float: 'right', margin: '5px 15px' }} /></span>
          <Console logs={logs} variant="dark" />

        </div>
      </Content>

    </>
  )
}

export default Dashboard;
