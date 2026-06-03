import { createFileRoute } from "@tanstack/react-router";
import { Comparison } from "@/components/landing/Comparison";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Problem } from "@/components/landing/Problem";
import { SiteFrame } from "@/components/landing/SiteFrame";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  createPageHead,
  homeStructuredData,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      path: "/",
      includeKeywords: true,
      structuredData: homeStructuredData,
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteFrame>
      <Hero />
      <Problem />
      <HowItWorks />
      <Comparison />
      <Features />
      <FAQ />
      <FinalCTA />
    </SiteFrame>
  );
}
