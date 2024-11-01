import { useEffect, useState } from "react";
import { getDetailJob } from "../../sevices/jobServices";

function CVJobs(props){
    const {record}=props;
    const [dataJobs,setDataJobs] = useState([]);
    const fetchApi =async () =>{
        const response =await getDetailJob(record.id);
        if(response){
            setDataJobs(response);
        }
       
    }
    useEffect(()=>{
        fetchApi();
    },[])
    return(
        <>
        {dataJobs.name}
        </>
    )
}
export default CVJobs