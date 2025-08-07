// priority: 0
"use strict";

const registerBearPackItemTags = (event) => {
  // added tag for bearpack coins (mostly for aesthetics)
  global.COIN_TYPES.forEach(type => {
    event.add(`${type}_coin`, '#bearpack:coins')
  });
}
