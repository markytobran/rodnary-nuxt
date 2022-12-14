import { ImageLinks } from '@/types/videoTypes.ts'

const imageLinks: ImageLinks = {
  stillwater: 'https://static.wixstatic.com/media/33c753_3884ce5f29cf4265aa3c6369b3cbc8cc~mv2.png',
  'pellet waggler': 'https://static.wixstatic.com/media/33c753_da3d0620a60b49a0b25cf8541ce305f1~mv2.png',
  waggler: 'https://static.wixstatic.com/media/33c753_b789f5dbd99d4bfeacf7862f5918a7c9~mv2.png',
  pole: 'https://static.wixstatic.com/media/33c753_85f5da4494804750ba822eebe96ac1f7~mv2.png',
  river: 'https://static.wixstatic.com/media/33c753_23e70029b085443ab764c77cdd550645~mv2.png',
  'pellet feeder': 'https://static.wixstatic.com/media/33c753_52da4e53b3284536867b34dad24f29c2~mv2.png',
  other: 'https://static.wixstatic.com/media/33c753_d17b0f656bf446918856193100aeceee~mv2.png',
  feeder: 'https://static.wixstatic.com/media/33c753_999d52fae8454b2f9bf043dc467b9ca5~mv2.png',
  method: 'https://static.wixstatic.com/media/33c753_36f1773f3459459c8d3f95fba46631c7~mv2.png',
  match: 'https://static.wixstatic.com/media/33c753_74b040d8f9ea49f6ae304acbacc02c89~mv2.png',
  ENG: 'https://static.wixstatic.com/media/33c753_c848e096e08b4ce1ba89a8de3cd9089b~mv2.png',
}

export default (id: string) => {
  return imageLinks[id as keyof ImageLinks]
}
