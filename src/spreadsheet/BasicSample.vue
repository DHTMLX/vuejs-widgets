<template>
<div class='app-box'>
  <p>Basic Spreadsheet</p>
  <Spreadsheet class='base-size'></Spreadsheet>

  <hr>
  <p>Spreadsheet with menu</p>
  <Spreadsheet menu class='base-size'></Spreadsheet>

  <hr>
  <p>Minimal layout</p>
  <Spreadsheet :edit-line=false class='base-size'></Spreadsheet>

</div>
</template>

<script>
import Spreadsheet from "./Spreadsheet.vue";
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
.base-size {
  width: 800px;
  height: 400px;
}
</style>