"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "why", label: "Why" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold text-gray-900">
          StayGrid
        </a>

        <div className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "font-semibold text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}