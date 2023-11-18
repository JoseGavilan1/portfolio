import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.gif" priority width="600" height="400" alt="Home GIF" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-4xl leading-tight md:mb-10">En el mundo digital de hoy, aprender a programar es mas que una ventaja  <br />
                            <span className="text-secondary">(es una necesidad).</span></h1>
                        <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                            Te doy la bienvenida a mi portfolio de desarrollo de software!
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/works" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ve mis proyectos
                            </a>
                            <a href="./contacto" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contáctame por acá ;)
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
