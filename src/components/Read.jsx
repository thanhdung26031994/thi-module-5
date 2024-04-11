import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function Read() {
    const [list, setList] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => (
                setList(res.data)
            ))
            .catch(err => console.log(err));
    }, []);
    return(
        <div className={'d-flex w-100 vh-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h3>Detail of Product</h3>
                <div className={'mb-2'}>
                    <strong>Title: {list.title}</strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Price: {list.price}</strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Description: {list.description}</strong>
                </div>
                <Link to={`/update/${id}`} className={'btn btn-success'}>Edit</Link>
                <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
            </div>
        </div>
    )
}export default Read;