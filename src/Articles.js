import React from 'react';
import {Menu, Space, Spin} from 'antd';
import {Layout, Typography} from 'antd';
import {AppstoreOutlined, SmileOutlined} from '@ant-design/icons';

const items = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <AppstoreOutlined/>,
    }]
const {Content} = Layout;
const {Title, Text, Link} = Typography;

function Articles({navigate}) {
    return (
        <>
            <Title>React Hooks <SmileOutlined style={{fontSize: '32px'}}/></Title>
            <Menu onClick={() => navigate('/')} mode="horizontal" items={items}></Menu>

            <Content style={{padding: '10px 50px'}}>
                <Space>
                  <Spin/><Text type="danger">useState hook</Text> - <Link href="https://blog.webdevsimplified.com/2020-04/use-state/">useState</Link>
                </Space><br/>
                <Space>
                  <Spin/><Text type="danger">useEffect hook</Text>- <Link href="https://blog.webdevsimplified.com/2020-04/use-effect/">useEffect</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useContext hook</Text>- <Link href="https://blog.webdevsimplified.com/2020-06/use-context/" target="_blank">useContext</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useRef hook</Text>-
                  <Link href="https://blog.webdevsimplified.com/2020-05/use-ref/" target="_blank">useRef</Link>
                </Space>
            </Content>

        </>
    )
}

export default Articles
