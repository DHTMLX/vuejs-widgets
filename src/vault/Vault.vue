<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
  import {Vault} from "dhx-vault";
  import "dhx-vault/codebase/vault.css";

  export default {
    props: {
      target: String,
      mode: { type:String, default:"list" },
      autosend: Boolean,
      toolbar: Boolean,
      data: Object
    },
    mounted:function(){
      this.vault = new Vault(this.$refs.container, {
        data: this.data,
        mode: this.mode,
        uploader:{
          autosend: this.autosend,
          target: this.target
        },
        toolbar: this.toolbar
      });
    },
    beforeDestroy:function(){
      this.vault.destructor();
    }
  }
</script>