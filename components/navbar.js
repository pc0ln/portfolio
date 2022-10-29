import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.div
        initial={{
            y: -100,
            opacity: 0,

        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            duration: .2,
        }}
        className="w-full h-8 m-0 bg-neutral-600 flex flex-row sticky top-0 z-10 ">
            <Link href='/'>
                <a className="w-1/3 text-center text-slate-200 font-medium text-lg border-b-2 border-x-[1px] border-neutral-700">
                    Home
                </a>
            </Link>
            <Link href='/projects'>
                <a className="w-1/3 text-center text-slate-200 font-medium text-lg border-b-2 border-x-[1px] border-neutral-700">
                    Projects
                </a>
            </Link>
            <Link href='/contact'>
                <a className="w-1/3 text-center text-slate-200 text-lg font-medium border-b-2 border-x-[1px] border-neutral-700">
                    Contact
                </a>
            </Link>
        </motion.div>
    );
}