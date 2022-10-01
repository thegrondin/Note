import React, { useState } from 'react';
import { Breadcrumb, Layout as AntdLayout, Menu } from 'antd';

const {
  Header, Content, Footer, Sider,
} = AntdLayout;

function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
      </Sider>
      <AntdLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
