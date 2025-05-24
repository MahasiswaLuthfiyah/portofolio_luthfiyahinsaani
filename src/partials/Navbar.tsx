import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/" className="flex items-center space-x-2">
        <Logo
          icon={
            <img
              src="/assets/images/logo_areta.png"
              alt="Logo"
              className="h-10 w-10"
            />
          }
          name="Areta Informatics College"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/MahasiswaLuthfiyah" target="_blank">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.youtube.com/@Saanilutpik_123" target="_blank">YouTube</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
