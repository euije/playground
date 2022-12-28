# agenda
이의제                                    기

---
# Next.js

## Environment

### [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction)

- For custom advanced configuration of Next.js
    - you can create a next.config.js or next.config.mjs file
    - in the root of your project directory (next to package.json).

- next.config.js is a regular Node.js module, not a JSON file.
    - It gets used by the Next.js server and build phases
    - and it's not included in the browser build.

``` javascript
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig
```

### [ESLint in Next.js](https://nextjs.org/docs/basic-features/eslint)

- add this code to `package.json`

``` json
"scripts" : {
  "lint": "next lint"
}
```

- and run `npm run lint` or `yarn lint`

---

## Terms

### Pre-rendering & Hydration

- By default, `Next.js pre-renders every page`. This means that Next.js **generates HTML for each page in advance**, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
    <!-- - > 기본적으로, Next.js는 모든 페이지를 pre-render 합니다. 이는 각 페이지를  -->

- Each generated HTML is associated with minimal JavaScript code necessary for that page
- When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called `hydration`.)

### Static Generation

- `Static Generation` is the ***pre-rendering method*** that generates the HTML at **build time**. The pre-rendered HTML is then *reused* on each request.

### Server-side rendering

- `Server-side Rendering` is ***the pre-rendering method*** that generates the HTML on **each request**.

### getStaticProps()

- `getStaticProps` runs at **build time** in production.
- Inside the function, you can fetch external data and send it as props to the page.
- `getStaticProps` allows you to tell Next.js: “Hey, this page has some data dependencies"

### getServerSideProps()

``` javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

- To use Server-side Rendering, you need to export `getServerSideProps` instead of getStaticProps from your page.
- Because `getServerSideProps` is called at request time, its parameter `(context)` contains request specific parameters.

### Client-side rendering

- If you do not need to pre-render the data, you can also use the following strategy (called `Client-side Rendering`)
    - Statically generate (pre-render) parts of the page **that do not require external data.**
    - *When the page loads*, **fetch external data** from the client using JavaScript and populate the remaining parts.

### Server-side rendering vs Client-side rendering

- Client-side rendering is Static Generation without Data + Fetch Data on the Client-side
- This approach works well for user dashboard pages, for example. 
    - Because a dashboard is a private, user-specific page, SEO is not relevant,
    - and the page doesn’t need to be pre-rendered.
        - The data is frequently updated, which requires request-time data fetching.


### SWR

- The team behind Next.js has created **a React hook for data fetching** called `SWR`. 
- We highly recommend it if you’re fetching data on the client side. 
    - It handles `caching`, `revalidation`, `focus tracking`, `refetching on interval`, and more.

### getStaticProps

- How-to-Statically-Generate-Pages-with-Dynamic-Routes
- <img alt="[How-to-Statically-Generate-Pages-with-Dynamic-Routes]" src="https://nextjs.org/static/images/learn/dynamic-routes/how-to-dynamic-routes.png" width="256px"/>

```javascript
import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```

### API Routes

- `API Routes` let you create an API endpoint inside a Next.js app. You can do so by creating a function inside the pages/api directory that has the following format

``` javascript
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}
```