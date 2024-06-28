<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>composant</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">composant</ion-title>
          </ion-toolbar>
        </ion-header>
        

        <!-- tita -->


        <!-- fin tita -->



        <!-- stevy -->
        <ButtonPrimary color="signup" />
        <!-- fin stevy -->
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

  import ButtonPrimary from '@/components/ButtonPrimary.vue';
  </script>

<style scoped>
  
</style>
  