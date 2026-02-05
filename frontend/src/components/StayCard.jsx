import { motion } from "framer-motion";
import { MapPin, DollarSign } from "lucide-react";

function StayCard({ image, name, location, priceRange, type, index }) {
  const whatsappNumber = "919876543210";
  const whatsappMessage = `Hi, I'm interested in booking ${name} in Tarkarli`;

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm capitalize">
            {type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl mb-3 text-gray-900">{name}</h3>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin size={18} className="text-blue-600" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <DollarSign size={18} className="text-green-600" />
          <span className="text-lg">{priceRange}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Book via WhatsApp
          </button>

          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default StayCard;
