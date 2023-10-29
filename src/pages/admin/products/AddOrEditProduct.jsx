import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';
// import { category } from '../../../redux/saga/category.saga';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';
import { addProductStart, updateProductStart } from '../../../redux/action/product.action';
import { toast } from 'react-toastify';

let initialState = {}




export default function AddOrEditProduct() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.categories)
  const products = useSelector(state => state.product.products)

  if (id) {
    let product = products.find(p => p.id === id)
    if (product) {
      delete product.id;
      initialState = product;
    }
  } else {
    initialState = {
      name: '',
      image: '',
      short_description: '',
      description: '',
      final_price: '',
      market_price: '',
      quantity: '',
      category: '',
      status: ''
    }

  }


  let [formData, setFormData] = useState(initialState);
  let {
    name,
    image,
    short_description,
    description,
    final_price,
    market_price,
    quantity,
    category,
    status
  } = formData

  const inputChange = (event) => {

    setFormData((prevValue) => ({

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
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
        }
      },
      (error) => {

      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevValue) => ({
            ...prevValue,
            image: downloadURL
          }))

        });
      }
    );
  }

  const submit = (event) => {
    event.preventDefault();
    // console.log(formData);
    if (id) {
      dispatch(updateProductStart(id, formData))
      toast.success("Product updated successfully")
    } else {

      dispatch(addProductStart(formData))
      toast.success("Product create successfully")
    }
    setFormData(
      {
        name: '',
        image: '',
        short_description: '',
        description: '',
        final_price: '',
        market_price: '',
        quantity: '',
        category: '',
        status: ''
      }
    )
    setTimeout(() => {
      navigate('/admin/products')
    }, 2000)
  }
  useEffect(() => {

  }, [id])

  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>{id ? 'EDIT' : 'ADD'} Product</div>
        <div><Link to="/admin/products" className='btn btn-success'>Back</Link></div>
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
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input className="form-control"
              type="file"
              id="image"
              // name='image'
              onChange={fileChange} 
              />
            {image && <div className='mt-2'><img src={image} style={{
              height: "50px"
            }} /></div>}
          </div>
          <div className='mb-3'>
            <label htmlFor="short_description">Short Description</label>
            <Editor
              onInit={(evt, editor) => { }}
              initialValue={short_description}

              init={{
                height: 300,
                menubar: false
              }}
              onEditorChange={(newText) => setFormData((prev) => (
                {
                  ...prev,
                  short_description: newText
                }
              ))}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="description">Description</label>
            <Editor
              onInit={(evt, editor) => { }}
              initialValue={description}

              init={{
                height: 300,
                menubar: false
              }}
              onEditorChange={(newText) => setFormData((prev) => (
                {
                  ...prev,
                  description: newText
                }
              ))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="final_price" className="form-label">Final Price</label>
            <input
              type="number"
              className="form-control"
              id="final_price"
              name='final_price'
              value={final_price}
              onChange={inputChange}
              step='any'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="market_price" className="form-label">Market Price</label>
            <input
              type="number"
              className="form-control"
              id="market_price"
              name='market_price'
              value={market_price}
              onChange={inputChange}
              step='any'
            />
          </div>


          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name='quantity'
              value={quantity}
              onChange={inputChange}
            />
          </div>



          <div className='mb-3'>
            <label htmlFor="status">Category</label>
            <select
              className="form-control"
              id='status'
              name='category'
              defaultValue={category}
              onChange={inputChange}>
              <option hidden>Select Status</option>
              {
                categories.length > 0 && categories.map((category, index) => (
                  <option value={category.id} key={index}>{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id='status'
              name='status'
              defaultValue={status}
              onChange={inputChange}>
              <option hidden>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? 'UPDATE' : 'CREATE'}

          </button>
        </form>



      </div>
    </div>

  )
}
