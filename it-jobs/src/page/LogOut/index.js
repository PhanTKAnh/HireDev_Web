import { useEffect } from "react";
import { deleteAllCookies, getCookie } from "../../helper/cookie"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../acttion";

function LogOut(){
    const navigate = useNavigate();
    const token = getCookie("token");
    const dispatch = useDispatch();
    deleteAllCookies();
    useEffect(()=>{
        navigate("/")
        dispatch(checkLogin(true))
    },[]);
    return(
        <>

        </>
    )
}
export default LogOut