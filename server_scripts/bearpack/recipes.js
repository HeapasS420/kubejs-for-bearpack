// priority: 0
"use strict";

const registerBearPackRecipes = (event) => {
  event.shapeless("5x kubejs:copper_coin", "kubejs:silver_coin")
  event.shaped("kubejs:silver_coin", [
    " A ",
    "AAA",
    " A "
  ], {
    A: "kubejs:copper_coin"
  })

  event.shapeless("5x kubejs:silver_coin", "kubejs:gold_coin")
  event.shaped("kubejs:gold_coin", [
    " A ",
    "AAA",
    " A "
  ], {
    A: "kubejs:silver_coin"
  })
}
