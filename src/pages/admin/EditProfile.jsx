import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, storage } from '../../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateUserStart } from '../../redux/action/user.action';
import { toast } from 'react-toastify';

const initialState = {
    email: "", id: "", name: "", uid: "", image: '', phone: '', address: ''
}




export default function EditProfile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log(auth.currentUser);

    const [user, setUser] = useState({})
    const users = useSelector(state => state.user.users)
    const getCurrentUserDetails = (users, uid) => {
        // console.log(user);

        if (users.length > 0) {
            // console.log(users);
            let usr = users.find(user => user.uid === uid)
            // console.log(usr);
            setUser(usr);

        }

    }
    const inputChange = (event) => {

        setUser((prevValue) => ({
    
          ...prevValue,
          [event.target.name]: event.target.value
        }))
      }
    


    const fileChange = (event) => {
        uploadFile(event.target.files[0]);
    }

    const uploadFile = (file) => {

        const storageRef = ref(storage, file.name);


        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                switch (snapshot.state) {
                    case 'paused':
                        
                        break;
                    case 'running':
                      
                        break;
                }
            },
            (error) => {
 
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUser((prevValue) => ({
                        ...prevValue,
                        image: downloadURL
                    }))

                });
            }
        );
    }

    useEffect(() => {
        getCurrentUserDetails(users, auth.currentUser?.uid);
    }, [auth.currentUser?.uid])

    const submit = (event) =>{
        event.preventDefault();
        dispatch(updateUserStart(user.id , user));
        toast.success('Profile updated successfully')
        setTimeout(() =>{
            navigate('/admin/profile')
        },2000)
        // console.log(users);
    }
    return (
        <div className="card">
            <div className="card-header bg-primary text-white d-flex justify-content-between">
                <div>Edit Profile</div>
                <div><Link to="/admin/profile" className='btn btn-success'>Back</Link></div>
            </div>
            <div className="card-body">
                <form onSubmit={submit} >
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name='name'
                            value={user.name}
                            onChange={inputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input className="form-control"
                            type="file"
                            id="image"
                            name='image'
                            onChange={fileChange}


                        />
                        {user.image && <div className='mt-2'><img src={user?.image} style={{
                            height: "50px"
                        }} /></div>}
                    </div>


                    <div className="mb-4">
                        <label htmlFor="phone" className="form-label">Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name='phone'
                            value={user.phone}
                            onChange={inputChange}

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name='address'
                            value={user.address}
                            onChange={inputChange}

                        />
                    </div>





                    <button type="submit" className="btn btn-primary">
                        UPDATE

                    </button>
                </form>



            </div>
        </div>
    )
}
