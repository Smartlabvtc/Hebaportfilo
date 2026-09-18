import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Bot,
  ChevronDown,
  CircleCheck,
  Clock3,
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
    image: "assets/work-01.jpg",
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
    image: "assets/work-07.jpg",
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
    image: "assets/work-04.jpg",
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

const galleryImages = [
  { src: "assets/work-01.jpg", label: "مهارات رقمية", note: "learn / build" },
  { src: "assets/work-02.jpg", label: "تجارب تدريبية", note: "hands-on" },
  { src: "assets/work-03.jpg", label: "تصنيع رقمي", note: "make / test" },
  { src: "assets/work-04.jpg", label: "روبوتكس", note: "code / move" },
  { src: "assets/work-05.jpg", label: "تعلم إبداعي", note: "curiosity" },
  { src: "assets/work-07.jpg", label: "مشاريع المتعلمين", note: "share / grow" },
  { src: "assets/work-10.jpg", label: "تقنية للجميع", note: "open access" },
  { src: "assets/work-13.jpg", label: "مختبر المستقبل", note: "future lab" },
];

const projectsEn = [
  { number: "01", image: "assets/work-01.jpg", eyebrow: "Vocational training · VTC", title: "From digital knowledge to career readiness", description: "Hands-on digital skills and digital fabrication programs that connect learning to practice and give learners tools they can use in the workplace.", metric: "200+", metricLabel: "learners in one year", tags: ["Digital Skills", "3D Printing", "AI Literacy"], accent: "project-lime" },
  { number: "02", image: "assets/work-07.jpg", eyebrow: "Creative education · Zaha Cultural Center", title: "Teaching code as a space for imagination", description: "Interactive coding and robotics workshops for children and youth, using educational games and AI to turn curiosity into confident making.", metric: "150+", metricLabel: "children & youth", tags: ["Robotics", "Coding", "Creative Learning"], accent: "project-violet" },
  { number: "03", image: "assets/work-04.jpg", eyebrow: "Technical infrastructure · Al-Oula Schools", title: "Learning technology that works quietly", description: "Managing school labs, devices, systems, and technical support so teaching teams can deliver a stable learning experience every day.", metric: "4 years", metricLabel: "operational continuity", tags: ["IT Support", "Systems", "Education Ops"], accent: "project-orange" },
];

const skillsEn = [
  { label: "Generative AI", icon: Sparkles, tone: "lime" },
  { label: "Robotics & Coding", icon: Bot, tone: "violet" },
  { label: "Digital Fabrication", icon: Wrench, tone: "orange" },
  { label: "Training Design", icon: Layers3, tone: "blue" },
  { label: "Classroom Facilitation", icon: GraduationCap, tone: "pink" },
  { label: "Technical Support", icon: MonitorCog, tone: "teal" },
  { label: "Digital Content", icon: Palette, tone: "yellow" },
  { label: "Education Projects", icon: CircleCheck, tone: "green" },
];

const galleryImagesEn = [
  { src: "assets/work-01.jpg", label: "Digital skills", note: "learn / build" },
  { src: "assets/work-02.jpg", label: "Training moments", note: "hands-on" },
  { src: "assets/work-03.jpg", label: "Digital fabrication", note: "make / test" },
  { src: "assets/work-04.jpg", label: "Robotics", note: "code / move" },
  { src: "assets/work-05.jpg", label: "Creative learning", note: "curiosity" },
  { src: "assets/work-07.jpg", label: "Learner projects", note: "share / grow" },
  { src: "assets/work-10.jpg", label: "Technology for all", note: "open access" },
  { src: "assets/work-13.jpg", label: "Future lab", note: "future lab" },
];

const timelineEn = [
  { period: "2024 — present", role: "Computer & Information Technology Trainer", place: "Vocational Training Corporation · Jordan", detail: "Advanced digital-skills and digital-fabrication programs for learners across age groups.", image: "assets/experience-vtc.jpg", imageAlt: "Digital skills and fabrication workshop", current: true },
  { period: "2021 — present", role: "Children & Youth Coding and Robotics Trainer", place: "Zaha Cultural Center · Jordan", detail: "Interactive workshops combining coding, robotics, educational games, and AI.", image: "assets/experience-robotics.jpg", imageAlt: "Youth robotics workshop", },
  { period: "2018 — present", role: "Digital Marketing Specialist", place: "Freelance · Multiple organizations", detail: "Platform management and content strategies that support reach and engagement.", image: "assets/experience-marketing.jpg", imageAlt: "Digital marketing planning workspace", },
  { period: "2014 — 2018", role: "Technical & IT Support Officer", place: "Al-Oula Private Schools · Saudi Arabia", detail: "School lab infrastructure management and support for teaching teams.", image: "assets/experience-it-support.jpg", imageAlt: "IT support in a school computer lab", },
  { period: "2009 — 2012", role: "Computer Teacher", place: "Al-Nokhba Private Schools · Saudi Arabia", detail: "Computer education and technology-focused extracurricular activities.", image: "assets/experience-computer-teacher.jpg", imageAlt: "Computer class with students", },
];

const timeline = [
  {
    period: "2024 — الآن",
    role: "مدربة حاسوب وتكنولوجيا معلومات",
    place: "مؤسسة التدريب المهني · الأردن",
    detail: "برامج متقدمة في المهارات الرقمية والتصنيع الرقمي لمختلف الفئات العمرية.",
    image: "assets/experience-vtc.jpg", imageAlt: "تدريب على المهارات الرقمية والتصنيع الرقمي",
    current: true,
  },
  {
    period: "2021 — الآن",
    role: "مدربة برمجة وروبوتات للأطفال والشباب",
    place: "مركز زها الثقافي · الأردن",
    detail: "ورش تفاعلية تجمع البرمجة والروبوتات والألعاب التعليمية والذكاء الاصطناعي.",
    image: "assets/experience-robotics.jpg", imageAlt: "ورشة برمجة وروبوتات للأطفال والشباب",
  },
  {
    period: "2018 — الآن",
    role: "أخصائية تسويق إلكتروني",
    place: "عمل حر · جهات ومشاريع متعددة",
    detail: "إدارة المنصات وبناء استراتيجيات المحتوى لزيادة الوصول والتفاعل.",
    image: "assets/experience-marketing.jpg", imageAlt: "تخطيط استراتيجية التسويق الرقمي",
  },
  {
    period: "2014 — 2018",
    role: "مسؤولة تقنية ودعم فني",
    place: "مدارس الأولى الأهلية · السعودية",
    detail: "إدارة البنية التقنية للمختبرات ودعم الفرق الإدارية والتدريسية.",
    image: "assets/experience-it-support.jpg", imageAlt: "دعم تقني داخل مختبر حاسوب",
  },
  {
    period: "2009 — 2012",
    role: "معلمة حاسوب",
    place: "مدارس النخبة الأهلية · السعودية",
    detail: "تدريس أساسيات الحاسوب وتطوير أنشطة تقنية ولاصفية للطلاب.",
    image: "assets/experience-computer-teacher.jpg", imageAlt: "درس حاسوب تفاعلي للطلاب",
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

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }
      const startedAt = performance.now();
      const duration = 1300;
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);
  return <strong ref={ref}>{value}<span>{suffix}</span></strong>;
}

function OrbitalVisual({ isEnglish }: { isEnglish: boolean }) {
  return (
    <div className="orbital-shell" aria-label="رسم تجريدي يرمز إلى تقاطع التعليم والتقنية والإبداع" role="img">
      <div className="orbital-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbital-core">
        <div className="core-glow" />
        <img className="innovation-emblem" src="assets/hero-innovation-emblem.png" alt="" aria-hidden="true" />
        <span>{isEnglish ? <>Learn<br />to make impact</> : <>تعليم<br />يصنع أثراً</>}</span>
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
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const isEnglish = lang === "en";
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    targets.forEach((element, index) => {
      element.style.setProperty("--scroll-delay", `${Math.min(index * 45, 240)}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [lang]);
  const activeNavItems = isEnglish
    ? [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Experience", href: "#experience" }, { label: "Skills", href: "#skills" }]
    : navItems;
  const activeSkills = isEnglish ? skillsEn : skills;
  const activeProjects = isEnglish ? projectsEn : projects;
  const activeTimeline = isEnglish ? timelineEn : timeline;
  const activeGalleryImages = isEnglish ? galleryImagesEn : galleryImages;
  const tx = (ar: string, en: string) => isEnglish ? en : ar;

  const closeMenu = () => setMenuOpen(false);
  const printCv = () => window.print();

  return (
    <div className={`site-shell ${isEnglish ? "is-english" : ""}`} dir={isEnglish ? "ltr" : "rtl"}>
      <a className="skip-link" href="#main-content">تخطى إلى المحتوى الرئيسي</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="العودة إلى بداية صفحة هبة الطراونة">
            <span className="brand-mark">هـ</span>
            <span className="brand-copy"><strong>{isEnglish ? "Heba Al-Tarawneh" : "هبة الطراونة"}</strong><small>Digital Skills · Creative Tech</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            {activeNavItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>{tx("لنتحدث", "Let’s talk")} <ArrowUpRight size={15} aria-hidden="true" /></a>
            <button className="language-toggle" type="button" onClick={() => setLang(isEnglish ? "ar" : "en")} aria-label={tx("تغيير اللغة إلى الإنجليزية", "Switch language to Arabic")}>{isEnglish ? "عربي" : "EN"}</button>
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
              <div className="status-pill"><span className="status-dot" /> {tx("متاحة لفرص التدريب والشراكات التعليمية", "Available for training opportunities & educational partnerships")}</div>
              <p className="hero-kicker">{tx("مدربة مهارات رقمية · ميسّرة تعليم إبداعي", "Digital skills trainer · Creative learning facilitator")}</p>
              <h1>{isEnglish ? <>I turn <em>technology</em><br />into capability you can see.</> : <>أحوّل <em>التقنية</em><br />إلى قدرةٍ تُرى.</>}</h1>
              <p className="hero-lede">{tx("هبة محمود الطراونة مدربة تكنولوجيا معلومات تجمع بين الذكاء الاصطناعي، والبرمجة، والروبوتات، والتصنيع الرقمي لتصنع تجارب تعليمية عملية ومؤثرة.", "Heba Mahmoud Al-Tarawneh is a technology trainer who brings together AI, coding, robotics, and digital fabrication to create practical, meaningful learning experiences.")}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">{tx("اكتشف المشاريع", "Explore projects")} <ArrowLeft size={18} aria-hidden="true" /></a>
                <button className="button button-ghost" type="button" onClick={printCv}><Printer size={17} aria-hidden="true" /> {tx("طباعة السيرة الذاتية", "Print CV")}</button>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><span>هـ</span><span>AI</span><span>+</span></div>
                <p><strong>{tx("14+ سنة", "14+ years")}</strong><br /><span>{tx("في التعليم والدعم التقني", "in education & technical support")}</span></p>
              </div>
            </div>
            <div className="hero-visual reveal" style={{ animationDelay: "100ms" }}>
              <div className="visual-caption caption-top"><Sparkles size={15} /> {tx("تقاطع التقنية مع الإنسان", "Where technology meets people")}</div>
              <OrbitalVisual isEnglish={isEnglish} />
              <div className="visual-caption caption-bottom"><span className="mini-line" /> {tx("فكرة · مهارة · أثر", "Idea · skill · impact")}</div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span>{tx("مرّر للاستكشاف", "Scroll to explore")}</span><ChevronDown size={16} /></div>
        </section>

        <section className="marquee-band" aria-label={tx("مجالات العمل", "Areas of work")}>
          <div className="marquee-track"><span>AI EDUCATION</span><b>✦</b><span>ROBOTICS</span><b>✦</b><span>DIGITAL FABRICATION</span><b>✦</b><span>CREATIVE TECHNOLOGY</span><b>✦</b><span>AI EDUCATION</span><b>✦</b><span>ROBOTICS</span><b>✦</b></div>
        </section>

        <section className="section about-section scroll-reveal" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow={tx("01 · عن هبة", "01 · About Heba")} title={<>{isEnglish ? <>Technology is not the goal.<br /><span>It is an opportunity to change.</span></> : <>التقنية ليست هدفاً.<br /><span>بل فرصة للتغيير.</span></>}</>} intro={tx("تعمل هبة عند النقطة التي تلتقي فيها الأدوات الرقمية مع الفضول الإنساني. تصمم مساحات تعلم تمنح المتعلم الثقة كي يجرّب، ويخطئ، ويبني شيئاً يخصه.", "Heba works where digital tools meet human curiosity. She designs learning spaces that give people the confidence to experiment, fail safely, and build something of their own.")} />
            <div className="about-story reveal" style={{ animationDelay: "100ms" }}>
              <div className="about-portrait-wrap">
                <img className="about-portrait" src="assets/heba-portrait-robotics.jpg" alt="هبة محمود الطراونة خلال تدريب عملي على الروبوتكس" loading="lazy" />
                <div className="portrait-stamp"><span>HEBA</span><small>digital / human / impact</small></div>
              </div>
              <p>{isEnglish ? <>From training adults in digital skills and fabrication to sparking children’s interest in robotics and coding, her <strong>14+ years</strong> of experience make technology practical, clear, and close to everyday life.</> : <>من تدريب الكبار على المهارات الرقمية والتصنيع الرقمي، إلى إشعال شغف الأطفال بالروبوتات والبرمجة، تمتد خبرتها لأكثر من <strong>14 عاماً</strong> في جعل التقنية مفهومة، عملية، وقريبة من الحياة اليومية.</>}</p>
              <p>{tx("تجمع في عملها بين عقلية المدربة، وحسّ المصممة، وخبرة مسؤولة الدعم الفني. النتيجة: برامج واضحة، ورش تفاعلية، وبيئات تعليمية تعمل بثبات.", "Her work combines a trainer’s mindset, a designer’s eye, and the experience of a technical support lead. The result: clear programs, interactive workshops, and learning environments that work reliably.")}</p>
              <div className="about-note"><BadgeCheck size={21} aria-hidden="true" /><span>{tx("معتمدة في تدريب المدربين للمهارات الرقمية والذكاء الاصطناعي.", "Certified in Training of Trainers for digital skills and artificial intelligence.")}</span></div>
            </div>
          </div>
        </section>

        <section className="section projects-section scroll-reveal" id="projects">
          <div className="container">
            <SectionHeading eyebrow={tx("02 · مشاريع مختارة", "02 · Selected projects")} title={<>{isEnglish ? <>Impact begins with<br /><span>the learning experience.</span></> : <>أثرٌ يبدأ من<br /><span>تجربة التعلم.</span></>}</>} intro={tx("ثلاثة مسارات تختصر طريقة العمل: فهم الاحتياج، بناء تجربة عملية، ثم قياس التقدم بلغة يفهمها المتعلم وسوق العمل.", "Three paths capture the method: understand the need, build a practical experience, then measure progress in language learners and employers value.")} />
            <div className="projects-grid">
              {activeProjects.map((project, index) => (
                <article className={`project-card ${project.accent} reveal`} style={{ animationDelay: `${index * 80}ms` }} key={project.number}>
                  <div className="card-topline"><span>{project.number}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
                  <div className="project-visual" aria-hidden="true"><img src={project.image} alt="" loading="lazy" /><div className="image-wash" /><div className="visual-symbol">{index === 0 ? <Sparkles size={31} /> : index === 1 ? <Bot size={31} /> : <MonitorCog size={31} />}</div><span className="visual-code">{index === 0 ? "010 / 101" : index === 1 ? "{ create() }" : "system.online"}</span></div>
                  <p className="card-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="project-bottom"><div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact-section scroll-reveal">
          <div className="container impact-grid">
            <div className="impact-intro reveal"><p className="eyebrow"><span className="eyebrow-dot" />{tx("الأرقام التي تحكي القصة", "The numbers behind the story")}</p><h2>{isEnglish ? <>Learning becomes stronger<br /><span>when it becomes tangible.</span></> : <>التعلم يصبح أقوى<br /><span>عندما يصبح ملموساً.</span></>}</h2><a className="text-link" href="#contact">{tx("ابدأ محادثة", "Start a conversation")} <ArrowLeft size={16} /></a></div>
            <div className="impact-stats">
              <div className="impact-stat reveal"><img className="impact-icon" src="assets/impact-icon-learning.png" alt="" aria-hidden="true" /><span className="stat-index">01</span><CountUp target={200} suffix="+" /><p>{tx("متدرب تم تأهيله خلال العام الماضي على مهارات رقمية متقدمة.", "learners developed advanced digital skills during the past year.")}</p></div>
              <div className="impact-stat reveal" style={{ animationDelay: "100ms" }}><img className="impact-icon" src="assets/impact-icon-robotics.png" alt="" aria-hidden="true" /><span className="stat-index">02</span><CountUp target={150} suffix="+" /><p>{tx("طفل وشاب خاضوا تجارب البرمجة والروبوتات بطريقة تفاعلية.", "children and young people experienced interactive coding and robotics.")}</p></div>
              <div className="impact-stat reveal" style={{ animationDelay: "200ms" }}><img className="impact-icon" src="assets/impact-icon-experience.png" alt="" aria-hidden="true" /><span className="stat-index">03</span><CountUp target={14} suffix="y" /><p>{tx("عاماً من الخبرة في التعليم التقني، الدعم الفني، والتسويق الرقمي.", "years across technical education, support, and digital marketing.")}</p></div>
            </div>
          </div>
        </section>

        <section className="section skills-section scroll-reveal" id="skills">
          <div className="container skills-grid">
            <SectionHeading eyebrow={tx("03 · المهارات والخبرة", "03 · Skills & expertise")} title={<>{isEnglish ? <>A multi-dimensional<br /><span>toolkit.</span></> : <>صندوق أدوات<br /><span>متعدد الأبعاد.</span></>}</>} intro={tx("مزيج عملي من التفكير التقني، التواصل التعليمي، وصناعة المحتوى. لأن أفضل البرامج لا تحتاج أداة واحدة، بل منظومة متكاملة.", "A practical blend of technical thinking, educational communication, and content creation. The best programs need an ecosystem, not a single tool.")} />
            <div className="skills-cloud reveal" style={{ animationDelay: "100ms" }}>{activeSkills.map((skill) => { const Icon = skill.icon; return <div className={`skill-chip ${skill.tone}`} key={skill.label}><Icon size={18} aria-hidden="true" /><span>{skill.label}</span></div>; })}</div>
          </div>
          <div className="container tools-row"><div className="tools-main"><span className="tools-label">{tx("أدوات يومية", "Everyday tools")}</span><div className="tool-list" aria-label={tx("البرامج المستخدمة يومياً", "Everyday software")}>{[{ name: "Windows", icon: "https://cdn.simpleicons.org/windows/0078D4" }, { name: "Microsoft Office", icon: "assets/microsoft-office.svg" }, { name: "Google Apps", icon: "https://cdn.simpleicons.org/google/4285F4" }, { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" }, { name: "Bambu Studio", icon: "https://cdn.simpleicons.org/bambulab/00AE42" }, { name: "Beam Studio", icon: "assets/beam-studio.svg" }].map(tool => <span className="tool-chip" key={tool.name}><img src={tool.icon} alt="" aria-hidden="true" loading="lazy" /><span>{tool.name}</span></span>)}</div></div><div className="tools-badge"><Atom size={18} /> <span>{tx("تعلم مستمر", "Continuous learning")}</span></div></div>
          <div className="container gallery-section reveal" style={{ animationDelay: "120ms" }}>
            <div className="gallery-heading"><div><span className="tools-label">{tx("من حقيبة أعمالي", "From my work portfolio")}</span><h3>{isEnglish ? <>Snapshots from the lab<br /><span>where ideas begin.</span></> : <>لقطات من المختبر<br /><span>حيث تبدأ الفكرة.</span></>}</h3></div><p>{tx("صور من تجارب التدريب، الروبوتكس، التصنيع الرقمي، ومشاريع المتعلمين.", "A visual selection from training, robotics, digital fabrication, and learner projects.")}</p></div>
            <div className="gallery-masonry">{activeGalleryImages.map((image, index) => <figure className={`gallery-tile tile-${index + 1}`} key={image.src}><img src={image.src} alt={image.label} loading="lazy" /><figcaption><span>{image.label}</span><small>{image.note}</small></figcaption></figure>)}</div>
          </div>
        </section>

        <section className="section experience-section scroll-reveal" id="experience">
          <div className="container experience-grid">
            <div className="experience-sticky"><SectionHeading eyebrow={tx("04 · المسار المهني", "04 · Career path")} title={<>{isEnglish ? <>Experience that moves<br /><span>with the future.</span></> : <>خبرة تتحرك<br /><span>مع المستقبل.</span></>}</>} intro={tx("مسار مهني متدرج من تعليم الحاسوب إلى قيادة تجارب التعلم الرقمي والتصنيع الإبداعي.", "A career that grew from computer education into leading digital learning and creative fabrication experiences.")} /><div className="credential-card"><div className="credential-icon"><GraduationCap size={22} /></div><div><strong>{tx("بكالوريوس علوم الحاسوب", "Bachelor’s degree in Computer Science")}</strong><span>{tx("جامعة مؤتة · 2009", "Mutah University · 2009")}</span></div></div></div>
            <div className="timeline" aria-label={tx("الخبرة المهنية", "Professional experience")}>{activeTimeline.map((item, index) => <article className={`timeline-item reveal ${item.current ? "is-current" : ""}`} style={{ animationDelay: `${index * 70}ms` }} key={item.role}><div className="timeline-marker"><span /></div><div className="timeline-content"><img className="timeline-image" src={item.image} alt={item.imageAlt} loading="lazy" /><div className="timeline-meta"><span>{item.period}</span>{item.current && <b>{tx("الدور الحالي", "Current role")}</b>}</div><h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section principles-section scroll-reveal">
          <div className="container principles-grid"><div className="principles-title"><p className="eyebrow"><span className="eyebrow-dot" />{tx("كيف تعمل", "How I work")}</p><h2>{isEnglish ? <>Three principles.<br /><span>One shared impact.</span></> : <>ثلاثة مبادئ.<br /><span>أثرٌ واحد.</span></>}</h2></div><div className="principle-card scroll-reveal"><div className="principle-icon icon-clarity"><Sparkles size={23} strokeWidth={1.5} aria-hidden="true" /></div><span>01</span><h3>{tx("وضوح قبل التعقيد", "Clarity before complexity")}</h3><p>{tx("أحوّل المفاهيم التقنية إلى خطوات قابلة للفهم والتطبيق، دون أن أفقد عمقها.", "I turn technical concepts into steps people can understand and apply without losing their depth.")}</p></div><div className="principle-card scroll-reveal"><div className="principle-icon icon-experience"><Wrench size={23} strokeWidth={1.5} aria-hidden="true" /></div><span>02</span><h3>{tx("التجربة قبل المحاضرة", "Experience before lecture")}</h3><p>{tx("يتعلم المشاركون من خلال البناء والتجريب والمشاركة، لا من خلال التلقي وحده.", "Participants learn through building, testing, and sharing—not through passive reception alone.")}</p></div><div className="principle-card scroll-reveal"><div className="principle-icon icon-impact"><CircleCheck size={23} strokeWidth={1.5} aria-hidden="true" /></div><span>03</span><h3>{tx("الأثر قابل للقياس", "Impact can be measured")}</h3><p>{tx("أربط كل برنامج بمخرجات واضحة تساعد المتعلم على رؤية تقدمه والاستفادة منه.", "I connect every program to clear outcomes that help learners see and use their progress.")}</p></div></div>
        </section>

        <section className="section contact-section scroll-reveal" id="contact">
          <div className="container contact-card"><div className="contact-orb" /><div className="contact-copy reveal"><p className="eyebrow"><span className="eyebrow-dot" />{tx("05 · لنتحدث", "05 · Let’s talk")}</p><h2>{isEnglish ? <>Have an educational idea<br /><em>worth building?</em></> : <>هل لديك فكرة تعليمية<br /><em>تستحق أن تُبنى؟</em></>}</h2><p>{tx("إذا كنت تبحث عن مدربة تجمع بين المهارة التقنية والطاقة الإنسانية، يسعدني أن أسمع عن مشروعك.", "If you are looking for a trainer who combines technical skill with human energy, I would love to hear about your project.")}</p><div className="contact-actions"><a className="button button-light" href="mailto:Hebahtarawneh@gmail.com">{tx("أرسل بريداً", "Send an email")} <Mail size={17} /></a><a className="contact-direct" href="tel:+962797376526"><Phone size={16} /> 079 737 6526</a></div></div><div className="contact-side reveal" style={{ animationDelay: "100ms" }}><div className="contact-detail"><MapPin size={18} /><span>{isEnglish ? <>Al-Mazar Al-Janoubi<br />Karak, Jordan</> : <>المزار الجنوبي<br />الكرك، الأردن</>}</span></div><div className="contact-detail"><Clock3 size={18} /><span>{isEnglish ? <>Open to collaboration<br />and training opportunities</> : <>متاحة للتعاون<br />والفرص التدريبية</>}</span></div><div className="contact-signature">H / <span>make it meaningful</span></div></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-wrap"><a className="brand" href="#top"><span className="brand-mark">هـ</span><span className="brand-copy"><strong>{isEnglish ? "Heba Al-Tarawneh" : "هبة الطراونة"}</strong><small>Digital Skills · Creative Tech</small></span></a><p>{isEnglish ? "© 2026 Heba Mahmoud Al-Tarawneh · Designed to be clear, practical, and meaningful." : "© 2026 هبة محمود الطراونة · صُمم ليكون واضحاً، عملياً، ومؤثراً."}</p><div className="footer-actions"><a href="#top" aria-label="العودة إلى الأعلى"><ArrowUpRight size={18} /></a><a href="mailto:Hebahtarawneh@gmail.com" aria-label="إرسال بريد إلكتروني"><Send size={17} /></a></div></div></footer>
      <div className="print-only-cv"><h1>هبة محمود الطراونة</h1><p>مدربة مهارات رقمية وتقنيات إبداعية</p><hr /><h2>الملخص المهني</h2><p>مدربة خبيرة في تكنولوجيا المعلومات والمهارات الرقمية مع أكثر من 14 عاماً من الخبرة في التدريب التقني، الدعم الفني، والتصنيع الرقمي. متخصصة في الذكاء الاصطناعي، الروبوتات، البرمجة، والطباعة ثلاثية الأبعاد.</p><h2>الخبرة</h2>{timeline.map(item => <div key={item.role}><h3>{item.role} · {item.place}</h3><p>{item.period} — {item.detail}</p></div>)}<h2>التواصل</h2><p>Hebahtarawneh@gmail.com · 0797376526 · المزار الجنوبي، الكرك، الأردن</p></div>
    </div>
  );
}
