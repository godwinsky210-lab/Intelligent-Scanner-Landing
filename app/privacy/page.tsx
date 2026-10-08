import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Intelligent Scanner handles your documents and data.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-ink-500">Coming soon.</p>
      </Container>
    </Section>
  );
}