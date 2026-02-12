import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product/epson-home-cinema-4010", label: "Projectors" },
  { to: "/", label: "About" },
  { to: "/", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <nav className="container-wrap flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" className="text-lg font-semibold tracking-wide text-white">
          Tapp<span className="text-brand">AV</span>
        </Link>

        <ul className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.18 }}>
                <NavLink
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm text-slate-200 transition-colors hover:text-brand"
                >
                  {item.label}
                </NavLink>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
