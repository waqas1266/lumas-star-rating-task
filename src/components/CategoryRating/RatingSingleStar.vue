<template>
  <span
    class="star"
    :class="{ filled: props.isFilled }"
    @click="handleClick"
    @mouseHover="handleMouseHover"
    @mouseLeave="handleMouseLeave"
  >
    <StarIcon />
  </span>
</template>
<script setup lang="ts">
import StarIcon from '@/icons/StarIcon.vue'
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore.ts'

const categoryRatingStore = useCategoryRatingStore()

// Define props to receive star and category index
const props = defineProps({
  starIndex: {
    type: Number,
    required: true,
  },
  categoryIndex: {
    type: Number,
    required: true,
  },
  isFilled: {
    type: Boolean,
    required: true,
  },
})

/**
 * Update rating in the store by clicking on the star
 */
const handleClick = () => {
  categoryRatingStore.setRating(props.categoryIndex, props.starIndex)
}

/**
 * Update rating in the store on mouse hover
 */
const handleMouseHover = () => {}

/**
 * Update rating in the store on Mouse leave and reset to 0 if stars are not selected
 */
const handleMouseLeave = () => {}
</script>

<style scoped>
.star {
  cursor: pointer;
  width: 30px;
  color: lightgray; /* Default color for unfilled stars */
  display: inline-block;
}

.star:hover {
  transform: scale(1.2);
}

.star.filled {
  color: gold;
}
</style>
