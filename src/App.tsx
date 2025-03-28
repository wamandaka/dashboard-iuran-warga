import { useEffect } from "react";
import AppRoutes from "./routes/routes";
import favicon from "./assets/favicon.png";
// import { useEffect, useState } from "react";

const App = () => {
  // useEffect(() => {
  //   document.title = "Jakmen";
  // }, []);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      (link as HTMLLinkElement).href = favicon;
    }
  }, []);

  // const [logo, setLogo] = useState("");
  // const [favicon, setFavicon] = useState("");

  // useEffect(() => {
  //   async function fetchBrandData() {
  //     try {
  //       const response = await fetch("https://api.example.com/branding");
  //       const data = await response.json();
  //       setLogo(data.logo);
  //       setFavicon(data.favicon);
  //       changeFavicon(data.favicon);
  //     } catch (error) {
  //       console.error("Error fetching brand data:", error);
  //     }
  //   }

  //   fetchBrandData();
  // }, []);

  // function changeFavicon(iconUrl: string) {
  //   const link = document.querySelector("link[rel~='icon']");
  //   if (link) {
  //     (link as HTMLLinkElement).href = iconUrl;
  //   } else {
  //     const newLink = document.createElement("link");
  //     newLink.rel = "icon";
  //     newLink.href = iconUrl;
  //     document.head.appendChild(newLink);
  //   }
  // }
  return (
    <div className="font-display">
      <AppRoutes />
    </div>
  );
};

export default App;
