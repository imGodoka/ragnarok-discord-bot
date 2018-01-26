var Discord = require('discord.js')
let icon = 'http://talentro.servidorturbo.net/forum/uploads/monthly_2017_12/TROPRINTER.png.8121ab962bad77aa5b8148a8cc13082f.png'
var data = require('./weapons.json')

module.exports = {
  mountItemMsg: (json, client) => {
    let desc = json.description.replace(/\^[0-9a-f]{6}/gi, '')
    return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`https://www.divine-pride.net/img/items/item/iRO/${json.id}`)
      .setTitle(json.name)
      .setURL(`https://www.divine-pride.net/database/item/${json.id}`)
      .setDescription(`**ID:** ${json.id}\n`)
      .addField("**Descrição**", (desc.length > 0) ? desc : 'Nenhum descrição encontrada')
      .setImage(`https://www.divine-pride.net/img/items/collection/iRO/${json.id}`)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()
  },
  mountMonsterMsg: (json, client) => {
    let stats = json.stats
    return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`http://sites.levelupgames.com.br/forum/ragnarok/rag.ico`)
      .setTitle(`${json.name} ${(stats.mvp) ? '[MVP]' : ''}`)
      .setURL(`https://www.divine-pride.net/database/item/${json.id}`)
      .setDescription(`**ID:** ${json.id}\n`)
      .addField("**Atributos**", `\`\`\`md\nLVL: ${stats.level}\nHP:  ${stats.health}\nSP:  ${stats.sp}\nFOR: ${stats.str} | DEX: ${stats.dex} | INT: ${stats.int}\nAGI: ${stats.agi} | VIT: ${stats.vit} | LUK: ${stats.luk}\`\`\``)
      .addBlankField(true)
      .addField("**Resistências Elementais**", `\`\`\`Neutro: ${json.propertyTable[0]}% | Água: ${json.propertyTable[1]}%\nTerra: ${json.propertyTable[2]}% | Fogo: ${json.propertyTable[3]}%\nVento: ${json.propertyTable[4]}% | Veneno: ${json.propertyTable[5]}%\nSagrado: ${json.propertyTable[6]}% | Sombrio: ${json.propertyTable[7]}%\nFantasma: ${json.propertyTable[8]}% | Maldito: ${json.propertyTable[9]}%\`\`\`\n`)
      .addBlankField(true)
      .setImage(`https://static.divine-pride.net/images/mobs/png/${json.id}.png`)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()
  },
  mountMonsterSpawnMsg: (json, client) => {
    let stats = json.stats
    let respawnTemplate = spawn => {
      return spawn.map(sp => {
        return `\`\`\`**Mapa: ** ${sp.mapname}\n**Quantidade: ** ${sp.amount}\n**Respawn: ** ${~~sp.respawnTime / 60000} minutos\`\`\`\n`
      })
    }

    return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`http://sites.levelupgames.com.br/forum/ragnarok/rag.ico`)
      .setTitle(`${json.name} ${(stats.mvp) ? '[MVP]' : ''}`)
      .setURL(`https://www.divine-pride.net/database/item/${json.id}`)
      .setDescription(`**ID:** ${json.id}\n`)
      .addField("**Spawn:**", respawnTemplate(json.spawn).join(''))
      .addBlankField(true)
      .setImage(`https://static.divine-pride.net/images/mobs/png/${json.id}.png`)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()
  },
  mountMathMsg: (math) => {
    if (math == undefined || math == "error") {
      return "Use o comando @math vicious <ID do item> <refino>."
    } else return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`https://www.divine-pride.net/img/items/item/iRO/${math.id}`)
      .setTitle(`Cálculo de refino:\n\r ${math.name} +${math.ref}`)
      .addField("**ATK:**", math.atk, false)
      .addField("**MATK:**", math.matk, false)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()
  },
  mountCrimsonIds: () => {
    let crimson = data.weapons.crimson
    let crimsonTemplate = () => {
      return crimson.map(cc => {
        return `\`\`\`Nome: ${cc.name}\nID: ${cc.id}\`\`\`\n`
      })
    }

    return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`http://sites.levelupgames.com.br/forum/ragnarok/rag.ico`)
      .setTitle(`Lista de Armas Crimson`)
      .setDescription(crimsonTemplate().join(''))
      .addBlankField(true)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()

  },
  mountViciousIds: () => {
    let vicious = data.weapons.vicious
    let viciousTemplate = () => {
      return vicious.map(cc => {
        return `\`\`\`Nome: ${cc.name}\nID: ${cc.id}\`\`\`\n`
      })
    }

    return new Discord.RichEmbed()
      .setAuthor("TalentRO Bot", icon)
      .setColor((~~(Math.random() * (1 << 24))).toString(16))
      .setThumbnail(`http://sites.levelupgames.com.br/forum/ragnarok/rag.ico`)
      .setTitle(`Lista de Armas Vicious`)
      .setDescription(viciousTemplate().join(''))
      .addBlankField(true)
      .setFooter("@godoka & TalentRO", icon)
      .setTimestamp()

  }
}