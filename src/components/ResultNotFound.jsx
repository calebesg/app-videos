import img from '../assets/not_found.png';

export const ResultNotFound = function () {
  return (
    <div className="flex flex-col items-center">
      <a
        href="https://.pngtree.com/so/conceito"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="max-w-lg w-full -mt-10"
          src={img}
          alt="content not found"
        />
      </a>
      <h2 className="text-white text-lg sm:text-2xl -mt-10">
        Nenhum resultado encontrado
      </h2>
      <p className="text-white mt-4 text-sm">
        Use palavras-chave diferentes ou remova os filtros de enquete
      </p>
    </div>
  );
};
