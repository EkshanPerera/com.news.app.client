const getArticles = async () =>{
    const response = await fetch("http://localhost:5001/api/articles",{
    cache:'no-cache'
    });
    if(!response.ok){
        throw new Error("Falid to fetch articles");
    }
    return await response.json();
  }
export default getArticles;