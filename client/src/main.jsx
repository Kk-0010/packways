import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  About,
  Testimonials,
  CustomRegulations,
  OurNetwork,
  AlliedServices,
  SpectrumServices,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="custom-regulations" element={<CustomRegulations />} />
      <Route path="our-network" element={<OurNetwork />} />
      <Route
        path="/our-services/allied-services"
        element={<AlliedServices />}
      />
      <Route
        path="/our-services/spectrum-of-services"
        element={<SpectrumServices />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
