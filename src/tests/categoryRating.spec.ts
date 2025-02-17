import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useCategoryRatingStore } from '@/stores/CategoryRatingStore'
import { setActivePinia, createPinia } from 'pinia'

vi.mock('@/composables/useCategoryRatings', () => {
    return {
        useCategoryRatings: () => ({
            getCategories: () =>
                Promise.resolve([
                    { name: 'Fits to my Wall', rating: 0 },
                    { name: 'Thats my style', rating: 0 },
                    { name: 'Enjoy this Artist', rating: 0 },
                ]),
        }),
    }
})

describe('categoryStarRating', () => {

  // Setting up the Pinia store before each test
  beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should initialize categories correctly', async () => {
        const categoryRatingStore = useCategoryRatingStore()
        await categoryRatingStore.fetchCategories()
        const categories = await categoryRatingStore.categories

        expect(categories.length).toBe(3)
        expect(categories[0].name).toBe('Fits to my Wall')
        expect(categories[1].name).toBe('Thats my style')
        expect(categories[2].name).toBe('Enjoy this Artist')
    })

    it('should set star rating', async () => {
        const categoryRatingStore = useCategoryRatingStore()
        await categoryRatingStore.fetchCategories()
        const categories = await categoryRatingStore.categories
        categoryRatingStore.setRating(0, 3)
        expect(categories[0].rating).toBe(3)
    })

    it('should hover rating correctly', async () => {
        const categoryRatingStore = useCategoryRatingStore()
        await categoryRatingStore.fetchCategories()
        const categories = await categoryRatingStore.categories
        categoryRatingStore.onMouseHoverStarsRating(1, false, 5)
        expect(categories[1].hoveredRating).toBe(5)
    })
    it('should reset rating correctly', async () => {
        const categoryRatingStore = useCategoryRatingStore()
        await categoryRatingStore.fetchCategories()
        const categories = await categoryRatingStore.categories
        categoryRatingStore.onMouseHoverStarsRating(1, false, 5)
        expect(categories[1].hoveredRating).toBe(5)
    })
    it('should log categories if at least one category has a rating', async () => {
        const categoryRatingStore = useCategoryRatingStore()
        await categoryRatingStore.fetchCategories()
        const categories = await categoryRatingStore.categories
        categoryRatingStore.setRating(0, 3)
        console.log = vi.fn()
        categoryRatingStore.onSubmitRating()
        expect(console.log).toHaveBeenCalledWith(categories)
    })

    it('should alert if no categories have a rating', () => {
        const categoryRatingStore = useCategoryRatingStore()
        window.alert = vi.fn()
        categoryRatingStore.onSubmitRating()
        expect(window.alert).toHaveBeenCalledWith(
            'Please select the rating for at least one category',
        )
    })
})
