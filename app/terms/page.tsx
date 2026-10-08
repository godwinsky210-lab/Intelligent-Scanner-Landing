import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of Intelligent Scanner.",
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-ink-500">Coming soon.</p>
      </Container>
    </Section>
  );
}