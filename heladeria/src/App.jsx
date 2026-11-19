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

const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(price);

const Header = () => <h1>La Heladería</h1>;

const Footer = () => (
  <footer>
    <p>La Heladería — Ambato</p>
  </footer>
);

const Menu = ({ children }) => (
  <section className="menu" aria-labelledby="menu-title">
    <h2 id="menu-title">Sabores de hoy</h2>
    {children}
  </section>
);

const MenuItem = ({ menuItem }) => (
  <article
    className="menu-item"
    aria-labelledby={`menu-item-${menuItem.id}-name`}
  >
    <img src={menuItem.iceCream.imagePath} alt="" />
    <h3 id={`menu-item-${menuItem.id}-name`}>
      {menuItem.iceCream.name}
    </h3>
    <p className="menu-item-description">{menuItem.description}</p>
    <p className="menu-item-price">{formatPrice(menuItem.price)}</p>
    <p className="menu-item-stock">
      {menuItem.inStock ? "Disponible hoy" : "Agotado"}
    </p>
  </article>
);

const App = () => (
  <>
    <main>
      <Header />
      <Menu>
        <MenuItem menuItem={menuItem} />
      </Menu>
    </main>
    <Footer />
  </>
);

export default App;
