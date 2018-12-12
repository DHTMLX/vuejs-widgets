<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
  import fromCDN from "from-cdn";

  export default {
    created:function(){
      this.ready = fromCDN([
        "https://cdn.dhtmlx.com/richtext/3.0/richtext.js",
        "https://cdn.dhtmlx.com/richtext/3.0/richtext.css"
      ]);
    },
    mounted:function(){
      this.ready.then( () => {
        this.richtext = new dhx.Richtext(this.$refs.container);

        this.$emit('ready', this.richtext);
      });
    },
    beforeDestroy:function(){
      if (this.richtext) {
        this.richtext.destructor();
      }
    }
  }
</script>