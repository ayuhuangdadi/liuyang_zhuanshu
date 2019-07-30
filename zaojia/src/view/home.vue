<template>
  <div class="home">
    <lunbo/>
    <show/>
    <gongneng/>
    <vr/>
    <saasa/>
    <good/>
    <fuwu/>
    <money/>
  </div>
</template>

<script>
import lunbo from '@/components/home/lunbo'
import show from '@/components/home/showroom'
import gongneng from '@/components/home/gongneng'
import vr from '@/components/home/VR'
import saasa from '@/components/home/SAAS'
import good from '@/components/home/good'
import fuwu from '@/components/home/fuwu'
import money from '@/components/home/money'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  created() {
      
  },
  components:{
      lunbo,
      show,
      gongneng,
      vr,
      saasa,
      good,
      fuwu,
      money
  }
}
</script>

<style lang="less" scoped>

</style>
