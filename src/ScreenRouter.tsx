import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import {
  AANBOD_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  MIJN_MISSIE_PATH,
} from "./routes";
import { Aanbod } from "./screens/Aanbod";
import { Blog } from "./screens/Blog";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { MijnMissie } from "./screens/MijnMissie";

export const ScreenRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={MIJN_MISSIE_PATH} element={<MijnMissie />} />
        <Route path={AANBOD_PATH} element={<Aanbod />} />
        <Route path={BLOG_PATH} element={<Blog />} />
        <Route path={CONTACT_PATH} element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
