const qcloud = require('../qcloud.js')
const { mysql } = require('../qcloud.js')

module.exports = async (ctx, next) => {
  const { 'x-wx-skey': skey } = ctx.headers
  var result = await mysql('cSessionInfo').select('open_id').where({ skey })
  if (!result[0].open_id) {
    // to do
  }
  if (ctx.query.destination == 0) {
    des = 'scheDesNanhu'
  }
  else {
    des = 'scheDesHunnan'
  }
  var atimes = ctx.query.atimes
  var btimes = ctx.query.btimes
  var ctimes = ctx.query.ctimes
  var sches = await mysql(des).select('*').where('time', '>=', atimes).andWhere('time', '<=', ctimes)

  if (sches.length == 0) {
    ctx.state.data = { bestTime: NaN }
    return
  }

  var best_time = new Date(btimes)

  var divTwo = function (a, b) {
    if (a == b) {
      return a
    }
    if (b - a == 1) {
      if (best_time < new Date(sches[a].time)) {
        return a - 1
      }
      else if (best_time >= new Date(sches[b].time)) {
        return b
      }
      else {
        return a
      }
    }
    var c = parseInt((a + b) / 2)
    var tmp = new Date(sches[c].time)
    if (best_time < tmp) {
      return divTwo(a, c - 1)
    }
    else if (best_time > tmp) {
      return divTwo(c + 1, b)
    }
    else {
      return c
    }
  }

  var best = divTwo(0, sches.length - 1)

  var formatDate = function (time) {
    var tmp = new Date(time)
    return tmp.getFullYear() + '-' + (tmp.getMonth() + 1) + '-' + tmp.getDate() + ' ' + tmp.getHours() + ':' + tmp.getMinutes()
  }

  var p1 = best, p2 = best + 1
  const bestTime = []
  for (let i = 0; i < 3; i++) {
    if (p1 < 0 || p2 >= sches.length) {
      if (p1 >= 0) {
        bestTime.push(formatDate(sches[p1].time))
        p1 -= 1
      }
      if (p2 < sches.length) {
        bestTime.push(formatDate(sches[p2].time))
        p2 += 1
      }
      continue
    }
    var a = new Date(sches[p1].time)
    var b = new Date(sches[p2].time)
    var c = best_time
    if (b - c >= c - a && p1 >= 0) {
      bestTime.push(formatDate(sches[p1].time))
      p1 -= 1
    }
    else if (p2 <= sches.length - 1) {
      bestTime.push(formatDate(sches[p2].time))
      p2 += 1
    }
    else if (p1 >= 0) {
      bestTime.push(formatDate(sches[p1].time))
      p1 -= 1
    }
    else {
      break
    }
  }

  ctx.state.data = { bestTime: bestTime}
}