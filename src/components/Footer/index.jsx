import Logo from '@/assets/img/YARA.png'

function Footer() {

  return (
    <footer className="w-full">
 
        <div className="flex justify-between p-4">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} alt="Yara Logo" className="h-6 items-center ml-2"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yara<span className="text-orange-500">App</span></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 hover:text-orange-500">Sobre</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 hover:text-orange-500">Políticas de Privacidade</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 hover:text-orange-500">Licença</a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-orange-500">Contato</a>
                </li>
            </ul>
        </div>

        <hr className="border-gray-700 sm:mx-auto" />

        <div className="p-4">
            <span className="block text-sm text-white sm:text-center">© 2023 <span className="hover:underline select-none">Yara<span className="text-orange-500">App™</span></span>. Todos os direitos reservados.</span>
            
        </div>
   
    </footer>
  );
}

export default Footer;
