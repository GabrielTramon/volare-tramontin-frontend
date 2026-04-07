import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-gray-300 p-4 sm:p-[2vw]">
      <div className="flex flex-col sm:flex-row w-full justify-center items-center mb-2 sm:mb-[2vw] gap-2 sm:gap-[6vw]">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain hidden sm:flex"
        />

        <div className="flex flex-col">
          <h3 className="text-white font-bold text-2xl mb-3">Contato</h3>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2 sm:flex-[1vw] items-center">
              <Phone />
              <p className="font-medium">(48) 99942-2691</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2 sm:flex-[1vw] items-center">
              <Mail />
              <p className="font-medium">contato@volare.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Volare Tramontin. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
