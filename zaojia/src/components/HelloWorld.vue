<template>
  <div class="hello">
    <navs/>
    <router-view></router-view>
    <foter/>
  </div>
</template>

<script>
import navs from '@/components/nav'
import foter from '@/components/foter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    navs,
    foter
  }
}
</script>

<style lang="less" scoped>

</style>
