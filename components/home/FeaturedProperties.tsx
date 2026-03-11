import Link from "next/link";
import { featuredProperties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section className="fullwidth-container featured-properties" style={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <div className="maxwidth-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h3 className="text-center section-title text-2xl font-semibold text-gray-800 mb-8">
          Featured Properties
        </h3>

        <div className="flex flex-wrap gap-6" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {featuredProperties.map((property) => (
            <div 
              key={property.id} 
              className="featured-property"
              style={{ 
                flex: "0 1 350px", 
                maxWidth: "380px",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <Link 
                href={`/property/${property.id}`} 
                title={property.title}
                className="photo-link"
                style={{ display: "block", position: "relative" }}
              >
                <img
                  className="img"
                  alt={`Property photo: ${property.title}`}
                  title={`Property photo: ${property.title}`}
                  src={`https://www.bmestates.com/content/images/properties/${property.id}.jpg`}
                  style={{ width: "100%", height: "220px", objectFit: "cover", backgroundColor: "#f0f0f0" }}
                />
              </Link>
              <div 
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "white",
                  borderRadius: "2px",
                  backgroundColor: property.status === "let-agreed" ? "#e53935" : 
                                   property.status === "to-rent" ? "#43a047" : "#1e7ce8"
                }}
              >
                {property.badge}
              </div>
              <div className="featured-info" style={{ padding: "15px" }}>
                <h3 className="title text-base font-semibold text-gray-800 mb-1">
                  {property.title}
                </h3>
                <h4 className="price text-lg font-bold text-[#1e7ce8] mb-2">
                  {property.pricePrefix && (
                    <span className="prefix text-sm font-normal text-gray-600 mr-1">
                      {property.pricePrefix}
                    </span>
                  )}
                  {property.price}
                </h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {property.description}
                </p>
                <Link
                  href={`/property/${property.id}`}
                  title={property.title}
                  className="featured-link text-[#1e7ce8] font-medium hover:underline"
                >
                  Property Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
