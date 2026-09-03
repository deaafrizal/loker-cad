import { ArrowDownRight, ArrowUpRight, Check, Mail, Printer } from 'lucide-react';

const email = 'deascript@icloud.com';

const workItems = [
  'Menerjemahkan ide, sketsa, dan requirement menjadi CAD yang rapi dan dapat diproduksi.',
  'Merancang bodi robot: joint, mounting, panel, shell, enclosure, dan komponen pendukungnya.',
  'Memodifikasi file STEP / file 3D sejenis serta membuat desain baru sesuai kebutuhan.',
  'Menyiapkan desain untuk iterasi cepat: design → print → test → repeat.',
];

const coreSkills = [
  'Fusion 360 atau CAD parametrik sejenis',
  'Pernah menggunakan atau memahami workflow 3D printing',
  'Mampu membaca, memodifikasi, dan menyiapkan file STEP / file 3D',
  'Mengerti design for printing, bukan hanya membuat bentuk terlihat jadi',
  'Terbuka pada feedback, siap revisi, komunikatif, dan kolaboratif',
];

const printChecks = ['Toleransi & clearance', 'Support & overhang', 'Wall thickness', 'Orientasi cetak', 'Pemilihan material', 'Kemudahan assembly'];
const plusSkills = ['Raspberry Pi', 'Arduino', 'ESP32', 'STM32', 'Hardware robot / IoT', 'Skematik hardware'];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">// {children}</p>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke atas">
          <span className="brand-mark">R/</span>
          <span>robotics workbench</span>
        </a>
        <a className="header-link" href={`mailto:${email}?subject=Lamaran%20CAD%20%2F%203D%20Designer%20Robot`}>
          apply now <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> we are hiring / 01</p>
          <h1>CAD / 3D<br />DESIGNER<br /><em>ROBOT</em></h1>
          <p className="hero-lede">Buat ide jadi robot yang bisa diprint, diuji, lalu diulang.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${email}?subject=Lamaran%20CAD%20%2F%203D%20Designer%20Robot`}>
              Kirim CV + portofolio <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-action" href="#details">Lihat detail <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustrasi mekanisme joint robot" role="img">
          <div className="terminal-card"><span>&gt; idea_to_robot.exe</span><span>&gt; build</span><span>&gt; test</span><span>&gt; repeat</span></div>
          <svg viewBox="0 0 520 520" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M138 355h235l44-57-70-84h-70l-46 59h-93z" />
              <path d="M138 355l-43-82 43-75h93" strokeDasharray="7 7" />
              <circle cx="277" cy="214" r="59" /><circle cx="277" cy="214" r="20" /><circle cx="277" cy="214" r="7" />
              <path d="M231 190l-49-62 49-55h91l40 60-40 57" />
              <path d="M322 73v-40M182 128h-43M373 298h65M95 273H47" strokeDasharray="5 7" />
              <path d="M107 388h306M107 402h214" strokeWidth="1" />
              <circle cx="138" cy="355" r="10" /><circle cx="373" cy="355" r="10" /><circle cx="138" cy="273" r="10" /><circle cx="417" cy="298" r="10" />
            </g>
            <g className="lime-fill"><circle cx="277" cy="214" r="8" /><circle cx="138" cy="355" r="5" /><circle cx="373" cy="355" r="5" /></g>
          </svg>
          <div className="spec-card"><span>units: mm</span><span>tol: ±0.20</span><span>material: PLA / PETG / ABS</span></div>
          <div className="visual-caption">prototype joint / rev. 03</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Keahlian utama"><span>ROBOTICS</span><span>CAD</span><span>3D PRINT</span><span>HARDWARE</span><span>ITERATION</span></section>

      <section className="intro-section" id="details">
        <div><SectionLabel>tentang peran ini</SectionLabel><h2>Desain yang<br />siap hidup di dunia nyata.</h2></div>
        <div className="intro-copy"><p>Kami mencari designer yang nyaman berada di antara ide dan prototype. Kamu akan membantu membentuk komponen robot yang tidak hanya menarik di layar, tetapi juga masuk akal saat diprint, dirakit, dan diuji.</p><p>Ini adalah peran untuk orang yang suka mengutak-atik detail: clearance yang pas, mounting yang kokoh, shell yang mudah dirakit, serta revisi kecil yang membuat prototype berikutnya jauh lebih baik.</p></div>
      </section>

      <section className="work-section">
        <div className="sticky-title"><SectionLabel>yang akan kamu kerjakan</SectionLabel><h2>Think.<br />Make.<br /><em>Repeat.</em></h2></div>
        <ol className="work-list">
          {workItems.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p><ArrowDownRight size={22} aria-hidden="true" /></li>)}
        </ol>
      </section>

      <section className="skills-section">
        <div className="skills-heading"><SectionLabel>kualifikasi utama</SectionLabel><h2>Yang kami<br />cari</h2></div>
        <div className="skills-list">
          {coreSkills.map((skill) => <div className="skill-row" key={skill}><Check size={18} aria-hidden="true" /><span>{skill}</span></div>)}
        </div>
      </section>

      <section className="print-section">
        <div className="print-visual"><Printer size={38} strokeWidth={1.5} aria-hidden="true" /><span className="print-label">FDM / FFF ready</span><div className="layer layer-one" /><div className="layer layer-two" /><div className="layer layer-three" /><p>design<br />for printing</p></div>
        <div className="print-copy"><SectionLabel>hal yang penting buat kami</SectionLabel><h2>CAD yang paham<br />cara dicetak.</h2><p>Desain bukan berhenti di layar. Kamu perlu mempertimbangkan bagaimana komponen tersebut keluar dari printer, bertemu dengan komponen lain, dan bertahan saat dipakai.</p><div className="check-grid">{printChecks.map((item) => <span key={item}><i>+</i>{item}</span>)}</div></div>
      </section>

      <section className="plus-section">
        <div><SectionLabel>nilai plus, bukan syarat wajib</SectionLabel><h2>Kalau kamu<br />juga suka<br /><em>ngoprek.</em></h2></div>
        <div className="plus-copy"><p>Pengalaman dengan elektronik atau sistem embedded akan membantu kamu memahami konteks desainnya lebih utuh.</p><div className="tags">{plusSkills.map((skill) => <span key={skill}>{skill}</span>)}</div><p className="muted-copy">Tidak harus menguasai semuanya. Rasa ingin tahu dan kemauan belajar tetap sangat kami hargai.</p></div>
      </section>

      <section className="apply-section" id="apply">
        <div className="apply-heading"><SectionLabel>cara melamar</SectionLabel><h2>Show us<br />what you make.</h2></div>
        <div className="apply-card"><Mail size={30} aria-hidden="true" /><h3>Kirim CV + portofolio</h3><p>Bagikan contoh desain yang paling kamu banggakan. Boleh berupa project CAD, hasil print, dokumentasi prototype, atau karya lain yang menunjukkan cara kamu berpikir dan bekerja.</p><a href={`mailto:${email}?subject=Lamaran%20CAD%20%2F%203D%20Designer%20Robot`} className="email-link">{email}<ArrowUpRight size={21} aria-hidden="true" /></a><small>Subjek email yang disarankan: <b>Lamaran CAD / 3D Designer Robot</b></small></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">R/</span><span>robotics workbench</span></a><span>made for people who build</span><a href={`mailto:${email}`}>contact ↗</a></footer>
    </main>
  );
}
