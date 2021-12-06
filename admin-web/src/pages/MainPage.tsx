import { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const navs = ['조회하기', '추가하기', '통계'];
function MainPage(): ReactElement {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navs[0]]}>
          {navs.map(nav => (
            <Menu.Item key={nav}>{nav}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Block>content</Block>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

const Block = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: blue;
`;
export default MainPage;
