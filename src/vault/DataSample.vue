<template>
<div class='app-box'>
  <p>Data-bound vault</p>
  <Vault v-bind:data="files" class='base-size'></Vault>
  <hr>
  <div class='line'>
    <input type="button" v-on:click="add" value="Add a file">
    <input type="button" v-on:click="clear" value="Clear all">
  </div>
  <div class='line'>
    {{count}} files added
  </div>

</div>
</template>

<script>
import Vault from './Vault.vue';
import {DataCollection} from 'dhx-vault';

export default {
  components: {
    Vault
  },
  created:function(){
    this.files = new DataCollection();
    this.files.events.on("change", () => {
      this.count = this.files.getLength()
    });
  },
  data:function(){
    return { count: 0};
  },
  methods:{
    add:function(){ this.files.add({ name:"myfile.png", size:24560 }); },
    clear:function(){ this.files.removeAll() }
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
.line{
  margin:10px
}
.line input{
  margin-right:10px;
}
</style>
