import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const cards = [
        {
            img: "/img/p1.png",
            title: "Pepagora",
            desc: "Discover Pepagora, the trusted AI-powered B2B marketplace. Connect with verified suppliers, buyers & partners worldwide. Grow your business with confidence.",
        },
        {
            img: "/img/kp.png",
            title: "Koinpark",
            desc: "Koinpark is the best cryptocurrency exchange in India. Trade 250+ cryptocurrencies with INR on our secure crypto trading app packed with top features.",
        },
        {
            img: "/img/wat.png",
            title: "Waateensap",
            desc: "WateenSwap is a leading decentralized exchange (AMM) on Binance Smart Chain, enabling users to swap BEP-20 tokens with high trading volumes.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center p-8 w-full">
            <div className="flex flex-wrap gap-10 justify-center w-full">
                {cards.map((card, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={index}
                            className="relative w-full max-w-[429px] aspect-[429/271] rounded-[10px] overflow-hidden shadow-2xl group"
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    style={{ display: "block" }}
                                    className="absolute inset-0 w-full h-full object-cover block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                            <div
                                className={`absolute inset-0 p-6 flex flex-col justify-center text-white
                bg-black/95
                transition-[clip-path] duration-700 ease-in-out
                ${isActive
                                        ? "[clip-path:circle(150%_at_20%_85%)]"
                                        : "[clip-path:circle(0%_at_20%_85%)]"
                                    }`}
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-sm opacity-80">
                                    {card.desc}
                                </p>
                            </div>

                            <button
                                onClick={() => setActiveIndex(isActive ? null : index)}
                                className={`absolute -bottom-6 -left-6 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-30 shadow-xl backdrop-blur-md border border-white/10 ${isActive
                                        ? "bg-[#ff006e] shadow-pink-500/40"
                                        : "bg-[#3a86ff] shadow-blue-500/40"
                                    } hover:scale-110 active:scale-95`}
                            >
                                <span
                                    className={`transition-transform duration-500 
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isActive ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
                                >
                                    <FontAwesomeIcon className="rotate-180" size="xs" icon={isActive ? faUpRightAndDownLeftFromCenter : faDownLeftAndUpRightToCenter} />
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}