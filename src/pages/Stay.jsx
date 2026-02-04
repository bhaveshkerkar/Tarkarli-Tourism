import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StayCard from "../components/StayCard";

function Stay() {
  const homestays = [
    {
      name: "Sea Breeze Homestay",
      location: "Tarkarli Beach",
      priceRange: "₹1,500 - ₹2,500 / night",
      image:
        "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1080",
      type: "homestay",
    },
    {
      name: "Coastal Haven",
      location: "Near Devbagh",
      priceRange: "₹1,200 - ₹2,000 / night",
      image:
        "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1080",
      type: "homestay",
    },
    {
      name: "Malvani Retreat",
      location: "Tarkarli Village",
      priceRange: "₹1,800 - ₹3,000 / night",
      image:
        "https://images.unsplash.com/photo-1761158501691-c1cd5a31e69f?fm=jpg&q=80&w=1080",
      type: "homestay",
    },
  ];

  const resorts = [
    {
      name: "Blue Lagoon Resort",
      location: "Tarkarli Beach Front",
      priceRange: "₹4,000 - ₹8,000 / night",
      image:
        "https://images.unsplash.com/photo-1729707691048-722c1acf5c51?fm=jpg&q=80&w=1080",
      type: "resort",
    },
    {
      name: "Ocean Pearl Resort",
      location: "Sindhudurg Coast",
      priceRange: "₹5,500 - ₹10,000 / night",
      image:
        "https://images.unsplash.com/photo-1729707691048-722c1acf5c51?fm=jpg&q=80&w=1080",
      type: "resort",
    },
    {
      name: "Sunset Paradise Resort",
      location: "Devbagh Beach",
      priceRange: "₹3,500 - ₹7,000 / night",
      image:
        "https://images.unsplash.com/photo-1729707691048-722c1acf5c51?fm=jpg&q=80&w=1080",
      type: "resort",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar variant="simple" />

      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from cozy homestays to luxury beach resorts, all offering
              authentic Malvani hospitality and stunning coastal views.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Homestays Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-8 text-gray-900"
          >
            Homestays
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homestays.map((stay, index) => (
              <StayCard key={index} {...stay} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Resorts Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-8 text-gray-900"
          >
            Resorts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resorts.map((stay, index) => (
              <StayCard key={index} {...stay} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Stay;
