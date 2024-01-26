const formatPrice = (price) => {
  if (!price) {
    return price;
  }

  return price.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
  });
};

export default formatPrice;
