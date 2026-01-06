import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import { ArrowRight, ArrowUpRight, Check, X, CheckCircle2, Phone } from 'lucide-react';
import { techCards, capabilities, comparisons, partners } from './constants';

const App: React.FC = () => {
  // Logic for repeated partners to ensure smooth infinite scroll
  const repeatedPartners = [...partners, ...partners];
  const reversedPartners = [...partners, ...partners].reverse();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* MISSION SECTION */}
        <section className="py-20 md:py-32 px-5 relative">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="relative rounded-[2rem] overflow-hidden p-[2px] bg-gradient-to-r from-primary to-blue-900 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                <div className="bg-background/80 backdrop-blur-xl rounded-[2rem] relative overflow-hidden py-16 px-6 md:px-20 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                    Our mission is to design websites that attract and engage customers.
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary">
                    However, we approach things a bit differently with our data-driven strategies.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 px-5" id="services">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white">See How We Can Help Your Brand</h2>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc848933129f565989435_9lDwe5RVWhcROsUnUSLQ5QiaaPk%201.svg", title: "Work Order Processing", desc: "Accurate and timely updates for all your preservation work orders." },
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc84962e8b69cbd2a21ca_FhPczbEeg5bRtLspTbQHpRUUg%201.svg", title: "Bid & Repair Estimation", desc: "Professional bid creation with precise cost estimation for repairs." },
                { icon: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc848b70591bee48433ca_36QlWRG5xFqx3DaY9IWO4wgp98%201.svg", title: "Vendor Management", desc: "Streamlined communication and coordination with field vendors." }
              ].map((service, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="glass-card rounded-[1.5rem] p-8 relative overflow-hidden group hover:border-primary transition-colors duration-300 h-full">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-start h-full">
                      <div className="w-12 h-12 mb-6 p-2 bg-primary/10 rounded-lg">
                         <img src={service.icon} alt={service.title} className="w-full h-full object-contain filter invert brightness-0 saturate-100 invert-[.25] sepia-[.95] saturate-[2000%] hue-rotate-[190deg]" />
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-3">{service.title}</h3>
                      <p className="text-secondary font-medium leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Why Webvigo Technologies <br/>Stands Out</h2>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCards.map((card, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="glass-card rounded-[1.5rem] p-8 relative overflow-hidden hover:border-primary transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690cc77196889056c0212d43_Rectangle%2093.png')] opacity-10 bg-cover bg-repeat mix-blend-overlay"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 mb-6 p-1 bg-primary/20 rounded-lg">
                        <img src={card.icon} alt={card.title} className="w-full h-full object-contain filter invert brightness-0 saturate-100 invert-[.25] sepia-[.95] saturate-[2000%] hue-rotate-[190deg]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white mb-3">{card.title}</h3>
                      <p className="text-secondary text-base leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-5" id="team">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
            
            {/* Left: Team Slider */}
            <div className="flex-1 glass-card rounded-[1.5rem] p-8 lg:p-12 shadow-2xl">
                <Reveal>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Meet Our Team</h3>
                      <p className="text-secondary text-base max-w-sm">Let Us be Your Backend Team. We take care of all your preservation processing needs.</p>
                    </div>
                  </div>
                </Reveal>
                
                <Reveal delay={100}>
                  <div className="relative mt-8 overflow-hidden">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x">
                      {[
                        { name: "Shopon Islam", role: "Chairman", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6928bd5a14d2e467bd2bd593__L6A3552%20copy.png" },
                        { name: "Jaber Shahriar Rupok", role: "Managing Director", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69283efcc846aad4f9fd5879_Group%20462.png" },
                        { name: "Jaber Shahriar Rupok", role: "Managing Director", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690ce4bd757d26171d0b237b_Group%20446.png" }
                      ].map((member, i) => (
                        <div key={i} className="snap-center shrink-0 w-[240px] relative group cursor-pointer">
                          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-4 left-0 w-full text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-background/90 backdrop-blur-md rounded-lg py-2 mx-2 border border-primary/20">
                              <p className="text-white font-medium text-sm">{member.name}</p>
                              <p className="text-xs text-primary">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="flex justify-between items-center mt-8">
                    <h3 className="text-lg font-bold text-white">Interested in joining with us?</h3>
                    <a href="#" className="flex items-center gap-2 bg-primary/10 border border-primary text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                      <span className="text-sm font-medium">Write us</span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </a>
                  </div>
                  <p className="text-secondary text-sm mt-2">Please send us your details along with your resume.</p>
                </Reveal>
            </div>

            {/* Right: Capabilities */}
            <div className="w-full lg:w-[480px] glass-card rounded-[1.5rem] p-8 lg:p-12 shadow-2xl flex flex-col">
              <Reveal delay={300}>
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-2xl font-extrabold text-white mb-2">Supported</h3>
                  <h2 className="text-4xl font-black text-primary my-4 lg:mx-0">SJ IT LTD</h2>
                  <p className="text-secondary text-base">Expert Property Preservation & BPO Services Company in Bangladesh</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Capabilities</h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {capabilities.map((cap, i) => (
                      <span key={i} className={`bg-white/5 border border-white/10 text-secondary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-white transition-colors cursor-default ${i === capabilities.length - 1 ? 'w-full text-center' : ''}`}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Grid of Stats */}
            <div className="w-full lg:w-1/3">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "500K+", label: "Work Orders" },
                    { val: "50+", label: "Clients" },
                    { val: "99%", label: "QC Accuracy" },
                    { val: "24/7", label: "Support" }
                  ].map((stat, i) => (
                    <div key={i} className="glass-card rounded-[1.3rem] p-6 h-48 flex flex-col justify-center items-center text-center hover:bg-primary/5 transition-colors">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.val}</h3>
                      <p className="text-primary text-lg font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Results & Analytics Text */}
            <div className="flex-1">
              <Reveal delay={200}>
                <div className="inline-block border border-primary/50 bg-primary/10 rounded-full px-4 py-1 mb-6">
                  <span className="text-primary font-medium">Results & Analytics</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-12">Performance Insights and Analytics Overview</h3>

                {/* Marquee in Stats */}
                <div className="relative">
                  <p className="text-center text-secondary mb-6 font-medium">Trusted by Leading Brands</p>
                  <div className="flex gap-8 overflow-hidden opacity-60">
                    <div className="flex gap-12 animate-marquee w-max">
                       {[1,2,3,4,5,6].map((_, i) => (
                         <img key={i} src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/690c9f30201c78ec54582da5_Layer_1%20(1).svg" className="h-8 invert opacity-70" alt="Brand" />
                       ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-20 px-5 relative">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Choosing <span className="text-primary">SJ IT LTD</span><br/>Technologies Over Others</h2>
                <p className="text-xl text-secondary">See why SJ IT LTD stands out with superior service, innovation, and client satisfaction benchmarks.</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex justify-between items-center px-8 mb-8 text-xl font-bold text-white">
                <div className="w-1/2">Other Agencies</div>
                <div className="w-1/2 pl-8 flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">SJ IT LTD</span>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="glass-card rounded-[1.3rem] flex overflow-hidden">
                    <div className="w-1/2 p-6 flex items-start gap-4 border-r border-white/10 bg-black/20">
                      <div className="bg-red-500/10 p-1 rounded-full shrink-0">
                        <X className="text-red-500 w-5 h-5" />
                      </div>
                      <p className="text-secondary font-medium">{item.other}</p>
                    </div>
                    <div className="w-1/2 p-6 flex items-start gap-4 relative bg-primary/5">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-8 bg-primary blur-[4px]"></div>
                      <div className="bg-green-500/10 p-1 rounded-full shrink-0">
                        <Check className="text-green-500 w-5 h-5" />
                      </div>
                      <p className="text-white font-medium">{item.us}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We Provide All Essential Services for Accelerating Business Growth</h2>
                <p className="text-xl text-secondary">Discover our comprehensive range of services tailored to enhance your digital and operational presence.</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Reveal>
                <div className="glass-card rounded-[1.3rem] p-8 md:p-10 relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="flex justify-end mb-6">
                    <a href="#" className="inline-flex items-center gap-2 border border-primary text-white px-5 py-3 rounded-xl hover:bg-primary hover:text-black transition-colors z-10">
                      <span className="font-medium">Start Now</span>
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Property Preservation Processing</h3>
                  <p className="text-grey font-medium mb-8">We handle the backend workload so you can focus on the field. From updating work orders to ensuring timely submissions with zero errors.</p>
                  <div className="h-px w-full bg-white/10 mb-8"></div>
                  <div className="space-y-4">
                    {["Work Order Processing & Submission.", "Bids & Repair Estimations.", "Quality Control (QC) Assurance.", "Vendor Payroll & Invoicing.", "Utility Activation & Management."].map((item, i) => (
                      <div key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-secondary font-medium">{item}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={200}>
                <div className="glass-card rounded-[1.3rem] p-8 md:p-10 relative h-full">
                  <div className="flex justify-end mb-6">
                    <a href="#" className="inline-flex items-center gap-2 border border-primary text-white px-5 py-3 rounded-xl hover:bg-primary hover:text-black transition-colors">
                      <span className="font-medium">Start Now</span>
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">BPO & Digital Services</h3>
                  <p className="text-grey font-medium mb-8">Accelerate your business operations with our BPO solutions, including virtual assistance, marketing, and customer support.</p>
                  <div className="h-px w-full bg-white/10 mb-8"></div>
                  <div className="space-y-4">
                     {["Data Entry & Virtual Assistance.", "24/7 Call Center Support.", "CRM Management for Vendors.", "Lead Generation for Realtors.", "Digital Marketing for REOs."].map((item, i) => (
                      <div key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-secondary font-medium">{item}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className="py-20 overflow-hidden">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Valuable Partners</h2>
              <div className="w-full max-w-xl mx-auto h-[2px] bg-primary"></div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {/* Row 1 */}
            <div className="flex gap-8 animate-marquee w-max">
              {repeatedPartners.map((src, i) => (
                <div key={i} className="bg-black border border-white/10 rounded-lg px-8 py-4 w-44 h-16 flex items-center justify-center shadow-lg">
                  <img src={src} alt="Partner" className="max-w-full max-h-full" />
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-8 animate-marqueeReverse w-max">
              {reversedPartners.map((src, i) => (
                <div key={i} className="bg-black border border-white/10 rounded-lg px-8 py-4 w-44 h-16 flex items-center justify-center shadow-lg">
                  <img src={src} alt="Partner" className="max-w-full max-h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <div className="inline-block bg-primary/20 p-[1px] rounded-sm mb-3">
                  <span className="bg-background text-primary px-3 py-1 text-xs rounded-sm block">Our Blog</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">News, insights and more</h2>
                <p className="text-xl font-medium text-secondary max-w-2xl mx-auto">Dive into our blog for expert insights, tips, and industry trends to elevate your preservation business.</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Maximizing ROI in Property Preservation with Efficient BPO", date: "Oct 11, 2025", tag: "BPO Services", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912c2bd3ad1dce1323e038c_Rectangle%20198.png" },
                { title: "Top 5 Tools for Property Preservation Vendors in 2025", date: "Oct 11, 2025", tag: "Industry Tech", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912c2bd74f66ce8737b4e00_Rectangle%20198%20(1).png" },
                { title: "How to Reduce Kickbacks and Improve QC Scores", date: "Oct 11, 2025", tag: "Quality Control", img: "https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912c2bd81c14808640016bb_Rectangle%20198%20(2).png" }
              ].map((blog, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <a href="#" className="border border-primary bg-primary/5 rounded-[1.3rem] p-2 pb-6 hover:border-white transition-colors group block h-full">
                    <div className="rounded-[1.3rem] overflow-hidden mb-4">
                      <img src={blog.img} alt={blog.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="px-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/20 p-[1px] rounded-[2px] inline-block">
                          <span className="bg-background text-primary px-2 text-xs block rounded-[2px]">{blog.tag}</span>
                        </span>
                        <span className="text-[0.625rem] font-medium text-off-grey">{blog.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug mb-8">{blog.title}</h3>
                      <div className="flex items-center gap-2 text-off-grey">
                        <span className="font-medium text-lg">Read Full Blog</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto">
             <Reveal>
               <div className="bg-gradient-to-b from-primary to-blue-900 p-[2px] rounded-[1.3rem]">
                 <div className="bg-background bg-[url('https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6914cc4aac360a51be5ab483_Rectangle%2094.png')] bg-center bg-no-repeat rounded-[1.3rem] py-12 md:py-16 px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Start Your Project</h2>
                    <p className="text-lg font-medium text-secondary mb-8 max-w-md mx-auto">Contact us today to start streamlining your property preservation business.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                      {["Work Order Processing", "Bid Estimations", "Vendor Management"].map((item, i) => (
                        <div key={i} className="bg-gradient-to-b from-primary to-blue-900 p-[1px] rounded-sm inline-block">
                          <div className="bg-background px-3 py-1 rounded-sm flex items-center gap-2">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6911bb20df872a92ee0a0426_20x20.svg" className="w-3 h-3" alt="icon" style={{filter: 'hue-rotate(180deg)'}} />
                            <span className="text-xs text-primary">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-primary bg-primary/10 rounded-xl text-black hover:bg-primary hover:text-white transition-colors">
                      <Phone className="w-4 h-4 fill-current" />
                      <span className="font-semibold text-white">Book a Call</span>
                    </a>
                 </div>
               </div>
             </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;