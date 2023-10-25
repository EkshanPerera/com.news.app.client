const deleteArticle = async (id) => {
    const token = "Bearer " + localStorage.getItem("accessToken");
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/${id}`, {
      method: "DELETE",
      headers: {Authorization: token }
    });
    if (!response.ok) {
      const errorResponse = await response.json(); 
      const error = new Error(errorResponse.message || 'Failed to fetch');
      error.response = response;
      throw error;
    }
    return response;
  
  };
  export default deleteArticle;