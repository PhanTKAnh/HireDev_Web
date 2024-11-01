import { Button, Table, Tag } from "antd"
import CVJobs from "./CVJobs";
import { NavLink } from "react-router-dom";
import {EyeOutlined} from '@ant-design/icons'
import DeleteCV from "./deleteCV";

function ListCV(props){
    const {dataCV,onReload} = props;
    const columns = [    
        {
            title: 'Tên jobs',
            dataIndex: 'idJob',
            key: 'idJob',
            render: (_,record) =>(
                <CVJobs record={record}/>
            )
            
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Ngày gửi',
            dataIndex: 'createAt',
            key: 'createAt'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'statusRead',
            key: 'statusRead',
            render: (_,record) =>(
                <>
                {record.statusRead ? (<Tag color="green">Đã đọc </Tag>):(<Tag color="gray">Chưa đọc</Tag>)}
                </>
            )
            
        },
        {
            title: 'Hành động ',
            dataIndex: '',
            key: '',
            render: (_,record) =>(
                <>
                <NavLink to={`/cv-detail/${record.id}`}><Button><EyeOutlined /></Button></NavLink>
                <DeleteCV record={record} onReload={onReload} /> 
                </>
            )
        }
]
    return(
        <>
         <Table dataSource={dataCV} columns={columns} />;
        </>
    )
}
export default ListCV