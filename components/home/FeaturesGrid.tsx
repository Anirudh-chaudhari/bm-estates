import { Home, Lightbulb, Monitor, Camera } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Property Valuations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Lightbulb,
    title: "Quality Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Monitor,
    title: "Financial Advice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Camera,
    title: "Assistance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="fullwidth-container grey" style={{ padding: "60px 0", backgroundColor: "#f5f5f5" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="text-column flex flex-wrap gap-8" style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-col"
              style={{ 
                flex: "1 1 250px", 
                minWidth: "250px",
                textAlign: "center",
                padding: "20px"
              }}
            >
              <span 
                className="icon" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  width: "60px", 
                  height: "60px", 
                  borderRadius: "50%", 
                  backgroundColor: "#1e7ce8",
                  color: "white",
                  marginBottom: "20px"
                }}
              >
                <feature.icon size={28} />
              </span>
              <h4 className="title text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
