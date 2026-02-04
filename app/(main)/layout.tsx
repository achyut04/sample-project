import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-3 flex-grow bg-blue-50">{children}</main>
      <Footer />
    </div>
  );
}
