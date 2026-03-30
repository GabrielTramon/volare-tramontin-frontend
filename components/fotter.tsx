export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            Volare Tramontin
          </h2>
          <p className="text-sm">
            Agência de viagens focada em experiências únicas e memoráveis.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contato@volare.com</li>
            <li>Telefone: (48) 99999-9999</li>
            <li>Criciúma - SC</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Volare Tramontin. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
