import { Menu } from "antd"
import { DashboardOutlined, FileProtectOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
function MenuSider() {
    const items = [
        {
            label: <Link to="admin">Tổng quan</Link>,
            key: "/dashboard",
            icon: <DashboardOutlined />,
        },
        {
            label: <Link to="info-company">Thông tin công ty</Link>,
            key: "info-company",
            icon: <UserOutlined />,
        },
        {
            label: <Link to="manage-job">Quản lý làm việc</Link>,
            key: "create-room",
            icon: <UnorderedListOutlined />,
        },
        {
            label: <Link to="manage-cv">Quản lý CV</Link>,
            key: "manage-cv",
            icon: <FileProtectOutlined />,
        }
    ];
    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/dashboard"]}
               
            />

        </>
    )
}
export default MenuSider