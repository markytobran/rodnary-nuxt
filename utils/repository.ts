import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { VideoData } from '@/types/videoTypes'
import { VideoAPI } from '@/types/videoTypes'

export const videoRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getChannelVideos(channelId: string, limit = VideoAPI.LIMIT, skip = VideoAPI.SKIP): Promise<VideoData[]> {
    return fetch<VideoData[]>(`/videos/channels/${channelId}?limit=${limit}&skip=${skip}`)
  },
})
