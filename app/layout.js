import '../app/global.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}