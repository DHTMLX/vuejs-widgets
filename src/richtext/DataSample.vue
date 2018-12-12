<template>
<div class='app-box'>
  <p>HTML serialize</p>
  <Richtext :value="html" v-on:change="updateHTML" class='base-size'></Richtext>
  <textarea class='base-size' readonly v-model="html" placeholder="data will be here"></textarea>
  <p>Markdown serialize</p>
  <Richtext :value="markdown" dataType=markdown v-on:change="updateMarkdown" class='base-size'></Richtext>
  <textarea class='base-size' readonly v-model="markdown" placeholder="data will be here"></textarea>
</div>
</template>

<script>
import Richtext from "./Richtext.vue";
export default {
  components: {
    Richtext
  },
  data() {
    return {
      html: '<h1>Meet DHTMLX Rich Text Editor!</h1><p>This demo will show you the main features of our highly customizable JavaScript rich text editor.</p><p>Type in any text here, apply text formatting and use the controls below to change the editor\'s look and feel and convert your text into HTML or markdown.</p> <p><strong><i>To learn more, read our </i></strong><a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation"><strong><i>documentation</i></strong></a><strong><i> and check the </i></strong><a href="https://docs.dhtmlx.com/richtext/samples/" title="samples"><strong><i>samples</i></strong></a></p>',
      markdown: `# Meet DHTMLX Rich Text Editor!

This JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt
set of handy formatting tools.

Besides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is
its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort.

To learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).`
    }
  },
  methods: {
    updateHTML(val) {
      this.html = val;
    },
    updateMarkdown(val) {
      this.markdown = val;
    }
  }
};
</script>


<style scoped>
.app-box {
  padding: 20px;
}
textarea {
  width: 950px;
  height: 200px;
  outline: none;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  font-family: Roboto,Arial,Tahoma,Verdana,sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
}
</style>