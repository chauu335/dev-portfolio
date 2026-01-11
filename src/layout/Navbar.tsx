import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  // { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-wider text-base-content"
        >
          chouu.ngo
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          <div className="glass-darkened rounded-full flex px-2 py-1 items-center gap-1">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="btn btn-ghost px-4 py-2 text-sm rounded-full tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button size="sm" className="btn-primary">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-custom animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-base-content/80 hover:text-base-content py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="default"
              className="btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
