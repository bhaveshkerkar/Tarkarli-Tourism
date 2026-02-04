import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl tracking-wider mb-4">EXPLORE TARKARLI</h3>
            <p className="text-blue-200 leading-relaxed">
              Discover the hidden gem of Maharashtra's coastline. Experience
              pristine beaches, thrilling water sports, and authentic coastal
              hospitality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/stay" className="hover:text-white transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href="/activities"
                  className="hover:text-white transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Tarkarli, Sindhudurg, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@exploretarkarli.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300"
        >
          <p>&copy; 2026 Explore Tarkarli. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
