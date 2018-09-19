<template>
<div class='app-box'>
  <p>Advanced configuration</p>
  <Vault class='base-size'></Vault>
</div>
</template>

<script>
import Vault from './VaultConfigured.vue';
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