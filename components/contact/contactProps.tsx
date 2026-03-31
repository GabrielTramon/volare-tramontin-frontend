type GridBenefitProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ContactProps({ title, description, icon }: GridBenefitProps) {
  return (
    <div className="  flex flex-col items-center text-center gap-3 transition-all duration-300">
      <div className="text-blue-500 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </div>
  );
}
