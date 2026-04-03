import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Settings,
  Briefcase,
  Users,
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { PROFILE_NAME } from "../../constants/profile";
import DarkMode from "../DarkMode/DarkMode";

const HOME_NAV_ITEMS = [
  {
    label: "Home",
    id: "inicio",
    icon: Home,
    color: "bg-neutral-900",
    accent: "#0f172a",
  },
  {
    label: "About",
    id: "sobre-mi",
    icon: Users,
    color: "bg-blue-600",
    accent: "#2563eb",
  },
  {
    label: "Services",
    id: "servicios",
    icon: Settings,
    color: "bg-cyan-500",
    accent: "#06b6d4",
  },
  {
    label: "Work",
    id: "proyectos",
    icon: Briefcase,
    color: "bg-indigo-600",
    accent: "#4f46e5",
  },
];

const PAGE_NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
    icon: Home,
    color: "bg-neutral-900",
    accent: "#0f172a",
  },
  {
    label: "About",
    path: "/about",
    icon: Users,
    color: "bg-blue-600",
    accent: "#2563eb",
  },
  {
    label: "Services",
    path: "/service",
    icon: Settings,
    color: "bg-cyan-500",
    accent: "#06b6d4",
  },
  {
    label: "Work",
    path: "/project",
    icon: Briefcase,
    color: "bg-indigo-600",
    accent: "#4f46e5",
  },
];

const scrollToHomeSection = (id) => {
  const section = document.querySelector(`section#${id}`);
  if (!section) {
    return;
  }

  const y = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y - 110, behavior: "smooth" });
};

const PremiumNavbar = ({ mode = "home" }) => {
  const [activeSection, setActiveSection] = useState(
    mode === "home" ? "inicio" : "/",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.body.classList.contains("dark"),
  );
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const navItems = useMemo(
    () => (mode === "home" ? HOME_NAV_ITEMS : PAGE_NAV_ITEMS),
    [mode],
  );

  useEffect(() => {
    const syncTheme = () => {
      setIsDarkTheme(document.body.classList.contains("dark"));
    };

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    syncTheme();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mode !== "home") {
      setActiveSection(location.pathname);
      return;
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = HOME_NAV_ITEMS.map((item) => ({
        id: item.id,
        element: document.querySelector(`section#${item.id}`),
      })).filter((entry) => entry.element);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let idx = sections.length - 1; idx >= 0; idx -= 1) {
        const current = sections[idx];
        if (scrollPosition >= current.element.offsetTop) {
          setActiveSection(current.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, mode]);

  const goHome = () => {
    if (mode === "home") {
      scrollToHomeSection("inicio");
      return;
    }
    navigate("/");
  };

  const onSelectItem = (item) => {
    if (mode === "home") {
      setActiveSection(item.id);
      scrollToHomeSection(item.id);
    } else {
      setActiveSection(item.path);
      navigate(item.path);
    }
    setIsMenuOpen(false);
  };

  const goContact = () => {
    if (mode === "home") {
      scrollToHomeSection("contactos");
      return;
    }

    navigate("/");
    window.setTimeout(() => scrollToHomeSection("contactos"), 80);
  };

  return (
    <nav className="fixed left-0 top-0 z-[120] w-full p-3 md:p-6 pointer-events-none">
      <motion.div
        className="absolute left-0 right-0 top-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-blue-600"
        style={{ scaleX }}
      />

      <div
        className={`mx-auto w-full max-w-7xl pointer-events-auto rounded-3xl border px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isDarkTheme
            ? isScrolled
              ? "border-white/15 bg-black/70"
              : "border-white/10 bg-black/50"
            : isScrolled
              ? "border-white/20 bg-white/80"
              : "border-white/20 bg-white/60"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goHome}
            className="group flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white/20 shadow-xl transition-all group-hover:scale-110">
              <img
                src={`${import.meta.env.BASE_URL}favicon.ico`}
                alt="Neeraj Yadav logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <span
              className={`hidden text-sm font-black uppercase tracking-tight sm:block ${
                isDarkTheme ? "text-neutral-100" : "text-neutral-900"
              }`}
            >
              {PROFILE_NAME}
            </span>
          </button>

          <div
            className={`hidden items-center gap-1 rounded-2xl border p-1 shadow-inner lg:flex ${
              isDarkTheme
                ? "border-white/20 bg-white/10"
                : "border-white/50 bg-neutral-200/40"
            }`}
          >
            {navItems.map((item) => {
              const isActive =
                mode === "home"
                  ? activeSection === item.id
                  : activeSection === item.path;
              return (
                <button
                  type="button"
                  key={mode === "home" ? item.id : item.path}
                  onClick={() => onSelectItem(item)}
                  className={`relative rounded-xl px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                    isActive
                      ? "text-white"
                      : isDarkTheme
                        ? "text-neutral-300 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active"
                      className="absolute inset-0 rounded-xl shadow-lg"
                      style={{ backgroundColor: item.accent }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button
              type="button"
              onClick={goContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center gap-2.5 overflow-hidden rounded-full border px-4 py-2.5 transition-colors duration-300 sm:px-5 ${
                isDarkTheme
                  ? "border-cyan-300 bg-cyan-500 hover:bg-transparent"
                  : "border-slate-900 bg-slate-900 hover:bg-transparent"
              }`}
            >
              <span
                className={`relative z-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isDarkTheme
                    ? "text-slate-900 group-hover:text-cyan-300"
                    : "text-white group-hover:text-slate-900"
                }`}
              >
                <span className="hidden sm:inline">Let&apos;s Connect</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.button>

            <div className="hidden sm:block">
              <DarkMode />
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className={`rounded-2xl p-3 transition-colors lg:hidden ${
                isDarkTheme
                  ? "bg-neutral-800 text-white hover:bg-neutral-700"
                  : "bg-neutral-100 hover:bg-neutral-200"
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed inset-4 bottom-auto z-[115] flex flex-col rounded-[2rem] border p-6 shadow-2xl backdrop-blur-3xl pointer-events-auto lg:hidden ${
              isDarkTheme
                ? "border-neutral-700 bg-neutral-900/95"
                : "border-neutral-100 bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive =
                  mode === "home"
                    ? activeSection === item.id
                    : activeSection === item.path;
                const key = mode === "home" ? item.id : item.path;
                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => onSelectItem(item)}
                    className={`flex items-center justify-between rounded-2xl p-5 text-lg font-black tracking-tighter ${
                      isActive
                        ? "bg-neutral-900 text-white"
                        : isDarkTheme
                          ? "bg-neutral-800 text-neutral-100"
                          : "bg-neutral-50 text-neutral-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} />
                      {item.label}
                    </div>
                    <div className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={goContact}
                className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 p-5 text-lg font-black tracking-tighter text-white"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} />
                  Contact
                </div>
              </button>

              <div className="flex items-center justify-center pt-2 sm:hidden">
                <DarkMode />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default PremiumNavbar;
