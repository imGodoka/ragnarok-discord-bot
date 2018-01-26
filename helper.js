var api = require('./api.js'),
  math = require('./math.js'),
  mount = require('./messages.js')

/**
 * 
 * @param {string} str Comando a ser recebido
 */

module.exports = {
  command: function (msg) {
    const lib = {
      'br': 'pt-BR',
      'en': 'en-US',
      'kr': 'ko-KR',
      'jp': 'ja-JP'
    }

    let message = msg.content.startsWith('@') ? msg.content.split(' ') : false
    let cmd = message[0]
    let arg = message[1]
    let id = message[2]
    let lang = lib[message[3]] || 'en-US'
    let ref = Math.max(~~message[3], 0)
    let lv = Math.max(~~message[4], 1)

    if (cmd) {
      switch (cmd) {
        case '@database':
          // msg.channel.send(`Você utilizou o comando ${cmd} ${arg}`)
          api.consultApiForItem(msg, id, arg, lang)
          break
        case '@math':
          switch (arg) {
            case ("crimson"):
              if (id == undefined || id == "help") {
                msg.channel.send('Use o comando @math crimson <ID do item> <refino> <nível>. Enviarei a lista de IDs crimson para sua caixa de mensagens.')
                msg.author.send(mount.mountCrimsonIds())
              } else {
                msg.channel.send(mount.mountMathMsg(math.crimsonCalc(id, ref, lv)))
              }
              break
            case ("vicious"):
              // if(){}
              if (id == undefined || id == "help") {
                msg.channel.send('Use o comando @math vicious <ID do item> <refino>. Enviarei a lista de IDs vicious para sua caixa de mensagens.')
                msg.author.send(mount.mountViciousIds())
              } else {
                msg.channel.send(mount.mountMathMsg(math.viciousCalc(id, ref)))
              }
              break
            default:
              msg.channel.send('Use o comando @math crimson/vicious <ID do item> <refino> <nível>.')
              break
          }
          break
        case '@help':
          // msg.channel.send(`Você utilizou o comando ${cmd} ${arg}`)
          msg.author.send(`**Obrigado por usar o TalentRO Bot!**\nOs comandos de consulta são:\n\n**@database: **Utilize este comando para consultar o banco de dados Divine-pride.\n\n\`\`\`md\n@database item <ID> <idioma>\n@database monster <ID> <idioma>\n@database spawn <ID> <idioma>\n\`\`\`\n\nUse **item** como segundo argumento para pesquisar items, **monster** para pesquisar estatísticas de um monstro específico ou **spawn** para pesquisar os lugares e tempo de respawn do monstro escolhido.\n\n**<ID>** é o id (apenas números) do monstro ou do item que você quer pesquisar.\n<idioma> pode ser *br*, *en*, *ko* e *jp* para os resultadores virem em português, inglês, coreano ou japonês, respectivamente.\n\nExemplos:\n\n @database item 1900 ko \n^ O comando acima vai trazer dados do Vicious Mind Violin em coreano.\n\n@database spawn 1252 br\n^ O comando acima vai trazer os mapas e dados de spawn do Hatii MVP.\n\n**@help: **Envia esta mensagem de ajuda diretamente para quem a usar.`)
          break
        default:
          break
      }
    } else {
      return
    }
  }
}