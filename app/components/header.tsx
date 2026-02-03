"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const navItems = [
    {
      name: "Master",
      items: [
        { title: "Product Master", route: "/master/product-master" },
        { title: "Batch Master", route: "/master/batch-master" },
        { title: "Store Master", route: "/master/store-master" },
        { title: "Vendor Master", route: "/master/vendor-master" },
      ],
    },
    {
      name: "OMS",
      items: [
        { title: "Sales Order", route: "/oms/sales-order" },
        { title: "Picknote", route: "/oms/picknote" },
        { title: "Invoice", route: "/oms/invoice" },
      ],
    },
    {
      name: "Inbound",
      items: [
        { title: "Purchase Order", route: "/inbound/purchase-order" },
        { title: "Gatepass", route: "/inbound/gatepass" },
        { title: "GRN", route: "/inbound/grn" },
        { title: "Purchase Invoice", route: "/inbound/purchase-invoice" },
      ],
    },
    {
      name: "Settings",
      items: [
        { title: "User and Auth", route: "/settings/user-auth" },
        { title: "Import History", route: "/settings/import-history" },
      ],
    },
  ];

  const handleLogout = () => {
    redirect("/login");
  };
  return (
    <nav className=" flex border-b 3 border-black-500 items-center justify-between px-0 bg-gray-700 text-white px-3">
      <div>
        <Link href="/landing">
          <Image
            src="/assets/icons/medkart_pharmacy_logo.jpg"
            alt="Logo"
            width={50}
            height={20}
          />
        </Link>
      </div>
      <ul className="flex gap-4">
        {navItems.map((menu) => (
          <li key={menu.name} className="group relative">
            <button className="hover:text-blue-600 cursor-pointer hover:bg-slate-200 p-3 transition-colors">
              {menu.name}
            </button>

            {menu.name !== "Home" && (
              <div className="top-full absolute hidden group-hover:flex flex-col bg-white whitespace-nowrap border 2 border-gray-900 rounded transition-colors text-black">
                {menu.items.map((item) => (
                  <Link
                    className="hover:text-white hover:underline hover:bg-gray-900 p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    key={item.title}
                    href={item.route}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="p-2 relative group">
        <div>
          <Image
            src="/assets/icons/user-profile.svg"
            alt="Logo"
            width={30}
            height={10}
          />
        </div>
        <div className="absolute top-full right-1 hidden group-hover:flex flex-col bg-white whitespace-nowrap border 2 border-slate-500 rounded transition-colors">
          <button
            className="hover:text-white cursor-pointer hover:underline hover:bg-gray-900 p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {/* <div className="relative group">
        <div className="hover:text-blue-600 cursor-pointer hover:bg-slate-200 p-3 transition-colors">
          <span>User</span>
        </div>
        <div className="absolute top-full right-0 hidden group-hover:flex flex-col bg-white whitespace-nowrap border 2 border-slate-500 rounded transition-colors">
          <button
            className="hover:text-white cursor-pointer hover:underline hover:bg-gray-900 p-2 transition-colors text-black"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div> */}
    </nav>
  );
};

export default Header;
