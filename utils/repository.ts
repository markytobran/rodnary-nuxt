import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { VideoData } from '@/types/videoTypes'
import { VideoAPI } from '@/types/videoTypes'
import type { limitAndSkip } from '~/components/home/AllVideos.vue'

export const videoRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getVideos(query: limitAndSkip | null = null): Promise<VideoData[]> {
    return fetch<VideoData[]>('/videos', { ...(query ? { query } : {}) })
  },
  async getChannelVideos(channelId: string, limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos/channels/${channelId}?limit=${limit}&skip=${skip}`)
  },
  async getCategoryVideos(key: string, value: string, query: limitAndSkip | null = null): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos/categories/${key}/${value}`, { ...(query ? { query } : {}) })
  },
})
