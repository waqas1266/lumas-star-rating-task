<template>
  <div>
    <p>{{ props.category.name }}</p>
    <!-- Render 5 stars for the rating using the RatingSingleStar component -->
    <div class="stars">
      <RatingSingleStar
        v-for="star in 5"
        :key="star"
        :starIndex="star"
        :categoryIndex="props.categoryIndex"
      />
    </div>
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
<style scoped></style>
