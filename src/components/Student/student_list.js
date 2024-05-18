import React from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from '../../RTK/userAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './student_list.css';
import { Link } from "react-router-dom";

const Student_list = () => {
    const { 
        data: users, 
        isLoading, 
        isError,
        isSuccess, 
        error 
    } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    
    return (
        <>
          <div>
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>Something went wrong</h3>}
            {isSuccess && 
                <div className="container">
                    <h2>Student List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.email}</td>
                                    <td>{student.password}</td>
                                    <td>
                                        <button 
                                            className='btn btn-danger btn-delete' 
                                            onClick={() => deleteUser(student.id)}
                                        >
                                            Delete
                                        </button>
                                        <Link 
                                            className='btn btn-primary btn-edit' 
                                            to={`/edit/${student.id}`}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
          </div>
        </>
    );
}

export default Student_list;
