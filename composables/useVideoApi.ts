import type { VideoData } from '~/types/videoTypes'
import type { limitAndSkip } from '~/components/home/AllVideos.vue'

export async function useGetVideo(id: string) {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<VideoData>(`/${id}`, {
    baseURL: config.public.baseURL + '/videos',
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
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

export async function useGetAllVideos(query: limitAndSkip | null = null) {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<VideoData[]>('/videos/allvideos', {
    baseURL: config.public.baseURL,
    ...(query ? { query } : {}),
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
