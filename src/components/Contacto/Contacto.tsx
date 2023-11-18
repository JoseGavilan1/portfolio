"use client"
import { motion } from 'framer-motion'
import { fadeIn } from "@/utils/motionTransitions";

export function Contacto() {
    return (
        <div className="flex items-center justify-center h-screen">
            
            <div className="flex flex-col md:flex-row gap-x-5">
                <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10">
                    <motion.h1 className="mb-4 text-3xl"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        ¿Cómo puedes <span className="text-secondary">contactarme?</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-md">Tienes mis redes sociales, pero además puedes contactarme a mi correo personal: 
                        <span className="text-secondary"> gavilanhidalgojose@gmail.com</span>
                    </motion.p>
                    <motion.div/>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                  
                </motion.div>
            </div>
        </div>
    )
}

  