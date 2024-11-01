import { Layout, Button } from "antd"
import "./LayoutDefault.css"
import "./base.css"
import "./reset.css"
import { NavLink, Outlet } from "react-router-dom"
import { getCookie } from "../../helper/cookie"
import { useSelector } from "react-redux"
import {LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

function LayouDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
   
    return (
        <>

            <div className="container">
                <header className="header">
                    <div className="header__logo "  >
                        <NavLink to="/"> IT JOB</NavLink>
                    </div>
                    <div className="header__nav">
                        <div className="header__nav-left">
                        </div>
                        {token ? (
                            <div className="header__nav-right">
                                <NavLink to="/admin">
                                    <Button size="large" block> <UserOutlined />Quản lý</Button>
                                </NavLink>
                                <NavLink to="/logout">
                                    <Button size="large" block><LogoutOutlined />Đăng Xuất</Button>
                                </NavLink>
                            </div>
                        ) : (
                            <div className="header__nav-right">
                                <NavLink to="/login">
                                    <Button size="large" block>Đăng Nhập</Button>
                                </NavLink>
                                <NavLink to="/register">
                                    <Button size="large" block>Đăng Ký</Button>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </header>
            </div>

            <div className="container">
                <Content className="sider"><Outlet /></Content>
            </div>


        </>
    )
}
export default LayouDefault