export const styles = {
  default: {
    type: 'compact',
    card: 'flex flex-col items-start gap-4 cursor-pointer',
    thumbnail: 'w-full',
    titleSize: 'text-sm',
  },

  rowSmall: {
    type: 'compact',
    card: 'flex flex-col lg:flex-row items-start gap-4 cursor-pointer',
    thumbnail: 'w-full lg:w-40',
    titleSize: 'text-sm',
  },

  rowLarge: {
    type: 'extend',
    card: 'flex flex-col lg:flex-row items-start gap-4 cursor-pointer',
    thumbnail: 'w-full lg:w-96 min-w-96',
    titleSize: 'text-sm lg:text-lg',
  },
};
