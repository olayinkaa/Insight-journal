// error.tsx
"use client"
export default function ErrorBoundary({error}:{error:Error}){
    console.log(error)
    return <div>Error in review page {error.message}</div>
}
