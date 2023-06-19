import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import { BsChevronDown } from "react-icons/bs";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11, url: "/category/jordan" },
  { id: 2, name: "Sneakers", doc_count: 8, url: "/category/sneakers" },
  {
    id: 3,
    name: "Running shoes",
    doc_count: 64,
    url: "/category/running shoes",
  },
  {
    id: 4,
    name: "Football shoes",
    doc_count: 107,
    url: "/category/football shoes",
  },
];
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          href={submenu.url}
                          key={submenu.id}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="px-8 py-4 border-b flex justify-between">
                            {submenu.name}
                            <span className="opacity-50 text-sm">
                              {submenu.doc_count}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
