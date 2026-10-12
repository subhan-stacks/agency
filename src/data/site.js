import { Globe, Monitor, Smartphone, PenTool, TrendingUp, Bot, MapPin, Megaphone, Cpu } from 'lucide-react';

// All text/content lives here. Edit this file to rebrand the whole site.
// NOTE: everything below is placeholder content - replace with your own.

export const site = {
  name: 'NexMove Development',
  tagline: 'We build digital products that grow your business.',
  description: 'Founder & CEO: Ali Hamza | Vision · Leadership · Innovation · Growth since "2023"',
  email: 'nexmove.pk@gmail.com',
  phone: '+92 322 5673641',
  address: 'Lahore, Pakistan',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/packages', label: 'Packages' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '45+', label: 'Happy clients' },
  { value: '6', label: 'Years of experience' },
  { value: '98%', label: 'Client satisfaction' },
];

export const services = [
  {
    icon: Globe,
    title: 'Website Development',
    text: 'Custom, responsive websites designed to engage your audience and drive conversions.',
    points: ['Custom React / Vite front-ends', 'Scalable back-ends', 'SEO-friendly markup', 'E-commerce integration'],
  },
  {
    icon: Monitor,
    title: 'Software Development',
    text: 'Custom software applications built with modern technologies — fast, scalable, and tailored to your requirements.',
    points: ['SaaS platforms', 'Custom CRM / ERP', 'API development', 'Cloud deployment'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Native and cross-platform mobile apps that deliver exceptional experiences on iOS and Android.',
    points: ['React Native', 'iOS & Android', 'Push notifications', 'App store optimization'],
  },
  {
    icon: PenTool,
    title: 'Web Designing',
    text: 'Stunning user interfaces and seamless user experiences that reflect your brand identity.',
    points: ['Wireframes & Prototypes', 'Figma design systems', 'UI / UX audits', 'Mobile-first design'],
  },
  {
    icon: TrendingUp,
    title: 'Search Engine Optimization (SEO)',
    text: 'Data-driven SEO strategies that improve your visibility, rankings, and organic traffic.',
    points: ['Keyword research', 'On-page SEO', 'Technical audits', 'Link building'],
  },
  {
    icon: Bot,
    title: 'Answer Engine Optimization (AEO)',
    text: 'Optimize your content for AI-driven answer engines and conversational search platforms.',
    points: ['Content structuring', 'Knowledge graph integration', 'AI readiness', 'Conversational query targeting'],
  },
  {
    icon: MapPin,
    title: 'Generative Engine Optimization (GEO)',
    text: 'Advanced local and generative search optimization to put your business on the digital map.',
    points: ['Local SEO', 'Google Business Profile', 'Generative AI content', 'Local citations'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    text: 'Engaging social media campaigns that build brand loyalty and connect you with the right audience.',
    points: ['Content strategy', 'Community management', 'Paid social ads', 'Performance reporting'],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    text: 'Leverage cutting-edge Artificial Intelligence to streamline workflows and boost productivity.',
    points: ['Custom AI Chatbots', 'Workflow Automation', 'LLM Integrations', 'Data Analysis & Insights'],
  },
];

export const process = [
  { title: 'Discover', text: 'We learn your goals, audience and constraints in a short kick-off call.' },
  { title: 'Design', text: 'Wireframes and a clickable prototype so you see the result before we build.' },
  { title: 'Build', text: 'Weekly builds you can review, with clean code and no surprises.' },
  { title: 'Launch & grow', text: 'We deploy, monitor, and keep improving with real user data.' },
];

export const packages = [
  {
    name: 'Starter Package',
    monthly: 349,
    monthlyPkr: '98,000',
    blurb: 'Best For Small businesses and personal brands taking their first step online.',
    features: [
      'Responsive 3-5 Page Business Website Setup (Next.js/React)',
      'Local SEO (GEO) Optimization Basics',
      'Social Media Profiles Setup & Optimization',
      'Contact Form & Lead Capture Integration (EmailJS/Web3Forms)',
      'Monthly Performance & Traffic Report',
    ],
    terms: {
      title: 'Revisions & Delivery Terms',
      deliveryTime: '5 Business Days',
      revisionsIncluded: '2 Rounds of minor revisions during the review phase (within 3 days of initial delivery).',
      extraRevisions: '$30 per additional revision request or minor update. Major feature additions are scoped separately.',
    },
  },
  {
    name: 'Growth Package',
    monthly: 799,
    monthlyPkr: '220,000',
    popular: true,
    blurb: 'Best For Growing companies looking to scale conversions and expand their digital footprint.',
    features: ['Custom Full-Stack Web Design & Development', 'Advanced SEO & Answer Engine Optimization (AEO)', 'Full Social Media Management & Content Strategy', 'AI Chatbot Integration (Botpress / n8n Automation)', 'Bi-weekly Analytics & Conversion Tracking'],
    terms: {
      title: 'Revisions & Delivery Terms',
      deliveryTime: '10–14 Business Days',
      revisionsIncluded: 'Unlimited minor revisions during the 7-day review period post-delivery.',
      extraRevisions: '$50 per hour for structural changes or new features requested after final sign-off.',
    },
  },
  {
    name: 'Enterprise Package',
    monthly: 'Custom',
    monthlyPkr: 'Custom',
    blurb: 'Best For Established businesses and large scale operations requiring custom architecture.',
    features: ['Custom Software / Mobile App Development', 'Full-Scale Omnichannel Digital Marketing Strategy', 'Dedicated Account Manager & Lead Engineer', 'Custom Database & API Integrations', 'AI-Powered Analytics & Business Intelligence','24/7 Priority Support & Maintenance'],
    terms: {
      title: 'Revisions & Delivery Terms',
      deliveryTime: 'Defined per project milestones (e.g., 3–6 weeks)',
      revisionsIncluded: 'Dedicated sprint review cycles with milestone-based approvals.',
      extraRevisions: 'Billed at an hourly rate of $40/hour or via custom change-request addendums.',
    },
  },
];

export const faqs = [
  { q: 'How long does a typical project take?', a: 'A standard business website takes 2 to 4 weeks. Larger web apps are scoped individually and delivered in weekly milestones.' },
  { q: 'Do I own the code and the design?', a: 'Yes. Once the final payment is made, all source code, design files and assets are yours.' },
  { q: 'Can I change my package later?', a: 'Absolutely. You can upgrade or downgrade at the start of any billing period.' },
  { q: 'Do you offer maintenance after launch?', a: 'Yes. Every package includes support, and we offer separate maintenance plans for updates and monitoring.' },
];

export const team = [
  { name: 'ALI Hamza', role: 'Founder & Software Developer', bio: 'Leads strategy and development with 5 years in software engineering.' },
  { name: 'Subhan Ahmad', role: 'Lead Full-stack Developer', bio: 'React, Node and Firebase specialist who loves clean architecture.' },
  { name: 'Mehwish Fahad', role: 'Off Page SEO Expert', bio: 'Focuses on building high-quality backlinks and improving website authority.' },
  { name: 'Faiza Rafique', role: 'SMM Manager', bio: 'Social Media Manager and Content Specialist.' },
];

export const testimonials = [
  { name: 'Bilal A.', company: 'Retail startup', text: 'They delivered our store in three weeks and sales doubled in the first month. Communication was excellent.' },
  { name: 'Fatima R.', company: 'Clinic owner', text: 'The booking chatbot saves my reception team hours every day. Clean work and fair pricing.' },
  { name: 'Daniel P.', company: 'SaaS founder', text: 'Great design sense and solid code. Our new dashboard feels fast and our users noticed immediately.' },
];

export const values = [
  { title: 'Clarity', text: 'Plain language, honest timelines and no hidden costs.' },
  { title: 'Craft', text: 'Small details matter, so we sweat them on every project.' },
  { title: 'Results', text: 'We measure success by your growth, not by hours billed.' },
];

export const portfolioProjects = [
  {
    id: 'aurrify',
    title: 'Social Media Growth & Brand Strategy',
    category: 'SMM Campaigns',
    tag: 'SMM Campaign',
    image: '/aurrify.jpg',
    description: 'Complete SMM management and brand building for Aurrify targeted campaigns, creative content strategy, and social presence development.',
    platform: 'Meta, Instagram, Brand Identity',
    impact: '3.4x Reach & Engagement Growth',
  },
  {
    id: 'nobel',
    title: 'UK Construction Company Social Media',
    category: 'SMM Campaigns',
    tag: 'SMM Campaign',
    image: '/nobel build repair.jpg',
    description: 'SMM strategy for Nobel Build Repairs UK brand awareness campaigns, before/after content showcases, and lead generation through social ads.',
    platform: 'Facebook, Instagram, LinkedIn Ads',
    impact: 'Qualified B2B Contractor Leads',
  },
  {
    id: 'bj-architects',
    title: 'Architectural Firm Creative SMM',
    category: 'SMM Campaigns',
    tag: 'SMM Campaign',
    image: '/bj.jpg',
    description: 'Creative social media portfolio management for BJ Architects showcasing architectural projects on Behance, Instagram, and LinkedIn to attract design clients.',
    platform: 'Behance, Instagram, LinkedIn',
    impact: 'High-Ticket Client Inquiries',
  },
  {
    id: 'ustad-labha',
    title: 'Food Brand Social Media Management',
    category: 'SMM Campaigns',
    tag: 'SMM Campaign',
    image: '/ustad labha.jpg',
    description: 'Local food point social media growth creative menu showcasing, daily posts, story campaigns, and Facebook ad campaigns driving footfall and online orders.',
    platform: 'Facebook Page Management & Ads',
    impact: 'Daily Footfall & Order Surge',
  },
  {
    id: 'london-prestige',
    title: 'London Prestige Chauffeur Website',
    category: 'Web Development',
    tag: 'Web Development',
    image: '/london prestige.jpg',
    description: 'High-end responsive luxury transport booking platform with fleet showcase, instant quote calculation, and smooth booking UX.',
    platform: 'React, Node, Responsive UX',
    impact: 'Seamless Instant Booking System',
  },
  {
    id: 'al-fatima',
    title: 'Al Fatima Healthcare Digital Portal',
    category: 'Web Development',
    tag: 'Web Development',
    image: '/al fatima.jpg',
    description: 'Modern healthcare portal with doctor schedules, patient appointment booking, and technical on-page SEO optimization.',
    platform: 'Web App, SEO Markup, CMS',
    impact: 'Automated Patient Scheduling',
  },
  {
    id: 'prestige-chauffeur',
    title: 'Prestige Chauffeur Booking App',
    category: 'SaaS & Apps',
    tag: 'SaaS & Apps',
    image: '/prestige chauffeur.jpg',
    description: 'Cross-platform chauffeur ride management app with live route dispatching, customer tracking, and automated invoicing.',
    platform: 'Mobile App, Cloud API',
    impact: 'Real-Time Dispatch & Tracking',
  },
  {
    id: 'rsp-water',
    title: 'RSP Water Technical SEO & Ranking',
    category: 'SEO Projects',
    tag: 'SEO Project',
    image: '/rsp water.jpg',
    description: 'Comprehensive technical SEO overhaul, local Geo-targeted ranking, and backlink authority campaign driving qualified organic traffic.',
    platform: 'Google Search Console, Local SEO',
    impact: 'Top 3 Search Engine Ranking',
  },
];

