import React from "react";
import { 
  Layout, 
  PenTool, 
  Palette, 
  TrendingUp, 
  Headset, 
  ClipboardList,
  Check
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    icon: Layout,
    items: [
      { name: "E-commerce Website", desc: "Sell products online 24/7" },
      { name: "Landing Page Design", desc: "For ads, sales, product launches" },
      { name: "Website Redesign", desc: "Make your old site modern + fast" },
    ],
  },
  {
    number: "02",
    title: "Professional Writing",
    icon: PenTool,
    items: [
      { name: "Copywriting", desc: "Words that sell products + services" },
      { name: "Proposals & Pitch Decks", desc: "Win grants, investors, clients" },
      { name: "Website Content Writing", desc: "About, Services, Product pages" },
    ],
  },
  {
    number: "03",
    title: "Creative Design",
    icon: Palette,
    items: [
      { name: "Logo + Brand Identity", desc: "Look professional from day 1" },
      { name: "Social Media Design", desc: "Posts, carousels, reels covers" },
      { name: "Flyer & Poster Design", desc: "For promos, events, sales" },
    ],
  },
  {
    number: "04",
    title: "Marketing & Growth",
    icon: TrendingUp,
    items: [
      { name: "Social Media Management", desc: "Consistent posts + engagement" },
      { name: "Video Editing", desc: "Reels, TikToks, ads that go viral" },
      { name: "Meta Ads Management", desc: "FB/IG ads that bring customers" },
    ],
  },
  {
    number: "05",
    title: "Virtual Assistant",
    icon: Headset,
    items: [
      { name: "Admin & Email Management", desc: "Inbox, scheduling, replies" },
      { name: "Customer Service & Chat", desc: "WhatsApp, IG DM, email" },
      { name: "Data Entry & Research", desc: "Sheets, leads, competitor research" },
      { name: "Calendar & Booking", desc: "Meetings, follow-ups" },
      { name: "Document Formatting", desc: "Word, PDF, presentations" },
    ],
  },
  {
    number: "06",
    title: "Project Management",
    icon: ClipboardList,
    items: [
      { name: "Planning & Coordination", desc: "Timelines, tasks, team mgmt" },
      { name: "Client Onboarding", desc: "Communication handled for you" },
      { name: "Campaign Management", desc: "Sites, ads, product launches" },
      { name: "Workflow Setup", desc: "Trello, Asana, Notion systems" },
      { name: "Reporting & Tracking", desc: "Weekly updates to clients" },
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Header with Black Background */}
      <header className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover" }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Everything Your Brand Needs to Launch, Look Sharp, and Grow</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">
            Digital services covering design, writing, growth, and support — all under one roof
          </p>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Services</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              One team for your website, your words, and your everyday operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gray-100 rounded-full">
                      <Icon className="h-7 w-7 text-black" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-yellow-600 tracking-wider">
                        {service.number}
                      </span>
                      <h3 className="text-2xl font-bold text-black leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-black">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-yellow-500 font-semibold tracking-wider mb-4">READY WHEN YOU ARE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-4 text-gray-300">WhatsApp: +1 (669) 361-5872</p>
          
          <a
            href="mailto:treasureflourishdigital@gmail.com"
            className="inline-block bg-white text-black py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </a>
          <p className="mt-8 text-gray-400 text-sm">
            Instagram · Facebook · TikTok · LinkedIn · X · Upwork — @treasureflourish_digital
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;