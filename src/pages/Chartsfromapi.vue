<template>
  <v-container>
    <h1 class="mb-4 text-center">Dashboard des Ventes</h1>

    <v-row class="mt-5 mb-4">
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="4">
          <v-card-title>Ventes par Produit</v-card-title>
          <v-card-text>
            <apexchart type="bar" height="300" :options="barOptions" :series="barSeries" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="4">
          <v-card-title>Répartition des Produits</v-card-title>
          <v-card-text>
            <apexchart type="donut" height="300" :options="donutOptions" :series="donutSeries" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4 mb-4">
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="4">
          <v-card-title>Évolution des Revenus</v-card-title>
          <v-card-text>
            <apexchart type="area" height="300" :options="areaOptions" :series="areaSeries" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="4">
          <v-card-title>Profits Hebdomadaires</v-card-title>
          <v-card-text>
            <apexchart type="line" height="300" :options="lineOptions" :series="lineSeries" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "Chartsfromapi",
  components: {
    apexchart: ApexCharts,
  },
  data() {
    return {
      barOptions: {
        chart: { id: "bar-chart" },
        xaxis: { categories: ["Product A", "Product B", "Product C"] },
      },
      barSeries: [{ name: "Sales", data: [30, 40, 45] }],

      donutOptions: {
        labels: ["Product A", "Product B", "Product C"],
      },
      donutSeries: [44, 55, 13],

      areaOptions: {
        chart: { id: "area-chart" },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      },
      areaSeries: [{ name: "Revenue", data: [10, 20, 30, 40, 50] }],

      lineOptions: {
        chart: { id: "line-chart" },
        xaxis: { categories: ["Week 1", "Week 2", "Week 3", "Week 4"] },
      },
      lineSeries: [{ name: "Profit", data: [5, 15, 25, 35] }],
    };
  },
});
</script>

<style scoped>
h1 {
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
}

.v-card {
  border-radius: 12px;
}
</style>
