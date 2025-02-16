<template>
  <span
    class="star"
    @click="handleClick"
    @mouseHover="handleMouseHover"
    @mouseLeave="handleMouseLeave"
  >
    <StarIcon />
  </span>
</template>
<script setup lang="ts">
import StarIcon from '@/icons/StarIcon.vue'

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
})

/**
 * Update rating in the store by clicking on the star
 */
const handleClick = () => {}

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
</style>
