import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative">
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="pt-16">{children}</main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
