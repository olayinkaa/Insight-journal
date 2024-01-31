## LINK
```js
import Link from "next/link"
// usage
<Link href="/">Home</Link>
<Link href="/about">About</Link>
```
## USEROUTER
```js
import {useRouter} from "next/navigation"
const router = useRouter()
// usage
<button onClick={()=> router.push('about')}>Go to About Page</button>
```
## DYNAMIC ROUTE
```js
"use client"
// /user/[id]/page.js
const user = ({params})=> {
    return (
        <div>{params.id}</div>
    )
}

const user = ({params})=> {
    const {id} = params
    return (
        <div>{id}</div>
    )
}
```
```js
// projects/[...all]/page.js
// project/:name/order/:id
const user = ({params})=> {
    const {all} = params
    return (
        <div>{id}</div>
    )
}
```
## NOT FOUND
```js
// not-found.js
const NotFound = ()=> {
    return (
        <div>Page Not Found</div>
    )
}
```
## REDIRECT, USEPATHNAME
```js
import {redirect} from "next/navigation"
import {usePathname} from "next/navigation"
const pathname = usePathname()
```

## Generate metadata
```js
const user = ()=> {
    return (
        <div>Hello</div>
    )
}
export const generateMetadata = ()=> {
    return {
        title: "This is title",
        description: "This is description" 
    }
}
```

## Image
```js
import NatureImage from "@/public/nature.jpg"
import Image from "next/image"
<Image
src={NatureImage}
alt="nature image"
width={100}
height={500}
/>
// for external image
@type (import('next').NextConfig}
const nextConfig = {
    images: {
        domains:["images.unsplash.com"]
    },
}
module. exports = nextConfig:
```   
## Font
```js
import {Roboto} from "next/font/google"
const roboto = Roboto({subsets:['latin'], weight: '500'})
// usage
<h1 className={roboto.className}>Hello, Roboto</h1>
```

## Fetch Data (server components)
```js
async function fetchData(){
    let data = await fetch('https://api-url')
    data = await data.json()
    return data
}
const Data = async ()=> {
    let products = await fetchData()
    return (
        <div>
            {products?.map(p=> p.id)}
        </div>
    )
}
```

## API route
```js
import {NextResponse} from "next/server"
// app/api/users/route.js
export function GET(){
    return NextResponse.json({result: "hello"},{status:201})
}

// app/user/[id]/route.js
export function GET(_,response){
    // response.params.id
    
}
```

## Middleware
```js
import {NextResponse} from "next/server"
export function middleware(request){
    return NextResponse.json({success: true})
}
export const config = {
    matcher: ["/userslist/:path*"]
}
```
```js
//middleware.js
import { NextResponse } from "next/server";
export function middleware (request) {
    if (request.nextUrl .pathname * '/login') {
        return NextResponse.redirect(new URL('/login', request.url)
    }
    return NextResponse. Json({ success: "successfully ran" 3);
}
export const config = {
    matcher: ["/userslist/:path*"],
}
```
```js
<body className={cn("relative h-full font-sans antialiased",inter.className)}></body>
``````