const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(price);

const MenuItem = ({ menuItem, onSoldOut }) => (
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
    <p className="menu-item-stock" aria-live="polite">
      {menuItem.inStock ? "Disponible hoy" : "Agotado"}
    </p>
    <button type="button" onClick={onSoldOut} disabled={!menuItem.inStock}>
      Marcar como agotado
    </button>
  </article>
);

export default MenuItem;
