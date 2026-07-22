import Link from "next/link";

const surveyUrl = "https://forms.google.com";

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">YOUR BRAND</Link>
        <nav>
          <a href="#story">Brand</a>
          <a href="#survey">Survey</a>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">DUBAI · EST. 2026</div>
        <h1>일상에서 벗어나는<br />가장 선명한 방법.</h1>
        <p className="lead">
          제품을 출시하기 전, 고객의 목소리부터 듣습니다. 브랜드의 첫 컬렉션과 방향을 함께 만들어주세요.
        </p>
        <div className="actions">
          <a className="button primary" href={surveyUrl} target="_blank" rel="noreferrer">사전 설문 참여</a>
          <a className="button secondary" href="#story">브랜드 알아보기</a>
        </div>
        <div className="hero-card">
          <span>01</span>
          <strong>VALIDATE BEFORE LAUNCH</strong>
          <p>웹사이트 → 고객 설문 → 샘플 검증 → 라이선스 → 판매</p>
        </div>
      </section>

      <section id="story" className="section shell grid-two">
        <div>
          <div className="eyebrow">OUR APPROACH</div>
          <h2>감이 아니라 데이터로<br />브랜드를 시작합니다.</h2>
        </div>
        <div className="copy">
          <p>Instagram에서 브랜드의 감도를 보여주고, 공식 웹사이트에서 신뢰를 만들며, 설문 결과로 실제 수요를 검증합니다.</p>
          <p>첫 제품은 크게 시작하지 않습니다. 고객이 원하는 디자인·가격·구매 이유를 확인한 뒤 가장 가능성 높은 제품부터 출시합니다.</p>
        </div>
      </section>

      <section className="section shell cards">
        {[
          ["01", "Discover", "브랜드와 제품 콘셉트 공개"],
          ["02", "Validate", "설문과 인터뷰로 수요 검증"],
          ["03", "Launch", "라이선스와 결제 준비 후 판매"],
        ].map(([n, title, text]) => (
          <article className="card" key={n}>
            <span>{n}</span><h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </section>

      <section id="survey" className="section shell survey">
        <div>
          <div className="eyebrow">EARLY COMMUNITY</div>
          <h2>첫 고객이 되어주세요.</h2>
          <p>3분 설문에 참여하면 출시 소식과 초기 구매 혜택을 가장 먼저 받을 수 있습니다.</p>
        </div>
        <a className="button light" href={surveyUrl} target="_blank" rel="noreferrer">설문 시작하기 ↗</a>
      </section>

      <footer className="footer shell">
        <div className="brand">YOUR BRAND</div>
        <div>Instagram · WhatsApp · Dubai, UAE</div>
        <div>© 2026 YOUR BRAND</div>
      </footer>
    </main>
  );
}
