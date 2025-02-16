<template>
  <div>
    <h1>Category Rating</h1>
    <!--- Loop through the categories and render the RatingStar component --->
    <RatingStars
      v-for="(category, index) in categoryRatingStore.categories"
      :key="index"
      :category="category"
      :category-index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore'
import RatingStars from '@/components/CategoryRating/RatingStars.vue'

const categoryRatingStore = useCategoryRatingStore()
</script>

<style scoped></style>
