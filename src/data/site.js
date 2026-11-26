import { Globe, Monitor, Smartphone, PenTool, TrendingUp, Bot, MapPin, Megaphone, Cpu } from 'lucide-react';

// All text/content lives here. Edit this file to rebrand the whole site.
// NOTE: everything below is placeholder content - replace with your own.

export const site = {
  name: 'Oryn Solution',
  tagline: 'We build digital products that grow your business.',
  description: 'Founder & CEO: Subhan Ahmad | Vision · Leadership · Innovation · Growth since "2023"',
  email: 'info@orynsolution.com',
  phone: '03711441930',
  address: 'Lahore, Pakistan',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/subhan-shiekh12345/' },
    { label: 'Instagram', href: 'https://www.instagram.com/devstack.lab/' },
    { label: 'GitHub', href: 'https://github.com/subhan-stacks/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61550660912672&locale=en_US' },
    { label: 'Threads', href: 'https://www.threads.com/@devstack.lab' },
  ],
};

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  // { to: '/packages', label: 'Packages' },
  { to: '/blog', label: 'Blog' },
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
  { name: 'Subhan Ahmad', role: 'Founder & CEO', bio: 'Founder & CEO leading company strategy, product direction, and client growth. Focused on helping businesses scale through clear execution, innovative digital solutions, and measurable results.' },
  { name: 'Uzair Khalid', role: 'Senior Full-stack Developer', bio: 'Senior Full-stack Developer with expertise in React, Node.js, and building scalable web applications. Focused on delivering high-quality code, clean architecture, and end-to-end development solutions.' },
  { name: 'Mehwish Fahad', role: 'Off Page SEO Expert', bio: 'Off Page SEO Expert with proven results in improving website authority, rankings, and organic traffic.' },
  { name: 'Faiza Rafique', role: 'SMM Manager', bio: 'Social Media Manager and Content Specialist.' },
  { name: 'Haris Jameel', role: 'Fullstack & AI Developer', bio: 'Fullstack & AI Developer with expertise in AI and Machine Learning. Focused on delivering high-quality AI solutions, clean architecture, and end-to-end AI development solutions.' },
  { name: 'Hamza Bilal', role: 'MERN Developer', bio: 'MERN Developer with expertise in React, Node.js, and building scalable web applications. Focused on delivering high-quality code, clean architecture, and end-to-end development solutions.' },
  { name: 'Bashir Ahmad', role: 'AI Automation Developer', bio: 'AI Automation Developer with expertise in n8n, Make, Zapier, and building custom automation workflows. Focused on delivering high-quality AI solutions, clean architecture, and end-to-end automation solutions.' },
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
    title: 'Architectural Firm Creative SMM and Website',
    category: 'SMM Campaigns, Web Development',
    tag: 'SMM Campaign, Web Development',
    image: '/bj.jpg',
    description: 'Creative social media portfolio management for BJ Architects showcasing architectural projects on Behance, Instagram, and LinkedIn to attract design clients.',
    platform: 'Behance, Instagram, LinkedIn, Website',
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
    title: 'Al Fatima Quran Academy Website',
    category: 'Web Development',
    tag: 'Web Development',
    image: '/al fatima.jpg',
    description: 'Quran learning platform with daily lessons, virtual classrooms, student progress tracking, and full content management system.',
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

export const blogPosts = [
  {
    id: 'ai-automation-2026',
    title: 'How AI Automation Saves Growing Agencies 20+ Hours Every Week',
    category: 'AI & Automation',
    date: 'Nov 18, 2026',
    readTime: '5 min read',
    author: 'Subhan Ahmad',
    featured: true,
    excerpt:
      'Discover practical ways to connect WhatsApp, CRM pipelines, and LLM workflows so repetitive lead qualification and client onboarding run automatically.',
    content: [
      'Manual follow-ups, copy-pasting lead details into spreadsheets, and answering the same pricing questions every day quietly drain hours from high-value engineering and design work.',
      'By combining lightweight webhook automations with custom AI assistants, businesses can qualify inquiries in seconds, route urgent requests directly to Slack or WhatsApp, and send tailored proposals automatically.',
      'Start small: audit the three most repetitive tasks in your weekly workflow, map the trigger and destination, and automate one end-to-end loop before scaling across departments.',
    ],
  },
  {
    id: 'aeo-geo-seo-guide',
    title: 'SEO, AEO & GEO: Preparing Your Brand for AI-First Search',
    category: 'SEO & Growth',
    date: 'Nov 10, 2026',
    readTime: '6 min read',
    author: 'Mehwish Fahad',
    excerpt:
      'Traditional keyword stuffing is dead. Learn how structured content, local authority signals, and answer-engine optimization win visibility on Google and AI assistants.',
    content: [
      'Search behavior has shifted from ten blue links to direct synthesized answers. Ranking today requires clarity for both human readers and large language models.',
      'Answer Engine Optimization (AEO) focuses on concise, verifiable answers to real customer questions, backed by clean semantic HTML and schema markup.',
      'Meanwhile, Generative Engine Optimization (GEO) ensures your local business profile, citations, and regional landing pages establish unmistakable trust signals.',
    ],
  },
  {
    id: 'high-converting-web-architecture',
    title: 'Why Speed & UX Architecture Decide Website Conversions',
    category: 'Web & Software',
    date: 'Oct 29, 2026',
    readTime: '4 min read',
    author: 'Subhan Ahmad',
    excerpt:
      'A one-second delay can cut conversions dramatically. Here is how modern React + Vite architecture and clear visual hierarchy turn visitors into booked calls.',
    content: [
      'Most business websites fail not because of a bad product, but because visitors cannot immediately tell what you offer, who it is for, and what to do next.',
      'Pair sub-second page transitions with a clear above-the-fold value proposition, scannable service cards, and friction-free contact flows.',
      'Every extra form field or heavy unoptimized asset adds friction—keep pages lean, accessible, and focused on outcomes.',
    ],
  },
  {
    id: 'social-media-brand-consistency',
    title: 'Building a Cohesive Brand System Across Web & Social Channels',
    category: 'Design & Branding',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    author: 'Faiza Rafique',
    excerpt:
      'From typography and color tokens to short-form campaign templates, consistency builds instant recognition and higher ad ROI.',
    content: [
      'When your Instagram ads look completely different from your landing page, prospective clients feel an immediate trust gap.',
      'Establishing a shared design system—consistent palette, typography scale, and tone of voice—makes every campaign compound on the last one.',
      'At Oryn Solution, we align brand identity, web UI, and social creative from day one so every touchpoint feels unmistakably yours.',
    ],
  },
];

