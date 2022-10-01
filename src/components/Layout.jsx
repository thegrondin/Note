import React, { useState } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Notes from '../containers/Notes';
import NoteEditor from '../containers/NoteEditor';

const {
  Content, Footer, Sider,
} = AntdLayout;

function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo">Note</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item><Link to="/">test</Link></Menu.Item>
            <Menu.Item><Link to="/note-editor">Create note</Link></Menu.Item>
          </Menu>
        </Sider>
        <AntdLayout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route
                path="/"
                element={<Notes />}
              />
              <Route path="/note-editor" element={<NoteEditor />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </AntdLayout>
      </AntdLayout>
    </Router>
  );
}

export default Layout;
