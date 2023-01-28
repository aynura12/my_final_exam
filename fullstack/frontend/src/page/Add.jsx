import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios";
import "../page/add.scss"
import { Helmet } from 'react-helmet-async'
const Add = () => {
  const [state, setstate] = useState({
    image: "",
    name: "",
    comment: "",
    price:""
  });
 const handleChange=async(e)=>{
    setstate({...state,[e.target.name]:e.target.value})
 }

const addData=async(id)=>{
    if(!state.image||!state.name||!state.comment) return
   await axios.post("http://localhost:8080/work",state)
   setstate({
    image: "",
    name: "",
    comment: "",
    price:""

   })
}
const onSubmit=(data)=>{
    console.log(data);
    addData()
}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <div className="myform">
        <Helmet><title>Add</title></Helmet>
      <form className="form">
        <input type="text" {...register("image")} onChange={handleChange}  value={state.image} name="image" placeholder="Image..."/>
        {errors.image ? <span>{errors.image.message}</span> : <></>}

        <input type="text" {...register("name")} onChange={handleChange} value={state.name} name="name" placeholder="Name..."/>
        {errors.name ? <span>{errors.name.message}</span> : <></>}

        <input type="text" {...register("comment")} onChange={handleChange}  value={state.comment} name="comment" placeholder="Comment..." />
        {errors.comment ? <span>{errors.comment.message}</span> : <></>}

        <input type="number" {...register("price")} onChange={handleChange}  value={state.price} name="price" placeholder="Price..." />
        {errors.price ? <span>{errors.price.message}</span> : <></>}
        <button onClick={handleSubmit(onSubmit)}>add</button>
      </form>
    </div>
  );
};

export default Add;
