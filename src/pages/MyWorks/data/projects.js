import kumoMarket from "./img/kumoMarket/kumoMarket.webp";
import motoVibe from "./img/motoVibe/motoVibe.webp";
import onigiriCrypto from "./img/onigiriCrypto/onigiriCrypto.webp";
import iWishYouCouldReadThis from "./img/IWishYouCouldReadThis/IWishYouCouldReadThis-map.webp";


const projectsList = {
  IWishYouCouldReadThis: {
    name: "I Wish You Could Read This",
    img: iWishYouCouldReadThis,
    imageAlt: "Interactive message map from I Wish You Could Read This",
    des: "A multilingual full-stack application where people can share unsent messages on an interactive map. Node.js serverless functions provide the API, while PostgreSQL stores messages and reports.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Leaflet",
    ],
    codeLink: "https://github.com/OnigiriKing/i-wish-you-can-see-this",
    demoLink: "https://i-wish-you-could-read-it.netlify.app",
    key: "iWishYouCouldReadThis",
    transform: "translateY(-5%)",
    transformMobile: "translateY(-5%)",
  },
  KumoMarket: {
    name: "Kumo Market ☁️",
    img: kumoMarket,
    imageAlt: "Kumo Market e-commerce homepage",
    des: "A responsive e-commerce application featuring product categories, detailed product pages, cart state management, and multilingual content.",
    technologies: ["React", "Redux", "SCSS", "i18next"],
    codeLink: "https://github.com/OnigiriKing/kumo-market",
    demoLink: "https://kumo-market.netlify.app",
    key: "kumoMarket",
    transform: "translateY(-67%)",
    transformMobile: "translateY(-49%)",
  },
  MotoVibe: {
    name: "Moto Vibe 🛵",
    img: motoVibe,
    imageAlt: "Moto Vibe motorbike rental website",
    des: "A responsive motorbike rental website for Bangkok, designed to help visitors explore available bikes and understand the rental service across desktop and mobile devices.",
    technologies: ["React", "JavaScript", "SCSS"],
    codeLink: "https://github.com/OnigiriKing/moto-vibe",
    demoLink: "https://moto-vibe.netlify.app",
    key: "MotoVibe",
    transform: "translateY(-80%)",
    transformMobile: "translateY(-67.5%)",
  },
  onigiriCrypto: {
    name: "Onigiri Crypto ⚡️",
    img: onigiriCrypto,
    imageAlt: "Onigiri Crypto market price dashboard",
    des: "A cryptocurrency dashboard that integrates the Bitfinex API to display live market information in a clear, responsive interface.",
    technologies: ["React", "JavaScript", "REST API", "SCSS"],
    codeLink: "https://github.com/OnigiriKing/OnigiriCrypto",
    demoLink: "https://onigiri-crypto.netlify.app",
    key: "onigiriCrypto",
    transform: "translateY(-67%)",
    transformMobile: "translateY(-49%)",
  },
};

export default projectsList;
