import type { ImageLinks } from '@/types/videoTypes'

const imageLinks: ImageLinks = {
  stillwater: '33c753_5884f4e5f6da4090a52fbb7df0da5c81~mv2.webp',
  'pellet waggler': '33c753_bd26de7ce17b4845885513997a43178c~mv2.webp',
  waggler: '33c753_5202be75e6804c5c835e1f9d277353c4~mv2.webp',
  pole: '33c753_79b7b14975984e579003493326443a99~mv2.webp',
  river: '33c753_7825a54a02514ea9a603953fa5126d51~mv2.webp',
  'pellet feeder': '33c753_70dfb63a57e74cb98d4cf8fc7c4a63ce~mv2.webp',
  other: '33c753_3e2e93c260fb4dc5a201f6bb6de9e2cf~mv2.webp',
  feeder: '33c753_ed89a6d6adee42139c036051d26d5c1e~mv2.webp',
  method: '33c753_a0a800d79c5b4087a828a6e7be2ec371~mv2.webp',
  match: '33c753_2fea76dc9c684a29a8d336910427ea1b~mv2.webp',
  ENG: '33c753_f63a7d8857324d79989416a187d10964~mv2.webp',
  'tackle review': '33c753_52ea547c181048feb481931916ce47af~mv2.webp',
  HUN: '33c753_00379a1cc33d4ba182bb17a47929813c~mv2.webp',
}

export default (id: string) => {
  const config = useRuntimeConfig()
  return config.public.baseImageURL + imageLinks[id as keyof ImageLinks]
}
