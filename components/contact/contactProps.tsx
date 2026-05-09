type GridBenefitProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

export function ContactProps({ title, description, icon, href }: GridBenefitProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-900 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
        {description}
      </p>
    </a>
  );
}
