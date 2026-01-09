import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBkYXJrfGVufDB8fHx8MTczNjc4MTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Training equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZ3xlbnwwfHx8fDE3MzY3ODE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Training floor"
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBiYXJiZWxsfGVufDB8fHx8MTczNjc4MTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Strength equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMGRhcmt8ZW58MHx8fHwxNzM2NzgxODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Training space"
    }
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <span 
            className="inline-block px-3 py-1 mb-6 border"
            style={{ 
              borderColor: "rgba(138, 138, 122, 0.3)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: "#8A8A7A",
              fontWeight: 600
            }}
          >
            THE FACILITY
          </span>
          
          <h2 
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            WHERE WE<br />TRAIN
          </h2>
          
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: "#4A5240" }} />
          
          <p 
            className="text-base md:text-lg leading-relaxed"
            style={{ 
              fontWeight: 400,
              color: "#9A9A9A"
            }}
          >
            Professional equipment. Clean space. No distractions.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-20 md:mb-24">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: "linear-gradient(to top, rgba(15, 15, 15, 0.5), transparent)" 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div 
            className="bg-card p-10 md:p-12 border text-center"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <h3 
              className="mb-4 tracking-tight"
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.05em"
              }}
            >
              COME SEE IT
            </h3>
            
            <p 
              className="mb-0 max-w-xl mx-auto leading-relaxed"
              style={{ 
                fontSize: "0.9375rem",
                color: "#9A9A9A",
                lineHeight: "1.7"
              }}
            >
              Visit FitLab. Check the equipment. Meet the coaches. 
              See if this is where you belong.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
