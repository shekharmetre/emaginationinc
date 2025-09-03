import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-12 px-6">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">✨ EventMagic</h2>
          <p className="mt-2 text-sm text-gray-300">
            Where Magic is Re-imagined
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-2 text-sm text-gray-300">
            Fresh ideas are brewing — we create extraordinary events that leave lasting impressions and unforgettable memories.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex md:justify-end justify-center items-center gap-4">
          <a href="#" className="hover:text-pink-400 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="relative mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EventMagic. All rights reserved.
      </div>
    </footer>
  );
}
