import React from 'react';
import { Menu, Space, Spin } from 'antd';
import { Layout, Typography } from 'antd';
import { AppstoreOutlined, SmileOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <AppstoreOutlined />,
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
        <Space>
          <Spin /><Text type="danger">useContext hook</Text>- <span>Just creating a theme context providers along with custom hooks to apply theme and toggle theme. Consuming context in functional component.
            Top level a switch button toggles dark/light theme inside 3rd section(useContext). Kindly notice.
          </span>
        </Space>
      </Content>

    </>
  )
}

export default Articles
