<template>
    <div class="category-rating-display">
        <h1>Category Rating</h1>
        <!--- Loop through the categories and render the RatingStar component --->
        <div class="category-items">
            <RatingStars
                v-for="(category, index) in categoryRatingStore.categories"
                :key="index"
                :category="category"
                :categoryIndex="index"
            />
        </div>
        <div class="action-buttons">
            <button @click="handleSubmitRating">Submit Rating</button>
            <button @click="handleResetRating">Reset Rating</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore'
import RatingStars from '@/components/CategoryRating/RatingStars.vue'

const categoryRatingStore = useCategoryRatingStore()

/**
 * Submit the ratings
 */
const handleSubmitRating = async () => {
    categoryRatingStore.onSubmitRating()
}

/**
 * Reset the Ratings to default
 */
const handleResetRating = async () => {
    categoryRatingStore.onResetRating()
}
</script>

<style scoped>
.category-rating-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    gap: 1rem;

    h1 {
        font-size: 2rem;
        font-family: 'Archivo', sans-serif;
        font-weight: bolder;
        text-transform: uppercase;
        margin: 0;
    }

    .category-items {
        display: flex;
        gap: 1rem;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
        button {
            background-color: #fff;
            border: 0.1rem solid #000;
            border-radius: 5rem;
            color: #000;
            font-family: 'Archivo', sans-serif;
            font-weight: bold;
            text-transform: lowercase;
            line-height: 1.4rem;
            font-size: 1rem;
            padding: 6px 15px;
          &:hover {
            cursor: pointer;
            border-color: #582c83;
            color: #582c83;
          }
        }
    }
}

@media screen and (max-width: 767px) {
    .category-rating-display {
        .category-items {
            flex-direction: column;
        }
    }
}
</style>
