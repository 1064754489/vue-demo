const _ls = {
  set: function (key, value) {
    localStorage.setItem(key, value)
    console.log('test')
  },
  get: function (key) {
    return localStorage.getItem(key)
  },
  clear: function () {
    localStorage.clear()
  },
}

export default _ls
