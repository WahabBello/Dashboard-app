<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer />
      <!-- Bouton pour changer de thème -->
      <v-spacer />
      <v-btn to="/">Home</v-btn>
      <v-btn to="/charts">Charts</v-btn>
      <v-btn @click="toggleTheme" icon>
        <v-icon>{{ currentThemeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDarkTheme = ref(theme.global.current.value.dark);

// Fonction pour basculer le thème
const toggleTheme = () => {
  const newTheme = isDarkTheme.value ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  isDarkTheme.value = !isDarkTheme.value;
};

// Icone correspondant au thème actuel
const currentThemeIcon = computed(() =>
  isDarkTheme.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
);
</script>
