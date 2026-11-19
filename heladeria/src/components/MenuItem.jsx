const formatPrice = (price) =>
  new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(price);

const MenuItem = ({ menuItem }) => {
  const handleSoldOut = () => {
    console.log(`Se marcó como agotado: ${menuItem.iceCream.name}`);
  };

  const handleViewDetails = () => {
    console.log(`Ver ficha del ítem ID: ${menuItem.id}`);
  };

  return (
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
      <button type="button" onClick={handleSoldOut}>
        Marcar como agotado
      </button>
      <button type="button" onClick={handleViewDetails}>
        Ver ficha
      </button>
    </article>
  );
};

export default MenuItem;
