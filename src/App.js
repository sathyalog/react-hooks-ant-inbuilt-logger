import { useEffect, useState } from 'react';
import { Console, Hook, Unhook } from 'console-feed'
import { Typography, Divider, Layout, Card, Space, Alert } from 'antd';
import { CodeOutlined, SmileOutlined } from '@ant-design/icons';
import HookUseState from './hooks/must-known-hooks/UseStateHook';
const { Title } = Typography;
const { Content } = Layout;


function App() {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => Unhook(hookedConsole)
  }, [])


  return (
    <div className="App">
      <Content style={{ padding: '10px 50px' }}>
        <Title>React Hooks <SmileOutlined style={{ fontSize: '32px' }} /></Title>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="1. Usage of UseState:" size="small">
            <HookUseState />
          </Card>
        </Space>

        <Divider />
        <Alert message="Console logger" type="info" />
        <div style={{
          margin: '1em 0',
          color: '#fff',
          minWidth: '540px',
          minHeight: '250px',
          backgroundColor: '#242424',
          borderRadius: '3px'
        }}><CodeOutlined style={{ fontSize: '32px' }} />
          <Console logs={logs} variant="dark" />
        </div>
      </Content>
    </div>
  );
}

export default App;
