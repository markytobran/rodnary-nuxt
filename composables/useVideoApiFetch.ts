import { VideoData } from '~/types/videoTypes'

export async function useVideoFetch(url: string) {
  const { baseURL } = useRuntimeConfig()

  const { data, error } = await useFetch<VideoData>(url, {
    baseURL: baseURL + '/videos',
  })

  if (error.value) {
    showError({ message: 'Video not found', statusCode: 404 })
  }

  return data
}

export async function useVideosFetch(url: string) {
  const { baseURL } = useRuntimeConfig()
  const { data, error } = await useFetch<VideoData[]>(url, {
    baseURL: baseURL + '/videos',
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
