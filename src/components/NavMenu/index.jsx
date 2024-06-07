import { Link, useLocation } from "react-router-dom";
import Logo from '@/assets/img/YARA.png'

const navigation = [
  { name: "Home", pathname: "/" },
  { name: "Problema", pathname: "/problem" },
  { name: "Estudos", pathname: "/study" },
  { name: "Solução", pathname: "/solution" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavMenu() {
  const { pathname } = useLocation();

  return (
    <header className="flex md:flex-row md:justify-between md:items-center gap-5 p-2 absolute z-10 w-full h-14 tracking-normal text-5xl drop-shadow-sm">

      <a href="http://localhost:5173/" className="h-100">
        <img src={Logo} alt="Yara Logo" width={50}/>
      </a>

      <nav className="flex gap-5 sm:text-[1.25rem] w-full h-full items-center justify-end">
        {navigation.map((route) => (
          <Link
            key={route.name}
            to={route.pathname}
            className={classNames(
              route.pathname == pathname
                ? "text-orange-500 font-bold border-b-2 border-orange-500"
                : "text-indigo-50  hover:text-orange-500 hover:font-bold",
              "px-3 py-2 font-medium duration-200 text-base"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>

    </header>
  );
}

export default NavMenu;
