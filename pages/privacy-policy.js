'use client'
import styles from "../styles/PrivacyPolicy.module.css"
const PrivacyPolicy = ()=>{

    return(
        
        <div className={styles.privacyPolicy}>
            <header>
                <h1>Privacy Policy</h1>
                <p>Last Updated: [Date]</p>
            </header>

            <section className={styles.infoSection}>
                <h2>1. Information We Collect</h2>
                <p>We may collect personal information that you provide directly to us, such as your name, contact information, payment details, and travel preferences. Additionally, we may collect information about your usage of our website and services, including IP address, browser type, operating system, and browsing behaviors.</p>
            </section>

            <section className={styles.infoSection}>
                <h2>2. How We Use Your Information</h2>
                <p>We use the collected information for various purposes, including but not limited to:</p>
                <ul>
                    <li>Providing and managing the services you request.</li>
                    <li>Personalizing your experience and tailoring offers and recommendations to your preferences.</li>
                    <li>Processing payments and fulfilling bookings.</li>
                    <li>Communicating with you about your bookings, updates, and special offers.</li>
                    <li>Improving our website and services based on user feedback.</li>
                    <li>Complying with legal obligations and preventing fraudulent activities.</li>
                </ul>
            </section>

            <section className={styles.infoSection}>
                <h2>3. Information Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul>
                    <li>Service providers and partners who assist us in delivering our services.</li>
                    <li>Third parties for marketing and promotional purposes with your consent.</li>
                    <li>Legal authorities when required by law or to protect our rights, privacy, safety, or property.</li>
                </ul>
            </section>

            {/* Repeat the same structure for other sections */}
            
            <section className={styles.infoSection}>
                <h2>4. Your Choices</h2>
                <p>You can control your information in the following ways:</p>
                <ul>
                    <li>You can access and update your personal information by logging into your account on our website.</li>
                    <li>You can unsubscribe from our marketing communications at any time.</li>
                    <li>You can disable cookies in your browser settings, but this may affect the functionality of our website.</li>
                </ul>
            </section>

            <section className={styles.infoSection}>
                <h2>5. Data Security</h2>
                <p>We take appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>
            </section>

            <section className={styles.infoSection}>
                <h2>6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </section>

            <section className={styles.infoSection}>
                <h2>7. Children&apos;s Privacy</h2>
                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
            </section>

            <section className={styles.infoSection}>
                <h2>8. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes through our website or other means.</p>
            </section>

            <footer>
                <p>Contact us at 9205184001 if you have any questions or concerns about our Privacy Policy.</p>
                <p>By using our services, you consent to the terms outlined in this Privacy Policy. Thank you for trusting AL-AZEEM TOUR AND TRAVELS with your travel plans and information.</p>
            </footer>
        </div>
    )
}

export default PrivacyPolicy