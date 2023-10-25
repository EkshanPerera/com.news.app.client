"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import createArticle from "../libs/createArticle";
import ErrorDisplay from "./ErrorDisplay";
import modifyArticle from "../libs/modifyArticle";
import ImageUploadBox from "./ImageUploadBox";
import SuccessDisplay from "./SuccessDisplay";
import Link from "next/link";


const ArticleForm = (props) => {
  const [values, setValues] = useState({
    title: props.article ? props.article.title : "" ,
    description: props.article ? props.article.description :"",
    content: props.article ? props.article.content :"",
    image: props.article ? props.article.image :"",
  });
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if(!props.article){
        const response = await createArticle(values);
        if(response.ok){
          setSuccess('New article added successfully!');
          setValues({
            title :"",
            description :"",
            content :"",
            image :""
          })
          setTimeout(() => {
            setSuccess(null); 
          }, 2500);
        }
      }else{
        const id = props.article._id;
        const response = await modifyArticle({values,id});
        if(response.ok){
          setSuccess('New article added successfully!');
          setValues({
            title :"",
            description :"",
            content :"",
            image :""
          })
          setTimeout(() => {
            setSuccess(null); 
          }, 2500);
        }
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setValues({
        title :"",
        description :"",
        content :"",
        image :""
      })
      setTimeout(() => {
        setError(null); 
      }, 2500);
    }

  };
  const setIMGURLHandler = (filename) => {
    setValues({
      ...values,
      image:`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${filename}`
    })
  }
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 max-w-xl mx-auto">{props.hedding}</h2>
       {error && <ErrorDisplay message={error}/>}
       {success && <SuccessDisplay message={success}/>}
       <ImageUploadBox setIMGURL={setIMGURLHandler} />
      <form onSubmit={submitHandler} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title || ""}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          Description
          </label>
          <textarea
            id="description"
            name="description"
            value={values.description || ""}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={values.content || ""}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="8"
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={values.image || ""}
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled/>
          
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <Link className="px-2" href='/dashboard'> Dashboard</Link>
        </div>
      </form>
      
    </div>
  );
};

export default ArticleForm;
