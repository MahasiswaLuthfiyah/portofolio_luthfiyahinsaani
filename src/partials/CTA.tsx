import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Berlangganan <GradientText>Newsletter Saya</GradientText>
        </>
      }
      description="Dapatkan pembaruan terbaru seputar proyek, artikel, dan informasi menarik lainnya langsung ke email Anda."
    />
  </Section>
);

export { CTA };
