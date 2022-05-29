export const styles = {
  default: {
    type: 'compact',
    card: 'flex flex-col items-start gap-4 cursor-pointer',
    thumbnail: 'w-full',
    titleSize: 'text-sm',
  },

  rowSmall: {
    type: 'compact',
    card: 'flex items-start gap-4 cursor-pointer',
    thumbnail: 'w-40',
    titleSize: 'text-sm',
  },

  rowLarge: {
    type: 'extend',
    card: 'flex items-start gap-4 cursor-pointer',
    thumbnail: 'w-96',
    titleSize: 'text-lg',
  },
};
