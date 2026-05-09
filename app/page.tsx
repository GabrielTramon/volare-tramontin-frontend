import { ContactPage } from "@/components/contact/contactPage";
import Footer from "@/components/footer";
import { GridBenefit } from "@/components/gridBenefit/gridBenefit";
import NavBar from "@/components/navBar";
import {
  Contact,
  Globe,
  Mail,
  MessageCircle,
  Plane,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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
  const contacts = [
    {
      title: "Email",
      description: "Planejamento ágil e eficiente",
      icon: <MdEmail size={80} />,
      href: `mailto:${process.env.NEXT_PUBLIC_SOCIAL_EMAIL}`,
    },
    {
      title: "WhatsApp",
      description: "Explore o mundo inteiro",
      icon: <BsWhatsapp size={80} />,
      href: `https://wa.me/${process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP}`,
    },
    {
      title: "Instagram",
      description: "Suporte completo na viagem",
      icon: <BsInstagram size={80} />,
      href: `https://www.instagram.com/${process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM}`,
    },
  ];
  return (
    <div className="justify-center w-full flex flex-col items-center">
      <Image
        src="/banner.webp"
        alt="Logo"
        width={2000}
        height={2000}
        unoptimized
        className="w-full h-auto object-contain"
      />

      <GridBenefit items={benefits} />

      <ContactPage items={contacts} />
    </div>
  );
}
