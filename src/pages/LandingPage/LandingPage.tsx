import React from 'react';
import { LandingBanner, LandingBlogSection, LandingCardsSection, LandingNewsletterSection } from './index'


export default function LandingPage() {
    return (
        <div>
            <LandingBanner />
            <LandingCardsSection />
            <LandingBlogSection />
            <LandingNewsletterSection />
        </div>
    )
}
