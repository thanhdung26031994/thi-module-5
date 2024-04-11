import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Update() {
    const [value, setValue] = useState({
        title: "",
        price: "",
        description: "",
    });
    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => (
                setValue(res.data)
            ))
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/products/' + id, value)
            .then(res => {
                navigate('/');
            }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div className={'d-flex w-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h1>Update Product</h1>
                <form onSubmit={handleUpdate}>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Title</label>
                        <input type={'text'} name={'title'}
                               className={'form-control'}
                               placeholder={'Enter Title'}
                               value={value.title}
                               onChange={event => setValue({...value, title: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Price</label>
                        <input type={'number'} name={'price'}
                               className={'form-control'}
                               placeholder={'Enter Price'}
                               value={value.price}
                               onChange={event => setValue({...value, price: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Description</label>
                        <input type={'text'} name={'description'}
                               className={'form-control'}
                               placeholder={'Enter Description'}
                               value={value.description}
                               onChange={event => setValue({...value, description: event.target.value})}/>
                    </div>
                    <button className={'btn btn-success'}>Update</button>
                    <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;