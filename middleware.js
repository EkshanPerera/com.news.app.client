import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get("loggedin");
    let url = req.url;

    if(!verify && url.includes(`/dashboard`)){
        return NextResponse.redirect(`http://localhost:3000/login`);
    }
    if(!verify && url.includes(`/dashboard`)){
        return NextResponse.redirect(`https://com-news-app-client.vercel.app/login`);
    }
    if (verify && url === `http://localhost:3000/login`) {
      return NextResponse.redirect(`http://localhost:3000/dashboard`);
    }
    if (verify && url === `https://com-news-app-client.vercel.app/login`) {
      return NextResponse.redirect(`https://com-news-app-client.vercel.app/dashboard`);
    }

}