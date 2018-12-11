<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
  import fromCDN from "from-cdn";

  export default {
    props: {
      mode: {type: String, default: "classic"}
    },
    created:function(){
      this.ready = fromCDN([
        // "https://cdn.dhtmlx.com/vault/3.0/vault.js",
        // "https://cdn.dhtmlx.com/vault/3.0/vault.css"
      ]);
    },
    mounted:function(){
      this.ready.then( () => {
        /* global dhx */
        this.richtext = new dhx.Richtext(this.$refs.container, {
          mode: this.mode
        });

        this.$emit('ready', this.vault);
      });
    },
    beforeDestroy:function(){
      if (this.richtext) {
        this.richtext.destructor();
      }
    }
  }
</script>