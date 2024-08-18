"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function SectionDivider({}: Props) {
  return (
    <motion.div
    className="bg-gray-200 my-24 h-12 w-0.5 rounded-full sm:h-16 sm:w-1 dark:bg-opacity-20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
    >
    </motion.div>
  )
}