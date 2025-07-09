"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { NavLinkType } from "@/components/layout/navbar"
import { Icons } from "../shared/icons";
import { cn } from "@/lib/utils";
import { fallbackLng } from "@/i18n/settings";
import React from "react";
import {useTranslation} from "@/i18n/client"
import { languages } from "@/i18n/settings";


export function NavMenu({ lang, title, links, scrolled }: { lang: string, title: string, links: NavLinkType[], scrolled: boolean }) {
if (languages.indexOf(lang) < 0) lang = fallbackLng
  const { t } = useTranslation(lang, 'nav')

  return (
    <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger className={cn(
                "font-semibold text-foreground/60 bg-transparent hover:text-primary",
                scrolled ? "text-[14px]" : "text-[16px] font-medium"
            )}>
                {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2 bg-gray-100 rounded-md p-2 bg-cover bg-center" style={{ backgroundImage: `url("/_static/stocks/s1.jpg")`}}>
                
              </li>
              {links.map((link, index) => (
                <ListItem key={index} href={link.href} title={t(link.key)} icon={link.icon!}>
                  {t(link.description!)}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  
  );
}

 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon: string;
  }
>(({ className, title, icon, children, ...props }, ref) => {

    const Icon = Icons[icon as keyof typeof Icons];
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
            <div className="text-sm font-medium leading-none flex items-center gap-2 group-hover:text-primary">
              <Icon className="h-6 w-6 " />
                {title}
            </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

