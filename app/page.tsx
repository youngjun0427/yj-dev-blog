"use client"

import { useState } from "react"

const steps = [
  ["01", "여정을 등록해요", "출발지, 도착일과 원하는 시간을 골라 주세요."],
  ["02", "기준 항공편을 확인해요", "처음 조회한 항공편을 기준으로 저장해요."],
  ["03", "새 항공편을 찾아요", "출발일까지 주기적으로 항공편을 확인해요."],
  ["04", "푸시로 알려드려요", "조건에 맞는 새 항공편이 나타나면 알려드려요."],
]
const faqs = [
  ["어떤 항공권을 알려주나요?", "국내선 직항 항공편을 대상으로 해요. 등록 시점에 없던 항공편이 새로 나타나면 알려드려요."],
  ["가격이 내려가도 알려주나요?", "같은 항공편의 가격만 바뀐 경우에는 알리지 않아요. 새 항공편이 나타난 경우에만 알려드려요."],
  ["알림을 받은 뒤에도 계속 확인하나요?", "네. 알림을 보낸 뒤에도 출발일까지 계속 확인해요. 표를 구하셨다면 등록한 알림을 삭제해 주세요."],
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return <div className="flight-site">
    <header className="flight-nav"><a className="flight-logo" href="#top"><span className="logo-mark">✦</span>항공권 알리미</a><a className="nav-link" href="#how-it-works">이용 방법</a></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="kicker">국내선 취소표 알림</p><h1>기다리던 취소표,<br />나오면 <span>알려드려요</span></h1><p className="hero-description">매번 검색하지 않아도 괜찮아요.<br />새 항공권을 확인하고 푸시로 알려드려요.</p><a className="primary-link" href="#register">알림 등록하기 <span>→</span></a><p className="availability">오늘부터 14일 이내의 국내선 직항 항공편을 확인해요.</p></div><div className="phone-wrap"><div className="phone"><div className="phone-notch" /><div className="phone-content"><div className="phone-status"><span>9:41</span><span>●●●</span></div><p className="phone-kicker">기다림은 맡겨두세요</p><h2>찾는 표가 나오면,<br />알려드릴게요.</h2><p className="phone-subcopy">취소표를 찾으러 매번 들어가지 않아도 돼요.</p><div className="phone-section"><b>등록한 알림</b><span>01 / 03</span></div><div className="watch-preview"><div className="watch-top"><span>● 감시 중</span><small>삭제</small></div><strong>김포 <i>→</i> 제주</strong><p>9월 15일 (월) 출발</p><div><span>출발 시간 하루 종일</span><span>탑승 인원 성인 1명</span></div></div><button type="button">알림 추가하기</button></div></div></div></section>
      <section className="register-section" id="register"><div className="section-intro"><p className="kicker">간단한 등록</p><h2>원하는 여정,<br />간편하게 등록하세요</h2><p>출발지와 도착지, 날짜를 고르면 돼요.<br />필요하다면 출발 시간도 좁혀 보세요.</p></div><div className="journey-form"><div className="form-heading"><span>01</span> 어디로 떠나세요?</div><div className="route-fields"><div><small>출발 공항</small><strong>김포 <em>GMP</em></strong></div><b className="route-arrow">→</b><div><small>도착 공항</small><strong>제주 <em>CJU</em></strong></div></div><div className="form-heading"><span>02</span> 언제 출발하세요?</div><div className="date-row"><button type="button">오늘<strong>9/16</strong></button><button type="button" className="selected">내일<strong>9/17</strong></button><button type="button">모레<strong>9/18</strong></button></div><div className="form-heading"><span>03</span> 인원과 시간을 확인해 주세요</div><div className="form-list"><p><span>탑승 인원</span><b>성인 1명 ›</b></p><p><span>출발 시간</span><b>하루 종일 ›</b></p></div><button type="button" className="form-cta">이 조건으로 알림 받기</button></div></section>
      <section className="workflow" id="how-it-works"><div className="workflow-heading"><p className="kicker">이용 방법</p><h2>등록 후에는<br />저희가 확인할게요</h2></div><ol>{steps.map(([number, title, body]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
      <section className="promise"><p className="kicker">알림 기준</p><h2>새로운 항공편만<br />알려드려요</h2><p>처음 등록할 때 조회한 항공편을 기준으로 삼아요. 가격만 바뀐 동일 항공편은 알림을 보내지 않아요.</p><div className="baseline"><div><span>등록 시점</span><b>A</b><b>B</b><b>C</b></div><div><span>현재 조회</span><b>A</b><b>B</b><b>C</b><b className="new-flight">D</b></div></div><strong className="result">새로 나온 D 항공편만 알림을 보내요</strong></section>
      <section className="faq"><p className="kicker">자주 묻는 질문</p><h2>알림을 시작하기 전에<br />확인해 보세요</h2>{faqs.map(([question, answer], index) => <article key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</section>
    </main><footer className="flight-footer"><span>항공권 알리미</span><p>국내선 항공편을 확인해 새로 나온 표를 알려드려요.</p></footer>
  </div>
}
