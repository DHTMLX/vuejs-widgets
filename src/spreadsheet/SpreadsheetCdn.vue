<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import fromCDN from "from-cdn";

export default {
  props: {
    toolbar: Array,
    editLine: { type: Boolean, default: true },
    menu: Boolean,
    rowsCount: Number,
    colsCount: Number
  },
  created: function() {
    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.js",
      "https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.css"
    ]);
  },
  mounted: function() {
    this.ready.then(() => {
      /* global dhx */
      this.spreadsheet = new dhx.Spreadsheet(this.$refs.container, {});

      this.$emit("ready", this.spreadsheet);
    });
  },
  beforeDestroy: function() {
    if (this.spreadsheet) this.spreadsheet.destructor();
  }
};
</script>