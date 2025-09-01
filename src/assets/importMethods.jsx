import { Globe, Ship, Package } from "lucide-react";

export const importMethods = [
  {
    id: 1,
    icon: <Package size={48} color="#ea580c" />,
    title: "Aéreo",
    description: "Importación por aire",
  },
  {
    id: 2,
    icon: <Ship size={48} color="#2563eb" />,
    title: "Marítimo",
    description: "Importación por mar",
  },
  {
    id: 3,
    icon: <Globe size={48} color="#059669" />,
    title: "Terrestre",
    description: "Importación por tierra",
  },
];
