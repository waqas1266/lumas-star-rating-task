<template>
    <div class="rating-stars">
        <p>{{ props.category.name }}</p>
        <!-- Render 5 stars for the rating using the RatingSingleStar component -->
        <div>
            <RatingSingleStar
                v-for="star in 5"
                :key="star"
                :starIndex="star"
                :categoryIndex="props.categoryIndex"
                :isFilled="star <= (props.category.hoveredRating ?? 0)"
            />
        </div>
        <span class="rating">{{ props.category.rating }}/5</span>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICategory } from '@/types/ICategory.ts'
import RatingSingleStar from '@/components/CategoryRating/RatingSingleStar.vue'

// Define props to receive categories Array and category index
const props = defineProps({
    category: {
        type: Object as PropType<ICategory>,
        required: true,
    },
    categoryIndex: {
        type: Number,
        required: true,
    },
})
</script>
<style scoped>
.rating-stars {
    background: #e4e2dc;
    padding: 20px;
    border-radius: 15px;
    p {
        margin: 0;
    }
}

.rating {
    font-weight: bold;
}
</style>
