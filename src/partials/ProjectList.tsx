import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
  name="Salad.id - Custom Salad Ordering Flow"
  description="Client Overview: Salad.id adalah restoran modern yang mengutamakan makanan sehat dengan fitur unggulan pemesanan salad kustom. Pelanggan dapat memilih bahan sesuai selera mereka melalui aplikasi, memberikan pengalaman personal dan praktis."
  link="https://www.figma.com/proto/HSdBFB3ipJ7cifhAq2KdWZ/AIC--Luthfiyah-Insaani?node-id=148-735&p=f&t=Iv142QIcDRso2M8K-0&scaling=min-zoom&content-scaling=fixed&page-id=137%3A2"  // Ganti dengan URL asli proyekmu
  img={{
    src: '/assets/images/logo-salad.png',
    alt: 'Salad.id Custom Salad Ordering Flow',
  }}
  category={
    <>
      <Tags color={ColorTags.FUCHSIA}>UI/UX</Tags>
      <Tags color={ColorTags.LIME}>Desain Aplikasi</Tags>
      <Tags color={ColorTags.SKY}>Pengalaman Pengguna</Tags>
    </>
  }
/>
<Project
  name="Joyride - School Transportation App"
  description="Joyride adalah aplikasi yang dirancang untuk membantu orang tua memesan layanan penjemputan dan pengantaran anak ke sekolah. Aplikasi ini menawarkan solusi yang aman, nyaman, dan efisien dalam mengatur transportasi harian anak-anak."
  link="https://www.figma.com/proto/HSdBFB3ipJ7cifhAq2KdWZ/AIC--Luthfiyah-Insaani?node-id=68-362&p=f&t=Ipvxe4UdTUv6Ydok-0&scaling=scale-down&content-scaling=fixed&page-id=68%3A361"  // Ganti dengan URL asli proyekmu
  img={{
    src: '/assets/images/logo-joyride.png',
    alt: 'Joyride School Transportation App',
  }}
  category={
    <>
      <Tags color={ColorTags.FUCHSIA}>UI/UX</Tags>
      <Tags color={ColorTags.LIME}>Transportasi Anak</Tags>
      <Tags color={ColorTags.SKY}>Desain Aplikasi</Tags>
    </>
  }
/>
      <Project
  name="Desain Kartu Tanda Mahasiswa - Areta Informatic College"
  description="Desain kartu tanda mahasiswa (KTM) menggunakan CorelDRAW untuk Areta Informatic College. Menampilkan tata letak informatif dengan identitas visual kampus yang kuat dan elemen keamanan yang sederhana namun efektif."
  link="https://drive.google.com/file/d/1AlhpbUi4HBpeiTVOWZma3dw-ZYSdCdkk/view?usp=drive_link" // Ganti dengan link hasil desain kalau ada
  img={{
    src: '/assets/images/logo-kartumahasiswa.png',
    alt: 'Desain Kartu Mahasiswa',
  }}
  category={
    <>
      <Tags color={ColorTags.FUCHSIA}>Desain Grafis</Tags>
      <Tags color={ColorTags.LIME}>CorelDRAW</Tags>
      <Tags color={ColorTags.SKY}>Identitas Visual</Tags>
    </>
  }
/>

      <Project
  name="Desain kalender duduk - Areta Informatic College"
  description="Desain kalender duduk menggunakan CorelDRAW yang dibuat untuk keperluan promosi dan branding. Menampilkan tata letak yang menarik, informatif, serta memuat identitas visual yang konsisten dengan karakter lembaga atau perusahaan terkait."
  link="https://drive.google.com/file/d/1AlhpbUi4HBpeiTVOWZma3dw-ZYSdCdkk/view?usp=drive_link" // Ganti dengan link hasil desain kalau ada
  img={{
    src: '/assets/images/logo-kalenderduduk.png',
    alt: 'Desain Kartu Mahasiswa',
  }}
  category={
    <>
      <Tags color={ColorTags.FUCHSIA}>Desain Grafis</Tags>
      <Tags color={ColorTags.LIME}>CorelDRAW</Tags>
      <Tags color={ColorTags.SKY}>Identitas Visual</Tags>
    </>
  }
/>
<Project
  name="Desain packaging - Minyak Herbal"
  description="Desain kemasan produk minyak herbal yang dibuat menggunakan CorelDRAW. Mengusung konsep natural dan sehat, desain ini menonjolkan elemen warna alami, tipografi yang bersih, serta informasi produk yang mudah dibaca untuk meningkatkan daya tarik dan kepercayaan konsumen."
  link="https://drive.google.com/file/d/1lKB3s9QSc0jJ-HLTSTfEtGXBMB0GWvou/view?usp=drive_link" // Ganti dengan link hasil desain kalau ada
  img={{
    src: '/assets/images/logo-kemasan.png',
    alt: 'Desain packaging',
  }}
  category={
    <>
      <Tags color={ColorTags.FUCHSIA}>Desain Grafis</Tags>
      <Tags color={ColorTags.LIME}>CorelDRAW</Tags>
      <Tags color={ColorTags.SKY}>Identitas Visual</Tags>
    </>
  }
/>
    </div>
  </Section>
);

export { ProjectList };
