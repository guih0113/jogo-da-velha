import "./globals.css";

export const metadata = {
  title: "Jogo da velha",
  description: "Jogo da velha utilizando React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
