import React, { useRef } from "react";
import CartCountButton from "../../components/common/CartCountButton";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Banner from "../../components/Home/Banner";

function Home() {
  const menuRef = useRef();

  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
}

export default Home;
