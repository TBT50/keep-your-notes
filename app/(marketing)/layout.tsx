import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 h-full">
      <Navbar />
      <main className="pt-40 pb-20 px-4">{children}</main>
      <Footer />
    </div>
  );
}
