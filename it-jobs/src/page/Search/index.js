
import { Col, Row, Tag } from "antd";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SearchList from "./searchList";
import { getAllJob } from "../../sevices/jobServices";

function Search() {
    const [searchPrams, setSearchPrams] = useSearchParams();
    const [dataSearch, setDataSearch] = useState();
    const citySearch = searchPrams.get("city") || "";
    const keywordSearch = searchPrams.get("keyword") || "";


    useEffect(() => {
        const fetchApi = async () => {
            const response = await getAllJob();
            if (response) {
                const newData = response.filter((item) => {
                    const city = citySearch ? item.city?.includes(citySearch) : true;
                    const keyword = keywordSearch ? item.tags?.includes(keywordSearch) : true;
                    const status = item.status;
                    return city && keyword && status;

                });
                setDataSearch(newData);
            }

        };

        fetchApi();
    },[]);

    return (
        <>

            <div>
                <h2>Kết quả tìm kiếm: {citySearch ? (<Tag color="magenta">{citySearch}</Tag>) : (<></>)}
                    { keywordSearch? (<Tag color="magenta">{keywordSearch }</Tag>) : (<></>)}</h2>
                   {dataSearch &&( <SearchList  dataSearch={dataSearch} />)}
            </div>

        </>
    );
}

export default Search;
