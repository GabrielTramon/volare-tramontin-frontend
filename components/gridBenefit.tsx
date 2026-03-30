import { GridBenefitItem } from "./gridBenefitItem";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function GridBenefit({ items }: { items: Benefit[] }) {
  return (
    <div className="flex flex-col bg-gray-50 w-full p-8 sm:p-[4vw] justify-center items-center gap-y-4 sm:gap-y-[4vw]">
      <div className="flex flex-col gap-y-4 sm:gap-y-[1vw] justify-center items-center">
        <h1 className="font-semibold text-2xl">Por que nos escolher </h1>
        <h1 className="font-semibold text-6xl">Viaje com quem entende </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 w-full justify-center items-center gap-4 sm:gap-[2vw]">
        {items.map((item, index) => (
          <GridBenefitItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
