'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust this to control when the button appears
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative  border-gray-200 dark:border-neutral-800 py-6 px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center"
    >
      {/* Left text */}
      <p className="text-sm ">
        © {new Date().getFullYear()} Unnati Umesh Kulkarni. All rights reserved.
      </p>

      {/* Right text */}
      <p className="text-sm  mt-2 sm:mt-0">
        Designed & Built with <span className="text-red-500">♥</span> by{' '}
        <span className=" font-semibold ">
          Unnati Umesh Kulkarni
        </span>
      </p>

      {/* Scroll to Top Button - only shown in footer */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="absolute right-6 -top-8 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  );
}
