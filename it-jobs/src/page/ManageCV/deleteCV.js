import { Button, message, Popconfirm } from "antd"
import {DeleteOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { deleteCV } from "../../sevices/CVServices";

function DeleteCV(props){
    const {record,onReload} = props;
    const [messageApi, contextHolder] = message.useMessage();
    const handleDelete = async () =>{
        const response = await deleteCV(record.id);
        if(response){
            onReload();
            messageApi.success({
                type: 'success',
                content: `Bạn đã xóa thành công jobs ${record.name}`

            });
        }else{
            messageApi.error({
                type: 'error',
                content: `Bạn đã xóa không thành công jobs ${record.name}`

            });
        }
    }
    return(
        <>
        {contextHolder}
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
        <Button  color="danger" variant="outlined"><DeleteOutlined /></Button>
          </Popconfirm>
        </>
    )
}
export default DeleteCV