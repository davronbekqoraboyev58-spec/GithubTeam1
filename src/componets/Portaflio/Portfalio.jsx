import { useState } from "react";
import "./Portfalio.css";
import heroBg from "../../assets/hero.png";
import { FaTh, FaBuilding, FaDraftingCompass, FaCouch, FaWrench } from "react-icons/fa";

const FILTERS = [
  { key: "all",          label: "All Projects",        icon: FaTh },
  { key: "construction", label: "Construction",        icon: FaBuilding },
  { key: "development",  label: "Project Development", icon: FaDraftingCompass },
  { key: "interior",     label: "Interior Design",     icon: FaCouch },
  { key: "repairs",      label: "Repairs",             icon: FaWrench },
];

const PROJECTS = [
  { id: 1, title: "Cubes Building",               category: "construction", type: "Business Center"  },
  { id: 2, title: "Modern Cottage",                category: "construction", type: "Private House"    },
  { id: 3, title: "Luxury Beach House",            category: "development",  type: "Private House"    },
  { id: 4, title: "Modern Double Bedroom",         category: "interior",     type: "Interior Design"  },
  { id: 5, title: "Kids Bedroom With Decorations", category: "interior",     type: "Interior Design"  },
  { id: 6, title: "The Pencil Building",           category: "construction", type: "Office & Parks"   },
  { id: 7, title: "Red Pager Building",            category: "construction", type: "Business Center"  },
  { id: 8, title: "Scandinavian Style Interior",   category: "interior",     type: "Private House"    },
  { id: 9, title: "Brown and Gray Painted House",  category: "development",  type: "Private House"    },
];

const CLIENTS = [
  "Fullstack Consulting", "Brander Up", "DEF Consulting",
  "CloudNet", "TechMade", "Simpr",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard,  setHoveredCard]  = useState(null);

  const visible =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pf-root">

      {/* ── NAVBAR ── */}
      <nav className="pf-nav">
        <div className="pf-nav__inner">
          <span className="pf-logo">CREATE<span>X</span></span>

          <ul className="pf-nav__links">
            {["About Us", "Services", "Work", "News", "Contacts"].map((l) => (
              <li key={l} className={l === "Work" ? "pf-nav__active" : ""}>{l}</li>
            ))}
          </ul>

          <div className="pf-nav__contact">
            <span>📞 (800) 123-45-00</span>
            <span>✉ hello@createx.com</span>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="pf-hero">
        <div className="pf-hero__text">
          <p className="pf-breadcrumb">Homepage / Work</p>
          <h1>OUR WORK</h1>
          <p className="pf-hero__sub">
            Our portfolio represents 20 years of construction experience backed by a
            passion for perfect client service, quality and innovations in
            construction industry.
          </p>
        </div>
        <div className="pf-hero__img">
          <img src={heroBg} alt="Architecture" />
        </div>
      </header>

      {/* ── FILTERS ── */}
      <section className="pf-filters">
        <div className="pf-filters__inner">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={"pf-filter" + (activeFilter === f.key ? " pf-filter--on" : "")}
              onClick={() => setActiveFilter(f.key)}
            >
              <span className="pf-filter__icon"><f.icon /></span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pf-grid-wrap">
        <div className="pf-grid">
          {visible.map((p) => (
            <div
              key={p.id}
              className={"pf-card" + (hoveredCard === p.id ? " pf-card--on" : "")}
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="pf-card__img-box">
                <img src={heroBg} alt={p.title} />
                <div className="pf-card__overlay">
                  <span className="pf-card__cta">VIEW PROJECT →</span>
                </div>
              </div>
              <div className="pf-card__body">
                <h3>{p.title}</h3>
                <p>{p.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pf-loadmore">
          <button className="pf-loadmore__btn">⊕ Load more</button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="pf-testi">
        <div className="pf-testi__inner">
          <div className="pf-testi__left">
            <h2>What our clients are saying</h2>
            <div className="pf-testi__card">
              <div className="pf-testi__author">
                <img src={heroBg} alt="Shawn Edwards" className="pf-testi__avatar" />
                <div>
                  <strong>Shawn Edwards</strong>
                  <span>Project Manager</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Aenean finibus dui vitae
                aculam ornim. Consectetur magna consequat eniml lorem synetis ellam
                labore voluptate eniml prpident exercitation ullamco alianca.
              </p>
              <div className="pf-testi__nav">
                <button>←</button>
                <button>→</button>
              </div>
            </div>
          </div>
          <div className="pf-testi__right">
            <img src={heroBg} alt="Workers" />
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="pf-clients">
        <h2>Our clients</h2>
        <div className="pf-clients__row">
          {CLIENTS.map((c) => (
            <div key={c} className="pf-client">{c}</div>
          ))}
        </div>
      </section>

      {/* ── CTA + FORM ── */}
      <section className="pf-cta">
        <div className="pf-cta__bg">
          <img src={heroBg} alt="Building" />
          <div className="pf-cta__overlay" />
        </div>
        <div className="pf-cta__form-box">
          <h3>A quick way to discuss details</h3>
          <div className="pf-form">
            <input type="text"  placeholder="Your Name*"        className="pf-input" />
            <input type="tel"   placeholder="Your Phone Number" className="pf-input" />
            <input type="email" placeholder="Your Valid Email"  className="pf-input" />
            <textarea           placeholder="Your Message"      className="pf-textarea" rows={4} />
            <label className="pf-check">
              <input type="checkbox" />
              <span>I agree to receive promotional materials from Createx Construction Bureau.</span>
            </label>
            <button className="pf-btn">SEND REQUEST</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pf-footer">
        <div className="pf-footer__inner">
          <div className="pf-footer__brand">
            <span className="pf-logo pf-logo--light">CREATE<span>X</span></span>
            <p>
              Createx Construction Bureau has been successfully operating in the USA
              construction market since 1995. We strive to offer the highest quality
              construction and installation service.
            </p>
            <div className="pf-footer__socials">
              <span>💬</span><span>📘</span><span>📸</span><span>🐦</span><span>▶</span>
            </div>
          </div>

          <div className="pf-footer__col">
            <h4>HEAD OFFICE</h4>
            <p>Addr: 3985 Portula Rd. Englewood, New York</p>
            <p>Call: (405) 555-0128</p>
            <p>Email: hello@createx.com</p>
          </div>

          <div className="pf-footer__col">
            <h4>WHO WE ARE</h4>
            <p>About Us</p>
            <p>Available Portfolio</p>
            <p>Contacts</p>
          </div>

          <div className="pf-footer__col">
            <h4>OUR EXPERIENCE</h4>
            <p>Services</p>
            <p>News</p>
          </div>

          <div className="pf-footer__sub">
            <h4>Let's stay in touch</h4>
            <div className="pf-footer__sub-row">
              <input type="email" placeholder="Your email address" className="pf-input pf-input--dark" />
              <button className="pf-btn pf-btn--sm">Subscribe</button>
            </div>
            <p>Subscribe to our newsletter to receive early discount offers, updates and new projects info.</p>
          </div>
        </div>

        <div className="pf-footer__bottom">
          <span>© All rights reserved. Made with ♥ by Createx Studio</span>
          <button className="pf-gotop">GO TO TOP ↑</button>
        </div>
      </footer>

    </div>
  );
}