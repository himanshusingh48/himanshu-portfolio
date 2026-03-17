import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
    {
        title: "Virtual Internship",
        issuer: "Forage",
        link: "https://drive.google.com/file/d/1NMa_0ae0WzHwOGT-449cWpG6cc1-3uKv/view?usp=drive_link",
    },
    {
        title: "Cloud Computing",
        issuer: "IIT Kharagpur (NPTEL)",
        link: "https://drive.google.com/file/d/1Wq1RNlR7aaKyu72nLcri628ALtAcEUwp/view?usp=drive_link",
    },
    {
        title: "Hackathon Participation",
        issuer: "Apna College",
        link: "https://drive.google.com/file/d/1yFex5FrrCLNbYM6oas3QCicy7OPQJU4N/view?usp=drive_link",
    },
    {
        title: "C Certification",
        issuer: "Neocolab",
        link: "https://drive.google.com/file/d/16yP7f0u-y8aZVTqpFTL1DuCd6WRAcCYN/view?usp=drive_link",
    },
    {
        title: "Java Certification",
        issuer: "Neocolab",
        link: "https://drive.google.com/file/d/1qUeIj6mmx_7cQj_mkaRhZ1ruQc8D6Hjg/view?usp=drive_link",
    }
]

export default function Certificates() {
    return (
        <section id="certificates" className="section">
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8">
                Certificates
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-2xl glass p-6 shadow-glow flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-sky-500/10 rounded-lg">
                                    <Award className="text-sky-400" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm mb-6">
                                Issued by: <span className="text-sky-300 font-medium">{cert.issuer}</span>
                            </p>
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors mt-auto w-fit"
                        >
                            <ExternalLink size={16} /> View Certificate
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
