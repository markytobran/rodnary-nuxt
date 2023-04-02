import { VideoData } from '~/types/videoTypes'

export async function useVideoFetch(url: string, message: string) {
  const { baseURL } = useRuntimeConfig()

  const { data, error } = await useFetch<VideoData>(url, {
    baseURL: baseURL + '/videos',
  })

  if (error.value) {
    showError({ message, statusCode: 404 })
  }

  return data
}

export function useVideosFetch(url: string) {
  const { baseURL } = useRuntimeConfig()
  return useFetch<VideoData[]>(url, {
    baseURL: baseURL + '/videos',
  })
}
