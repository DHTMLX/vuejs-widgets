<template>
  <div class='app-screen'>
    <div class='app-header'>
      <h1>Using DHTMLX widgets in a Vue app</h1>
    </div>
    <div class='app-page'>
      <div class='app-sidebar'>
        <h3>Vault</h3>
        <nav>
          <router-link to="/basic">Basic usage</router-link>
          <router-link to="/data">Data / Events</router-link>
          <router-link to="/config">Pre-configured widget</router-link>
          <router-link to="/cdn">Load from CDN</router-link>
        </nav>
        <h3>Spreadsheet</h3>
        <nav>
          <router-link to="/spreadsheet/basic">Basic usage</router-link>
          <router-link to="/spreadsheet/data">Data / Events</router-link>
          <router-link to="/spreadsheet/config">Pre-configured widget</router-link>
          <router-link to="/spreadsheet/cdn">Load from CDN</router-link>
        </nav>
        <h3>Richtext</h3>
        <nav>
          <router-link to="/richtext/basic">Basic usage</router-link>
          <router-link to="/richtext/data">Data / Events</router-link>
          <router-link to="/richtext/config">Pre-configured widget</router-link>
          <router-link to="/richtext/cdn">Load from CDN</router-link>
        </nav>
      </div>
      <router-view class='app-content'>
      </router-view>
    </div>
  </div>
</template>

<style>
.app-screen{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.app-header{
  width: 100%;
  box-shadow: 0px 2px 4px silver;
}
.app-header h1 {
  font-size: 22px;
  padding: 10px 20px; margin: 0;
  font-weight: normal;
}
.app-sidebar{
  flex-basis: 200px;
  border-right: 1px solid silver;
}
.app-sidebar h3 {
  font-weight: normal;
  margin:4px 0 0 0; padding: 10px;
}
.app-page{
  display: flex;
  flex-direction: row;
  height: 100%;
}
.app-content{
  margin-top: 4px;
  width: 100%;
}

nav a {
  display: block;
  padding: 7px 10px;
  color: #4444ff;
}
nav a.router-link-active {
  background: #666;
  color:white;
}
</style>
