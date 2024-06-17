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

export function calculateProgressBarWidth(
  currentValue: number,
  maxValue: number,
  maxBarWidth: number
): number {
  const percentage = (currentValue / maxValue) * 100;
  return Math.round((percentage / 100) * maxBarWidth);
}

export function calculateProgressBar(currentValue: number, maxValue: number): number {
  const percentage = (currentValue / maxValue) * 100;
  return Math.min(Math.round(percentage), 100);
}
