/*
  products.js — THE ONLY FILE YOU EDIT TO CHANGE WHAT'S FOR SALE.

  Each product is one block between { and }. To add a product, copy a whole
  block (including the comma after the closing }), paste it, and change it.
  To remove one, delete its block.

  What each line means:
    name      The product name shown on the card.
    price     The price as text, exactly as you want it shown, e.g. "$30".
              (The price customers actually pay is set in Stripe, so keep
              the two the same.)
    image     The picture: put the file in the images/ folder and write
              "images/your-file.png". Square images (e.g. 1200 x 1200) look best.
    color     Shown under the name, e.g. "Black" or "Heather grey".
    sizes     The sizes you sell. Shown on the card for information; the
              customer picks their size on the Stripe checkout page.
    buyLink   The Stripe Payment Link for this product (starts with
              https://buy.stripe.com/). Leave it as "" and the card shows
              "Coming soon" instead of a Buy button.
    soldOut   true to show "Sold out", false otherwise.

  Text goes inside "double quotes". Don't remove commas between lines.
*/

const PRODUCTS = [
  {
    name: "NYBOOBS Classic Tee",
    price: "$30",
    image: "images/placeholder-black.svg",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL"],
    buyLink: "",
    soldOut: false,
  },
  {
    name: "NYBOOBS Classic Tee",
    price: "$30",
    image: "images/placeholder-white.svg",
    color: "White",
    sizes: ["S", "M", "L", "XL", "2XL"],
    buyLink: "",
    soldOut: false,
  },
  {
    name: "NYBOOBS Pink Logo Tee",
    price: "$32",
    image: "images/placeholder-pink.svg",
    color: "Pink",
    sizes: ["S", "M", "L", "XL"],
    buyLink: "",
    soldOut: false,
  },
  {
    name: "NYBOOBS Hoodie",
    price: "$55",
    image: "images/placeholder-grey.svg",
    color: "Heather grey",
    sizes: ["S", "M", "L", "XL", "2XL"],
    buyLink: "",
    soldOut: false,
  },
];
