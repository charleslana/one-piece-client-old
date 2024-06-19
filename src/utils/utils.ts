import images from '@/data/image';

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

export function formatDateToNewspaper(data: Date): string {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString().slice(-2);
  return `${dia}/${mes}/${ano}`;
}

export function formatDate(data: Date): string {
  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear().toString();
  const hours = data.getHours().toString().padStart(2, '0');
  const minutes = data.getMinutes().toString().padStart(2, '0');
  const seconds = data.getSeconds().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function getCharacterMini(id: number): string {
  switch (id) {
    case 1:
      return images.luffy1MiniImage;
    case 2:
      return images.zoro1MiniImage;
    case 3:
      return images.usopp1MiniImage;
    case 4:
      return '';
    case 5:
      return images.teach3MiniImage;
    default:
      return '';
  }
}

export function getCharacterBattle(id: number): string {
  switch (id) {
    case 1:
      return '';
    case 2:
      return '';
    case 3:
      return '';
    case 4:
      return images.shanks2BattleImage;
    default:
      return '';
  }
}

export function getCharacterStatus(id: number, avatar: number): string {
  switch (id) {
    case 1:
      return '';
    case 2:
      return getCharacterStatusZoro(avatar);
    default:
      return '';
  }
}

function getCharacterStatusZoro(avatar: number): string {
  switch (avatar) {
    case 1:
      return images.zoro1StatusImage;
    case 2:
      return images.zoro2StatusImage;
    default:
      return '';
  }
}
