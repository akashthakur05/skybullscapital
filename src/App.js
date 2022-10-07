import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HomeThree from "./pages/HomeThree/HomeThree";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import PageNotFound from "./pages/404/404";
import Search from "./pages/Search/Search";
import Faq from "./pages/Faq/Faq";
import Branch from "./pages/Branch/Branch";
import ServiceList from "./pages/service-list/Service-list";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function App() {
  return (
    <>
      <TawkMessengerReact propertyId="property_id" widgetId="default" />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicesDetails />} />
          <Route path="/service-list/:slug" element={<ServiceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/test" element={<Search />} />
          <Route path="/sitemap" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
