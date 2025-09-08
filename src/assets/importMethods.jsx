import { Ship, Truck, Plane } from "lucide-react";

export const importMethods = [
  {
    id: 1,
    icon: <Truck size={48} color="#ea580c" />,
    title: "Terrestre",
    description: "Ideal para envíos regionales y de corta distancia, garantizando entregas rápidas y una trazabilidad completa de tu mercancía.",
  },
  {
    id: 2,
    icon: <Ship size={48} color="#2563eb" />,
    title: "Marítimo",
    description: "La opción más eficiente para grandes volúmenes de carga y rutas internacionales, ofreciendo un costo competitivo y máxima seguridad en cada contenedor.",
  },
  {
    id: 3,
    icon: <Plane size={48} color="#059669" />,
    title: "Aéreo",
    description: "La solución más rápida para envíos urgentes y de alto valor, acortando los tiempos de tránsito y optimizando tus plazos de entrega.",
  },
];
