/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi';
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2', // Bleu clair
          secondary: '#424242', // Gris
          accent: '#82B1FF', // Bleu clair accentué
          error: '#FF5252', // Rouge
          info: '#2196F3', // Bleu
          success: '#4CAF50', // Vert
          warning: '#FB8C00', // Orange
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#90CAF9', // Bleu clair
          secondary: '#121212', // Gris foncé
          accent: '#FF4081', // Rose accentué
          error: '#FF5252', // Rouge
          info: '#2196F3', // Bleu
          success: '#4CAF50', // Vert
          warning: '#FB8C00', // Orange
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
