"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import createArticle from "../libs/createArticle";
import ErrorDisplay from "./ErrorDisplay";
import modifyArticle from "../libs/modifyArticle";

const ArticleForm = (props) => {
  const [values, setValues] = useState({
    title: props.article ? props.article.title : "" ,
    description: props.article ? props.article.description :"",
    content: props.article ? props.article.content :"",
    image: props.article ? props.article.image :"",
  });
  const [isLoading,setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

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
      }else{
        const id = props.article._id;
        const response = await modifyArticle({id,values});
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setTimeout(() => {
        setError(null); 
      }, 2500);
    }
  };

  return (
    <div className="container mx-auto my-8">
       {error && <ErrorDisplay message={error}/>}
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
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={values.content || ""}
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
          Description
          </label>
          <textarea
            id="description"
            name="description"
            value={values.description || ""}
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
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
