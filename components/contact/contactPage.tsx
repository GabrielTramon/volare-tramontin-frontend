import { ContactProps } from "./contactProps";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

export function ContactPage({ items }: { items: Benefit[] }) {
  return (
    <div className="flex flex-col from-amber-50 to-white w-full px-6 py-12 sm:px-[6vw] sm:py-[5vw] items-center gap-10">
      <div className="flex flex-col gap-3 items-center max-w-2xl text-center">
        <h1 className="font-bold text-3xl sm:text-5xl text-gray-800">
          Entre em contato conosco
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Fale com nossa equipe e tire todas as suas dúvidas de forma rápida e
          simples
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-6">
        {items.map((item, index) => (
          <ContactProps key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
