type GridBenefitProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function GridBenefitItem({
  title,
  description,
  icon,
}: GridBenefitProps) {
  return (
    <div className="bg-white p-6 sm:p-[3vw] rounded-xl shadow-sm flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-3xl text-blue-900 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-500">
        {description}
      </p>
    </div>
  );
}
