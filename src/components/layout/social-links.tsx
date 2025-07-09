import {X} from "@/components/shared/icons/x";
import {Icons} from "@/components/shared/icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export function SocialLinks () {

  return (
    <>
      <span className="px-2 py-2 group rounded-full hover:bg-primary/20 transition-all duration-300">
        <Link href="https://x.com/cedkam" target="_blank">
            <X className="size-3 group-hover:text-primary" />
        </Link>
      </span>
      <span className="px-2 py-2 group rounded-full hover:bg-primary/20 transition-all duration-300">
        <Link href="https://www.linkedin.com/company/cedkam" target="_blank">
            <Icons.linkedin className="size-4 group-hover:text-primary" />
        </Link>
      </span>
      <span className="px-2 py-2 group rounded-full hover:bg-primary/20 transition-all duration-300"> 
        <Link href="https://www.facebook.com/cedkam" target="_blank">
            <Icons.facebook className="size-4 group-hover:text-primary" />
        </Link>
      </span>
    </>
  )
}



export function LangSelectorr() {

  const changeTo = (lng: string) => () => {

  }

  return (
    <div className="flex self-center">
      <button
        className="hover:text-primary focus:text-primary pr-2 mr-2 border-r"
        onClick={changeTo("en")}
      >
        EN
      </button>
      <button
        className="hover:text-primary focus:text-primary"
        onClick={changeTo("fr")}
      >
        FR
      </button>
    </div>
  )
}