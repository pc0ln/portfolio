import Link from "next/link";
import React from "react";
import { motion, useViewportScroll } from "framer-motion"

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
        className="w-full h-8 m-0 bg-slate-900 flex flex-row sticky top-0">
            <Link href='/'>
                <a className="w-1/3 text-center bg-slate-300 text-red-800 text-lg border-2 border-sky-800">
                    Home
                </a>
            </Link>
            <Link href='/projects'>
                <a className="w-1/3 text-center bg-slate-400 text-red-700 text-lg border-2 border-sky-800">
                    Projects
                </a>
            </Link>
            <Link href='/contact'>
                <a className="w-1/3 text-center bg-slate-500 text-red-600 text-lg border-2 border-sky-800">
                    Contact
                </a>
            </Link>
        </motion.div>
    );
}