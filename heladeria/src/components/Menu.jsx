const Menu = ({ children }) => (
  <section className="menu" aria-labelledby="menu-title">
    <h2 id="menu-title">Sabores de hoy</h2>
    {children}
  </section>
);

export default Menu;
