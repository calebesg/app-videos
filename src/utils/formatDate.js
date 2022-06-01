export default function formatDate(str) {
  const date = new Date(str);
  const locale = navigator.language;

  const option = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat(locale, option).format(date);
}
