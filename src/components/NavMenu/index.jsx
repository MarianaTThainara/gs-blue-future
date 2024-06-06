import { Link, useLocation } from "react-router-dom";
import Logo from '@/assets/img/YARA_2.png'

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
    <header className="flex flex-col-6 md:flex-row md:justify-between md:items-center gap-5 p-2 absolute z-10 w-full h-[80px] font-roboto tracking-normal text-5xl drop-shadow-md">

      <img src={Logo} alt="Yara Logo" className="h-[100%] items-center ml-2"/>

      <nav className="flex gap-5 px-5 text-[1.4rem] sm:text-[1.25rem] backdrop-blur-sm w-full h-full items-center justify-end">
        {navigation.map((route) => (
          <Link
            key={route.name}
            to={route.pathname}
            className={classNames(
              route.pathname == pathname
                ? "text-orange-500 font-bold"
                : "text-indigo-50  hover:text-orange-500 hover:font-bold",
              "rounded-md px-3 py-2 font-medium ease-in duration-200"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>

      {/* <nav className="flex gap-2 py-2 px-3 rounded-md border border-t-slate-950 border-l-slate-950 border-r-slate-600 border-b-slate-600 shadow-[-1px_-1px_rgba(0,0,0,1),1px_1px_rgba(255,255,255,0.1)]">
        {navigation.map((route) => (
          <Link
            key={route.name}
            to={route.pathname}
            className={classNames(
              route.pathname == pathname
                ? "shadow-[1px_1px_1px_1px_rgba(0,0,0,0.5),-1px_-1px_2px_2px_rgba(255,255,255,0.1)] text-blue-50"
                : "text-blue-300 hover:bg-blue-900 hover:text-blue-50",
              "rounded-md px-3 py-2 font-medium ease-in duration-200"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav> */}
    </header>
  );
}

export default NavMenu;
