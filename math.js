var data = require('./weapons.json')

var crimson = data.weapons.crimson
vicious = data.weapons.vicious

module.exports = {
  crimsonCalc: (id, ref, lv = 1) => {
    var wpn = crimson.filter(x => x.id == id)[0]

    if(wpn == undefined) {
      return 'error'
    }

    var refine = Math.min(ref, 15)
    var perLv = Math.floor(Math.min(lv, 175) / 10) * 5
    var atk = wpn.atk + (Math.min(ref, 20) * 5) + (wpn.batk * refine * refine) + (wpn.atklv ? perLv : 0)
    var matk = wpn.matk + (Math.min(ref, 20) * 5) + (wpn.bmatk * refine * refine) + (wpn.matklv ? perLv : 0)

    return {
      id: id,
      name: wpn.name,
      ref: Math.min(ref, 20),
      atk: atk,
      matk: matk
    }
  },
  viciousCalc: (id, ref) => {
    var wpn = vicious.filter(x => x.id == id)[0]

    if (wpn == undefined) {
      return 'error'
    }

    var refine = Math.min(ref, 15)
    var atk = wpn.atk + (Math.min(ref, 20) * 5) + (wpn.batk * refine * refine)
    var matk = wpn.matk + (Math.min(ref, 20) * 5) + (wpn.bmatk * refine * refine)

    return {
      id: id,
      name: wpn.name,
      ref: Math.min(ref, 20),
      atk: atk,
      matk: matk
    }
  }
}