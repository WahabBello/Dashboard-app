<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer />
      <v-btn to="/">
        Home
      </v-btn>
      <v-btn to="/charts">
        Charts
      </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>


<script lang="ts" setup>
  //
</script>
