import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featured = [
  {
    title: "Epson Home Cinema 4010",
    image:
      "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?auto=format&fit=crop&w=1200&q=80",
    to: "/product/epson-home-cinema-4010",
  },
  {
    title: "Sony VPL-XW5000ES",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    to: "/product/epson-home-cinema-4010",
  },
  {
    title: "BenQ TK860i 4K",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
    to: "/product/epson-home-cinema-4010",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-hero-grid pb-16 pt-12 sm:pb-20 sm:pt-20">
        <div className="container-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <p className="mb-4 inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              Professional AV Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build a Cinematic Experience at Home
            </h1>
            <p className="mt-5 text-base text-slate-300 sm:text-lg">
              Discover premium projectors with precision color, deep contrast, and seamless smart control for immersive entertainment.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={() => navigate("/product/epson-home-cinema-4010")}
                className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-ink hover:bg-teal-300"
              >
                Shop Projectors
              </button>
              <a
                href="#featured"
                className="rounded-lg border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-white"
              >
                Explore Models
              </a>
            </div>
          </motion.div>

          <motion.figure
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1400&q=80"
              alt="Modern home theater projector setup"
              className="h-[340px] w-full rounded-2xl border border-white/20 object-cover shadow-panel sm:h-[420px]"
            />
          </motion.figure>
        </div>
      </section>

      <section id="featured" className="py-14 sm:py-16 lg:py-20">
        <div className="container-wrap">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projectors</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Handpicked models designed for living rooms, media studios, and custom home theaters.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
