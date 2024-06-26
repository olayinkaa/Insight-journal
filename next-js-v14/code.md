## Start Next app
```shell
npx create-next-app@latest
```
## LINK
```js
import Link from "next/link"
import {usePathname} from "next/navigation"
// usage
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/product" replace>Product</Link>
```
```js
"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"

const navLinks = [
    {name: "Register", href: "/register"}
    {name: "Login", href: "/login"}
]

export default function AuthLayout({children}:{
    children: React.ReactNode
}){
    const pathname = usePathname()
    return (
        <div>
            {navLinks.map((link)=>{
                const isActive = pathname.startsWith(link.href)
                return (
                    <Link href={link.href} key={link.name} className={isActive && "font-bold mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}
```
## USEROUTER
```js
import {useRouter} from "next/navigation"
const router = useRouter()
// usagen 
<button onClick={()=> router.push('about')}>Go to About Page</button>
<button onClick={()=> router.back()}>Back</button>
<button onClick={()=> router.forward()}>Forward</button>
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
```js
import {notFound} from "next/navigation"
const ProductPage = ()=> {
    const product = await fetchProduct(url)
    if(!product) return notFound()
    return (
        <div>Product one</div>
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
//------------------------------------------------
const Data = async ()=> {
    let products = await fetchData()
    return (
        <div>
            {products?.map(p=> p.id)}
        </div>
    )
}
```
## Route handlers
```js
// best convention is to create an api folders and put all api route there e.g api/register/route.ts

// app/dashboard/route.ts
// app/register/route.ts
// app/register/users/route.ts
// app/register/[id]/route.ts
l
```
## API route 
```js
import {NextResponse} from "next/server"
// app/api/users/route.js
export function GET(){
    return NextResponse.json({result: "hello"},{status:201})
}

// app/user/[id]/route.js
export async function GET(_,response){
    // response.params.id
}
export async function POST(req, res){
    let data = await req.json()
    if(!data.email){
        return NextResponse.json({error: "Email is required"},{status:400})
    }
    return NextResponse.json({result:"success"})
}
//usage, call endpoint: /api/users
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
    if (request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url)
    }
    return NextResponse. Json({ success: "successfully ran" });
}
export const config = {
    matcher: ["/userslist/:path*"],
}
```
```js
<body className={cn("relative h-full font-sans antialiased",inter.className)}></body>
```

## Environment variable
```js
// .env.local
MONGO_URI="mongodb://27017:username"
process.env.MONGO_URI
```

## Using Fetch
```js
const onSubmit = ()=> {
    const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({name, age, email})
    })

    response = await response.json()
    if(response.ok){
        // do something
    } else {
        // do something else
    }
}
```
<<<<<<< HEAD

## Sample data fetch in a page
```js
interface Repository {
    id: number;
    firstName: string;
    lastName: string;
}
export default async function Page(){
    const res = await fetch("https://api.github.com/", {
        cache: "no-store", 
        next: {
            revalidate: 5
        }
    })
    const data:Repository = await res.json()
    return (
        <div>
            {data.firstName}
        </div>
    )
}
```
```js
interface Repository {
    id: number;
    firstName: string;
    lastName: string;
}
async function getRepos():Promise<Repository>{
    const res = await fetch("https://api.github.com/", {
        next: {
            revalidate: 5
        }
    })
}

async function getTime():Promise<Repository>{
    const res = await fetch("https://api.github.com/", {
        cache: "no-store", 
    })
}

export default async function Page(){
    const [data, time] = await Promise.all([getRepos(), getTime()])
    return (
        <div>
            {data.firstName}
        </div>
    )
}
=======
##  Static Metadata
```js
export const metadata = {
    title: "About me",
    description: "About page"
}

export default function About(){
    return <h1>About</h1>
}
```

## Dynamic metadata
common place is the dynamic route
```js
import {Metadata} from "next"

type Props = {
    params: {
        productId:string
    }
}

export const generateMetadata = ({param}: Props) => {
    return {
        title: `product ${param.productId}`
    }
}

export default function ProductDetails({params}: Props){
    return <h1>Details about product {params.productId}</h1>
}
```
```js
import {Metadata} from "next"

type Props = {
    params: {
        productId:string
    }
}

export const generateMetadata = async ({param}: Props) => {
    const title = await new Promise(resolve=> {
        setTimeout(()=> {
            resolve(`iphone ${params.productId}`)
        }, 100)
    })
    return {
        title: `product ${title}`
    }
}

export default function ProductDetails({params}: Props){
    return <h1>Details about product {params.productId}</h1>
}
```

## title
The title field's primary purpose is to define the document title. It can be either a string or an object

```js
import {Metadata} from "next"

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Next.js tutorial",
        template: "%s' | codevolution"
    },
    description: "Generated by Next js"
}

export default function Page(){
    return <p>This is a sample</p>
}
```

## Error handling
```js
// error.tsx
"use client"
export default function ErrorBoundary({error}:{error:Error}){
    console.log(error)
    return <div>Error in review page {error.message}</div>
}
```
## Recover from errors
```js
// error.tsx
"use client"
export default function ErrorBoundary({error, reset}:{
    error:Error, 
    reset: ()=> void
    }){
    console.log(error)
    return <div>
        Error in review page {error.message}
        <button onClick={reset}>Try again</button>
    </div>
}
```

## Parallel route
```js
// @user/page.tsx
// @revenue/page.tsx
export default function DashboardLayout({children, users, revenue}:{
    chidren: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
}){
    return (
        <div>
            {children}
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
    )
}
```

## Route handler
```js
>>>>>>> 875aeb88fefa8e0b38b5369fcbf222a90526b841
```