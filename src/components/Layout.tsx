import { ThemeProvider } from "../contexts/ThemeContext";
import { ScrollToTop } from "./ui/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        {children}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
