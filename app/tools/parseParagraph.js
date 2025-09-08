import Image from "next/image"
import Link from "next/link"

export default function parseParagraph(obj) {
    if (obj.type === "paragraph") {
        return (
            <div className={"inline-block flex flex-flow flex-row items-center"}>
                {
                    obj.parts.map((part, index) => {
                        if (part.type === "text") {
                            return (
                                <span key={index}>{part.value}</span>
                            )
                        } else if (part.type === "italic") {
                            return (
                                <span className={"italic"} key={index}>{part.value}</span>
                            )
                        } else if (part.type === "latex") {
                            const params = new URLSearchParams([ [ "from", part.value ], [ "color", "white" ] ]);
                            return (
                                <span className={"inline-block align-middle"} key={index}>
                                    <img src={`https://math.vercel.app?${params.toString()}`} alt={part.value} />
                                </span>
                            )
                        } else if (part.type === "ref") {
                            return (
                                <Link href={`/entry/${part.value}`} className={"underline"} key={index}>{part.label}</Link>
                            )
                        }
                    })
                }
            </div>
        )
    } else if (obj.type === "latex") {
        const params = new URLSearchParams([ [ "from", obj.value ], [ "color", "white" ] ]);
        return (
            <img src={`https://math.vercel.app?${params.toString()}`} alt={obj.from} />
        )
    }
}