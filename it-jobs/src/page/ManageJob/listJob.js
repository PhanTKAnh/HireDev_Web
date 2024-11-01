import { Button, Table, Tag } from 'antd';
import {EyeOutlined  } from '@ant-design/icons';
import {NavLink} from "react-router-dom"
import EditJob from "./editJob"
import DeleteJob from "./deteleJob"
function ListJob(props) {
    const { jobs,onReload } = props;
    
    const columns = [
        {
            title: 'Tên jobs',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'tags',
            dataIndex: 'tags',
            key: 'tags',
            render: (_, { tags }) => {
                return (
                    <>
                        {tags.map((item, index) => (
                            <Tag color="blue" key={index}>{item}</Tag>
                        ))}
                    </>
                );
            }
        },

        {
            title: 'Mức lương ($)',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Thời gian',
            key: 'time',
            render: (_, record) =>(
            <>
            <small>Ngày tạo: {record.createAt}</small>
            <br/>
            <small>Ngày Cập nhập: {record.updateAt}</small>
            </>
        )


        },
        {
            title: 'Trạng thái ',
            dataIndex: 'status',
            key: 'status',
            render: (_,record) =>(
                <>
                {record.status ? (<Tag color="green">Đang bật</Tag>):(  <Tag color="gold">Đang tắt</Tag>)}
                </>
            )
        },
        {
            title: 'Hành động',
            dataIndex: 'status',
            key: 'status',
            render: (_,record) =>(
                <>
                <NavLink to={`/detail-job/${record.id}`}><Button><EyeOutlined /></Button></NavLink>
                <EditJob record={record} onReload={onReload}/>
                <DeleteJob record={record} onReload={onReload} /> 
                </>
            )
        },

    ]
    return (
        <>
            <Table dataSource={jobs} columns={columns} />;

        </>
    )
}
export default ListJob