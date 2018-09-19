<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
  import fromCDN from "from-cdn";

  export default {
    props: {
      target: String,
      mode: { type:String, default:"list" },
      autosend: Boolean,
      toolbar: Boolean
    },
    created:function(){
      this.ready = fromCDN([
        "https://cdn.dhtmlx.com/vault/3.0/vault.js",
        "https://cdn.dhtmlx.com/vault/3.0/vault.css"
      ]);
    },
    mounted:function(){
      this.ready.then( () => {
        /* global dhx */
        this.vault = new dhx.Vault(this.$refs.container, {
          mode: this.mode,
          uploader:{
            autosend: this.autosend,
            target: this.target
          },
          toolbar: this.toolbar
        });

        this.$emit('ready', this.vault);
      });
    },
    beforeDestroy:function(){
      if (this.vault)
        this.vault.destructor();
    }
  }
</script>