import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import CasesPage from "./components/CasesPage";
import ContactUs from "./components/ContactUs";
import OurTeam from "./components/OurTeam";
import OurStaffPage from "./components/OurStaffPage";
import BlogPage from "./components/BlogPage";
import PracticeAreaMontanaPage from "./components/PracticeAreaMontanaPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cases" element={<CasesPage />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/our-team/:slugs" element={<OurTeam />} />
          <Route exact path="/our-staff" element={<OurStaffPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/:slugs" element={<PracticeAreaMontanaPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
