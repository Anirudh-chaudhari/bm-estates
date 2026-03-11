export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Sales", href: "/sales" },
  { name: "Lettings", href: "/lettings" },
  { name: "Register", href: "/register" },
  { name: "Valuation", href: "/valuation" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  propertyForSale: [
    { name: "Leicester", href: "/sales?location=leicester" },
    { name: "Leicestershire", href: "/sales?location=leicestershire" },
    { name: "Rutland", href: "/sales?location=rutland" },
  ],
  propertyToRent: [
    { name: "Leicester", href: "/lettings?location=leicester" },
    { name: "Leicestershire", href: "/lettings?location=leicestershire" },
    { name: "Rutland", href: "/lettings?location=rutland" },
  ],
  usefulLinks: [
    { name: "Valuation", href: "/valuation" },
    { name: "Register", href: "/register" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
};
