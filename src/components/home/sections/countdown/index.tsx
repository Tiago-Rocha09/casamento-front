type CountdownSectionProps = {
  children: JSX.Element;
};

export const CountdownSection = ({ children }: CountdownSectionProps) => {
  return (
    <section className="odd:bg-gray-500 py-20 px-4 md:px-0">
      <section className="container mx-auto block">{children}</section>
    </section>
  );
};
