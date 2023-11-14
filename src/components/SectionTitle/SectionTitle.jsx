const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className=" text-center md:w-3/12 mx-auto mt-12 mb-12">
      <p className="text-[#D99904] italic text-xl mb-4">{subheading}</p>

      <h3 className="text-3xl border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
