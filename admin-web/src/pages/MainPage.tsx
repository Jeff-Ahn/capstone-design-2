import { ReactElement, useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import Search from '../components/Search';
import Register from '../components/Register';

const { Header, Content, Footer } = Layout;

const navs = ['조회하기', '추가하기'];

function MainPage(): ReactElement {
  const [content, setContent] = useState(<Search />);
  const changeMode = ({ key }: { key: string }) => {
    switch (key) {
      case '조회하기':
        setContent(<Search />);
        break;
      case '추가하기':
        setContent(<Register />);
        break;
      default:
        break;
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[navs[0]]}
          onClick={changeMode}
        >
          {navs.map(nav => (
            <Menu.Item key={nav}>{nav}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <StyledContent>{content}</StyledContent>
      <Footer style={{ textAlign: 'center' }}>
        AHU ©2021 Capstone Design 2 Project
      </Footer>
    </Layout>
  );
}

const StyledContent = styled(Content)`
  width: 100%;
  padding: 40px 50px;
  display: flex;
  margin: 0 auto;
`;

export default MainPage;
