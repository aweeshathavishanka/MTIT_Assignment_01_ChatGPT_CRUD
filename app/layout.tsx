import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <Link href="/" className="text-xl font-semibold">
                    Item Manager
                  </Link>
                  <nav className="hidden sm:flex gap-2 text-sm text-gray-600">
                    <Link href="/items" className="hover:text-gray-900">
                      Items
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="bg-transparent rounded-xl">{children}</div>
            </div>
          </main>

          <footer className="border-t border-gray-100 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Item Manager — Built with Next.js
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
              MTIT Assignment 01 by Awee Wijesundara | IT22183668
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
