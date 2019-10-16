<template>
  <div class="flex skeleton-container">
    <img src="../assets/load1.gif" alt="">
  </div>
</template>
<script>
export default {
  name: 'Skeleton'
}
</script>
<style lang="stylus" scoped>
.skeleton-container
  width 100%;
  height 100vh;
  align-items center;
  justify-content center
  background #FFF;
  img
    width 10.66rem;
    height 8rem;
</style>