import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import "./App.css"
import HomeLayout from "./HomeLayout";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import Projects from "./Projects";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<NotFound />} />
    </Route>
)
);



createRoot(document.getElementById("App")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
