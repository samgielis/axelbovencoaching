import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import {
  AANBOD_PATH,
  ALGEMENE_VOORWAARDEN_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  MIJN_MISSIE_PATH,
  PRIVACY_BELEID_PATH,
} from "./routes";
import { Aanbod } from "./screens/Aanbod";
import { AlgemeneVoorwaarden } from "./screens/AlgemeneVoorwaarden";
import { Blog } from "./screens/Blog";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { MijnMissie } from "./screens/MijnMissie";
import { PrivacyBeleid } from "./screens/Privacybeleid";
import ScrollToTop from "./ScrollToTop";

export const ScreenRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={MIJN_MISSIE_PATH} element={<MijnMissie />} />
          <Route path={`${AANBOD_PATH}/*`} element={<Aanbod />} />
          <Route path={`${BLOG_PATH}/*`} element={<Blog />} />
          <Route path={CONTACT_PATH} element={<Contact />} />
          <Route path={PRIVACY_BELEID_PATH} element={<PrivacyBeleid />} />
          <Route path={ALGEMENE_VOORWAARDEN_PATH} element={<AlgemeneVoorwaarden />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
