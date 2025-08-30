import React, { useState } from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <h3>Contact Us / Report and Issue</h3>
            <form
                action="http://formsubmit.co/suyalmili@gmail.com"
                method="POST"
            >
                {/* Redirect to a thank-you page after submission */}
                <input type="hidden" name="_next" value="https://BackLitCrewClub.com/thank-you" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Name field */}
                <label htmlFor="name">Name (optional)</label>
                <input type="text" id="name" name="name" placeholder="Your name" />

                {/* Email field (optional) */}
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Describe the issue or message..." required />

                <button type="submit">Submit</button>
            </form>
        </footer>
    )
}

export default Footer