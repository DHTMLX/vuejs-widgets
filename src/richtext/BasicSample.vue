<template>
<div class='app-box'>
  <p>Basic Richtext</p>
  <RichText class='base-size'></RichText>
</div>
</template>

<script>
import RichText from "./RichText.vue";
export default {
  components: {
    RichText
  }
};
</script>


<style>
.app-box {
  padding: 20px;
}
.base-size {
  width: 900px;
}
</style>