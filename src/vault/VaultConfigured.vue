<template>
<div ref="container" class="widget-box"></div>
</template>

<script>
  import {Vault} from "dhx-vault";

  export default {
    mounted:function(){
      this.vault = new Vault(this.$refs.container, {
        mode:"grid",
      });
      this.vault.data.parse([
        { name:"myfile_12.png", size: 32420 },
        { name:"myfile_13.png", size: 55674 },
        { name:"myfile_14.png", size: 12440 },
        { name:"info.doc", size: 243441 },
      ]);

      this.vault.toolbar.data.add({
        value:"MyAction"
      });
    },
    beforeDestroy(){
      this.vault.destructor();
    }
  }
</script>