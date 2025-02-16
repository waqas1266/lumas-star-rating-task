<template>
    <div>
        <h1>Category Rating</h1>
        <!--- Loop through the categories and render the RatingStar component --->
        <RatingStars
            v-for="(category, index) in categoryRatingStore.categories"
            :key="index"
            :category="category"
            :categoryIndex="index"
        />
        <button @click="handleSubmitRating">Submit Rating</button>
        <button @click="handleResetRating">Reset Rating</button>
    </div>
</template>

<script setup lang="ts">
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore'
import RatingStars from '@/components/CategoryRating/RatingStars.vue'

const categoryRatingStore = useCategoryRatingStore()

/**
 * Submit the ratings
 */
const handleSubmitRating = () => {
    categoryRatingStore.onSubmitRating()
}

/**
 * Reset the Ratings to default
 */
const handleResetRating = () => {
    categoryRatingStore.onResetRating()
}
</script>

<style scoped></style>
