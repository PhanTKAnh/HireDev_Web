import { Button, Layout } from "antd"
import "./LayoutDefault.css"
import "./base.css"
import "./reset.css"
import { SearchOutlined, MenuUnfoldOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from "react"
import MenuSider from "../../components/MenuSider"
import { NavLink, Outlet } from "react-router-dom"
const { Sider, Content } = Layout;
function LayouDefaultAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div className="container">
                <Layout className="layout-default">

                    <header className="header">
                        <div className={"header__logo " + (collapsed && "header__logo--collapse")} >
                            <NavLink  to="/"> IT JOB</NavLink>
                        </div>
                        <div className="header__nav">
                            <div className="header__nav-left">
                                <div className="header__collapse" onClick={() => { setCollapsed(!collapsed) }}><MenuUnfoldOutlined /> </div>
                                <div className="header__search"><SearchOutlined /></div>

                            </div>
                            <div className="header__nav-right">
                                <NavLink to="/">
                                    <Button size="large" block><HomeOutlined />Trang chủ</Button>
                                </NavLink>
                                <NavLink to="/logout">
                                    <Button size="large" block> <LogoutOutlined />Đăng Xuất</Button>
                                </NavLink>
                            </div>
                        </div>
                    </header>
                    <Layout>
                        <Sider className="sider" collapsed={collapsed} theme="light">
                            <MenuSider />
                        </Sider>
                        <Content className="content">
                            <Outlet />
                        </Content>
                    </Layout>

                </Layout>
            </div>
        </>
    )
}
export default LayouDefaultAdmin