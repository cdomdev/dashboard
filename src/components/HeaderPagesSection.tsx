import { Back } from "./ui/custom/buttons/Back"
import Link from "next/link"
import { More } from "./icons"

interface PropSecction {
    title: string,
    url: string,
    className?: string
    viewBtn?: boolean
    viewCount?: boolean
    textBtn?: string
    href: string
    catCount?: number
}

export function HeaderPagesSection({ className, title, url, viewBtn = false, textBtn, href, viewCount = false, catCount = 0
}: PropSecction) {
    return (
        <section className={` ${className} w-full lg:px-10 pt-7 pr-4 flex flex-col gap-1`}>
            <div className="flex justify-between items-center">
                <Back url={url} />
                {viewBtn &&
                    <Link href={href} className="bg-blue-600 hover:bg-blue-700 duration-150 text-white py-2 px-4 rounded-lg flex items-center gap-2">
                        <More />
                        {textBtn}
                    </Link>
                }
            </div>
            <h1 className="text-base md:text-lg font-semibold">
                {title}
            </h1>
            {viewCount &&
                <span>
                    Total {title.toLocaleLowerCase()}:  <strong>{catCount}</strong>
                </span>}

        </section>
    )
}