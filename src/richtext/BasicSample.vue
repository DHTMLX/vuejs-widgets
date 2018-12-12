<template>
<div class='app-box'>
  <p>Classic mode</p>
  <Richtext mode=classic class='base-size'></Richtext>
  <p>Document mode</p>
  <Richtext mode=document class='base-size'></Richtext>
</div>
</template>

<script>
import Richtext from "./Richtext.vue";
export default {
  components: {
    Richtext
  }
};
</script>


<style scoped>
.app-box {
  padding: 20px;
}
.base-size {
  width: 950px;
}
</style>