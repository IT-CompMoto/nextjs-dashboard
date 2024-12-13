import '@/app/ui/global.css';
import '@/app/ui/home.module.css'
import { kanit, inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>{children}</body>
    </html>
  );
}
