<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
import { Richtext } from "dhx-richtext";
import "dhx-richtext/codebase/richtext.css";

export default {
  props: {
      css: String,
      mode: {type: String, default: "classic"},
      value: String,
      dataType: {type: String, default: "html"}
  },
  mounted: function() {
    this.richtext = new Richtext(this.$refs.container, {
      mode: this.mode,
      css: this.css
    });
    if (this.value) {
      this.richtext.setValue(this.value, this.dataType);
    }

    this.richtext.events.on("change", () => {
      this.$emit("change", this.richtext.getValue(this.dataType));
    });
  },
  beforeDestroy: function() {
    this.richtext.destructor();
  }
};
</script>