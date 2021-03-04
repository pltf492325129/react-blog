import { Layout, Menu, Breadcrumb } from 'antd';
import Icon,{
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {useState} from 'react'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex() {
    const [collapsed, setCollapse] = useState(false)


    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapse(collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        工作台
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        添加文章
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理">
                        <Menu.Item key="3">添加文章</Menu.Item>
                        <Menu.Item key="4">删除文章</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="留言管理">
                        <Menu.Item key="6">留言</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Zpp blog ....
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created for FYJ</Footer>
            </Layout>
        </Layout>
    );
}

export default AdminIndex