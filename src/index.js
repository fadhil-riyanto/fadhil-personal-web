import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './components/css/Custom.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

// page
import IndexPage from './page/Index'
import BlogPage from './page/Blogs'
import UnderConstruction from './page/UnderConstruction'

// essential
import Footer from './components/Footer'

// blog
import GenBlogRouteArray from './page/blogs/_Register.js'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const default_route = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/about",
    element: <UnderConstruction />
  },
  {
    path: "/links",
    element: <UnderConstruction />
  },
  {
    path: "/projects",
    element: <UnderConstruction />
  },
  {
    path: "/resume",
    element: <UnderConstruction />
  }
]

const withBlogRoute = default_route.concat(GenBlogRouteArray())

const router = createBrowserRouter(withBlogRoute);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
