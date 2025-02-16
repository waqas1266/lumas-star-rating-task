import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCategoryRatings } from '@/composables/useCategoryRatings'
import type { ICategory } from '@/types/ICategory'

export const useCategoryRatingStore = defineStore('categoryRating', () => {
  const categories = ref<ICategory[]>([])
  const categoryRatings = useCategoryRatings()

  /**
   * Fetch Categories and format them
   */

  const fetchCategories = async () => {
    try {
      const categoriesArray = await categoryRatings.getCategories()
      if (Array.isArray(categoriesArray)) {
        categories.value = categoriesArray.map((category) => ({
          ...category,
          hoveredRating: 0,
        }))
      } else {
        console.error('categories are not in array format')
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  // Automatically fetch categories when the store is initialized
  fetchCategories()

  // Return all functions and categories for component usage
  return {
    categories,
  }
})
