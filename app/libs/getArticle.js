const getArticle = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles/${id}`, {
      cache: "no-cache",
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      const error = new Error(errorResponse.message || "Failed to fetch");
      error.response = response;
      throw error;
    }
    return await response.json();
};

export default getArticle;
