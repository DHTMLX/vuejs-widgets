<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { RichText } from "dhx-richtext";
import "dhx-richtext/codebase/richtext.css";

export default {
  props: {
      css: String,
      mode: {type: String, default: "classic"}
  },
  mounted: function() {
    this.richtext = new RichText(this.$refs.container, {
      mode: this.mode,
      css: this.css
    });
  },
  beforeDestroy: function() {
    this.richtext.destructor();
  }
};
</script>