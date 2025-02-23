export const MainHeading = ({ text, align }) => {
  return (
    <h1
      className={`${align} main-heading leading-[1.1]`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const SectionHeading = ({ text, contain = 'w-full' }) => {
  return <h2 className={`section-heading font-bold leading-[1.1] ${contain}`}>{text}</h2>;
};
