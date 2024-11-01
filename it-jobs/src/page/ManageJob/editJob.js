import { Button, Form, Input, message, Modal, Select, Spin, Switch, Tag } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import { getTimeCurent } from "../../helper";
import { updateJobs } from "../../sevices/jobServices";

function EditJob(props) {
    const { record, onReload } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [spining, setSpining] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleFinsh = async (value) => {
        setSpining(true);
        const tags = typeof value.tags === 'string' ? value.tags.split(",") : record.tags;
        const city = typeof value.city === 'string' ? value.city.split(",") : record.city;
        const options = {
            ...value,
            tags:tags,
            city:city ,
            updateAt: getTimeCurent()
        }
        const response = await updateJobs(record.id, options);
        setTimeout(() => {
            if (response) {
                messageApi.success({
                    type: 'success',
                    content: `Bạn đã cập nhập thành công jobs ${record.name}`

                });
                setIsModalOpen(false);
                onReload();

            } else {
                messageApi.error({
                    type: 'error',
                    content: `Bạn đã cập nhập không thành công jobs ${record.name}`

                });
            }
            setSpining(false);
        }, 1000)

    }
    return (
        <>
            {contextHolder}
            <Button color="primary" variant="outlined" onClick={showModal}><EditOutlined /></Button>

            <Modal title="Thông tin việc làm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Spin spinning={spining} tip="Dang cập nhập">
                    <Form layout="vertical" form={form} name="update-job" onFinish={handleFinsh} initialValues={record}>
                        <Form.Item
                            label="Tên công việc: "
                            name="name"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tag: "
                            name="tags"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Lương: "
                            name="salary"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Thành phố: "
                            name="city"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả: "
                            name="description"
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="Trạng thái" name="status" valuePropName="checked">
                            <Switch checkedChildren="Đang bật" unCheckedChildren="Đang tắt" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </>
    )
}
export default EditJob