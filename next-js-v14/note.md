## NEXT JS
Server-side rendering (SSR): Next.js allows you to render React components on the server side before sending them to the client. This can improve page load times and SEO, as search engines can easily index the content.

Static site generation (SSG): Next.js also supports static site generation, where you can pre-render pages at build time. This approach is great for content-heavy websites and can offer even better performance and SEO benefits.

API routes: It offers a built-in API route feature that allows you to create serverless API endpoints within your Next.js project, making it easy to handle backend logic.ll

## Link
Link is a component provided by Next.js that allows you to create links to navigate between pages in your application.
It's primarily used for declarative, client-side navigation. When you click on a link created with Link, it prevents the default browser full-page refresh and fetches the new page content on the client side, resulting in a faster and smoother user experience.
It's typically used in your component's JSX code to create clickable links that lead to other pages within your Next.js application.
The <Link> component is a React component that extends the HTML `<a>` element, and it's the primary way to navigate between routes in Next.js

## useRouter()
useRouter is a hook provided by Next.js that allows you to access
the router object and its properties within your component.
It provides programmatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within your component.
It's useful when you need to handle navigation or access route-specific information directly in your component logic.

## Dynamic Routes
Dynamic routes in Next.js refer to a feature that allows you to create web pages with variable or dynamic parts in the URL.
Instead of defining individual routes for every possible URL, you can create a single route pattern that matches a variety of dynamic values. This is extremely useful when you have pages that share a common structure but differ based on specific information in the URL.
/users/[id]

## Catch-All Routes
In Next.js, the [...foldername] notation indicates that you are using a catch-all route, which allows you to capture multiple URL segments and treat them as a dynamic array of values.
This is useful when you want to create dynamic routes that can handle varying numbers of URL segments.

## Layout
A layout is like a blueprint that helps you make all the pages of your website look the same. It's a way to put common things, header footer, and other stuff that appears on every page, in one place. This makes it easy to keep a similar look on all your web pages. So, a layout is a handy tool that lets you keep things tidy and consistent on your website.

## Middleware(s)
In Next.js, middleware's are functions or pieces of code that run in between a user's request to a web page and the server's response. They help you process and modify the request or response, adding extra functionality to your web application.

## Routing Metadata
Ensuring proper search engine optimization (SEO) is crucial for increasing visibilty and attracting users

Configuring Metadata
- Export a static metadata object
- Export a dynamic generateMetadata function

Metadata rules
- Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page
  
Metadata is read in order, from the root level down to the final page level
When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties