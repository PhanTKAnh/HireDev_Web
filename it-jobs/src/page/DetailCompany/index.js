import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompany } from "../../sevices/companySevice";
import { getAllListJob } from "../../sevices/jobServices";
import JobsItem from "../../components/jobsItem";
import { Col, Row } from "antd";

function DetailCompany() {
    const prams = useParams();
    console.log(prams.id);
    const [infoCompany, setInfoCompany] = useState([]);
    const [listJobs, setlistJobs] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const company = await getCompany(prams.id);
            const jobs = await getAllListJob(prams.id);
            setInfoCompany(company);
            setlistJobs(jobs)

        };
        fetchApi();
    }, []);

    console.log(infoCompany);
    console.log(listJobs)

    return (
        <>
            <h1> {infoCompany.companyName}</h1>
            <p>Địa chỉ: <strong>{infoCompany.address}</strong> </p>
            <p>Số lượng nhân sự: <strong>{infoCompany.quantityPeople}</strong> </p>
            <p>Thời gian làm việc: <strong>{infoCompany.workingTime}</strong> </p>
            <p>Link website: <strong>{infoCompany.website}</strong> </p>
            <p>Mô tả ngắn: {infoCompany.description} </p>
            <p>Mô tả chi tiết: {infoCompany.detail} </p>
            <h1>Danh sachs</h1>
            <Row justify="start" gutter={[16, 16]}>
                {listJobs && (
                    listJobs.map(item => (
                        <Col key={item.id} span={6}>
                            <JobsItem item={item} />
                        </Col>))
                )}
            </Row>
        </>
    )
}
export default DetailCompany