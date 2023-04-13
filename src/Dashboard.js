import { useEffect, useState } from 'react';
import { Console, Hook, Unhook } from 'console-feed'
import { Typography, Divider, Layout, Card, Space, Alert } from 'antd';
import { Menu } from 'antd';
import { CodeOutlined, SmileOutlined, EditOutlined } from '@ant-design/icons';
import HookUseState from './hooks/must-known-hooks/UseStateHook';
import HookUseEffect from './hooks/must-known-hooks/UseEffectHook';
const { Title } = Typography;
const { Content } = Layout;

const items = [
  {
    label: 'Articles',
    key: 'articles',
    icon: <EditOutlined />,
  }]

function Dashboard({ navigate }) {
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
    <>
      <Content style={{ padding: '10px 50px' }}>
        <Title>React Hooks <SmileOutlined style={{ fontSize: '32px' }} /></Title>
        <Menu onClick={() => navigate('/articles')} mode="horizontal" items={items}></Menu>

        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="1. Usage of UseState:" size="small">
            <HookUseState />
          </Card>
        </Space>
        <Divider />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="2. Usage of UseState:" size="small">
            <HookUseEffect />
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

    </>
  )
}

export default Dashboard;
