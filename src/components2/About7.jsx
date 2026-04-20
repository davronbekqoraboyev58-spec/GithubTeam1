import React from "react";
import "./AboutUs.css";

const STATS = [
  { icon: "👍", value: "60", suffix: "%", label: "Clients on the recommendation of friends" },
  { icon: "🖌️", value: "2400", suffix: "+", label: "Apartments renovated" },
  { icon: "⛑️", value: "670", suffix: "", label: "Qualified specialists" },
  { icon: "📋", value: "150000", suffix: "+ m²", label: "Finishing work was carried out" },
];

const HISTORY = [
  { year: "Present", text: "Biclericque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Biclericque dapibus. Eu nec vitae." },
  { year: "March 2019", text: "Expanded operations to the West Coast, opening new offices in Seattle and San Francisco. Completed 12 major commercial projects worth over $200M." },
  { year: "November 2018", text: "Awarded 'Best Construction Bureau' by the National Construction Federation for the third consecutive year." },
  { year: "July 2015", text: "Launched our international division, establishing partnerships in Germany and Ukraine. Completed the iconic Harborview Tower project." },
];

const TEAM = [
  { name: "Courtney Alexander", role: "CEO, Co-Founder", emoji: "👔" },
  { name: "Calvin Fox", role: "CTO, Co-Founder", emoji: "🧑‍💼" },
  { name: "Johnny Lane", role: "Commercial Manager", emoji: "👨‍💼" },
  { name: "Diane Mccoy", role: "Director of Human Resources", emoji: "👩‍💼" },
];

const PARTNERS = [
  "Adigna Consulting", "Higher Fit", "Central Consulting", "Town House", "The IoSale", "Secure Realty",
];

const COUNTRIES = [
  { code: "🇨🇦", name: "Canada" },
  { code: "🇺🇸", name: "USA" },
  { code: "🇩🇪", name: "Germany" },
  { code: "🇺🇦", name: "Ukraine" },
];

export default function About7() {
  return (
    <div className="about-page">
      <section className="hero">
        <h1>ABOUT US</h1>
        <p>
          Createx Construction Bureau has been successfully operating in the USA
          construction market since 2000.
        </p>
      </section>

      <section className="stats">
        {STATS.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-value">{item.value}<span>{item.suffix}</span></div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="history">
        <h2>History</h2>
        {HISTORY.map((entry) => (
          <div key={entry.year} className="history-item">
            <strong>{entry.year}</strong>
            <p>{entry.text}</p>
          </div>
        ))}
      </section>

      <section className="team">
        <h2>Team</h2>
        {TEAM.map((member) => (
          <div key={member.name} className="team-member">
            <span className="member-emoji">{member.emoji}</span>
            <div>
              <div>{member.name}</div>
              <div>{member.role}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="partners">
        <h2>Partners</h2>
        <div className="partner-list">
          {PARTNERS.map((name) => (
            <span key={name} className="partner-name">{name}</span>
          ))}
        </div>
      </section>

      <section className="countries">
        <h2>Countries</h2>
        <div className="country-list">
          {COUNTRIES.map((country) => (
            <div key={country.name} className="country-card">
              <span className="country-code">{country.code}</span>
              <div>{country.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
