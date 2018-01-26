var fetch = require('node-fetch')
var mount = require('./messages.js')

const url = 'https://www.divine-pride.net/api/database'
const token = '59f53626e65ffc08970b5df7182f329e'

module.exports = {
  consultApiForItem: function (msg, id, type, lang) {
    let arg = (type == 'spawn') ? 'monster' : type
    let sendMsg = (cmd, embed) => {
      switch (cmd) {
        case ('item'):
          return ('', { embed: mount.mountItemMsg(embed) })
          break
        case ('monster'):
          return ('', { embed: mount.mountMonsterMsg(embed) })
          break
        case ('spawn'):
          return ('', { embed: mount.mountMonsterSpawnMsg(embed) })
          break
        default:
          return 'Comando Inválido! Digital @raghelp para ver todos os comandos.'
          break
      }
    }
    fetch(`${url}/${arg}/${id}?apiKey=${token}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': lang || 'en-US'
        }
      })
      .then(res => {
        if (res.status >= 200 && res.status < 400) {
          return res.json()
        }
        return Promise.reject(Error('error'))
      }).then(json => msg.channel.send(sendMsg(type, json)))
      .catch(err => {
        msg.channel.send('Houve um erro ao se comunicar com os servidores. Verifique o ID e sua consulta, e tente novamente mais tarde.')
        return Promise.reject(Error(err.message))
      })
  }
}