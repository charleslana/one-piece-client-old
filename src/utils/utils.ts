import images from '@/data/image';

export function getCharacterMini(id: number): string {
  switch (id) {
    case 1:
      return images.luffy1MiniImage;
    case 2:
      return images.zoro1MiniImage;
    case 3:
      return images.usopp1MiniImage;
    default:
      return '';
  }
}
