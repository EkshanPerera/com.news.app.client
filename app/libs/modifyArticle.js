const modifyArticle = async ({id,data}) => {
  const token = "Bearer " + localStorage.getItem("accessToken");
  const response = await fetch(`http://localhost:5001/api/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body:JSON.stringify(data)
  });
  if (!response.ok) {
    const errorResponse = await response.json(); // Extract the error message from the response body
    const error = new Error(errorResponse.message || 'Failed to fetch');
    error.response = response;
    throw error;
  }
  return response;

};
export default modifyArticle;
