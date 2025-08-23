import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
