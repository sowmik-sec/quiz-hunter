import { createBrowserRouter } from "react-router-dom";
import { Main } from "./Main";

const router = createBrowserRouter([{ 
    path: "/", 
    element: <Main /> ,
    children: [
        {path:'/', element:},
        
    ]
}
]);