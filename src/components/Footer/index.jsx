import Logo from '@/assets/img/YARA.png'

function Footer() {

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-[#0e100e] m-4">
    <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} alt="Yara Logo" className="h-8 items-center ml-2"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yara<span className="text-orange-500">App</span></span>
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">Yara<span className="text-orange-500">App™</span></a>. Todos os direitos reservados.</span>
    </div>
</footer>
  );
}

export default Footer;
