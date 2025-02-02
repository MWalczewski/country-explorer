"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import LanguageSelect from "./language-select";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const t = useTranslations("navbar");

  const navigation = [
    { name: t("homePage"), href: "/" },
    { name: t("favourites"), href: "/favourites" },
    { name: t("explore"), href: "/explore" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <>
      <Disclosure
        as="nav"
        className="sticky bg-slate-400 dark:bg-red-700 top-0 shadow-md flex justify-center items-center py-7"
      >
        {({ open }) => (
          <>
            <div className="container bg-slate-600 dark:bg-red-950">
              <div className="">
                <div className="">
                  <div className="hidden items-center sm:ml-6 xl:flex">
                    <div id="navbar-links" className="flex gap-2 sm:gap-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="nav-btn px-2 py-2 text-slate-800 dark:text-slate-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <ThemeSwitch />
                    <LanguageSelect />
                  </div>
                </div>

                <div className="inset-y-0 right-0 mr-1 flex items-center gap-1 text-xs sm:static sm:inset-auto sm:ml-2 sm:mr-2 sm:gap-2 sm:pr-0 sm:text-sm md:gap-3">
                  <div className="inset-y-0 left-0 flex items-center xl:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="relative inline-flex flex-shrink-0 items-center justify-center rounded-md text-black  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <span className="">
                        {open ? (
                          <ChevronUpIcon className="h-5 w-5" />
                        ) : (
                          <ChevronDownIcon className="h-5 w-5" />
                        )}
                      </span>
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="xl:hidden">
              <div id="navbar-links" className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="nav-btn block px-2 py-2"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
