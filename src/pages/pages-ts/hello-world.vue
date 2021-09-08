<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class TestTs extends Vue {
  message: string = 'hello ts!'
  mounted() {
    setTimeout(() => {
      this.message = 'hello typeScript!'
    }, 2000)
  }
}
</script>
