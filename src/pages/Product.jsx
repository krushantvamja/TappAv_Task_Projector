import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1400&q=80",
];

const specs = [
  ["Resolution", "4K PRO-UHD (3840 x 2160 enhancement)"],
  ["Brightness", "2,400 lumens (color + white)"],
  ["Contrast Ratio", "Up to 200,000:1"],
  ["HDR", "HDR10 support"],
  ["Inputs", "2 x HDMI 2.0, USB, RS-232"],
  ["Throw Ratio", "1.35 - 2.84"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Product() {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="container-wrap grid items-start gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4"
        >
          <div className="relative">
            <img
              src={images[active]}
              alt={`Epson projector view ${active + 1}`}
              className="h-[320px] w-full rounded-xl object-cover sm:h-[400px]"
            />
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    active === i ? "bg-brand" : "bg-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={goPrev}
              className="rounded-md border border-slate-600 px-4 py-2 text-sm hover:border-brand hover:text-brand"
            >
              Previous
            </button>
            <button
              onClick={goNext}
              className="rounded-md border border-slate-600 px-4 py-2 text-sm hover:border-brand hover:text-brand"
            >
              Next
            </button>
          </div>
        </motion.div>

        <motion.article
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          className="space-y-6"
        >
          <header>
            <p className="text-sm uppercase tracking-wider text-brand">Home Cinema Series</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Epson Home Cinema 4010</h1>
            <p className="mt-3 text-2xl font-semibold text-accent">$1,999.00</p>
          </header>

          <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
            <li>3LCD projection technology</li>
            <li>Motorized lens shift and zoom</li>
            <li>Wide color gamut with HDR</li>
            <li>Quiet operation for home theaters</li>
          </ul>

          <p className="text-slate-300">
            The Epson Home Cinema 4010 delivers rich cinematic detail with 4K enhancement and advanced processing for true-to-life motion and color. It is designed for dedicated home theaters where image fidelity matters.
          </p>

          <button className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-ink hover:bg-teal-300">
            Add to Cart
          </button>

          <section aria-label="Product specifications" className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-800 text-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold">Specification</th>
                  <th className="px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([label, value]) => (
                  <tr key={label} className="border-t border-white/10 text-slate-300">
                    <td className="px-4 py-3">{label}</td>
                    <td className="px-4 py-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </motion.article>
      </div>
    </section>
  );
}
