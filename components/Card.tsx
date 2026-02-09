import Image from "next/image"

export default function Card({ logo, title, desc }: { logo: String, title: String, desc: String }) {
    return (
        <div className="flex gap-x-5">
            <span>
                <Image className="m-3" src={`/${logo}`} height={64} width={64} alt="logo" />
            </span>
            <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">{title}</h3>

                <p className="whitespace-pre-line">
                    {desc}
                </p>

                <a href="" className="text-blue-700">Learn More →</a>

            </div>
        </div>
    )
}