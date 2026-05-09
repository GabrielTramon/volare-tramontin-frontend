import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div className="w-full h-25 bg-white shadow-sm border border-gray-100">
        <div className="flex justify-center items-center h-full px-4 sm:px-[4vw]">
          <Image
            src="/logo-volare.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
