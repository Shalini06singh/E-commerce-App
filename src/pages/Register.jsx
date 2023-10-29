import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUserStart } from '../redux/action/user.action';
import { Link, useNavigate } from 'react-router-dom';
let initialState = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
};



export default function Register() {
   const dispatch = useDispatch();
  const navigate =  useNavigate();
    let [formData, setFormData] = useState(initialState);
    let [error, setError] = useState(false);

    let {
        name,
        email,
        password,
        confirm_password,
    } = formData

    const inputChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }


    const submit = (event) => {
        event.preventDefault()
        console.log(formData);

        if (formData.password === formData.confirm_password) {

            setError(false);
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    //unique id
                    formData.uid = user.uid;
                    formData.role = 'customer'

                    delete formData.confirm_password;
                    dispatch(addUserStart(formData));
                    setTimeout(() => {
                        navigate("/login")

                    },2000)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                });
        }

        else {
            setError(true)
        }

    }
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Register</h3>
                    <div className="card-text">
                        {
                            error && <p className='text-danger'> Password does not match  </p>


                        }

                        <form className="authentication" onSubmit={submit}>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control form-control-sm"
                                    id="name"
                                    name='name'
                                    value={name}
                                    onChange={inputChange}
                                    aria-describedby="emailHelp" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email"
                                    className="form-control form-control-sm"
                                    id="email"
                                    name='email'
                                    value={email}
                                    onChange={inputChange}
                                    aria-describedby="emailHelp"

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>

                                <input type="password"
                                    className="form-control form-control-sm"
                                    id="password"
                                    name='password'
                                    value={password}
                                    onChange={inputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>

                                <input type="password"
                                    className="form-control form-control-sm"
                                    id="confirm_password"
                                    name='confirm_password'
                                    value={confirm_password}
                                    onChange={inputChange} />
                            </div>
                            <button type="submit" className="btn btn-auth btn-primary btn-block">Sign In</button>

                            <div className="sign-up">
                                Do you have an account? <Link to ="/login">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )
}
