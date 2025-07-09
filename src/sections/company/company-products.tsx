import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Tr} from "@/types";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {ProductItemType} from "@/types/sitesettings";


export function CompanyProducts({ t, config, email }: { t: Tr, config: any, email: string}) {

  return (
    <section className="py-12 md:py-20">
      <MaxWidthWrapper className="space-y-12">
        <div>
          <h3 className="text-4xl md:text-5xl font-urban font-semibold">
            {config.products__products_title}
          </h3>
        </div>
        <div>
          <ProductList
            t={t}
            email={email}
            products={config.products__products}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export function ProductList({ t, products, email }: { t: Tr, products: ProductItemType[], email: string }) {

  return (
    <div>
      {products.map((product, idx) => (
          <div key={idx} className="grid grid-cols-1 grid-cols-5 gap-x-12 py-10 border-b border-foreground/20">
            <div className="col-span-1 md:col-span-2 space-y-5">
              <h3 className="text-urban text-3xl font-light">{product.name}</h3>
              <p className="text-foreground/60 no-underline text-base">{product.description}</p>
              <div>
                <Link href={`mailto:${email}?subject=${product.name}`}>
                  <Button size="sm">
                    {t("company.inquire_now")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex space-x-10 py-3">
              <Image
                src={product.cover_img.img_url}
                alt={product.cover_img.alt}
                width={300}
                height={150}
                style={{ height: 170}}
                className="rounded-xl pointer-events-none"
              />
              <Image
                src={product.gallery[0].img_url}
                alt={product.gallery[0].alt}
                width={300}
                height={150}
                style={{ height: 170}}
                className="rounded-xl pointer-events-none"
              />
            </div>
          </div>
      ))}
    </div>
  )
}