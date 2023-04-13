import React from 'react';
import { Menu, Badge, Space, Spin } from 'antd';
import { Layout, Typography } from 'antd';
import { DashboardOutlined, SmileOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
  }]
const { Content } = Layout;
const { Title, Text } = Typography;
function Articles({ navigate }) {
  return (
    <>
      <Title>React Hooks <SmileOutlined style={{ fontSize: '32px' }} /></Title>
      <Menu onClick={() => navigate('/')} mode="horizontal" items={items}></Menu>

      <Content style={{ padding: '10px 50px' }}>
        <Space>
          <Spin /><Text type="danger">useState hook</Text> - <span>Learn useState hook how it works with values, objects, arrays and function version of useState.</span>
        </Space>
        <Space>
          <Spin /><Text type="danger">useEffect hook</Text>- <span>We will just have 3 buttons like posts, users & comments where we will fetch some data on clicking these buttons from jsonplaceholder website.
            In order to perform side effects, we will use useEffect hook.</span>
        </Space>
      </Content>

    </>
  )
}

export default Articles
