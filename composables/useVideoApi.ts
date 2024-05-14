import type { VideoData } from '~/types/videoTypes'
import { VideoAPI } from '@/types/videoTypes'

export async function useGetVideo(id: string) {
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<VideoData>(`/${id}`, {
    baseURL: config.public.baseURL + '/videos',
  })

  if (!data.value) {
    showError({ message: 'Video not found', statusCode: 404 })
  }

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}

export async function useGetVideos(url: string) {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<VideoData[]>(url, {
    baseURL: config.public.baseURL + '/videos',
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}

export async function useGetAllVideos(limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP) {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<VideoData[]>(`/videos/allvideos?limit=${limit}&skip=${skip}`, {
    baseURL: config.public.baseURL,
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
