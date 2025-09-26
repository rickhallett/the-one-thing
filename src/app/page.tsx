import Navigation from '@/components/Navigation'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home() {
  return (
    <main>
      <div className="bamboo-pattern"></div>

      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <span className="hero-kanji">心</span>
          <h1>The Path Is Here.<br />Where Are You?</h1>
          <p className="hero-subtitle">
            An integrated path for those who have exhausted the maps of self-improvement and are ready for the real journey home.
          </p>
          <a href="#story" className="cta-primary">Explore the Path</a>
        </div>
      </section>

      <div className="story-wrapper" id="story">
        <RevealOnScroll>
          <div className="story-header">
            <h2>From System Crash to Solid Ground</h2>
          </div>
        </RevealOnScroll>

        <section className="story-section mist">
          <RevealOnScroll>
            <div className="story-container">
              <div className="story-title-vertical">道</div>
              <div className="story-content">
                <h3>The Seeker & The Crash</h3>
                <p>My story isn&apos;t a tidy hero&apos;s journey. It&apos;s the map of a territory I learned by getting lost in it. From a young age, I was a seeker, but my first real test was a crushing depression at sixteen. I patched the system with CBT and willpower, building a functional life on a fragile foundation.</p>
                <p>My search for &quot;more&quot; led to a full-scale system overload: a spiritual emergency so powerful it left me completely destabilized. The hardware of my nervous system couldn&apos;t handle the voltage. It became clear that chasing profound experiences without an equally profound foundation of ground and stability is a dangerous game.</p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <section className="story-section paper">
          <RevealOnScroll>
            <div className="story-container reverse">
              <div className="story-content">
                <h3>The Search for Ground</h3>
                <p>Seeking a safety valve, I swung to the other extreme: hard rationalism. I trained as a psychologist, mastering the logical blueprints of the mind. I thought if I could just understand the machine, I could fix it. And it was useful; it provided a detailed map of my cognitive distortions.</p>
                <p>But it was like having a perfect schematic for a life I wasn&apos;t actually living. It described the cage beautifully but offered no real key to the door. It was missing a soul.</p>
              </div>
              <div className="story-title-vertical">知</div>
            </div>
          </RevealOnScroll>
        </section>

        <section className="story-section mist">
          <RevealOnScroll>
            <div className="story-container">
              <div className="story-title-vertical">見</div>
              <div className="story-content">
                <h3>The Integration</h3>
                <p>The real shift started when I found Zen. It wasn&apos;t another belief system; it was the direct practice of seeing the cartographer. Zen introduced the direct experience of <strong>non-duality</strong>: the simple seeing that you are not your thoughts, but the silent, aware space in which they appear.</p>
                <p><strong>But a beautiful view from a mountaintop doesn&apos;t help you navigate the tangled forest below.</strong> For years, I still struggled. The recognition of this Aware space was there, but my human conditioning—addiction, anxiety, self-doubt—was deeply grooved. My nervous system was still running old, fearful programs. This is where my personal journey became the framework I now offer.</p>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </div>

      <section className="framework" id="framework">
        <div className="framework-container">
          <RevealOnScroll>
            <div className="section-header">
              <h2>The Integrated Framework</h2>
              <p>The View, The Compass, and The Ground. A complete method born from a life of inquiry, designed for a whole life.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="pillars">
              <div className="pillar">
                <div className="pillar-label">The View</div>
                <h3>Zen & Non-Duality</h3>
                <p>The practice of seeing what is already here. We shift our identity from the content of experience to the silent, aware context in which it arises. This is the source of unshakable peace.</p>
              </div>
              <div className="pillar">
                <div className="pillar-label">The Compass</div>
                <h3>Acceptance & Commitment (ACT)</h3>
                <p>The science-backed skills for a meaningful life. We learn to unhook from difficult thoughts, clarify our values, and take committed action in that direction, even when fear is present.</p>
              </div>
              <div className="pillar">
                <div className="pillar-label">The Ground</div>
                <h3>Somatic Work</h3>
                <p>The practice of coming home to the body. We gently release stored tension from the nervous system, building its capacity to handle life. A settled body is the foundation for a quiet mind.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="deep-dive-section" id="deep-dive">
        <RevealOnScroll>
          <div className="deep-dive-container">
            <div className="section-header">
              <h2>The Practice of Coming Home</h2>
            </div>
            <div className="deep-dive-item">
              <h3>The View: Zen and the End of the Search</h3>
              <p>The heart of this work is the direct recognition of your true nature. Through guided inquiry and silent presence, we look past the busy surface of the personality to the vast, open Awareness that you are. This isn&apos;t about attaining a future state; it&apos;s about recognizing the freedom that is already the ground of your being. It&apos;s the end of the exhausting project of self-improvement and the beginning of a life lived from a place of inherent wholeness.</p>
            </div>
            <div className="deep-dive-item">
              <h3>The Compass: Navigating Your Human Life with ACT</h3>
              <p>Knowing you are Awareness is profound, but it doesn&apos;t pay the bills or mend relationships. For that, we need a practical compass. <strong>Acceptance & Commitment Therapy (ACT)</strong> provides the tools to stop struggling with your thoughts and feelings. Instead of fighting them, we learn to make space for them while choosing actions aligned with what you deeply care about. It is the bridge between boundless freedom and a meaningful, effective life in the world.</p>
            </div>
            <div className="deep-dive-item">
              <h3>The Ground: Finding Safety in the Body with Somatic Work</h3>
              <p>Insights remain conceptual if the body is living in the past. Trauma, stress, and anxiety are not just in the mind; they are physiological patterns stored in the nervous system. Through <strong>Somatic work</strong>, we learn to listen to the body&apos;s language. We use breath and gentle attention to help the nervous system release stored survival energy and return to a state of natural balance and safety. This is the essential foundation that allows spiritual insights to become truly embodied and lived.</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <RevealOnScroll>
            <div className="section-header">
              <h2>Investment in Your Journey</h2>
              <p>Each session is a full hour of deep, focused work tailored to your unique path.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-type">Standard Rate</div>
                <div className="pricing-amount">£80</div>
                <div className="pricing-unit">per hour</div>
                <div className="pricing-description">
                  For those who can afford to invest fully in their transformation and support the accessibility of this work for others.
                </div>
              </div>
              <div className="pricing-card">
                <div className="pricing-type">Concession Rate</div>
                <div className="pricing-amount">£40</div>
                <div className="pricing-unit">per hour</div>
                <div className="pricing-description">
                  For students, those on low income, or anyone for whom the standard rate would be a barrier to this work.
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="pricing-grid" style={{marginTop: 'clamp(30px, 6vw, 40px)'}}>
              <div className="pricing-card" style={{gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto'}}>
                <div className="pricing-type">6-Session Package</div>
                <div className="pricing-savings">Save 20%</div>
                <div className="pricing-amount">£384</div>
                <div className="pricing-unit">6 sessions</div>
                <div className="pricing-description">
                  Commit to deeper work with a discounted package. Standard rate with £96 savings, or £192 for concession rate (saving £48).
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="cta-section" id="begin">
        <RevealOnScroll>
          <div className="cta-content">
            <h2>The Way is Made by Walking</h2>
            <p>
              This path is not a quick fix, but a commitment to doing the real work of integration. If this story resonates, and you&apos;re ready to move beyond theory into a direct, embodied practice of freedom, let us sit together.
            </p>
            <a href="https://calendar.app.google/MfUZEtV7nYdYHhkH9" className="cta-primary" target="_blank" rel="noopener noreferrer">Schedule a Conversation</a>
          </div>
        </RevealOnScroll>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">海</div>
          <p className="footer-text">
            © 2025 Kai · The View, The Compass, The Ground
          </p>
          <a href="https://www.oceanheart.ai" className="footer-link" target="_blank" rel="noopener noreferrer">
            www.oceanheart.ai
          </a>
        </div>
      </footer>
    </main>
  )
}