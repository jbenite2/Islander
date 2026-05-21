import Image from "next/image";
import Link from "next/link";
import LandingEffects from "./LandingEffects";
import LandingNav from "./LandingNav";
import {
  tickerItems,
  benefits,
  diffCards,
  expItems,
  expPhotos,
  reviews,
} from "./landing-data";

export default function LandingPage() {
  return (
    <>
      <LandingEffects />
      <LandingNav />

      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">Isla Verde · Puerto Rico</p>
          <h1>
            The island.
            <br />
            <em>Without</em> the
            <br />
            tourist trap.
          </h1>
          <p className="hero-desc">
            Private concierge for Airbnb guests who want to actually experience Puerto Rico — guided by people who&apos;ve lived it, studied it, and know every hidden corner of it.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-sun">
              Reserve Your Weekend
            </a>
            <a href="#about" className="btn-outline">
              See what we offer ↓
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-inner">
            <p className="hero-emblem">DM</p>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <p className="hero-badge-num">100%</p>
              <p className="hero-badge-label">Private</p>
            </div>
            <div className="hero-badge">
              <p className="hero-badge-num">3</p>
              <p className="hero-badge-label">Encounters</p>
            </div>
            <div className="hero-badge">
              <p className="hero-badge-num">0</p>
              <p className="hero-badge-label">Tourist traps</p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="about" style={{ background: "var(--cream)" }}>
        <div className="section-inner">
          <div className="benefits-intro">
            <div className="reveal">
              <p className="eyebrow">What We Do</p>
              <h2 className="heading">
                Everything you need.
                <br />
                <em>Nothing you don&apos;t.</em>
              </h2>
              <p className="body-text" style={{ marginTop: 24 }}>
                From the moment your plane lands to the moment you leave — we handle the logistics, the local knowledge, and the experiences. You just show up and enjoy the island.
              </p>
            </div>
            <div className="reveal" style={{ paddingTop: 8 }}>
              <p className="body-text">
                We tailor everything to your group. Adventurers, beach lovers, foodies, families — we adapt to your pace, your interests, your energy. No cookie-cutter itinerary. No crowds.
              </p>
              <p className="body-text" style={{ marginTop: 16 }}>
                And if anything goes wrong in the field — our guides carry full first aid and wilderness survival training. You&apos;re in good hands, always.
              </p>
            </div>
          </div>
          <div className="benefits-grid reveal">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <p className="benefit-title">{b.title}</p>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diff-section" id="difference">
        <div className="section-inner">
          <div className="reveal">
            <p className="eyebrow">Why DelMonte</p>
            <h2 className="heading heading-white">
              This isn&apos;t a tour bus.
              <br />
              <em>This is your island.</em>
            </h2>
          </div>
          <div className="diff-grid reveal">
            {diffCards.map((c) => (
              <div key={c.num} className="diff-card">
                <p className="diff-num">{c.num}</p>
                <h3 className="diff-title">{c.title}</h3>
                <p className="diff-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exp-section" id="experience">
        <div className="section-inner">
          <div className="reveal">
            <p className="eyebrow">The Experience</p>
            <h2 className="heading">
              What a weekend
              <br />
              <em>with us looks like.</em>
            </h2>
          </div>
          <div className="exp-grid reveal">
            <div className="exp-list">
              {expItems.map((item) => (
                <div key={item.num} className="exp-item">
                  <p className="exp-item-num">{item.num}</p>
                  <p className="exp-item-text">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="exp-photos">
              {expPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`exp-photo${photo.tall ? " tall" : ""}`}
                  style={photo.tall ? { height: "100%" } : { height: 200 }}
                >
                  <Image src={photo.src} alt={photo.label} width={600} height={photo.tall ? 800 : 200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <p className="exp-photo-label">{photo.label}</p>
                </div>
              ))}
              <div className="exp-callout">
                <p className="exp-callout-text">&quot;Tell us who you are and what you want. We&apos;ll build the rest.&quot;</p>
                <p className="exp-callout-sub">
                  Adventurers, beach people, foodies, night owls — we&apos;ve got something for every group. Before your trip, we take the time to understand your pace, your energy, and what you actually want out of this weekend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section" id="video">
        <div className="section-inner">
          <div className="reveal">
            <p className="eyebrow">See It For Yourself</p>
            <h2 className="heading heading-white">
              A quick look at
              <br />
              <em>what we do.</em>
            </h2>
          </div>
          <div className="video-wrap reveal">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
              title="DelMonte Concierge"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-inner">
          <div className="reveal">
            <p className="eyebrow">What Guests Say</p>
            <h2 className="heading">
              Real weekends.
              <br />
              <em>Real people.</em>
            </h2>
          </div>
          <div className="reviews-grid reveal">
            {reviews.map((r) => (
              <div key={r.who} className="review">
                <p className="review-stars">★★★★★</p>
                <p className="review-quote">{r.quote}</p>
                <p className="review-who">{r.who}</p>
                <p className="review-origin">{r.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guides-section" id="team">
        <div className="section-inner">
          <div className="guides-intro reveal">
            <p className="eyebrow">The Team</p>
            <h2 className="heading heading-white">
              We are so glad
              <br />
              <em>you found us.</em>
            </h2>
            <p className="guides-note">
              Honestly — a company like this one doesn&apos;t come around often. People who actually love this island, actually know what they&apos;re talking about, and are genuinely pumped to share it with you. Both fluent in English and Spanish. Both ready to make your trip something you&apos;ll still be talking about in five years.
            </p>
          </div>
          <div className="guides-grid reveal">
            <div className="guide-card">
              <div className="guide-photo-wrap">
                <Image src="/img/landing/6-luis.jpg" alt="Luis" width={96} height={96} className="guide-photo" />
              </div>
              <p className="guide-role">Founder & Coordination</p>
              <h3 className="guide-name">Luis</h3>
              <p className="guide-bio">
                I&apos;ve been managing Airbnbs for a while now and kept noticing the same pattern — guests wanted more than a place to sleep. Taking friends from all over the world to the hidden corners of this island, the way we used to do back in my scouting days, has always been one of the best parts of my life. I&apos;ll grab any excuse to make a campfire, I&apos;ll find you the best Salsa night in Río Piedras, and yes — I will <em>absolutely</em> know the perfect photo op before you even think to ask. I got you.
              </p>
              <div className="guide-creds">
                <p className="guide-cred">Entertainment & Arts Management — Drexel University · MBA Finance, UPR (in progress)</p>
                <p className="guide-cred">Eagle Scout · Philmont Scout Ranch Winter Trek (2026)</p>
                <p className="guide-cred">Concierge Coordinator — La Concha Resort, Live Nation & Philadelphia Eagles (Go Birds! 🦅)</p>
                <p className="guide-cred">Airbnb host & short-term rental manager since 2023</p>
              </div>
            </div>
            <div className="guide-card">
              <div className="guide-photo-wrap">
                <Image src="/img/landing/7-igneri.jpg" alt="Igneri" width={96} height={96} className="guide-photo" />
              </div>
              <p className="guide-role">Lead Field Guide</p>
              <h3 className="guide-name">Igneri</h3>
              <p className="guide-bio">
                I like studying Environmental Science at UPR — but I <em>love</em> being a part of it. Most people think of Puerto Rico as beaches and old city streets. And sure, we&apos;ve got those. But this island is actually one of the very few places on earth with such a dramatically diverse ecosystem packed into a 100x35 mile stretch of land — rainforest, mangroves, bioluminescent bays, mountain peaks, coral reefs. Explaining that, living inside it, is what made me fall in love with being a ranger in the first place. Fair warning: I bird watch at the crack of dawn. You don&apos;t have to join me — but don&apos;t be surprised if you want to.
              </p>
              <div className="guide-creds">
                <p className="guide-cred">Environmental Sciences — UPR Río Piedras · Certified Interpretive Guide (NAI)</p>
                <p className="guide-cred">Highest recognition as a Venture Scout</p>
                <p className="guide-cred">Ranger at Philmont Scout Ranch (2022)</p>
                <p className="guide-cred">Wilderness First Aid · CPR/AED · Passionate Open Water Diver 🤿</p>
              </div>
            </div>
          </div>
          <div className="guides-more reveal">
            <p>Looking for spots to explore on your own?</p>
            <Link href="/places">Browse our local places guide →</Link>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner reveal">
          <p className="eyebrow">Ready?</p>
          <h2 className="heading">
            This is your
            <br />
            <em>Puerto Rico weekend.</em>
          </h2>
          <p className="cta-body">
            Fill out a quick form and we&apos;ll reach out personally within 48 hours to go over everything — your dates, your group, and what you want to get out of the trip.
          </p>
          <a href="/cuestionario" className="btn-sun">
            Start My Booking →
          </a>
          <p className="cta-fine">
            Private, certified, tailored. One group per weekend.
            <br />
            Summer 2026 spots are limited.
          </p>
        </div>
      </section>

      <footer>
        <p className="footer-logo">DelMonte</p>
        <p className="footer-right">
          <a href="mailto:delmonteconcierge@gmail.com">delmonteconcierge@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
