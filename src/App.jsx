import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Section from "./Components/Section";
import Productsection from "./Components/Productsection";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Dashboard from "./Components/Dashboard";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <HomePage />
          <Section />
          <Productsection />
          <Footer />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          <Header />
          <HomePage />
          <Section />
          <Productsection />
          <Footer />
        </div>
      ),
    },
    {
      path: "/card",
      element: (
        <div>
          <Card />
        </div>
      ),
    },
    {
      path: "/shopenow",
      element: (
        <div>
          <Header />
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <Header />
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <div>
          <Header />
          <AboutUs />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Header />
          <ContactUs />
        </div>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
