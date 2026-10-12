import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─── Knowledge base ─── */
const KB = [
  {
    patterns: ['hello', 'hi', 'hey', 'salam', 'assalam', 'good morning', 'good evening', 'greet'],
    answer: () => `👋 Welcome to **NexMove Development**! I'm Nex, your AI assistant.\n\nHow can I help you today? You can ask me about:\n• 🌐 Our Services\n• 📦 Packages & Pricing\n• 💼 Portfolio\n• 📞 Contact & Location`,
  },
  {
    patterns: ['service', 'what do you', 'what you offer', 'offer', 'provide', 'work'],
    answer: () => `🚀 We offer **9 core digital services**:\n\n1. 🌐 **Website Development** – React/Next.js custom sites\n2. 💻 **Software Development** – SaaS, CRM, ERP\n3. 📱 **Mobile App Development** – iOS & Android\n4. 🎨 **Web Designing** – UI/UX, Figma, Prototypes\n5. 📈 **SEO** – Rankings & organic traffic\n6. 🤖 **AEO** – AI answer engine optimization\n7. 📍 **GEO** – Local & generative search\n8. 📢 **Social Media Marketing** – Content & ads\n9. ⚙️ **AI & Automation** – Chatbots, n8n workflows\n\n[Explore all services →](/services)`,
  },
  {
    patterns: ['package', 'price', 'pricing', 'cost', 'plan', 'how much', 'rate', 'dollar', 'pkr', 'rupee', 'fee', 'charge'],
    answer: () => `💰 We have **3 transparent packages**:\n\n**🟢 Starter** – $349 / Rs. 98,000\n• 3–5 page website, Local SEO, Social profiles\n• Delivery: 5 business days\n\n**🔵 Growth** *(Most Popular)* – $799 / Rs. 220,000\n• Full-stack development, Advanced SEO, AI chatbot\n• Delivery: 10–14 business days\n\n**🟣 Enterprise** – Custom pricing\n• Custom software, Mobile app, Dedicated team\n\n[View full packages →](/packages)`,
  },
  {
    patterns: ['starter', 'basic', 'small business', 'first step'],
    answer: () => `🟢 **Starter Package – $349 / Rs. 98,000/month**\n\n✅ Responsive 3–5 Page Website (Next.js/React)\n✅ Local SEO (GEO) Optimization\n✅ Social Media Profiles Setup\n✅ Contact Form & Lead Capture\n✅ Monthly Performance Report\n\n⏱️ Delivery: **5 Business Days**\n🔄 Revisions: **2 rounds** (within 3 days)\n💳 Extra revisions: **$30/request**\n\n[Get started →](/contact)`,
  },
  {
    patterns: ['growth', 'popular', 'scale', 'conversions', 'growing'],
    answer: () => `🔵 **Growth Package – $799 / Rs. 220,000/month** *(Most Popular)*\n\n✅ Custom Full-Stack Web Design & Development\n✅ Advanced SEO & Answer Engine Optimization\n✅ Full Social Media Management\n✅ AI Chatbot Integration (Botpress/n8n)\n✅ Bi-weekly Analytics & Conversion Tracking\n\n⏱️ Delivery: **10–14 Business Days**\n🔄 Revisions: **Unlimited** (7-day review)\n💳 Extra changes: **$50/hr** post sign-off\n\n[Choose Growth →](/contact)`,
  },
  {
    patterns: ['enterprise', 'large', 'custom plan', 'big business', 'dedicated'],
    answer: () => `🟣 **Enterprise Package – Custom Pricing**\n\n✅ Custom Software / Mobile App Development\n✅ Omnichannel Digital Marketing Strategy\n✅ Dedicated Account Manager & Lead Engineer\n✅ Custom Database & API Integrations\n✅ AI-Powered Analytics & BI\n✅ 24/7 Priority Support & Maintenance\n\n⏱️ Delivery: **Per project milestones (3–6 weeks)**\n🔄 Revisions: **Sprint review cycles**\n💳 Extra changes: **$40/hr or custom addendums**\n\n[Request a quote →](/contact)`,
  },
  {
    patterns: ['portfolio', 'project', 'work done', 'case study', 'clients', 'example', 'past work'],
    answer: () => `💼 **Our Recent Projects:**\n\n🚀 **London Prestige Chauffeur** – Luxury booking platform\n🏥 **Al Fatima Healthcare** – Patient appointment portal\n🏗️ **Nobel Build Repairs UK** – B2B lead generation\n📱 **Prestige Chauffeur App** – Real-time dispatch system\n🔍 **RSP Water Plant** – Technical SEO, Top 3 ranking\n📊 **Aurrify** – Social media 3.4x reach growth\n\n[View full portfolio →](/portfolio)`,
  },
  {
    patterns: ['contact', 'reach', 'email', 'phone', 'call', 'whatsapp', 'message', 'talk', 'get in touch', 'connect', 'lets connect'],
    answer: () => `📞 **Get in Touch with NexMove!**\n\n📧 Email: **nexmove.pk@gmail.com**\n📱 Phone/WhatsApp: **+92 322 5673641**\n📍 Address: **128-J DHA Phase 6, Lahore, Pakistan**\n\n🕐 Working Hours: Mon–Sat, 10AM–7PM PKT\n\n[Send us a message →](/contact)`,
  },
  {
    patterns: ['location', 'address', 'lahore', 'where', 'office', 'dha'],
    answer: () => `📍 **Our Office:**\n128-J DHA Phase 6, Lahore, Pakistan\n\nWe also serve clients **internationally** – UK, USA, UAE & beyond!\n\n[Contact us →](/contact)`,
  },
  {
    patterns: ['team', 'founder', 'ceo', 'ali hamza', 'who', 'about you', 'about us', 'company'],
    answer: () => `👥 **Meet the NexMove Team:**\n\n👨‍💼 **Ali Hamza** – Founder & CEO\nVision · Leadership · Innovation since 2023\n\n👨‍💻 **Subhan Ahmad** – Lead Full-Stack Developer\n🔍 **Mehwish Fahad** – Off-Page SEO Expert\n📱 **Faiza Rafique** – SMM Manager\n\n[Learn more about us →](/about)`,
  },
  {
    patterns: ['seo', 'search engine', 'rank', 'google', 'keyword', 'organic', 'traffic'],
    answer: () => `📈 **Our SEO Services:**\n\n🔍 **Standard SEO** – Keyword research, on-page & technical audits, link building\n🤖 **AEO** – Optimize for AI answer engines (ChatGPT, Perplexity, Gemini)\n📍 **GEO** – Local search, Google Business Profile, generative AI content\n\nWe've ranked clients in **Top 3 on Google** within months!\n\n[Start ranking now →](/contact)`,
  },
  {
    patterns: ['ai', 'automation', 'chatbot', 'n8n', 'workflow', 'artificial intelligence', 'bot'],
    answer: () => `🤖 **AI & Automation Services:**\n\n• **Custom AI Chatbots** – WhatsApp, Website, CRM bots\n• **Workflow Automation** – n8n, Zapier, Make integrations\n• **LLM Integrations** – GPT-4, Claude API integrations\n• **Data Analysis** – AI-powered business insights\n\nWe help businesses save **20+ hours per week** through smart automation!\n\n[Get AI automation →](/contact)`,
  },
  {
    patterns: ['social media', 'smm', 'instagram', 'facebook', 'linkedin', 'tiktok', 'content', 'marketing'],
    answer: () => `📢 **Social Media Marketing:**\n\n✅ Content strategy & creative design\n✅ Community management & growth\n✅ Paid social ads (Meta, LinkedIn, TikTok)\n✅ Performance reporting & analytics\n\nWe've delivered **3.4x reach growth** and **180% sales increase** for clients!\n\n[Boost your social →](/contact)`,
  },
  {
    patterns: ['revision', 'delivery', 'timeline', 'how long', 'days', 'deadline'],
    answer: () => `⏱️ **Delivery & Revision Policy:**\n\n🟢 **Starter** – 5 business days, 2 revision rounds ($30/extra)\n🔵 **Growth** – 10–14 business days, unlimited minor revisions ($50/hr extra)\n🟣 **Enterprise** – Milestone-based, sprint review cycles ($40/hr extra)\n\nAll packages include clear scope documentation before we begin.\n\n[See all packages →](/packages)`,
  },
  {
    patterns: ['mobile', 'app', 'android', 'ios', 'react native', 'flutter'],
    answer: () => `📱 **Mobile App Development:**\n\n• **React Native** – Cross-platform (iOS + Android)\n• Push notifications & deep linking\n• App Store & Play Store deployment\n• Backend API & cloud integration\n\nWe built a real-time chauffeur dispatch app with live tracking!\n\n[Build your app →](/contact)`,
  },
  {
    patterns: ['thank', 'thanks', 'great', 'perfect', 'awesome', 'shukria', 'shukriya'],
    answer: () => `😊 You're welcome! We're here whenever you need us.\n\n**Ready to start your project?**\n📞 Call: +92 322 5673641\n✉️ Email: nexmove.pk@gmail.com\n\n[Get a free quote →](/contact)`,
  },
  {
    patterns: ['bye', 'goodbye', 'khuda hafiz', 'later', 'exit', 'close'],
    answer: () => `👋 Goodbye! Thanks for visiting **NexMove Development**.\n\nFeel free to chat anytime. Have a great day! 🚀`,
  },
];

const QUICK_REPLIES = [
  { label: '📦 Packages & Pricing', text: 'What are your packages and pricing?' },
  { label: '🌐 Our Services', text: 'What services do you offer?' },
  { label: '💼 View Portfolio', text: 'Show me your portfolio projects' },
  { label: '📞 Contact Us', text: 'How can I contact you?' },
];

function getBotReply(userText) {
  const lower = userText.toLowerCase();
  for (const entry of KB) {
    if (entry.patterns.some((p) => lower.includes(p))) {
      return entry.answer();
    }
  }
  return `🤔 Great question! I'm not sure I have the exact answer for that.\n\nPlease reach out directly:\n📧 **nexmove.pk@gmail.com**\n📞 **+92 322 5673641**\n\nOr [send us a message →](/contact) and we'll respond within 1 business day!`;
}

/* ─── Markdown-lite renderer ─── */
function renderText(text) {
  return text.split('\n').map((line, i, arr) => {
    const boldParsed = line.split(/(\*\*[^*]+\*\*)/g).map((seg, j) => {
      if (seg.startsWith('**') && seg.endsWith('**')) {
        return <strong key={j}>{seg.slice(2, -2)}</strong>;
      }
      const linkParts = seg.split(/(\[[^\]]+\]\([^)]+\))/g).map((ls, k) => {
        const match = ls.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return match[2].startsWith('/') ? (
            <Link key={k} to={match[2]} className="cb-link">{match[1]}</Link>
          ) : (
            <a key={k} href={match[2]} className="cb-link" target="_blank" rel="noopener noreferrer">{match[1]}</a>
          );
        }
        return ls;
      });
      return <span key={j}>{linkParts}</span>;
    });
    return <span key={i}>{boldParsed}{i < arr.length - 1 && <br />}</span>;
  });
}

/* ─── Typing indicator ─── */
function TypingDots() {
  return (
    <div className="cb-msg cb-msg-bot cb-typing-row">
      <div className="cb-avatar">N</div>
      <div className="cb-bubble cb-bubble-bot">
        <span className="cb-dot" />
        <span className="cb-dot" />
        <span className="cb-dot" />
      </div>
    </div>
  );
}

/* ─── Single message ─── */
function Message({ msg }) {
  const isBot = msg.from === 'bot';
  return (
    <div className={`cb-msg ${isBot ? 'cb-msg-bot' : 'cb-msg-user'}`}>
      {isBot && <div className="cb-avatar">N</div>}
      <div className={`cb-bubble ${isBot ? 'cb-bubble-bot' : 'cb-bubble-user'}`}>
        {isBot ? renderText(msg.text) : msg.text}
      </div>
      {!isBot && <div className="cb-avatar cb-avatar-user">You</div>}
    </div>
  );
}

/* ─── Default initial message ─── */
const INITIAL_MESSAGES = [
  {
    from: 'bot',
    text: "👋 Hi! I'm **Nex**, NexMove's AI assistant.\n\nAsk me anything about our services, pricing, or portfolio — or pick a quick option below!",
    id: 0,
  },
];

/* ─── Main ChatBot ─── */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [pulse, setPulse] = useState(true);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const idRef = useRef(1);

  const closeAndReset = () => {
    setOpen(false);
    setMessages(INITIAL_MESSAGES);
    setInput('');
    setTyping(false);
    setUnread(0);
    idRef.current = 1;
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    const userMsg = { from: 'user', text: trimmed, id: idRef.current++ };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: reply, id: idRef.current++ }]);
      if (!open) setUnread((u) => u + 1);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showQuickReplies = messages.length <= 2 && !typing;

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        className={`cb-fab ${open ? 'cb-fab-open' : ''} ${pulse ? 'cb-fab-pulse' : ''}`}
        onClick={() => (open ? closeAndReset() : setOpen(true))}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        id="chatbot-toggle"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C6.477 2 2 6.03 2 11c0 2.48 1.088 4.722 2.85 6.34L4 21l4.123-1.646A10.45 10.45 0 0012 20c5.523 0 10-4.03 10-9S17.523 2 12 2z"/>
          </svg>
        )}
        {!open && unread > 0 && <span className="cb-badge">{unread}</span>}
      </button>

      {/* ── Chat window ── */}
      <div className={`cb-window ${open ? 'cb-window-open' : ''}`} role="dialog" aria-label="NexMove chat assistant">
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-avatar">
            <span>N</span>
            <span className="cb-online-dot" />
          </div>
          <div className="cb-header-info">
            <span className="cb-header-name">Nex — NexMove Assistant</span>
            <span className="cb-header-status">🟢 Online · Replies instantly</span>
          </div>
          <button className="cb-close-btn" onClick={closeAndReset} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="16" height="16">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="cb-messages" id="chatbot-messages">
          {messages.map((msg) => <Message key={msg.id} msg={msg} />)}
          {typing && <TypingDots />}
          <div ref={endRef} />
        </div>

        {/* Quick replies */}
        {showQuickReplies && (
          <div className="cb-quick-replies">
            {QUICK_REPLIES.map((qr) => (
              <button key={qr.label} className="cb-quick-btn" onClick={() => sendMessage(qr.text)}>
                {qr.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="cb-input-row">
          <input
            ref={inputRef}
            className="cb-input"
            id="chatbot-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about services, pricing…"
            maxLength={300}
            autoComplete="off"
          />
          <button
            className="cb-send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send message"
            id="chatbot-send"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>

        <div className="cb-footer-note">
          Powered by NexMove AI ·{' '}
          <a
            href="https://wa.me/923225673641?text=Hi%20NexMove!%20I%20have%20a%20query%20about%20your%20services."
            className="cb-link cb-wa-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp us →
          </a>
        </div>
      </div>
    </>
  );
}
