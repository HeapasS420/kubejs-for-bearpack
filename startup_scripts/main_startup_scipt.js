// priority: 0
"use strict";

StartupEvents.registry('item', event => {
  registerBearPackItems(event)
})

Platform.mods.kubejs.name = "BearPack";
