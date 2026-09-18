import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Bot,
  ChevronDown,
  CircleCheck,
  Clock3,
  Cpu,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Palette,
  Phone,
  Play,
  Printer,
  Send,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import "./index.css";

const navItems = [
  { label: "عن هبة", href: "#about" },
  { label: "المشاريع", href: "#projects" },
  { label: "الخبرة", href: "#experience" },
  { label: "المهارات", href: "#skills" },
];

const skills = [
  { label: "الذكاء الاصطناعي التوليدي", icon: Sparkles, tone: "lime" },
  { label: "الروبوتات والبرمجة", icon: Bot, tone: "violet" },
  { label: "التصنيع الرقمي", icon: Wrench, tone: "orange" },
  { label: "بناء الحقائب التدريبية", icon: Layers3, tone: "blue" },
  { label: "إدارة الفصول التعليمية", icon: GraduationCap, tone: "pink" },
  { label: "الدعم الفني", icon: MonitorCog, tone: "teal" },
  { label: "إنشاء المحتوى الرقمي", icon: Palette, tone: "yellow" },
  { label: "إدارة المشاريع التعليمية", icon: CircleCheck, tone: "green" },
];

const projects = [
  {
    number: "01",
    eyebrow: "تدريب مهني · مؤسسة التدريب المهني",
    title: "من المعرفة الرقمية إلى الجاهزية المهنية",
    description:
      "تصميم وتنفيذ برامج عملية في المهارات الرقمية والتصنيع الرقمي تربط التعلم بالتطبيق، وتمنح المتدربين أدوات ملموسة للاستعداد لسوق العمل.",
    metric: "200+",
    metricLabel: "متدرب خلال عام",
    tags: ["Digital Skills", "3D Printing", "AI Literacy"],
    accent: "project-lime",
  },
  {
    number: "02",
    eyebrow: "تعليم إبداعي · مركز زها الثقافي",
    title: "تعليم البرمجة كمساحة للخيال",
    description:
      "قيادة ورش تفاعلية للبرمجة والروبوتات للأطفال والشباب، مع دمج الألعاب التعليمية والذكاء الاصطناعي لرفع الفهم وتحويل الفضول إلى إنجاز.",
    metric: "150+",
    metricLabel: "طفل وشاب",
    tags: ["Robotics", "Coding", "Creative Learning"],
    accent: "project-violet",
  },
  {
    number: "03",
    eyebrow: "بنية تقنية · مدارس الأولى الأهلية",
    title: "تقنية تعليمية تعمل بهدوء",
    description:
      "إدارة مختبرات المدرسة، صيانة الأجهزة والأنظمة، وتقديم الدعم الفني للفرق التعليمية حتى تبقى التجربة التعليمية مستقرة وقابلة للاستمرار.",
    metric: "4 سنوات",
    metricLabel: "استمرارية تشغيلية",
    tags: ["IT Support", "Systems", "Education Ops"],
    accent: "project-orange",
  },
];

const timeline = [
  {
    period: "2024 — الآن",
    role: "مدربة حاسوب وتكنولوجيا معلومات",
    place: "مؤسسة التدريب المهني · الأردن",
    detail: "برامج متقدمة في المهارات الرقمية والتصنيع الرقمي لمختلف الفئات العمرية.",
    current: true,
  },
  {
    period: "2021 — الآن",
    role: "مدربة برمجة وروبوتات للأطفال والشباب",
    place: "مركز زها الثقافي · الأردن",
    detail: "ورش تفاعلية تجمع البرمجة والروبوتات والألعاب التعليمية والذكاء الاصطناعي.",
  },
  {
    period: "2018 — الآن",
    role: "أخصائية تسويق إلكتروني",
    place: "عمل حر · جهات ومشاريع متعددة",
    detail: "إدارة المنصات وبناء استراتيجيات المحتوى لزيادة الوصول والتفاعل.",
  },
  {
    period: "2014 — 2018",
    role: "مسؤولة تقنية ودعم فني",
    place: "مدارس الأولى الأهلية · السعودية",
    detail: "إدارة البنية التقنية للمختبرات ودعم الفرق الإدارية والتدريسية.",
  },
  {
    period: "2009 — 2012",
    role: "معلمة حاسوب",
    place: "مدارس النخبة الأهلية · السعودية",
    detail: "تدريس أساسيات الحاسوب وتطوير أنشطة تقنية ولاصفية للطلاب.",
  },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function OrbitalVisual() {
  return (
    <div className="orbital-shell" aria-label="رسم تجريدي يرمز إلى تقاطع التعليم والتقنية والإبداع" role="img">
      <div className="orbital-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbital-core">
        <div className="core-glow" />
        <Cpu size={38} strokeWidth={1.4} aria-hidden="true" />
        <span>تعليم<br />يصنع أثراً</span>
      </div>
      <span className="orbit-label label-one">AI</span>
      <span className="orbit-label label-two">CODE</span>
      <span className="orbit-label label-three">MAKE</span>
      <span className="orbit-node node-one" />
      <span className="orbit-node node-two" />
      <span className="orbit-node node-three" />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const printCv = () => window.print();

  return (
    <div className="site-shell" dir="rtl">
      <a className="skip-link" href="#main-content">تخطى إلى المحتوى الرئيسي</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="العودة إلى بداية صفحة هبة الطراونة">
            <span className="brand-mark">هـ</span>
            <span className="brand-copy"><strong>هبة الطراونة</strong><small>Digital Skills · Creative Tech</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>لنتحدث <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-noise" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="status-pill"><span className="status-dot" /> متاحة لفرص التدريب والشراكات التعليمية</div>
              <p className="hero-kicker">مدربة مهارات رقمية · ميسّرة تعليم إبداعي</p>
              <h1>أحوّل <em>التقنية</em><br />إلى قدرةٍ تُرى.</h1>
              <p className="hero-lede">هبة محمود الطراونة مدربة تكنولوجيا معلومات تجمع بين الذكاء الاصطناعي، والبرمجة، والروبوتات، والتصنيع الرقمي لتصنع تجارب تعليمية عملية ومؤثرة.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">اكتشف المشاريع <ArrowLeft size={18} aria-hidden="true" /></a>
                <button className="button button-ghost" type="button" onClick={printCv}><Printer size={17} aria-hidden="true" /> طباعة السيرة الذاتية</button>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><span>هـ</span><span>AI</span><span>+</span></div>
                <p><strong>14+ سنة</strong><br /><span>في التعليم والدعم التقني</span></p>
              </div>
            </div>
            <div className="hero-visual reveal" style={{ animationDelay: "100ms" }}>
              <div className="visual-caption caption-top"><Sparkles size={15} /> تقاطع التقنية مع الإنسان</div>
              <OrbitalVisual />
              <div className="visual-caption caption-bottom"><span className="mini-line" /> فكرة · مهارة · أثر</div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span>مرّر للاستكشاف</span><ChevronDown size={16} /></div>
        </section>

        <section className="marquee-band" aria-label="مجالات العمل">
          <div className="marquee-track"><span>AI EDUCATION</span><b>✦</b><span>ROBOTICS</span><b>✦</b><span>DIGITAL FABRICATION</span><b>✦</b><span>CREATIVE TECHNOLOGY</span><b>✦</b><span>AI EDUCATION</span><b>✦</b><span>ROBOTICS</span><b>✦</b></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow="01 · عن هبة" title={<>التقنية ليست هدفاً.<br /><span>بل فرصة للتغيير.</span></>} intro="تعمل هبة عند النقطة التي تلتقي فيها الأدوات الرقمية مع الفضول الإنساني. تصمم مساحات تعلم تمنح المتعلم الثقة كي يجرّب، ويخطئ، ويبني شيئاً يخصه." />
            <div className="about-story reveal" style={{ animationDelay: "100ms" }}>
              <p>من تدريب الكبار على المهارات الرقمية والتصنيع الرقمي، إلى إشعال شغف الأطفال بالروبوتات والبرمجة، تمتد خبرتها لأكثر من <strong>14 عاماً</strong> في جعل التقنية مفهومة، عملية، وقريبة من الحياة اليومية.</p>
              <p>تجمع في عملها بين عقلية المدربة، وحسّ المصممة، وخبرة مسؤولة الدعم الفني. النتيجة: برامج واضحة، ورش تفاعلية، وبيئات تعليمية تعمل بثبات.</p>
              <div className="about-note"><BadgeCheck size={21} aria-hidden="true" /><span>معتمدة في تدريب المدربين للمهارات الرقمية والذكاء الاصطناعي.</span></div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="02 · مشاريع مختارة" title={<>أثرٌ يبدأ من<br /><span>تجربة التعلم.</span></>} intro="ثلاثة مسارات تختصر طريقة العمل: فهم الاحتياج، بناء تجربة عملية، ثم قياس التقدم بلغة يفهمها المتعلم وسوق العمل." />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card ${project.accent} reveal`} style={{ animationDelay: `${index * 80}ms` }} key={project.number}>
                  <div className="card-topline"><span>{project.number}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
                  <div className="project-visual" aria-hidden="true"><div className="visual-symbol">{index === 0 ? <Sparkles size={31} /> : index === 1 ? <Bot size={31} /> : <MonitorCog size={31} />}</div><span className="visual-code">{index === 0 ? "010 / 101" : index === 1 ? "{ create() }" : "system.online"}</span></div>
                  <p className="card-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="project-bottom"><div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact-section">
          <div className="container impact-grid">
            <div className="impact-intro reveal"><p className="eyebrow"><span className="eyebrow-dot" />الأرقام التي تحكي القصة</p><h2>التعلم يصبح أقوى<br /><span>عندما يصبح ملموساً.</span></h2><a className="text-link" href="#contact">ابدأ محادثة <ArrowLeft size={16} /></a></div>
            <div className="impact-stats">
              <div className="impact-stat reveal"><span className="stat-index">01</span><strong>200<span>+</span></strong><p>متدرب تم تأهيله خلال العام الماضي على مهارات رقمية متقدمة.</p></div>
              <div className="impact-stat reveal" style={{ animationDelay: "100ms" }}><span className="stat-index">02</span><strong>150<span>+</span></strong><p>طفل وشاب خاضوا تجارب البرمجة والروبوتات بطريقة تفاعلية.</p></div>
              <div className="impact-stat reveal" style={{ animationDelay: "200ms" }}><span className="stat-index">03</span><strong>14<span>y</span></strong><p>عاماً من الخبرة في التعليم التقني، الدعم الفني، والتسويق الرقمي.</p></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <SectionHeading eyebrow="03 · المهارات والخبرة" title={<>صندوق أدوات<br /><span>متعدد الأبعاد.</span></>} intro="مزيج عملي من التفكير التقني، التواصل التعليمي، وصناعة المحتوى. لأن أفضل البرامج لا تحتاج أداة واحدة، بل منظومة متكاملة." />
            <div className="skills-cloud reveal" style={{ animationDelay: "100ms" }}>{skills.map((skill) => { const Icon = skill.icon; return <div className={`skill-chip ${skill.tone}`} key={skill.label}><Icon size={18} aria-hidden="true" /><span>{skill.label}</span></div>; })}</div>
          </div>
          <div className="container tools-row"><div><span className="tools-label">أدوات يومية</span><p>Windows · Microsoft Office · Google Apps · Canva · Bambu Lab Studio · Beam Studio</p></div><div className="tools-badge"><Atom size={18} /> <span>تعلم مستمر</span></div></div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container experience-grid">
            <div className="experience-sticky"><SectionHeading eyebrow="04 · المسار المهني" title={<>خبرة تتحرك<br /><span>مع المستقبل.</span></>} intro="مسار مهني متدرج من تعليم الحاسوب إلى قيادة تجارب التعلم الرقمي والتصنيع الإبداعي." /><div className="credential-card"><div className="credential-icon"><GraduationCap size={22} /></div><div><strong>بكالوريوس علوم الحاسوب</strong><span>تفاصيل الجامعة وسنة التخرج تحتاج إلى استكمال</span></div></div></div>
            <div className="timeline" aria-label="الخبرة المهنية">{timeline.map((item, index) => <article className={`timeline-item reveal ${item.current ? "is-current" : ""}`} style={{ animationDelay: `${index * 70}ms` }} key={item.role}><div className="timeline-marker"><span /></div><div className="timeline-content"><div className="timeline-meta"><span>{item.period}</span>{item.current && <b>الدور الحالي</b>}</div><h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section principles-section">
          <div className="container principles-grid"><div className="principles-title"><p className="eyebrow"><span className="eyebrow-dot" />كيف تعمل</p><h2>ثلاثة مبادئ.<br /><span>أثرٌ واحد.</span></h2></div><div className="principle-card"><span>01</span><h3>وضوح قبل التعقيد</h3><p>أحوّل المفاهيم التقنية إلى خطوات قابلة للفهم والتطبيق، دون أن أفقد عمقها.</p></div><div className="principle-card"><span>02</span><h3>التجربة قبل المحاضرة</h3><p>يتعلم المشاركون من خلال البناء والتجريب والمشاركة، لا من خلال التلقي وحده.</p></div><div className="principle-card"><span>03</span><h3>الأثر قابل للقياس</h3><p>أربط كل برنامج بمخرجات واضحة تساعد المتعلم على رؤية تقدمه والاستفادة منه.</p></div></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card"><div className="contact-orb" /><div className="contact-copy reveal"><p className="eyebrow"><span className="eyebrow-dot" />05 · لنتحدث</p><h2>هل لديك فكرة تعليمية<br /><em>تستحق أن تُبنى؟</em></h2><p>إذا كنت تبحث عن مدربة تجمع بين المهارة التقنية والطاقة الإنسانية، يسعدني أن أسمع عن مشروعك.</p><div className="contact-actions"><a className="button button-light" href="mailto:Hebahtarawneh@gmail.com">أرسل بريداً <Mail size={17} /></a><a className="contact-direct" href="tel:+962797376526"><Phone size={16} /> 079 737 6526</a></div></div><div className="contact-side reveal" style={{ animationDelay: "100ms" }}><div className="contact-detail"><MapPin size={18} /><span>المزار الجنوبي<br />الكرك، الأردن</span></div><div className="contact-detail"><Clock3 size={18} /><span>متاحة للتعاون<br />والفرص التدريبية</span></div><div className="contact-signature">H / <span>make it meaningful</span></div></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-wrap"><a className="brand" href="#top"><span className="brand-mark">هـ</span><span className="brand-copy"><strong>هبة الطراونة</strong><small>Digital Skills · Creative Tech</small></span></a><p>© 2026 هبة محمود الطراونة · صُمم ليكون واضحاً، عملياً، ومؤثراً.</p><div className="footer-actions"><a href="#top" aria-label="العودة إلى الأعلى"><ArrowUpRight size={18} /></a><a href="mailto:Hebahtarawneh@gmail.com" aria-label="إرسال بريد إلكتروني"><Send size={17} /></a></div></div></footer>
      <div className="print-only-cv"><h1>هبة محمود الطراونة</h1><p>مدربة مهارات رقمية وتقنيات إبداعية</p><hr /><h2>الملخص المهني</h2><p>مدربة خبيرة في تكنولوجيا المعلومات والمهارات الرقمية مع أكثر من 14 عاماً من الخبرة في التدريب التقني، الدعم الفني، والتصنيع الرقمي. متخصصة في الذكاء الاصطناعي، الروبوتات، البرمجة، والطباعة ثلاثية الأبعاد.</p><h2>الخبرة</h2>{timeline.map(item => <div key={item.role}><h3>{item.role} · {item.place}</h3><p>{item.period} — {item.detail}</p></div>)}<h2>التواصل</h2><p>Hebahtarawneh@gmail.com · 0797376526 · المزار الجنوبي، الكرك، الأردن</p></div>
    </div>
  );
}
