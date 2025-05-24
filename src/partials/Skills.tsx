import { Section } from 'astro-boilerplate-components';

const Skills = () => (
  <Section title="Skills & Tools">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-lg font-medium text-white">
      <div>Figma</div>
      <div>CorelDRAW</div>
      <div>HTML & CSS</div>
      <div>Tailwind CSS</div>
      <div>JavaScript</div>
      <div>React</div>
      <div>Astro</div>
      <div>Git & GitHub</div>
    </div>
  </Section>
);

export { Skills };
