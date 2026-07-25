function ProductCard({
  image,
  title,
  price,
  currency,
  buttonText,
  onAddToCart,
}) {
  return (
    <div>
      <img src={image} />
      <h3>{title}</h3>
      <p>
        <span>{currency}</span>
        <span>{price}</span>
      </p>
      <button onClick={onAddToCart}>{buttonText}</button>
    </div>
  );
}

export default ProductCard;
