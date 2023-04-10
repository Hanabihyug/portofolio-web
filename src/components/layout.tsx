import React from "react";
import { Header, Footer } from ".";
import { useTheme } from "next-themes";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`min-h-screen w-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header className="sticky top-0 z-50" />
      <main className="flex-grow pb-16">{children}</main>
      <Footer className="bottom-0 left-0 right-0 z-50" />
    </div>
  );
};

export default Layout;
