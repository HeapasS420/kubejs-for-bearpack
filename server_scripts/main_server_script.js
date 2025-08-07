// priority: 1
"use strict";

ServerEvents.recipes(event => {
  registerBearPackRecipes(event)
});

ServerEvents.tags('item', event => {
  registerBearPackItemTags(event)
});
