import { Menu, Phone, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 shadow-inner" />
            <span className="text-xl font-semibold tracking-tight text-gray-900">Craftr Voice</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#start" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-gray-300 shadow-sm"> <LogIn size={16}/> Sign in</a>
            <a href="#start" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:brightness-105"> <Phone size={16}/> Start free trial</a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(v=>!v)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2 text-sm text-gray-700">
            <a href="#how" className="block">How it works</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#faq" className="block">FAQ</a>
            <a href="#start" className="block">Sign in</a>
            <a href="#start" className="block font-semibold text-indigo-600">Start free trial</a>
          </div>
        )}
      </nav>
    </header>
  );
}
