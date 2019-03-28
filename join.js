// Real life testing data from wargaming api
const ship = JSON.parse('{"status":"ok","meta":{"count":1,"hidden":null},"data":{"2011774448":[{"pvp":{"max_xp":3810,"damage_to_buildings":0,"main_battery":{"max_frags_battle":4,"frags":74,"hits":8145,"shots":21738},"suppressions_count":0,"max_damage_scouting":214831,"art_agro":143713950,"ships_spotted":917,"second_battery":{"max_frags_battle":0,"frags":0,"hits":0,"shots":0},"xp":428873,"survived_battles":229,"dropped_capture_points":1915,"max_damage_dealt_to_buildings":0,"torpedo_agro":41299953,"draws":0,"battles_since_510":374,"planes_killed":58,"battles":374,"max_ships_spotted":9,"team_capture_points":53724,"frags":291,"damage_scouting":18019964,"max_total_agro":1627702,"max_frags_battle":5,"capture_points":19105,"ramming":{"max_frags_battle":1,"frags":1},"torpedoes":{"max_frags_battle":4,"frags":179,"hits":1009,"shots":26375},"aircraft":{"max_frags_battle":0,"frags":0},"survived_wins":163,"max_damage_dealt":211613,"wins":198,"losses":176,"damage_dealt":18371047,"max_planes_killed":3,"max_suppressions_count":0,"team_dropped_capture_points":22023,"battles_since_512":374},"last_battle_time":1552554202,"account_id":2011774448,"distance":22230,"updated_at":1552554881,"battles":384,"ship_id":4282267344,"private":null}]}}');

/**
 * Take in two objs and mode ('a' for sum, 's' for subtract)
 * Join only both objs have certain key
 */
ObjJoin = (a, b, mode) => {
    for (let k in a) {
        if (b[k] != null) {
            if (typeof b[k] !== 'object') {
                // Add or subtract values
                if (mode === '-') a[k] -= b[k];
                if (mode === '+') a[k] += b[k];
            } else {
                // go deeper
                ObjJoin(a[k], b[k], mode);
            }
        } else {
            delete a[k];
        }
    }
    return a;
}

// obj is basically a and this is not really good although it works
let obj = ObjJoin(ship, ship, '-');
// Everything should be zero (identical data)
console.log(obj.data['2011774448'][0].pvp);
