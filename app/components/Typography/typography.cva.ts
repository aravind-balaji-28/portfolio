// typography.cva.ts
import { cva } from "class-variance-authority";

export const typographyCva = cva(
    // Base (never overridden)
    "font-base leading-[1.12]",

    {
        variants: {
            variant: {
                h1: "text-[4.375rem] text-black font-bold",
                h2: "text-4xl text-black font-bold",
                h3: "text-[1.875rem] text-black font-semibold",
                h4: "text-[1.75rem] text-black font-semibold",
                h5: "text-2xl text-black font-semibold",
                h6: "text-xl text-black font-medium",
                body: "text-base text-blackfont-normal",
            },
        },

        defaultVariants: {
            variant: "body",
        },
    }
);
