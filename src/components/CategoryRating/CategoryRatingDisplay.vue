<script setup lang="ts">
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore';
</script>

<template>
  <h1>Category Rating</h1>
  <pre>
    {{useCategoryRatingStore().categories}}
  </pre>
</template>

<style scoped>

</style>
