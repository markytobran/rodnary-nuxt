import { VideoData } from '~/types/videoTypes'

export const useVideoFetch = (url: string) => {
  const { baseURL } = useRuntimeConfig()
  return useFetch<VideoData>(url, {
    baseURL: baseURL + '/videos',
  })
}
