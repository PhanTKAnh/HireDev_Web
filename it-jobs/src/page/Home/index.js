import { Button, Col, Row } from 'antd';
import SearchForm from '../../components/SearchForm';
import SearchTag from '../../components/SearchTag';
import { useNavigate } from 'react-router-dom';
import ListCompany from '../Company/listCompany';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../acttion';
import { useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(checkLogin(false));
    },[])
    const handleClick = () => {
        navigate('/company');
        
    }
    return (
        <>
            <SearchForm />
            <SearchTag/>
            <ListCompany/>
            <Button onClick={handleClick}>Xem Thêm</Button>
        </>
    )
}
export default Home