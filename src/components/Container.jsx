const Container = function ({ children, className }) {
  return (
    <main
      className={
        className
          ? className
          : 'pt-20 px-4 sm:px-6 max-w-screen-2xl w-full mx-auto'
      }
    >
      {children}
    </main>
  );
};

export default Container;
