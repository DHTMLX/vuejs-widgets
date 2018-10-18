<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { Spreadsheet } from "dhx-spreadsheet";
import "dhx-spreadsheet/codebase/spreadsheet.css";

export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      toolbar: ["columns","rows"],
    });
  },
  beforeDestroy: function() {
    this.spreadsheet.destructor();
  }
};
</script>