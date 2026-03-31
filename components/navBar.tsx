import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div className="w-full h-25 bg-white shadow-sm border border-gray-100">
        <div className="flex justify-center sm:justify-between items-center h-full px-4 sm:px-[4vw]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <div className="sm:flex font-bold text-gray-700 gap-4 sm:gap-[1vw] hidden">
            <h2 className="cursor-pointer hover:text-blue-700">Home</h2>
            <h2 className="cursor-pointer hover:text-blue-700">About</h2>
            <h2 className="cursor-pointer hover:text-blue-700">Contact</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
