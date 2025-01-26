<template>
  <v-container class="dashboard-welcome">
    <!-- Message de bienvenue -->
    <v-row class="welcome-message">
      <v-col>
        <h1>{{ greetingMessage }},</h1>
        <h2>Bienvenue dans votre tableau de bord</h2>
        <p>
          Accédez facilement à vos données de vente, analysez les tendances et prenez des décisions éclairées.
        </p>
      </v-col>
    </v-row>



    <!-- Image ou animation d'accueil -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-img
          src="https://source.unsplash.com/800x400/?data,analytics"
          alt="Welcome Illustration"
          class="welcome-image"
          contain
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Définir un message de bienvenue dynamique
const hours = new Date().getHours();
const greetingMessage = ref(
  hours < 12
    ? "Bonjour"
    : hours < 18
    ? "Bon après-midi"
    : "Bonsoir"
);

// Navigation rapide
const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.dashboard-welcome {
  padding: 24px;
  text-align: center;
}

.welcome-message h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0;
}

.welcome-message h2 {
  font-size: 2rem;
  color: #616161;
  margin-bottom: 16px;
}

.welcome-message p {
  font-size: 1.2rem;
  color: #757575;
  margin-bottom: 32px;
}

.quick-links {
  margin: 32px 0;
}

.quick-link-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.quick-link-card:hover {
  transform: scale(1.05);
}

.welcome-image {
  margin-top: 24px;
  border-radius: 16px;
}
</style>
