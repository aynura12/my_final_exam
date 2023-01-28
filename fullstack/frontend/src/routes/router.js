
import Mainrouter from "../component/Mainrouter"
import About from "../page/About"
import Add from "../page/Add"
import Blog from "../page/Blog"
import Case from "../page/Case"
import Contact from "../page/Contact"
import Home from "../page/Home"
import Services from "../page/Services"

const ROUTES=[{
    path:"/",
    element:<Mainrouter/>,
    children:[{
        path:"",
        element:<Home/>
    },
    {
        path:"add",
        element:<Add/>
    },
    {
        path:"about",
        element:<About/>
    },
    {
        path:"blog",
        element:<Blog/>
    },
    {
        path:"case",
        element:<Case/>
    },
    {
        path:"contact",
        element:<Contact/>
    },
    {
        path:"service",
        element:<Services/>
    },
]

}]
export default ROUTES