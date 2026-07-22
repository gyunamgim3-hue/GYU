import Link from "next/link";

const tasks = [
  ["웹사이트 1차 공개", "진행 중", "2026-09"],
  ["고객 사전 설문", "준비", "2026-09"],
  ["UAE 라이선스 비교", "조사", "2026-09~10"],
  ["샘플 및 공급처 확정", "대기", "2026-10"],
];

export default function Dashboard() {
  return (
    <main className="dashboard shell">
      <div className="dash-top">
        <div><div className="eyebrow">BUSINESS OS</div><h1>운영 대시보드</h1></div>
        <Link className="button secondary" href="/">웹사이트 보기</Link>
      </div>
      <section className="metric-grid">
        <article><span>Survey responses</span><strong>0</strong><small>설문 연결 후 자동 집계 예정</small></article>
        <article><span>Instagram followers</span><strong>—</strong><small>향후 API/수동 입력 연동</small></article>
        <article><span>Launch readiness</span><strong>25%</strong><small>4개 핵심 단계 중 1개 진행</small></article>
      </section>
      <section className="panel">
        <div className="panel-head"><h2>2026 실행 계획</h2><button>+ Task</button></div>
        <div className="task-list">
          {tasks.map(([task, status, due]) => (
            <div className="task" key={task}><strong>{task}</strong><span>{status}</span><time>{due}</time></div>
          ))}
        </div>
      </section>
      <section className="panel notes">
        <h2>다음 개발 항목</h2>
        <p>① 실제 로고·브랜드 컬러 적용 ② 설문 폼 연결 ③ 관리자 로그인 ④ 설문 데이터 저장 ⑤ 제품/콘텐츠 관리 ⑥ 결제 및 주문 기능</p>
      </section>
    </main>
  );
}
