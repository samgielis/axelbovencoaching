import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Aanbod } from "./screens/Aanbod";
import { Blog } from "./screens/Blog";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { MijnMissie } from "./screens/MijnMissie";

export const ScreenRouter = () => (
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mijn-missie" element={<MijnMissie />} />
            <Route path="/aanbod" element={<Aanbod />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Layout>
    </BrowserRouter>
);
