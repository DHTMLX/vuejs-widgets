<template>
<div class='app-box'>
  <p>Advanced configuration</p>
  <Spreadsheet class='wide-size'></Spreadsheet>
</div>
</template>

<script>
import Spreadsheet from "./SpreadsheetConfigured.vue";
export default {
  components: {
    Spreadsheet
  }
};
</script>


<style>
.app-box {
  padding: 20px;
}
.wide-size {
  width: 1000px;
  height: 400px;
}
</style>