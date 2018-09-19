<template>
<div class='app-box'>
  <p>Code for vaults on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>
  
  <Vault v-on:ready="loadData" toolbar mode="grid" class='base-size'></Vault>
  <br>
  <Vault ref="files" toolbar mode="list" class='base-size'></Vault>

</div>
</template>

<script>
import Vault from './VaultCdn.vue';
export default {
  components: {
    Vault
  },
  mounted:function(){
    const sub = this.$refs.files;
    sub.ready.then(() => {
      sub.vault.data.add({
        name:"By-API.png", size: 12000
      });
    })
  },
  methods:{
    loadData:function(vault){
        vault.data.add({
          name:"By-Event.md", size: 44800
        });
    }
  }
}
</script>


<style>
.app-box{
  padding: 20px;
}
.base-size{
  width: 440px; height:320px;
}
</style>