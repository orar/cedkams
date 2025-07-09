"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu, X } from "lucide-react";

import {links} from "@/config/nav";
import {fallbackLng, languages} from "@/i18n/settings";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import { ModeToggle } from "./mode-toggle";
import { useTranslation } from "@/i18n/client";
import { useScroll } from "@/hooks/use-scroll";



export function NavMobile({ lang }: { lang: string }) {
  const scrolled = useScroll({ shrink: 60, expand: 40 });
  
  //const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const selectedLayout = useSelectedLayoutSegment();
  if (languages.indexOf(lang) < 0) lang = fallbackLng
  const { t } = useTranslation(lang, 'nav')

  const configMap = {
    // docs: docsConfig.mainNav,
  };

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(scrolled ? `top-[10px]` : "top-[22px]",
          "fixed right-2 z-50 rounded-full p-2 transition-all duration-300 hover:bg-muted focus:outline-none active:bg-muted min-[960px]:hidden",
          open && "hover:bg-muted active:bg-muted",
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>

      <nav
        className={cn(
          "fixed inset-0 z-20 hidden w-full overflow-auto bg-gradient-to-br from-white via-zinc-500/40 via-50% to-white backdrop-blur-[10px] px-5 py-16 lg:hidden",
          open && "block",
        )}
      >
        <ul className="grid divide-y divide-muted pt-20">
          {links && links.length > 0 && links.map((link, index) => link.href ? (
            <li key={`nav-${index}-${link.href}`} className="py-3">
              <Link
                href={link.href!}
                onClick={() => setTimeout(() => setOpen(false), 200)}
                className="flex w-full font-medium capitalize active:text-primary transition-all duration-100 active:translate-x-3"
              >
                {t(link.key)}
              </Link>
            </li>
          ) : (
            <li key={`nav-${index}-${link.key}`} className="py-3">
              <div className="text-lg font-medium capitalize">{t(link.key)}</div>
              <ul className="grid divide-y divide-muted pt-3 pl-3">
                {link.hrefs && link.hrefs.length > 0 && link.hrefs.map((href, hrefIndex) => (
                  <li key={`nav-${index}-${hrefIndex}-${href.href}`} className="py-3">
                    <Link
                      href={href.href!}
                      onClick={() => setTimeout(() => setOpen(false), 200)}
                    >
                      {t(href.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

      </nav>
    </>
  );
}
