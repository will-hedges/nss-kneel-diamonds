import {
  getMetals,
  getOrders,
  getPieces,
  getSizes,
  getStyles,
} from "./database.js";

const metals = getMetals();
const pieces = getPieces();
const sizes = getSizes();
const styles = getStyles();

const buildOrderListItem = (order) => {
  // Remember that the function you pass to find() must return true/false
  const metalPrice = metals.find((metal) => {
    return metal.id === order.metalId;
  }).price;

  const sizePrice = sizes.find((size) => {
    return size.id === order.sizeId;
  }).price;

  const stylePrice = styles.find((style) => {
    return style.id === order.styleId;
  }).price;

  const priceMultiplier = pieces.find((piece) => {
    return piece.id === order.pieceId;
  }).priceMultiplier;

  let totalCost = metalPrice + sizePrice + stylePrice;
  totalCost *= priceMultiplier;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `
  <li>
    Order #${order.id} cost ${costString}
  </li>`;
};

export const Orders = () => {
  /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
  */
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};
