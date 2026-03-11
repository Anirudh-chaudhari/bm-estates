export default function InfoSection() {
  return (
    <section className="fullwidth-container" id="home-blurb" style={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <div className="maxwidth-container home-text-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", gap: "40px", alignItems: "center" }}>
        <div className="home-blurb" style={{ flex: "1" }}>
          <h1 className="home-title text-2xl md:text-3xl font-light text-gray-800 mb-6" style={{ fontWeight: 300 }}>
            Thinking of selling or letting your property or maybe you&apos;re just interested to know what it is worth nowadays?
          </h1>
          <div className="text-gray-600 leading-relaxed">
            <p className="mb-4">
              Whether you&apos;re a buyer, seller, tenant or landlord, we&apos;re committed to doing our very best by you, for your family and your future
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="home-aside" style={{ flex: "0 0 400px" }}>
          <img 
            src="https://www.bmestates.com/CMS/advert.jpg" 
            alt="" 
            title=""
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </section>
  );
}
