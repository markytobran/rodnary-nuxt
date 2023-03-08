import { VideoData } from '~/types/videoTypes'

export function useVideoFetch(url: string) {
  const { baseURL } = useRuntimeConfig()
  return useFetch<VideoData>(url, {
    baseURL: baseURL + '/videos',
  })
}

export function useVideosFetch(url: string) {
  const { baseURL } = useRuntimeConfig()
  return useFetch<VideoData[]>(url, {
    baseURL: baseURL + '/videos',
  })
}
