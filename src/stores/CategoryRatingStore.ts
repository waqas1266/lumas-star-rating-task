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

    /**
     * Set Ratings for specific category
     * @param categoryIndex
     * @param rating
     * @return void
     */
    const setRating = (categoryIndex: number, rating: number): void => {
        categories.value[categoryIndex].rating = rating
    }

    /**
     * Highlights stars on mouse hover
     * @param categoryIndex
     * @param isFilled
     * @param starIndex
     * @return void
     */
    const onMouseHoverStarsRating = (
        categoryIndex: number,
        isFilled: boolean,
        starIndex: number,
    ): void => {
        categories.value[categoryIndex].hoveredRating =
            categories.value[categoryIndex].rating <= starIndex && !isFilled
                ? starIndex
                : categories.value[categoryIndex].hoveredRating
    }

    /**
     * set Hovered Rating to 0 on mouse leave
     * @param categoryIndex
     * @return void
     */
    const onMouseLeave = (categoryIndex: number): void => {
        categories.value[categoryIndex].hoveredRating =
            categories.value[categoryIndex].rating > 0 ? categories.value[categoryIndex].rating : 0
    }

    /**
     * Submit the Ratings
     */
    const onSubmitRating = (): void => {
        console.log(categories.value)
    }

    /**
     * Reset Ratings to default
     */
    const onResetRating = (): void => {
        categories.value.forEach((category) => {
            category.rating = 0
            category.hoveredRating = 0
        })
    }

    // Automatically fetch categories when the store is initialized
    fetchCategories()

    // Return all functions and categories for component usage
    return {
        categories,
        setRating,
        onMouseHoverStarsRating,
        onMouseLeave,
        onSubmitRating,
        onResetRating,
    }
})
