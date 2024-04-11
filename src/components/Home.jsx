import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
    const [list, setList] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => (
                setList(res.data)
            ))
            .catch(err => console.log(err));
    }, []);

    const handleDelete=(id) => {
        const confirm = window.confirm('Would you like to Delete ?');
        if (confirm){
            axios.delete('http://localhost:3000/products/' + id)
                .then(res => {
                    navigate('/');
                }).catch(err => {
                console.log(err);
            })
        }
    };
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center bg-light vh-100'}>
            <h1>List of Products</h1>
            <div className={'w-75 rounded bg-white border shadow p-4'}>
                <div className={'d-flex justify-content-end'}>
                    <Link to={'/create'} className={'btn btn-success'}>Add new</Link>
                </div>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/read/${product.id}`} className={'btn btn-sm btn-info me-2'}>Read</Link>
                                    <Link to={`/update/${product.id}`}
                                          className={'btn btn-sm btn-primary me-2 '}>Edit</Link>
                                    <button onClick={event => handleDelete(product.id)}
                                            className={'btn btn-sm btn-danger'}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;