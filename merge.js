// module data from wargaming
const data = JSON.parse(`
{
  "3269865168": {
    "profile": {
      "torpedoes": {
        "torpedo_speed": 76,
        "shot_speed": 0.5,
        "max_damage": 21366,
        "distance": 8.0
      },
      "engine": { "max_speed": 35.0 }
    },
    "name": "Type F3",
    "image": "https://glossary-wows-global.gcdn.co/icons//module/icon_module_torpedoes_bec3a82d681ff44eb64f74d7d352f4cd1bd1f8d8dfeb200b7aaa997b1f3488ff.png",
    "tag": "PJUT977_TORP3_SHIM",
    "module_id_str": "PJUT977",
    "module_id": 3269865168,
    "type": "Torpedoes",
    "price_credit": 0
  },
  "3269865169": {
    "profile": {
      "torpedoes": {
        "torpedo_speed": 76,
        "shot_speed": 0.5,
        "max_damage": 21366,
        "distance": 8.0
      },
      "engine": { "max_speed": 35.0 }
    },
    "name": "Type F3",
    "image": "https://glossary-wows-global.gcdn.co/icons//module/icon_module_torpedoes_bec3a82d681ff44eb64f74d7d352f4cd1bd1f8d8dfeb200b7aaa997b1f3488ff.png",
    "tag": "PJUT977_TORP3_SHIM",
    "module_id_str": "PJUT977",
    "module_id": 3269865168,
    "type": "Torpedoes",
    "price_credit": 0
  },
  "3255218000": {
    "profile": {
      "fire_control": { "distance": 19.1, "distance_increase": 0 },
      "engine": { "max_speed": 35.0 }
    },
    "name": "PCA n° 10 Mle 1",
    "image": "https://glossary-wows-global.gcdn.co/icons//module/icon_module_radar_ac43353250b30100860f6fdd450a6f0fa137532a95d933d90a04295b7284bb73.png",
    "tag": "PFUS991_C10_SUO_STOCK",
    "module_id_str": "PFUS991",
    "module_id": 3255218000,
    "type": "Suo",
    "price_credit": 1800000
  },
  "3271405008": {
    "profile": { "engine": { "max_speed": 35.0 } },
    "name": "Propulsion: 280,000 hp",
    "image": "https://glossary-wows-global.gcdn.co/icons//module/icon_module_engine_0082c0cf22a41448b0455adb27853f4bef9372faf4eb54851cfa10f00add4a8a.png",
    "tag": "PRUE976_STALINGRAD",
    "module_id_str": "PRUE976",
    "module_id": 3271405008,
    "type": "Engine",
    "price_credit": 0
  }
}
`);

/**
 * 
 * @param {any} map 
 */
function objMerge(map) {
  const merged = {};
  const optional = new Map();
  for (const key in map) {
    const temp = map[key];
    for (const property in temp) {
      const value = temp[property];
      const type = typeof value;
      const curr = merged[property];

      // Store all keys
      if (optional[property] == null) {
        optional[property] = 1;
      } else {
        optional[property]++;
      }

      if (curr == null) {
        // add itself to merged
        merged[property] = value;
      } else if (type === 'object') {
        merged[property] = Object.assign(value, curr);
      } 
    }
  }
  console.log(merged, optional);
  return [merged, optional];
}

objMerge(data);
