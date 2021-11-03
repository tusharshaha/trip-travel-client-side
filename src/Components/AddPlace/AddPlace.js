import React from 'react';
import Header from '../Home/Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './addplace.css'
import swal from 'sweetalert';
import Footer from '../Home/Footer/Footer';
const AddPlace = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://gentle-cove-60812.herokuapp.com/places', data)
        .then(res=>{
            if(res.data.insertedId){
                swal("Good job!", "Successfuly Added Your Place", "success");
                reset()
            }
        })
    };
    return (
        <>
            <Header></Header>
            <div className='add-place '>
            <h2 className='text-uppercase text-white fw-bold'>Add New Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img",{ required: true})} placeholder='Place img url' />
                <input {...register("name",{ required: true})} placeholder='Place Name' />
                <input type="number" {...register("price",{ required: true})} placeholder=' Price'/>
                <textarea rows={4} {...register("description",{ required: true})} placeholder='Description'/>
                <input type="submit" value='Add Place' />
            </form>
            </div>
        <Footer></Footer>
        </>
    );
};

export default AddPlace;