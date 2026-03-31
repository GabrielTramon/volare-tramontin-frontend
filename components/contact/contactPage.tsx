import { ContactProps } from "./contactProps";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ContactPage({ items }: { items: Benefit[] }) {
  return (
    <div className="flex flex-col bg-amber-50 shadow-md border-gray-100 w-full p-8 sm:p-[4vw] justify-center items-center gap-y-4 sm:gap-y-[3vw]">
      <div className="flex flex-col gap-y-2 sm:gap-y-[1vw] justify-center items-center">
        <h1 className="font-bold text-2xl sm:text-6xl text-center text-blue-500">
          Entre em contato conosco
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full justify-center items-center gap-4 sm:gap-[2vw]">
        {items.map((item, index) => (
          <ContactProps key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
