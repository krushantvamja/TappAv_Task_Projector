import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="container-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">TappAV</h2>
          <p className="mt-2 text-sm text-slate-400">
            Premium projection and AV solutions for home cinema enthusiasts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.06 }}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-brand hover:text-brand"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
