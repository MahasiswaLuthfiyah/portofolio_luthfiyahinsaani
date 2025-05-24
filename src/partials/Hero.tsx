import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hai, saya <GradientText>Luthfiyah Insaani</GradientText> 👋

        </>
      }
     description={
  <>
    Saya adalah seorang mahasiswa semester 4 dari jurusan Teknik Informatika di kampus Areta Informatic College, dan saya tertarik di bidang bisnis digital, desain, dan di bagian website. Selama saya kuliah, banyak mata kuliah yang sudah saya ambil. Mungkin ini ada beberapa proyek saya yang sudah saya buat.
  </>
}

avatar={
  <img
    className="h-80 w-64"
    src="/assets/images/luthfi.png"
    alt="Avatar image"
    loading="lazy"
  />
}
socialButtons={
  <>
    <a href="https://twitter.com/nama_pengguna" target="_blank" rel="noopener noreferrer">
      <HeroSocial
        src="/assets/images/twitter-icon.png"
        alt="Twitter icon"
      />
    </a>
    <a href="https://www.facebook.com/share/1BiMP3rgqe/" target="_blank" rel="noopener noreferrer">
      <HeroSocial
        src="/assets/images/facebook-icon.png"
        alt="Facebook icon"
      />
    </a>
    <a href="https://www.instagram.com/saanilutpik_123?igsh=cm1jZ2lldDN4Y2E4" target="_blank" rel="noopener noreferrer">
      <HeroSocial
        src="/assets/images/icon-instagram.png"
        alt="Instagram icon"
      />
    </a>
    <a href="https://www.youtube.com/@Saanilutpik_123" target="_blank" rel="noopener noreferrer">
      <HeroSocial
        src="/assets/images/youtube-icon.png"
        alt="Youtube icon"
      />
    </a>
  </>
}
    />
  </Section>
);

export { Hero };
