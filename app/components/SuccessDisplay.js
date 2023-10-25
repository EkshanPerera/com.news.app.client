import React from 'react';

const SuccessDisplay = ({ message }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-xl mx-auto" role="alert">
      <strong className="font-bold">Success! </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default SuccessDisplay;