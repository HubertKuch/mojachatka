const formatPrice = (price) =>
  price.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
  });

export default formatPrice;
