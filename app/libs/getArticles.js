const getArticles = async () =>{
    const response = await fetch("https://com-news-app-backend.onrender.com",{
    cache:'no-cache'
    });
    if(!response.ok){
        throw new Error("Falid to fetch articles");
    }
    return await response.json();
  }
export default getArticles;