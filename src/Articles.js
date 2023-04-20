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
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useMemo hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2020-05/memoization-in-react/#usememo" target="_blank">useMemo</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useCallback hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2020-05/memoization-in-react/#usecallback" target="_blank">useCallback</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useReducer hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2020-06/use-reducer/" target="_blank">useReducer</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useTransition hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2022-04/use-transition/" target="_blank">useTransition</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useDeferredValue hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2022-05/use-deferred-value/" target="_blank">useDeferredValue</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useLayoutEffect hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2020-07/use-layout-effect/" target="_blank">useLayoutEffect</Link>
                </Space><br/>
                <Space>
                    <Spin/><Text type="danger">useDebugValue hook</Text>-
                    <Link href="https://blog.webdevsimplified.com/2021-11/use-debug-value/" target="_blank">useDebugValue</Link>
                </Space><br/>
                Some Simple Tips:
                <div>
                    useEffect will run after useMemo since useEffect runs asynchronously after your component is finished executing. useMemo runs inline as your component is executing.
                </div>
            </Content>

        </>
    )
}

export default Articles
