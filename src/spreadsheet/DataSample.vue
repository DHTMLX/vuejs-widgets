<template>
<div class='app-box'>
  <p>Data and events</p>
  <Spreadsheeet ref="spreadsheet" class='base-size'></Spreadsheeet>
  <div class="events">{{events}}</div>
  <button v-on:click="parseData">Parse data</button>
  <button v-on:click="clearAll">Clear all</button>
</div>
</template>

<script>
import Spreadsheeet from "./Spreadsheet.vue";
export default {
  components: {
    Spreadsheeet
  },
  data: function() {
    return { events: "" };
  },
  mounted: function() {
    this.$refs.spreadsheet.spreadsheet.events.on(
      "afterValueChange",
      (cell, value) => {
        this.events = `Value in cell ${cell} changed to ${value}`;
      }
    );
    this.$refs.spreadsheet.spreadsheet.setValue("A1", 10);
  },
  methods: {
    parseData: function() {
      this.$refs.spreadsheet.spreadsheet.parse([
        { cell: "A1", value: 1000 },
        { cell: "B1", value: 5300 },
        { cell: "C1", value: 2900 }
      ]);
    },
    clearAll: function() {
      this.events = "";
      this.$refs.spreadsheet.spreadsheet.parse([]);
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
.events {
  padding: 8px 0;
}
</style>