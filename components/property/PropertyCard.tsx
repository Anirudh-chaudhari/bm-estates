import Link from "next/link";
import { Property } from "@/data/properties";
import PropertyBadge from "./PropertyBadge";
import { Home } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <div className="w-full h-full bg-gradient-to-br from-bm-blue/30 to-bm-dark/30 flex items-center justify-center">
          <div className="text-center">
            <Home className="w-16 h-16 text-bm-blue/50 mx-auto mb-2" />
            <span className="text-bm-blue/70 text-sm font-medium">Property Image</span>
          </div>
        </div>
        <PropertyBadge status={property.status} badge={property.badge} />
        <div className="absolute bottom-2 right-2">
          <div className="w-8 h-8 bg-bm-blue/80 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">BM</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">Leicester</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {property.title}
        </h3>
        <p className="text-xl font-bold text-bm-blue mb-3">{property.price}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {property.description}
        </p>
        <Link
          href={`/property/${property.id}`}
          className="inline-flex items-center text-bm-blue font-medium hover:text-bm-dark transition-colors"
        >
          Property Details →
        </Link>
      </div>
    </div>
  );
}
