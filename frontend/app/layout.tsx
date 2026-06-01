import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zomato AI Recommends',
  description: 'AI-powered restaurant recommendations powered by Groq',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface min-h-screen">{children}</body>
    </html>
  );
}
