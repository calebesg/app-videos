export default function textFormat(text) {
  const createLinks = text => {
    return text.split(' ').map((part, index) => {
      if (part.includes('http')) {
        return (
          <a
            key={index}
            className="text-blue-400"
            href={part}
            rel="noreferrer"
            target="_blank"
          >
            {part}
          </a>
        );
      }
      return `${part} `;
    });
  };

  return text
    .split('\n')
    .map((item, index) => <p key={index}>{createLinks(item)}</p>);
}
