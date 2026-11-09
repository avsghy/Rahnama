import { Link } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
export default function NotFound() {
  return (
    <div className="notfound-cont">
      <section className="sec-notfound">
        <div className="innner-part">
          <p className="code">۴۰۴</p>
          <h1>این مسیر پیدا نشد</h1>
          <p className="desc">
            آدرسی که وارد کرده‌اید وجود ندارد یا جابه‌جا شده است. به صفحهٔ اصلی
            برگردید یا یکی از نقشه‌های راه را باز کنید.
          </p>
          <Link className="link" to="/">
            بازگشت به خانه
          </Link>
          <div className="classes">
            {roadmaps.map((r) => (
              <Link key={r.id} to={"/roadmap/" + r.id}>
                {r.name}
              </Link>
            ))}
          </div>
        </div>
        <svg className="trail" viewBox="0 0 360 300" aria-hidden="true">
          <path pathLength="1" d="M30 270C130 270 60 190 150 170" />
          <path className="lost" d="M150 170C220 160 250 130 250 90" />
          <circle style={{ "--d": 0 }} cx="30" cy="270" r="10" />
          <circle style={{ "--d": 1 }} cx="150" cy="170" r="10" />
          <path className="x" d="M240 80l20 20M260 80l-20 20" />
        </svg>
      </section>
    </div>
  );
}
