import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import MenuItem from "./components/MenuItem.jsx";
import Aviso from "./components/Aviso.jsx";

const menuItem = {
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

const App = () => (
  <>
    <main>
      <Header />
      <Menu>
        <Aviso>
          <MenuItem menuItem={menuItem} />
        </Aviso>
      </Menu>
    </main>
    <Footer />
  </>
);

export default App;
