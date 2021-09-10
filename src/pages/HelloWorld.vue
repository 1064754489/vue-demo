<template>
  <div class="content">
    <h1>首页</h1>
    <span v-if="show" class="desc">描述:</span>
    <span>{ desc }}</span>
    <div>时间： {{ date }}</div>
    <img src="../assets/logo.png" />
  </div>
</template>

<script>
// import _ls from './common/_ls'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      desc: 'tests',
      date: '',
      show: true,
      arr: [],
      object: { a: 1, b: 2, c: 3 },
    }
  },
  mounted() {
    this.initDate()

    this.test(2, 4)
  },
  methods: {
    initDate() {
      console.log('get time')
      this.date = new Date()
    },
    test(a, b) {
      if (a == b) console.log('111')

      a === b ? a++ : b++
    },
    test2() {
      const a = 1
      return b + c + d + js
    },
    test3() {
      this.arr = [1, 2, 3, 4]
    },
  },
}
</script>

<style scoped>
.desc {
  color: aqua;
  font-size: 15px;
}
</style>
