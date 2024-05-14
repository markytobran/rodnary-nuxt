import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { VideoData } from '@/types/videoTypes'
import { VideoAPI } from '@/types/videoTypes'

export const videoRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getVideos(limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos?limit=${limit}&skip=${skip}`)
  },
  async getChannelVideos(channelId: string, limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos/channels/${channelId}?limit=${limit}&skip=${skip}`)
  },
  async getCategoryVideos(key: string, value: string, limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos/categories/${key}/${value}?limit=${limit}&skip=${skip}`)
  },
})
