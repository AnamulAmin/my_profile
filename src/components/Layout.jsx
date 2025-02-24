import MenuModal from "./MenuModal";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <MenuModal />
    </>
  );
}

export default Layout;
