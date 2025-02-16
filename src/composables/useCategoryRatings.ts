import type { ICategory } from '@/types/ICategory.ts'

/**
 * Composable function to fetch the categories data from a JSON file
 */

export function useCategoryRatings() {
  const getCategories = async () => {
    try {
      const response = await fetch('./data.json') // It can be API request to fetch the categories
      const data: ICategory[] = await response.json()
      return data
    } catch (error) {
      console.error('Error Fetching Categories' + error)
    }
  }
  return {
    getCategories,
  }
}
