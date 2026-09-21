import { ContactForm } from "@/components/ContactForm";
import "@/app/product-development/product-development.css";
import "@/app/contact/contact.css";

export function ContactContent() {
  return (
    <div className="pd-page contact-page">
      <main id="main-content">
        <section className="pd-section" id="contact-form">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="contact-layout">
              <div className="contact-layout__intro">
                <span className="pd-eyebrow">Start a conversation</span>
                <h2>Get in touch to discuss your product vision with our team</h2>
                <p>
                  Share a bit about your product, timeline, and what you need
                  help with. Whether it&apos;s product development, fractional
                  leadership, or marketing, we&apos;ll point you in the right
                  direction.
                </p>
                <ul className="contact-points">
                  <li>Response within one business day</li>
                  <li>No obligation intro call</li>
                  <li>Direct access to the founding team</li>
                </ul>
              </div>
              <div className="contact-layout__form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
