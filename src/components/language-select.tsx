import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LanguageIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LanguageSelect = () => {
  const t = useTranslations("languageSelect");
  const router = useRouter();

  const languageOptions = [
    {
      language: t("en"),
      flag: "/images/en-flag.png",
      name: t("english"),
      alt: t("flagEn"),
    },
    {
      language: t("pl"),
      flag: "/images/pl-flag.png",
      name: t("polish"),
      alt: t("flagPl"),
    },
  ];

  function handleLocaleChange(newLocale : string): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <LanguageIcon className="size-4" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.language}>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                onClick={() => {
                  handleLocaleChange(option.language);
                }}
              >
                <Image
                  className="h-auto w-auto"
                  src={option.flag}
                  alt={option.alt}
                  width={0}
                  height={0}
                />
                {option.name}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default LanguageSelect;
