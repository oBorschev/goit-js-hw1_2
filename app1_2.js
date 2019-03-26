"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const quantity = 8;
const totalPrice = pricePerDroid * quantity;

if (totalPrice > credits) {
  alert("Deficiency amounts on the account");
} else {
  const result = credits - totalPrice;
  alert(
    `You buy ${quantity} droids, on account left ${Number(result)} credits`
  );
}
