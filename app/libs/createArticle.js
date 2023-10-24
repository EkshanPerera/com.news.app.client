const createArticle = async (data) => {
  const token = "Bearer " + localStorage.getItem("accessToken");
  const response = await fetch(`${process.env.SERVER_URL}/api/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body:JSON.stringify(data)
  });
  if (!response.ok) {
    const errorResponse = await response.json(); 
    const error = new Error(errorResponse.message || 'Failed to fetch');
    error.response = response;
    throw error;
  }
  return response;

};
export default createArticle;
