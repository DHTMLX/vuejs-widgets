<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { Spreadsheet } from "dhx-spreadsheet";
import "dhx-spreadsheet/codebase/spreadsheet.css";

export default {
  props: {
    toolbar: Array,
    editLine: { type: Boolean, default: true },
    menu: Boolean,
    rowsCount: Number,
    colsCount: Number
  },
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      toolbar: this.toolbar,
      editLine: this.editLine,
      menu: this.menu,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount
    });
  },
  beforeDestroy: function() {
    this.spreadsheet.destructor();
  }
};
</script>