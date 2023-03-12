export type VideoData = {
  _id: string
  title: string
  channelTitle: string
  channelId: string
  description: string
  videoID: string
  venueType: string
  waterType: string
  fishing: string
  subFishing: string
  videoLanguage: string
  subtitles: string[]
  likes: number
  thumbnails: string[]
  socialLinks: SocialLinks[]
  logoURL: string
  publishedAt: string
  coverImgLink: string
}

export type SocialLinks = {
  name: string
  url: string
}

export type VideoDataPropType = VideoData[] | null

export enum API {
  SKIP = 0,
  LIMIT = 4,
}

export interface ImageLinks {
  stillwater: string
  'pellet waggler': string
  waggler: string
  pole: string
  river: string
  'pellet feeder': string
  other: string
  feeder: string
  method: string
  match: string
  ENG: string
  'tackle review': string
  HUN: string
}
