<template>
<div class='app-box'>
  <p>Code for spreadsheet on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>
  
  <Vault v-on:ready="loadData" class='base-size'></Vault>

</div>
</template>

<script>
import Spreadsheet from "./Spreadsheet.vue";
export default {
  components: {
    Spreadsheet
  },
  methods: {
    loadData: function(spreadsheet) {
      spreadsheet.data.add([
        {
          cell: "A1",
          value: 10
        }
      ]);
    }
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