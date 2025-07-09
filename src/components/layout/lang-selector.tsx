import { usePathname, useRouter } from "next/navigation";
import { languages, cookieName } from "@/i18n/settings";
import { cn } from "@/lib/utils";

export function LangSelector() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1];
  const _otherLangs = languages.filter(lng => lng !== currentLang);

  const changeTo = (lng: string) => () => {
    const segments = pathname.split("/");
    segments[1] = lng;
    const newPath = segments.join("/") || "/";
    document.cookie = `${cookieName}=${lng}; path=/`;
    router.push(newPath);
  };

  return (
    <div className="flex self-center">
      <button
        className={cn("hover:text-primary focus:text-primary pr-2 mr-2 border-r", currentLang === "en" && "text-primary")}
        onClick={changeTo("en")}
      >
        EN
      </button>
      <button
        className={cn("hover:text-primary focus:text-primary", currentLang === "fr" && "text-primary")}
        onClick={changeTo("fr")}
      >
        FR
      </button>
    </div>
  );
}
