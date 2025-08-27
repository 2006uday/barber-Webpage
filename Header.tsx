  import logo from "./logo-header.png"; // Assuming you move the logo here or adjust the path

  const navItems = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Pages", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  interface ButtonProps {
    className?: string; // Allow passing in additional classes
    children?: React.ReactNode;
    x?: number;
    y?: number;
  }

  export const Button: React.FC<ButtonProps> = ({
    className,
  }) => {
    return (
      <button
        className={`background-color text-white font-bold  ${className}`}
      >
        Book an appointment
      </button>
    );
  };

  function Navigation() {
    return (
      <nav className="absolute transform md:h-27 md:top-0 top-22 md:flex md:justify-center md:items-center  md:relative py-1">
        <ul className="flex  text-sm  flex-row gap-7 uppercase">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`${
                item.current
                  ? "text-color underline underline-offset-[6px] decoration-2"
                  : "text-white"
              } hover:text-[#b29162] transition-colors`}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export function Header() {
    return (
      <header className="bg-black overflow-hidden md:h-27 h-31 flex  relative py-6">
        <div className="w-full mx-7 flex md:items-center
        justify-between">
          <a href="#">
            <img src="https://assets.nicepagecdn.com/d2cc3eaa/6401142/images/logo-header.png" alt="logo" className="h-10 " />
          </a>
          <Navigation />
          <Button className="py-2 px-8"/>
        </div>
      </header>
    );
  }