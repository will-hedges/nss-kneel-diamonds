import { getPieces, setPiece } from "./database.js";

// Want to offer the option of Ring, Earring, or Necklace

const pieces = getPieces();

export const Pieces = () => {
  // make a radio button for each
  return `
    <section class="choices__pieces">
      ${pieces
        .map((piece) => {
          return `<input type="radio" name="piece" value="${piece.id}" />${piece.type}`;
        })
        .join("")}
    </section>`;
};

document.addEventListener("change", (event) => {
  if (event.target.name === "piece") {
    setPiece(parseInt(event.target.value));
  }
});
