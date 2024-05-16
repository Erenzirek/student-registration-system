import React from 'react';
import { useGetUsersQuery , useDeleteUserMutation} from '../../RTK/userAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './student_list.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Student_list = () => {
    const { 
        data: users, 
        isLoading, 
        isError,
        isSuccess, 
        error 
    } = useGetUsersQuery(); // isLoadin -> isLoading olarak düzeltildi
    const [deleteUser] = useDeleteUserMutation();
    return (
        <div className='d-flex justify-content-center p-3'>
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>Something went wrong</h3>}
            {isSuccess && 
                users.map(user => (
                    <div key={user.id} className='p-5 border border-2 border-dark m-2'>
                        <h4>{user.name}</h4>
                        <h4>{user.email}</h4>
                        <button className='btn-delete' onClick={ () => deleteUser(user.id)}>Delete</button>
                        <Link className='btn-edit' to={`/edit/${user.id}`}>Edit</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Student_list;
