import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addCategoryStart, updateCategoryStart } from '../../../redux/action/category.action';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { toast } from 'react-toastify';
import { storage } from '../../../firebaseConfig';


let initialState = {
  name: '',
  //get path of image here
  image: '',
  status: '',
  
}

export default function AddOrEditCategory() {

  let categories = useSelector(state => state.category.categories)

  let { id } = useParams();
  // console.log(id);
  if (id) {
    let category = categories.find((cat) => cat.id === id);
    // console.log(category);

    if (category) {

      delete category.id

      initialState = { ...category };
    }
  }
  else {
    initialState = {
      name: '',
      image: '',
      status: ''
    }
  }


  //trigger action
  const dispatch = useDispatch();


  //to navigate back to home page or from one page to another part of react router dom
  const navigate = useNavigate();



  //to convert intialstate into state  by usestate returns an object
  let [formData, setFormData] = useState(initialState);


  //destructuring
  let { name, image, status } = formData;

  const inputChange = (event) => {
    //console.log(event.target.value, event.target.name);
    setFormData((prevValue) => ({
      //object
      ...prevValue,

      //compound for dynamic key addition
      [event.target.name]: event.target.value
    }))
  }


  //data in event
  const fileChange = (event) => {
    //  console.log(event);
    uploadFile(event.target.files[0]);
  }

  const uploadFile = (file) => {

    const storageRef = ref(storage, file.name);

    // uploadBytesResumable  used to upload files works asynchronously
    const uploadTask = uploadBytesResumable(storageRef, file);


    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is'+progress+'%done');
        switch (snapshot.state) {
          case 'paused':
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevValue) => ({
            ...prevValue,
            image: downloadURL
          }))
          // console.log('Files',downloadURL);
        });
      }
    );
  }

  const submit = (event) => {
    //to stop reloading
    event.preventDefault();

    if (id) {
      dispatch(updateCategoryStart(id, formData))
        toast.success("Category updated successfully")
    } else {
      dispatch(addCategoryStart(formData))
        toast.success("Category added successfully")

    }
    //call back function
    //after addition reach homepage in 2 seconds
    setTimeout(() => {
      navigate('/admin/category')
    }, 2000)

    // dispatch(addCategoryStart(formData))
  }
  // useEffect(() =>{
  // console.log("shalini");
  // })
  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>Add Category</div>
        <div><Link to="/admin/category" className='btn btn-success'>Back</Link></div>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input className="form-control" type="file" id="image"
              onChange={fileChange}
            />

            {image && <div className='mt-2'><img src={image} style={{
              height: "50px"
            }} /></div>}
          </div>
          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id='status'
              name='status'
              //gets default value on its own
              defaultValue={status}
              onChange={inputChange}>
              <option hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
