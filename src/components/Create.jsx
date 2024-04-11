import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Create() {
    const [value, setValue] = useState({
        title: "",
        price: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/products', value)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={'d-flex w-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h1>Add a Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Title</label>
                        <input type={'text'} name={'title'} className={'form-control'} placeholder={'Enter Title'}
                               onChange={event => setValue({...value, title: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Price</label>
                        <input type={'text'} name={'price'} className={'form-control'} placeholder={'Enter Price'}
                               onChange={event => setValue({...value, price: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>description</label>
                        <input type={'text'} name={'description'} className={'form-control'} placeholder={'Enter Description'}
                               onChange={event => setValue({...value, description: event.target.value})}/>
                    </div>
                    <button className={'btn btn-success'}>Submit</button>
                    <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
                </form>
            </div>
        </div>
    )
}

export default Create;