import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoaded, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update active item when location changes
  useEffect(() => {
    if (location.pathname === "/") {
      // Don't change activeItem if it's already set to pricing
      // This preserves the pricing active state when navigating to home via pricing click
      setActiveItem((prev) => (prev.includes("pricing") ? prev : "/"));
    } else {
      setActiveItem(location.pathname);
    }
  }, [location.pathname]);

  // Add scroll listener to detect when user is in pricing section
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
          const rect = pricingSection.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 100; // 100px offset for navbar

          if (isInView) {
            setActiveItem("/#pricing");
          } else if (window.scrollY < pricingSection.offsetTop - 200) {
            // If scrolled above pricing section, show home as active
            setActiveItem("/");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  // Track scroll progress for progress bar with smooth animation
  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Math.min(
        Math.max((scrollPx / winHeightPx) * 100, 0),
        100
      );
      setScrollProgress(scrolled);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick, { passive: true });
    return () => window.removeEventListener("scroll", requestTick);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/#pricing" },
    // { name: "Creator", path: "/creator" },
  ];

  const handleNavClick = (path) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);

    if (path === "/") {
      // Navigate to home and scroll to top
      navigate("/");
      setActiveItem("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else if (path === "/#pricing") {
      // Set active item first
      setActiveItem(path);

      // If already on home page, just scroll to pricing
      if (location.pathname === "/") {
        setTimeout(() => {
          const pricingSection = document.getElementById("pricing");
          if (pricingSection) {
            const navbarHeight = 80; // Account for navbar height
            const elementPosition = pricingSection.offsetTop;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // Navigate to home page first, then scroll to pricing
        navigate("/");
        setTimeout(() => {
          const pricingSection = document.getElementById("pricing");
          if (pricingSection) {
            const navbarHeight = 80; // Account for navbar height
            const elementPosition = pricingSection.offsetTop;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // Increased timeout to allow page to load
      }
    } else {
      setActiveItem(path);
      navigate(path);
      // Reset scroll position to top immediately for other pages
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl py-3 px-4 sm:px-20 xl:px-32">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => handleNavClick("/")}
        />

        {/* Centered Navigation Menu - Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className={`relative text-base font-medium transition-all duration-200 hover:text-primary cursor-pointer ${
                activeItem === item.path ? "text-primary" : "text-gray-700"
              }`}
            >
              {item.name}
              {/* Active underline */}
              {activeItem === item.path && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right side - Desktop Auth buttons */}
        <div className="hidden md:flex items-center">
          {!isLoaded ? (
            <div className="animate-pulse bg-gray-200 rounded-full h-10 w-24"></div>
          ) : isSignedIn ? (
            <div className="scale-125">
              <UserButton />
            </div>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 rounded-full text-base cursor-pointer bg-primary text-white px-6 py-2"
            >
              Get started <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* User Button for Mobile */}
          {isLoaded && isSignedIn && (
            <div className="scale-125">
              <UserButton />
            </div>
          )}
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  activeItem === item.path
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Get Started Button for Mobile */}
            {!isSignedIn && isLoaded && (
              <button
                onClick={() => {
                  openSignIn();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg text-base font-medium bg-primary text-white px-4 py-2 mt-4"
              >
                Get started <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200/30 overflow-hidden">
        <div
          className="h-full bg-primary transform transition-transform duration-75 ease-linear origin-left"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            willChange: "transform",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
