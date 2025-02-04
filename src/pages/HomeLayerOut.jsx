import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const HomeLayerOut = () => {
  return (
    <div className="learn">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayerOut;
