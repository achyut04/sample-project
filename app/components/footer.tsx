"use client";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      name: "Features",
      items: [
        { title: "Product Master", route: "/master/product-master" },
        { title: "Invoice", route: "/oms/invoice" },
        { title: "Picknote", route: "/oms/picknote" },
        { title: "Purchase Order", route: "/inbound/purchase-order" },
      ],
    },
    {
      name: "Account & Support",
      items: [
        { title: "User and Auth", route: "/settings/user-auth" },
        { title: "Import History", route: "/settings/import-history" },
        { title: "Privacy Policy", route: "/privacy" },
        { title: "Terms of Service", route: "/terms" },
        { title: "Contact Us", route: "/contact" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center border-t  bg-gray-700 text-white py-10 px-10">
      <div className="flex justify-center gap-10">
        {footerSections.map((section) => (
          <div key={section.name} className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">{section.name}</h3>
            <ul className="flex flex-col gap-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.route}
                    className=" hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className=" mt-10 pt-6 border-t border-gray-100 text-center text-sm ">
        © 2026 Medkart Pharmacy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
