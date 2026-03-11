import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e7ce8", color: "white", paddingTop: "40px" }}>
      <div className="maxwidth-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="footer-links">
          <img 
            src="https://www.bmestates.com/content/images/logo-footer-20y.png" 
            alt="BM Estates" 
            title="BM Estates" 
            className="footer-logo"
            style={{ height: "80px", marginBottom: "30px" }}
          />
          
          <div className="flex flex-wrap gap-8" style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "30px" }}>
            <div className="footer-col" style={{ minWidth: "150px" }}>
              <h4 className="font-semibold mb-4">Property for Sale</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li><Link href="/property-for-sale-in-syston" className="text-white/80 hover:text-white text-sm">Syston</Link></li>
                <li><Link href="/property-for-sale-in-bushby" className="text-white/80 hover:text-white text-sm">Bushby</Link></li>
                <li><Link href="/property-for-sale-in-thurmaston" className="text-white/80 hover:text-white text-sm">Thurmaston</Link></li>
                <li><Link href="/property-for-sale-in-belgrave" className="text-white/80 hover:text-white text-sm">Belgrave</Link></li>
                <li><Link href="/property-for-sale-in-oadby" className="text-white/80 hover:text-white text-sm">Oadby</Link></li>
              </ul>
            </div>

            <div className="footer-col" style={{ minWidth: "150px" }}>
              <h4 className="font-semibold mb-4">Property to Rent</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li><Link href="/property-to-rent-in-syston" className="text-white/80 hover:text-white text-sm">Syston</Link></li>
                <li><Link href="/property-to-rent-in-bushby" className="text-white/80 hover:text-white text-sm">Bushby</Link></li>
                <li><Link href="/property-to-rent-in-thurmaston" className="text-white/80 hover:text-white text-sm">Thurmaston</Link></li>
                <li><Link href="/property-to-rent-in-belgrave" className="text-white/80 hover:text-white text-sm">Belgrave</Link></li>
                <li><Link href="/property-to-rent-in-oadby" className="text-white/80 hover:text-white text-sm">Oadby</Link></li>
              </ul>
            </div>

            <div className="footer-col" style={{ minWidth: "150px" }}>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li><Link href="/aboutus" className="text-white/80 hover:text-white text-sm">About Us</Link></li>
                <li><Link href="/property-for-sale" className="text-white/80 hover:text-white text-sm">Property for Sale</Link></li>
                <li><Link href="/property-to-rent" className="text-white/80 hover:text-white text-sm">Property to Rent</Link></li>
                <li><Link href="/register" className="text-white/80 hover:text-white text-sm">Register</Link></li>
                <li><Link href="/valuation" className="text-white/80 hover:text-white text-sm">Property Valuation</Link></li>
              </ul>
            </div>

            <div className="footer-col" style={{ minWidth: "150px" }}>
              <h4 className="font-semibold mb-4">Find Us On</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a href="https://www.instagram.com/bmestates/" className="text-white/80 hover:text-white text-sm flex items-center gap-2">
                    <span>📷</span> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/bmestates" className="text-white/80 hover:text-white text-sm flex items-center gap-2">
                    <span>📘</span> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bmestates" className="text-white/80 hover:text-white text-sm flex items-center gap-2">
                    <span>🐦</span> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="affiliations flex flex-wrap gap-6 items-center justify-center py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", padding: "20px 0" }}>
            <img src="https://www.bmestates.com/Content/images/portals/rm.png" alt="" style={{ height: "30px", filter: "brightness(0) invert(1)" }} />
            <img src="https://www.bmestates.com/Content/images/portals/zp.png" alt="" style={{ height: "30px", filter: "brightness(0) invert(1)" }} />
            <img src="https://www.bmestates.com/Content/images/portals/otm.png" alt="" style={{ height: "30px", filter: "brightness(0) invert(1)" }} />
            <img src="https://www.bmestates.com/Content/images/portals/tpos.png" alt="" style={{ height: "30px", filter: "brightness(0) invert(1)" }} />
            <img src="https://www.bmestates.com/Content/images/portals/ms.png" alt="" style={{ height: "30px", filter: "brightness(0) invert(1)" }} />
          </div>
        </div>

        <div className="eit-footer" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", padding: "20px 0", textAlign: "center" }}>
          <div className="eit-footer-legal text-white/80 text-sm">
            BM Estates <span> | </span>312-314 St. Saviours Road, Leicester, LE5 4HJ <span> | </span>Registered in England: 09349176 <span> | </span>VAT Number: 241 4556 22 <span> | </span>
            <a href="https://media.estatesit.uk/data/BMESTATES/cmp.pdf" className="text-white/80 hover:text-white">Client Money Protection Membership No: 58658351</a>
          </div>
          <div className="mt-2 text-white/60 text-sm">
            Content © 2026 BM Estates. Website Built &amp; Powered by <a href="https://www.estatesit.com" className="text-white/80 hover:text-white" target="_blank" rel="noopener">Estate Agent Software</a> from Estates IT
          </div>
        </div>
      </div>
    </footer>
  );
}
