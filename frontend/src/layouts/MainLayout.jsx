import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main> {/* Agregamos padding-top para que no tape el navbar fijo */}
      <Footer />
    </>
  );
}
