<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { Richtext } from "dhx-richtext";
import "dhx-richtext/codebase/richtext.css";

export default {
  mounted: function() {
    this.richtext = new Richtext(this.$refs.container, {
      toolbarBlocks: ["default", "clear", "fullscreen"]
    });
  },
  beforeDestroy: function() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  }
};
</script>