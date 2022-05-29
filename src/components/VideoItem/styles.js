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
    card: 'flex items-start gap-4 cursor-pointer max-w-screen overflow-hidden',
    thumbnail: 'w-40 md:w-96',
    titleSize: 'text-sm md:text-lg',
  },
};
