import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import MenuItem from "./components/MenuItem.jsx";
import Aviso from "./components/Aviso.jsx";

const menuItemInicial = {
  id: 1,
  iceCream: {
    id: 3,
    name: "Mora silvestre",
    imagePath: "/images/mora.svg",
  },
  price: 1.5,
  description: "Mora de Ambato con un toque de limón.",
  inStock: true,
};

const App = () => {
  const [menuItem, setMenuItem] = useState(menuItemInicial);
  const [avisos, setAvisos] = useState(0);

  const handleSoldOut = () => {
    setMenuItem({ ...menuItem, inStock: false });
    setAvisos(avisos + 1);
  };

  return (
    <>
      <main>
        <Header avisos={avisos} />
        <Menu>
          <Aviso>
            <MenuItem menuItem={menuItem} onSoldOut={handleSoldOut} />
          </Aviso>
        </Menu>
      </main>
      <Footer />
    </>
  );
};

export default App;
