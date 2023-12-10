import type { BrandLinks } from '@/types/videoTypes'

const brandLinks: BrandLinks = {
  'MAP fishing':
    'https://yt3.googleusercontent.com/KPHibhlWyzJ1h-As5WPf7W50UcNF5jUnldAIbUpB21z2_I16hq1_86V_Q1-QA_JnP4MMjL7QXw=s176-c-k-c0x00ffffff-no-rj',
  Daiwa: 'https://yt3.googleusercontent.com/ZTsSzTfytsZGGA6YfBM0uHu4a_afkKufLGsZMMH9JL0T81n7lhFtoaM0F83R6i-Oetav10m3=s176-c-k-c0x00ffffff-no-rj',
  'Free Spirit':
    'https://yt3.googleusercontent.com/si-bDGo5AwUXxvGXzmxB8PBbVSJcxqL3BOHBPkRvjGw1NvLwXK76KFjTw1E5X2BGovemebltEw=s176-c-k-c0x00ffffff-no-rj',
}

export default (id: string) => {
  return brandLinks[id as keyof BrandLinks]
}
