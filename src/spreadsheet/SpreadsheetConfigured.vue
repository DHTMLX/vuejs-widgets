<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { Spreadsheet } from "dhx-spreadsheet";
import "dhx-spreadsheet/codebase/spreadsheet.css";

export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      editLine: false
    });
    this.spreadsheet.parse([
      { cell: "A1", value: 10 },
      { cell: "B1", value: 20 }
    ]);

    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  },
  beforeDestroy: function() {
    this.spreadsheet.destructor();
  }
};
</script>