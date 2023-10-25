"use client";
import { useState } from "react";

const ImageUploadBox = (props) => {
  const [file, setFile] = useState(null);
  const fileChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        props.setIMGURL(file.name);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-gray-600">
        <span className="text-red-600">*</span>Please upload the image before
        submit
      </p>
      <form onSubmit={submitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
          rounded focus:outline-none focus:shadow-outline float-right"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploadBox;
