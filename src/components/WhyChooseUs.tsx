// import React from "react";
// import Image from "next/image";

// const stats = [
//   {
//     label: "Activity information",
//     value: "$6,581",
//     desc: "Content Optimization Expertise",
//     date: "SEP 18",
//     data: [
//       { label: "Data A", value: "7.95K", change: "+3.01%" },
//       { label: "Data B", value: "4.38K", change: "-1.03%" },
//       { label: "Data A", value: "7.95K", change: "+3.01%" },
//       { label: "Data B", value: "4.38K", change: "-1.03%" },
//     ],
//   },
//   {
//     label: "PROJECT COMPLETED",
//     value: "530+",
//     desc: "With over 530 successful SEO projects completed, rankings.",
//   },
//   {
//     label: "SATISFIED CUSTOMERS",
//     value: "853k+",
//     desc: "With over 530 successful SEO projects completed, rankings.",
//   },
//   {
//     label: "ACHIEVE AWARDS",
//     value: "850+",
//     desc: "With over 530 successful SEO projects completed, rankings.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="relative bg-black text-white py-20 overflow-hidden">
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
//         {/* Left Side */}
//         <div className="flex-1 flex flex-col gap-8">
//           <span className="uppercase text-xs tracking-widest text-[#bff747] font-semibold mb-2">
//             * Why Choose Us
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             Expert <span className="text-[#bff747]">strategies</span>, proven<br />SEO success
//           </h2>
//           <button className="flex items-center gap-2 bg-[#bff747] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#d4ff70] transition-colors w-fit">
//             Contact Us
//             <span className="inline-block bg-black rounded-full p-1 ml-2">
//               <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//                 <path d="M5 12h14M13 6l6 6-6 6" stroke="#bff747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </span>
//           </button>
//         </div>
//         {/* Center Stats */}
//         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Activity Card */}
//           <div className="bg-zinc-900/80 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
//             <div className="flex items-center justify-between">
//               <span className="text-gray-400 text-sm">{stats[0].label}</span>
//               <span className="text-xs text-gray-500">Lorem ipsum</span>
//             </div>
//             <div className="flex flex-col items-center justify-center">
//               {/* Gauge */}
//               <svg width="100" height="60" viewBox="0 0 100 60">
//                 <path
//                   d="M10,50 A40,40 0 0,1 90,50"
//                   fill="none"
//                   stroke="#bff747"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                 />
//                 <text x="50" y="40" textAnchor="middle" fill="#bff747" fontSize="18" fontWeight="bold">
//                   {stats[0].value}
//                 </text>
//               </svg>
//             </div>
//             <div className="flex justify-between text-xs text-gray-400">
//               {stats[0].data.map((d, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <span>{d.label}</span>
//                   <span className="font-bold text-white">{d.value}</span>
//                   <span className={d.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
//                     {d.change}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="bg-zinc-800 text-xs px-2 py-1 rounded">{stats[0].date}</span>
//               <span className="text-[#bff747] text-xs">{stats[0].desc}</span>
//             </div>
//           </div>
//           {/* Project Completed */}
//           <div className="bg-zinc-900/80 rounded-2xl p-6 flex flex-col justify-center shadow-lg">
//             <span className="text-3xl font-bold text-[#bff747] mb-2">{stats[1].value}</span>
//             <span className="text-gray-300 text-sm">{stats[1].desc}</span>
//           </div>
//           {/* Satisfied Customers */}
//           <div className="bg-zinc-900/80 rounded-2xl p-6 flex flex-col justify-center shadow-lg">
//             <span className="text-3xl font-bold text-[#bff747] mb-2">{stats[2].value}</span>
//             <span className="text-gray-300 text-sm">{stats[2].desc}</span>
//           </div>
//           {/* Achieve Awards */}
//           <div className="bg-zinc-900/80 rounded-2xl p-6 flex flex-col justify-center shadow-lg">
//             <span className="text-3xl font-bold text-[#bff747] mb-2">{stats[3].value}</span>
//             <span className="text-gray-300 text-sm">{stats[3].desc}</span>
//           </div>
//         </div>
//         {/* Right Side Image */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#bff747]/30" style={{maxWidth: 340}}>
//             <Image
//               src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
//               alt="Team"
//               width={340}
//               height={420}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Optional: Decorative background elements */}
//       <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#bff747]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
//     </section>
//   );
// };

// export default WhyChooseUs;
