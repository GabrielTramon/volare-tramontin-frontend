import Footer from "@/components/fotter";
import { GridBenefit } from "@/components/gridBenefit";
import NavBar from "@/components/navBar";
import { Globe, Plane, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const benefits = [
    {
      title: "Viagens rápidas",
      description: "Planejamento ágil e eficiente",
      icon: <Plane />,
    },
    {
      title: "Destinos globais",
      description: "Explore o mundo inteiro",
      icon: <Globe />,
    },
    {
      title: "Segurança",
      description: "Suporte completo na viagem",
      icon: <Shield />,
    },
    {
      title: "Preço justo",
      description: "Melhor custo-benefício",
      icon: <Plane />,
    },
  ];
  return (
    <div className="justify-center w-full gap-y-8 sm:gap-y-[2vw] flex flex-col items-center mb-4 sm:mb-[2vw]">
      <Image
        src="/banner.png"
        alt="Logo"
        width={1500}
        height={1500}
        className="w-full h-auto object-contain"
      />

      <GridBenefit items={benefits} />
    </div>
  );
}
