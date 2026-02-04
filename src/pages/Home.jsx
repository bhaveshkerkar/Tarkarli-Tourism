import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1637770577089-608e37d9502c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navbar (Hero Variant) */}
        <Navbar variant="hero" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.2em] mb-6 text-center"
          >
            EXPLORE TARKARLI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 text-center tracking-wider"
          >
            Stay • Scuba • Water Sports • Local Experiences
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2 text-white/80"
            >
              <span className="text-sm tracking-wider">SCROLL</span>
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Welcome to Paradise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tarkarli is a pristine beach destination nestled in the Sindhudurg
              district of Maharashtra. Known for its crystal-clear waters, white
              sandy beaches, and vibrant marine life, it's the perfect getaway
              for adventure seekers and peace lovers alike.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From thrilling water sports to serene homestays, Tarkarli offers
              an unforgettable coastal experience that will leave you
              rejuvenated and inspired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 text-gray-900"
          >
            Why Choose Tarkarli?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Crystal Clear Waters",
                description:
                  "Experience pristine beaches with crystal-clear blue waters, perfect for swimming and water activities.",
                image:
                  "https://images.unsplash.com/photo-1637770577089-608e37d9502c?fm=jpg&q=80&w=1080",
              },
              {
                title: "Thrilling Adventures",
                description:
                  "From scuba diving to parasailing, experience adrenaline-pumping water sports and marine adventures.",
                image:
                  "https://images.unsplash.com/photo-1682957205580-4a71606d284c?fm=jpg&q=80&w=1080",
              },
              {
                title: "Authentic Hospitality",
                description:
                  "Stay in cozy homestays and luxury resorts, enjoy local Malvani cuisine and warm coastal hospitality.",
                image:
                  "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1080",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
