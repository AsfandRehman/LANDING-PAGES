"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

// Gallery images data - using existing images from the portfolio
const galleryImages = [
  {
    id: 1,
    src: "/images/saim.jpg",
    alt: "Saim Ali Ahmad - Professional Portrait",
    title: "Professional Portrait",
    description: "Official professional portrait of Saim Ali Ahmad",
    category: "professional"
  },
  {
    id: 2,
    src: "/images/saim1.jpg",
    alt: "Saim Ali Ahmad - Business Portrait",
    title: "Business Portrait",
    description: "Saim Ali Ahmad in professional business setting",
    category: "professional"
  },
  {
    id: 3,
    src: "/images/saim2.jpg",
    alt: "Saim Ali Ahmad - Executive Photo",
    title: "Executive Photo",
    description: "Executive portrait of Saim Ali Ahmad",
    category: "professional"
  },
  {
    id: 4,
    src: "/images/saim3.jpg",
    alt: "Saim Ali Ahmad - Professional Headshot",
    title: "Professional Headshot",
    description: "Professional headshot of Saim Ali Ahmad",
    category: "professional"
  },
  {
    id: 5,
    src: "/images/saimabout.jpg",
    alt: "Saim Ali Ahmad - About Photo",
    title: "About Photo",
    description: "Saim Ali Ahmad sharing his entrepreneurial journey",
    category: "casual"
  },
  {
    id: 6,
    src: "/images/HQ.jpg",
    alt: "ZSIDEO CONTENT Headquarters",
    title: "Company Headquarters",
    description: "ZSIDEO CONTENT LLC headquarters and workspace",
    category: "workspace"
  },
  {
    id: 7,
    src: "/images/hq1.jpg",
    alt: "ZSIDEO CONTENT Office",
    title: "Office Space",
    description: "Modern office space at ZSIDEO CONTENT",
    category: "workspace"
  },
  {
    id: 8,
    src: "/images/hq2.jpg",
    alt: "ZSIDEO CONTENT Workspace",
    title: "Creative Workspace",
    description: "Creative workspace where content magic happens",
    category: "workspace"
  },
  {
    id: 9,
    src: "/images/1m.jpg",
    alt: "Million Dollar Achievement",
    title: "Million Dollar Milestone",
    description: "Celebrating the million-dollar milestone achievement",
    category: "achievements"
  },
  {
    id: 10,
    src: "/images/saim.JPG",
    alt: "Saim Ali Ahmad",
    title: "First $1000 Client",
    description: "Celebrating the first $1000 client milestone",
    category: "achievements"
  },
  {
    id: 11,
    src: "/images/100k.jpg",
    alt: "100K Achievement",
    title: "100K Milestone",
    description: "Reaching the 100K milestone in business",
    category: "achievements"
  },
  {
    id: 12,
    src: "/images/firstclient.jpg",
    alt: "First Client Success",
    title: "First Client Success",
    description: "The journey begins with the first client success",
    category: "achievements"
  },
   {
    id: 13,
    src: "/images/SaimALiAhmad.jpg",
    alt: "Saim Ali Ahmad",
    title: "Saim Ali Ahmad",
    description: "The journey begins with the first client success",
    category: "achievements"
  },
   {
    id: 14,
    src: "/images/SaimAliAhmad.jpg",
    alt: "Saim Ali Ahmad",
    title: "Saim Ali Ahmad",
    description: "The journey begins with the first client success",
    category: "achievements"
  }
   
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "professional", label: "Professional" },
  { id: "workspace", label: "Workspace" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team" },
  { id: "casual", label: "Casual" },
  { id: "achievements", label: "Achievements" }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B0B10] text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0B10] via-[#0B0B10] to-[#0A0A0F]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,128,0.1),_transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Saim Ali Ahmad
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl">
              Professional photos and moments from the journey of building ZSIDEO CONTENT LLC and other ventures.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-[#FF0080] text-white shadow-[0_0_20px_rgba(255,0,128,0.3)]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-white/70">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-auto">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={1500}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              
              {/* Download button */}
              <a
                href={selectedImage.src}
                download={`saim-ali-ahmad-${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
            
            {/* Image info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/70">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

