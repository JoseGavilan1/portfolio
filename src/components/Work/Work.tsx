"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from 'framer-motion'
import { cardContent } from "./Work.data"
import { useState } from "react"


// ... (existing imports)

// ... (existing imports)

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    const cardVariants = {
        expanded: {
            height: "500px", // Establece una altura fija para las tarjetas expandidas
            opacity: 1,
            zIndex: 2,
        },
        collapsed: {
            height: "400px", // Establece una altura fija para las tarjetas colapsadas
            opacity: 0.2,
            zIndex: 1,
        },
    };

    return (
        <div className="h-screen">
            <div className="pb-32 md:min-h-screen mt-28 md:mt-0 flex justify-center items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl text-center md:text-4-xl"
                    >
                        Mis últimos <span className="text-red-600">trabajos realizados.</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-wrap justify-center gap-5"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div
                                key={id}
                                className={`card cursor-pointer bg-auto bg-no-repeat bg-center rounded-[20px] ${id ===
                                    expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1,
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`,
                                    flex: '0 0 calc(20% - 10px)', // Ajusta el tamaño de las tarjetas
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
