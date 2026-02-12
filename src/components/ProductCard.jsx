import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ title, image, to }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.22 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-panel"
    >
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Link
          to={to}
          className="mt-4 inline-flex rounded-lg bg-brand px-4 py-2 text-sm font-medium text-ink hover:bg-teal-300"
        >
          View Product
        </Link>
      </div>
    </motion.article>
  );
}
