export interface Property {
  id: number;
  status: "for-sale" | "let-agreed" | "to-rent";
  title: string;
  price: string;
  pricePrefix?: string;
  description: string;
  image: string;
  badge: string;
  location: string;
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    status: "for-sale",
    title: "For Sale - Leicester, LE2",
    price: "£110,000",
    pricePrefix: "Guide Price",
    description: "BM Estates is delighted to present this beautifully appointed two-bedroom flat in the sought-after Stoneygate area of Leicester. This bright and spacious accommodation features a welcoming...",
    image: "/images/properties/property-1.jpg",
    badge: "For Sale",
    location: "LE2",
  },
  {
    id: 2,
    status: "for-sale",
    title: "For Sale - Leicester, LE5",
    price: "£400,000",
    pricePrefix: "Guide Price",
    description: "BM Estates are pleased to offer for sale this spacious and versatile five-bedroom semi-detached family home situated on Sidmouth Avenue, Leicester LE5. Occupying a generous corner position, the...",
    image: "/images/properties/property-2.jpg",
    badge: "For Sale",
    location: "LE5",
  },
  {
    id: 3,
    status: "for-sale",
    title: "For Sale - Leicester, Leicester, LE3",
    price: "£290,000",
    pricePrefix: "Guide Price",
    description: "BM Estates are pleased to present this substantial semi-commercial freehold property on the bustling Fosse Road North, Leicester. This versatile mixed-use investment features a well-established...",
    image: "/images/properties/property-3.jpg",
    badge: "For Sale",
    location: "LE3",
  },
  {
    id: 4,
    status: "let-agreed",
    title: "Let Agreed - Leicester, LE5",
    price: "£850 pcm",
    description: "BM Estates are delighted to present this two-bedroom bungalow to let on Brook Road. This charming bungalow features a spacious living room with large windows, allowing plenty of natural light...",
    image: "/images/properties/property-4.jpg",
    badge: "Let Agreed",
    location: "LE5",
  },
  {
    id: 5,
    status: "let-agreed",
    title: "Let Agreed - Leicester, LE4",
    price: "£1,250 pcm",
    description: "BM Estates are very pleased to offer this four bedroom property situated on Harrison Road in the heart of Belgrave with amenities available by walking distance. The property briefly comprises of...",
    image: "/images/properties/property-5.jpg",
    badge: "Let Agreed",
    location: "LE4",
  },
  {
    id: 6,
    status: "to-rent",
    title: "To Rent - Leicester, LE5",
    price: "£1,200 pcm",
    description: "BM Estates is pleased to offer this well-presented three-bedroom flat to let, located on Uppingham Road in Leicester, LE5. The property provides generous living accommodation and is ideal for...",
    image: "/images/properties/property-6.jpg",
    badge: "To Rent",
    location: "LE5",
  },
];

export const saleProperties = featuredProperties.filter(
  (p) => p.status === "for-sale"
);

export const rentProperties = featuredProperties.filter(
  (p) => p.status === "let-agreed" || p.status === "to-rent"
);
