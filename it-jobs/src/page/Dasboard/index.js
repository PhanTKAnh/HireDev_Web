import { Col, Row } from "antd"
import JobStatic from "./jobStatic"
import CVStatic from "./CVStatic"
import { getCookie } from "../../helper/cookie";
import InfoStatic from "./infoStatic";
function Dasboard() {
    const id = getCookie("id");
    return (
        <>
            <h3>Tổng quan</h3>
            <Row justify="center" gutter={16}>
                <Col span={8}>
                    <JobStatic id={id} />
                </Col>
                <Col span={8}>
                <CVStatic  id={id} />
                </Col>
                <Col span={8}>
                <InfoStatic  id={id} />
                </Col>
            </Row>
        </>
    )
}
export default Dasboard