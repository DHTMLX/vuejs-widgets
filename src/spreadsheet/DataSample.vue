<template>
<div class='app-box'>
  <p>Basic Spreadsheeet</p>
  <Spreadsheeet class='base-size'></Spreadsheeet>
</div>
</template>

<script>
import Spreadsheeet from "./Spreadsheet.vue";
export default {
  components: {
    Spreadsheeet
  }
};
</script>


<style>
.app-box {
  padding: 20px;
}
.base-size {
  width: 800px;
  height: 400px;
}
</style>