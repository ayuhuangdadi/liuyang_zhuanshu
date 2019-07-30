<template>
  <div class="admin">
    <erzi/>
    <router-view></router-view>
    <foterr/>
  </div>
</template>

<script>
import erzi from './erji'
import foterr from './foterr'
export default {
  name: 'admin',
  data () {
    return {
      
    }
  },
  components:{
    erzi,
    foterr
  }
}
</script>

<style lang="less" scoped>

</style>
