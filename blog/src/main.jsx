import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Protected from './components/Protected.jsx'

import {Protected,Login } from './components/Index.js'
import Home from './pages/Home.jsx'
// import Login from './components/Login.jsx'
// import Signup from './pages/Signup.jsx'
import Signup from './pages/Signup.jsx'
import Allpost from './pages/Allpost.jsx'
import Addpost from './pages/Addpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/login', element: (
                    <Protected authentication={false}>
                        <Login />
                    </Protected>
                )
            },
            {
                path: '/signup',
                element: (
                    <Protected authentication={false}>
                        <Signup />
                    </Protected>
                )
            },
            {
                path: '/all-posts', element: (
                    <Protected authentication>
                        {" "}
                        < Allpost />
                    </Protected>
                )

            },
            {
                path: '/add-post',
                element: (
                    <Protected authentication>
                        {" "}
                        <Addpost />
                    </Protected>
                )
            }, {
                path: '/edit-post/:slug',
                element: (
                    <Protected authentication>
                        {" "}
                        <Editpost />
                    </Protected>
                )
            },
            {
                path: '/post/:slug',
                element: (
                        <Post />
                )
            }],
    },

])
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            </Provider>
    </StrictMode>

);
