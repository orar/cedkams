'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ContactMap({ embedUrl, className }: { embedUrl: string, className?: string }) {
    return (
        <Card className={cn("mapouter relative text-right w-full h-[400px]", className)}>
            <div className="gmap_canvas overflow-hidden bg-none w-full h-[400px]">
                <iframe
                    className="gmap_iframe"
                    style={{height: '400px!important', border: '0px'}}
                    width="100%"
                    marginHeight={0}
                    marginWidth={0}
                    src={embedUrl}
                >
                </iframe>
            </div>
        </Card>
       
    )
}
