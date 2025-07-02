import { useEffect, useState } from "react";
import { IconButton } from ".";
import { ArrowUpCircle } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <IconButton
        variant="primary"
        icon={ArrowUpCircle}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      />
    </div>
  );
};
