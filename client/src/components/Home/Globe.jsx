import { motion } from "framer-motion";
import HouseBox from "../../assets/house-box.jpg"; 
import InternationalImg from "../../assets/international.png";
import WarehousingImg from "../../assets/warehouse.jpg";
import PetImg from "../../assets/pet.png";

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

        {/* 1. Domestic Relocation - Image Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          {/* Text Left */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Domestic Relocation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide seamless and efficient relocation services within India, ensuring your goods are transported safely and on time.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2 flex justify-center">
            <img src={HouseBox} alt="Domestic Relocation" className="rounded-2xl shadow-lg w-full md:w-4/5" />
          </div>
        </motion.div>

        {/* 2. International Relocation - Image Left */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          {/* Text Right */}
          <div className="md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              International Relocation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 60+ years of experience, we specialize in smooth global relocations, ensuring your possessions arrive safely anywhere in the world.
            </p>
          </div>
          {/* Image Left */}
          <div className="md:w-1/2 flex justify-center">
            <img src={InternationalImg} alt="International Relocation" className="rounded-2xl shadow-lg w-full md:w-4/5" />
          </div>
        </motion.div>

        {/* 3. Warehousing - Image Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          {/* Text Left */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Warehousing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art warehousing facilities provide secure and organized storage solutions for your belongings and goods.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2 flex justify-center">
            <img src={WarehousingImg} alt="Warehousing" className="rounded-2xl shadow-lg w-full md:w-4/5" />
          </div>
        </motion.div>

        {/* 4. Pet Relocation - Image Left */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          {/* Text Right */}
          <div className="md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pet Relocation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We care for your furry friends like family, offering safe and stress-free relocation services for your pets.
            </p>
          </div>
          {/* Image Left */}
          <div className="md:w-1/2 flex justify-center">
            <img src={PetImg} alt="Pet Relocation" className="rounded-2xl shadow-lg w-full md:w-4/5" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
