import { Card, Tag } from "antd";
import { Link } from "react-router-dom";

function JobsItem(props) {
    const { item } = props;
    return (
        <>
            {item && (<Card title={<Link to= {`/job/${item.id}`}>{item.name}</Link>} size="small">
                <p className="search-list__tags">Ngôn ngữ: </p>{item.tags.map((itemTag,indexTag) => (<span  key={indexTag}> <Tag color="blue">{itemTag}</Tag></span>))}
                <p className="search-list__city">Thành phố : </p>{item.city.map((itemcity,indexCity) => (<span key={indexCity}> <Tag color="gold">{itemcity}</Tag></span>))}
                <p className="search-list__salary">Lương: <strong>{item.salary}</strong></p>
                <p className="search-list__company">Công ty: <strong>{item?.infoCompany?.companyName}</strong></p>
                <p className="search-list__createAt" >Ngày tạo: <strong>{item.createAt}</strong></p>
            </Card>)}
        </>
    )

}
export default JobsItem