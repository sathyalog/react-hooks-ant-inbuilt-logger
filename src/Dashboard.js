import { useEffect, useState } from 'react';
import { Console, Hook, Unhook } from 'console-feed'
import { Typography, Divider, Layout, Card, Space, Alert, Switch } from 'antd';
import { Menu } from 'antd';
import { CodeOutlined, SmileOutlined, BookOutlined, StopOutlined } from '@ant-design/icons';
import HookUseState from './hooks/must-known-hooks/UseStateHook';
import HookUseEffect from './hooks/must-known-hooks/UseEffectHook';
import HookUseContext from './hooks/must-known-hooks/UseContextHook';
import { useThemeUpdate } from './ThemeContext';
import HookUseRef from "./hooks/lesser-known-hooks/UseRefHook";
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
          <Card title="1. Usage of UseState:" size="small">
            <HookUseState />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="2. Usage of UseEffect:" size="small">
            <HookUseEffect />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="3. Usage of UseContext:" size="small">
            <HookUseContext />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="4. Usage of UseRef:" size="small">
            <HookUseRef />
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
