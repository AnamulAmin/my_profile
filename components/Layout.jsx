import MenuModal from "./MenuModal";
import Navber from "./Navber";

function Layout({ children }) {
  
  return (
    <>
      <Navber />
      {children}
      <MenuModal />
    </>
  );
}

export default Layout;
