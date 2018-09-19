<template>
<div class='app-box'>
  <p>Basic vault</p>
  <Vault toolbar autosend class='base-size'></Vault>

  <hr>
  <p>Vault without toolbar</p>
  <Vault autosend class='base-size'></Vault>

  <hr>
  <p>Grid mode without auto-send</p>
  <Vault toolbar mode="grid" class='base-size'></Vault>

</div>
</template>

<script>
import Vault from './Vault.vue';
export default {
  components: {
    Vault
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