<template>
  <v-container fluid class="d-flex fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="6" class="pa-2 d-flex ">
        <v-img src="/auth-left.jpg" cover class="d-none d-md-flex rounded-lg" height="100%" width="100%" />
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>