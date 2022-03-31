import React from 'react'
import Navbar from '../../components/Navbar';
import './faq.css';

const FAQ = () => {
  return (
    <div>
        <Navbar/>
        <section claas="faq-section">
        <div class="faq">
            <div class="faq-left-desktop">
                <div class="faq-left-image-desktop">
                    <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-desktop.svg" alt="illustration-woman-online-desktop"/>
                </div>
                <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-box-desktop.svg" alt="illustration-box-desktop"/>
            </div>
            <div class="faq-left-mobile">
                <div class="faq-left-image-mobile">
                    <img src="https://rvs-faq-accordion-card.netlify.app/images/illustration-woman-online-mobile.svg" alt="illustration-woman-online-mobile"/>
                </div>
            </div>
            <div class="faq-right">
                <div class="faq-title">FAQ</div>
                <div class="faq-body">
                    <details>
                        <summary>How can one register?</summary>
                        <p>Currently,we do not have any registration system.You are free to access any section of the website.</p>
                    </details>
                    <details>
                        <summary>How do I find Jobs page?</summary>
                        <p>Click “Jobs” from the Navbar and you will be redirected to the Jobs page where you can filterjobs according to ypur convenience.</p>
                    </details>
                    <details>
                        <summary>Do you provide additional support?</summary>
                        <p>Email support is available 24/7. Phone lines are open during normal business hours.Also,you can contact us at any of he social media sites or in contact us page,you can leave a message for us.</p>
                    </details>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default FAQ