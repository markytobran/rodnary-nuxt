import { ReviewData } from '~/types/reviewTypes'

export async function usePostReview(url: string, body: any) {
  const { baseURL } = useRuntimeConfig()
  const { data, error } = await useFetch<ReviewData>(url, {
    baseURL: baseURL + '/reviews',
    // @ts-ignore
    method: 'POST',
    body,
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}

export async function useGetReviews(url: string) {
  const { baseURL } = useRuntimeConfig()
  const { data, error } = await useFetch<ReviewData[]>(url, {
    baseURL: baseURL + '/reviews',
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
