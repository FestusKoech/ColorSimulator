import { Inter } from "next/font/google";
import "./pdf-viewer.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colour Simulator",
  description: "Colour Simulation tool. In partial completion of Bachelor of Science in Computer Science, Africa Nazarene University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      

    </html>
  );
}
