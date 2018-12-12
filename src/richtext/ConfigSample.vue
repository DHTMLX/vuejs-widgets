<template>
<div class='app-box'>
  <p>Pre-configured richtext with full toolbar</p>
  <Richtext class='wide-size'></Richtext>
</div>
</template>

<script>
import Richtext from "./RichtextConfigured.vue";
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
.wide-size {
  width: 1000px;
  height: 400px;
}
</style>