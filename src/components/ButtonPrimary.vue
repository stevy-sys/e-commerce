<template>
    <div>
        <ion-button>Sign up</ion-button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { IonButton } from '@ionic/vue';
//   import { defineProps } from 'vue'
  const props = defineProps({
    color:{
        Type: String,
        Default: 'primary'
    }
  })
  </script>

<style lang="scss" scoped>

</style>
  