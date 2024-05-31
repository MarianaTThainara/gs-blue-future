import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", pathname: "/" },
  { name: "Problema", pathname: "/problem" },
  { name: "Estudos", pathname: "/study" },
  { name: "Solução", pathname: "/solution" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 flex gap-12 p-4">
      <h1>Logo - Name App</h1>
      <nav>
        {navigation.map((route) => (
          <Link
            key={route.name}
            to={route.pathname}
            className={classNames(
              route.pathname == pathname
                ? "bg-blue-900 text-white"
                : "text-blue-300 hover:bg-blue-700 hover:text-white",
              "rounded-md px-3 py-2 font-medium"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;
