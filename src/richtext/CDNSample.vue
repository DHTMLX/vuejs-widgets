<template>
<div class='app-box'>
  <p>Code for richtext on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>
  
  <RichtextCDN class='base-size'></RichtextCDN>

</div>
</template>

<script>
import RichtextCDN from "./RichtextCDN.vue";
export default {
  components: {
    RichtextCDN
  }
};
</script>


<style scoped>
.app-box {
  padding: 20px;
}
.base-size {
  width: 800px;
  height: 400px;
}
</style>