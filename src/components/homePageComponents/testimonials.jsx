import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {
   Quote,
   Star,
   Award,
   TrendingUp,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";

const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const goldFrom = "#E4C46A";
const goldMid = "#C9A227";
const goldTo = "#9C7C1D";

const testimonials = [
   {
      id: 1,
      name: "Imen",
      role: "Ride Customer",
      image: "🚖",
      content:
         "Booked a ride on ALLOGO and the driver arrived in minutes. Smooth, clean, and professional.",
      rating: 5,
      achievement: "Top Ride Experience",
   },
   {
      id: 2,
      name: "Rachid",
      role: "Delivery Sender",
      image: "🚚",
      content:
         "Sent an urgent package across town. ALLOGO delivered it faster than I expected!",
      rating: 5,
      achievement: "Express Delivery User",
   },
   {
      id: 3,
      name: "Meriam",
      role: "Food Lover",
      image: "🍔",
      content:
         "My burger arrived hot and fresh. ALLOGO became my favorite food delivery app!",
      rating: 4,
      achievement: "Food Delivery Fan",
   },
   {
      id: 4,
      name: "Sami",
      role: "Scooter Rider",
      image: "🛵",
      content:
         "Quick scooter booking with great prices. Perfect for quick trips around the city.",
      rating: 5,
      achievement: "Urban Rider",
   },
   {
      id: 5,
      name: "Nawal",
      role: "Grocery Shopper",
      image: "🛒",
      content:
         "Ordered groceries through ALLOGO. Everything arrived packed neatly and right on time.",
      rating: 5,
      achievement: "Smart Shopper",
   },
   {
      id: 6,
      name: "Yanis",
      role: "Home Service Client",
      image: "🏠",
      content:
         "Needed quick assistance at home—ALLOGO connected me instantly with a reliable service provider.",
      rating: 4,
      achievement: "Home Helper User",
   },
   {
      id: 7,
      name: "Khaled",
      role: "Tow Truck Request",
      image: "🪝",
      content:
         "My car broke down on the highway. ALLOGO towing saved the day with fast support!",
      rating: 5,
      achievement: "Emergency Rescue",
   },
   {
      id: 8,
      name: "Dina",
      role: "Key Service User",
      image: "🔑",
      content:
         "Lost my keys and ALLOGO locksmith arrived quickly. Super reliable!",
      rating: 5,
      achievement: "Quick Fix Client",
   },
];

export default function TestimonialsSwiper() {
   return (
      <section className="relative bg-white text-black py-28 px-6 overflow-hidden">
         {/* Background Glow with Gold Brand Colors */}
         <div className="absolute inset-0 pointer-events-none">
            <div
               className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] blur-[160px]"
               style={{ background: `${goldMid}33` }}
            />
            <div
               className="absolute bottom-10 right-1/3 w-[300px] h-[300px] blur-[120px]"
               style={{ background: `${goldFrom}22` }}
            />
         </div>

         {/* Header */}
         <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center mb-20 relative z-10"
         >
            <div className="inline-flex items-center gap-2 bg-black/5 px-6 py-3 rounded-full border border-black/10 shadow-sm mb-6 backdrop-blur-md">
               <TrendingUp className="w-4 h-4" style={{ color: goldMid }} />
               <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: goldMid }}
               >
                  Success Stories
               </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
               Hear from Our{" "}
               <span
                  className="text-transparent bg-clip-text"
                  style={{
                     backgroundImage: `linear-gradient(to right, ${goldFrom}, ${goldMid}, ${goldTo})`,
                  }}
               >
                  Amazing Users
               </span>
            </h2>

            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
               Real experiences from people who trust ALLOGO’s multi-service
               ecosystem.
            </p>
         </motion.div>

         {/* Custom Arrows */}
         <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 swiper-button-prev-custom cursor-pointer">
            <ChevronLeft
               className="w-12 h-12 p-3 rounded-full bg-white/60 shadow-md border border-black/10 transition-all duration-300"
               style={{ color: goldMid }}
            />
         </div>

         <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 swiper-button-next-custom cursor-pointer">
            <ChevronRight
               className="w-12 h-12 p-3 rounded-full bg-white/60 shadow-md border border-black/10 transition-all duration-300"
               style={{ color: goldMid }}
            />
         </div>

         {/* Swiper */}
         <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{
               clickable: true,
               bulletClass: "swiper-pagination-bullet !bg-black/20",
               bulletActiveClass: "!w-4 !h-4",
               renderBullet: (index, className) =>
                  `<span class="${className}" style="background:${goldMid}"></span>`,
            }}
            navigation={{
               nextEl: ".swiper-button-next-custom",
               prevEl: ".swiper-button-prev-custom",
            }}
            className="relative z-10 max-w-4xl mx-auto"
         >
            {testimonials.map((t, i) => (
               <SwiperSlide key={t.id}>
                  <motion.div
                     initial={{ opacity: 0, y: 60, scale: 0.95 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.7, delay: i * 0.1 }}
                     className="bg-white/40 backdrop-blur-xl rounded-3xl p-12 text-center mx-6 border shadow-xl transition-all duration-500 hover:scale-[1.03]"
                     style={{
                        borderColor: `${goldMid}55`,
                        boxShadow: `0 0 45px ${goldMid}33`,
                     }}
                  >
                     <Quote
                        className="w-14 h-14 mx-auto mb-6"
                        style={{ color: goldMid }}
                     />

                     <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8 italic">
                        “{t.content}”
                     </p>

                     <div className="flex flex-col items-center gap-3">
                        <div
                           className="text-7xl p-5 rounded-full border-4 bg-white/70 shadow-md"
                           style={{
                              borderColor: `${goldFrom}`,
                              boxShadow: `0 0 25px ${goldFrom}55`,
                           }}
                        >
                           {t.image}
                        </div>

                        <h3 className="text-2xl font-bold mt-4">{t.name}</h3>
                        <p
                           className="text-sm uppercase tracking-widest"
                           style={{ color: goldMid }}
                        >
                           {t.role}
                        </p>

                        <div className="flex gap-1 mt-2">
                           {[...Array(t.rating)].map((_, i) => (
                              <Star
                                 key={i}
                                 className="w-6 h-6"
                                 style={{ color: goldFrom, fill: goldFrom }}
                              />
                           ))}
                        </div>

                        <div
                           className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border shadow bg-white/50"
                           style={{
                              borderColor: `${goldMid}`,
                              color: goldMid,
                           }}
                        >
                           <Award className="w-4 h-4" />
                           <span className="text-sm font-semibold">
                              {t.achievement}
                           </span>
                        </div>
                     </div>
                  </motion.div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}
