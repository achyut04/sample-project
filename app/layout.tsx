import AuthGuard from "./components/AuthGuard";
import StoreProvider from "./components/Providers/StoreProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AuthGuard>{children}</AuthGuard>
        </StoreProvider>
      </body>
    </html>
  );
}
