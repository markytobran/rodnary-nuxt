import { VideoDataType } from '~/types/videoTypes'

export const useVideoFetch = (url: string) => {
  const { baseURL } = useRuntimeConfig()
  return useFetch<VideoDataType>(url, {
    baseURL: baseURL + '/videos',
  })
}
