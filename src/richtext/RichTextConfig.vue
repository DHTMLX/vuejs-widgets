<template>
  <div class="app-box">
    <p>Pre configurated</p>
    <div ref="container" class="widget-box"></div>
  </div>
</template>
<script>
import { RichText } from "dhx-richtext";
import "dhx-richtext/codebase/richtext.css";

export default {
  mounted: function() {
    this.richtext = new RichText(this.$refs.container);
    const content = '<h1>Meet DHTMLX Rich Text Editor!</h1><p>This demo will show you the main features of our highly customizable JavaScript rich text editor.</p><p>Type in any text here, apply text formatting and use the controls below to change the editor\'s look and feel and convert your text into HTML or markdown.</p> <p><strong><i>To learn more, read our </i></strong><a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation"><strong><i>documentation</i></strong></a><strong><i> and check the </i></strong><a href="https://docs.dhtmlx.com/richtext/samples/" title="samples"><strong><i>samples</i></strong></a></p>';
    this.richtext.setValue(content);
  },
  beforeDestroy: function() {
    this.richtext.destructor();
  }
};
</script>

<style>
.app-box {
  padding: 20px;
}
</style>