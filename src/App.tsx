import {
  Moon,
  Sun,
  BookOpen,
  Heart,
  Compass,
  HandHeart,
  CalendarDays,
  Settings,
  Home,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import "./App.css";

const prayers = [
  { name: "Fajr", time: "05:12 AM" },
  { name: "Dhuhr", time: "12:32 PM" },
  { name: "Asr", time: "03:48 PM" },
  { name: "Maghrib", time: "06:21 PM" },
  { name: "Isha", time: "07:38 PM" },
];

const features = [
  { title: "Dua", subtitle: "Words of prayer", icon: HandHeart },
  { title: "Quran", subtitle: "Continue reading", icon: BookOpen },
  { title: "Tasbeeh", subtitle: "Remember Allah", icon: Heart },
  { title: "Qibla", subtitle: "Find direction", icon: Compass },
];

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="brand">
          <div className="brand-icon">
            <Moon size={21} />
          </div>
          <span>Sabeel</span>
        </div>

        <button className="icon-button">
          <Settings size={21} />
        </button>
      </header>

      <section className="greeting">
        <p className="date">TUESDAY, 10 NOVEMBER</p>
        <h1>Assalamu Alaikum <span>🌙</span></h1>
        <p className="muted">May your day be filled with barakah.</p>
      </section>

      <section className="next-prayer">
        <div className="prayer-top">
          <span><Sparkles size={15} /> NEXT PRAYER</span>
          <span className="location">Bengaluru</span>
        </div>

        <div className="prayer-main">
          <div>
            <p className="next-name">Fajr</p>
            <h2>05:12 <small>AM</small></h2>
          </div>
          <div className="moon-art">
            <Moon size={58} strokeWidth={1.2} />
          </div>
        </div>

        <div className="countdown">
          <Clock size={15} />
          <span>Time remaining</span>
          <strong>04h 32m</strong>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Prayer times</h2>
          <span>View all <ChevronRight size={16} /></span>
        </div>

        <div className="prayer-list">
          {prayers.map((prayer, index) => (
            <div className={`prayer-item ${index === 0 ? "active" : ""}`} key={prayer.name}>
              <div className="prayer-symbol">
                {index === 0 ? <Sun size={19} /> : <Moon size={19} />}
              </div>
              <span className="prayer-label">{prayer.name}</span>
              <span className="prayer-time">{prayer.time}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Your spiritual tools</h2>
        </div>

        <div className="feature-grid">
          {features.map(({ title, subtitle, icon: Icon }) => (
            <button className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={22} /></div>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="dua-card">
        <div className="dua-heading">
          <span><Sparkles size={16} /> DAILY DU'A</span>
          <Heart size={19} />
        </div>
        <p className="arabic">رَبِّ زِدْنِي عِلْمًا</p>
        <p className="translation">"My Lord, increase me in knowledge."</p>
        <small>Quran 20:114</small>
      </section>

      <nav className="bottom-nav">
        <button className="nav-item selected"><Home size={21} /><span>Home</span></button>
        <button className="nav-item"><CalendarDays size={21} /><span>Prayer</span></button>
        <button className="nav-item"><BookOpen size={21} /><span>Quran</span></button>
        <button className="nav-item"><Heart size={21} /><span>Dhikr</span></button>
      </nav>
    </main>
  );
}

export default App;
