const getArticles = async () =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles`,{
    cache:'no-cache'
    });
    if(!response.ok){
        throw new Error("Falid to fetch articles");
    }
    return await response.json();
  }
export default getArticles;