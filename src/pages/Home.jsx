import { Link } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
import { toFa, percent } from "../Utilities/utils";
import { useState } from "react";
export default function Home({ progress }) {
  const chosenPath = roadmaps.filter((r) => {
    return progress.doneFor(r.id).length > 0;
  });
  const totalSteps = roadmaps.reduce((sum, r) => sum + r.steps.length, 0);
  let random = 0;
  if (chosenPath.length > 0) {
    random = Math.floor(Math.random() * chosenPath.length);
  } else {
    random = Math.floor(Math.random() * roadmaps.length);
  }
  return (
    <div className="container-home">
      <section className="sec-home">
        <div className="innner-part-home">
          <h1>یک حوزه انتخاب کن و مسیرش را قدم‌به‌قدم برو</h1>
          <p className="desc">
            رهنما هدف‌های بزرگ را به فهرستی مرتب از مرحله‌ها تبدیل می‌کند. هر
            مرحله توضیح می‌دهد چه چیزی را یاد بگیرید و چرا مهم است، و سه جا را
            برای یادگیری‌اش معرفی می‌کند: ویدیو، دوره و مستندات رسمی.
          </p>
          <Link
            className="link"
            to={`/roadmap/${
              chosenPath.length > 0
                ? chosenPath && chosenPath[random].id
                : roadmaps && roadmaps[random].id
            }`}
          >
            {chosenPath.length > 0
              ? chosenPath && `ادامه ${chosenPath[random].name}`
              : roadmaps && `شروع با ${roadmaps[random].name}`}
          </Link>
        </div>
        <svg className="trail" viewBox="0 0 360 300" aria-hidden="true">
          <path
            pathLength="1"
            d="M30 270C130 270 60 190 150 170S270 150 250 90S320 40 330 30"
          />
          <circle style={{ "--d": 0 }} cx="30" cy="270" r="10" />
          <circle style={{ "--d": 1 }} cx="150" cy="170" r="10" />
          <circle style={{ "--d": 2 }} cx="250" cy="90" r="10" />
          <circle style={{ "--d": 3 }} cx="330" cy="30" r="12" />
        </svg>
      </section>
      <section className="full-desc">
        <div>
          <h3>یک حوزه انتخاب کنید</h3>
          <p>
            از نوار کناری یا کارت‌های پایین استفاده کنید. در مجموع{" "}
            {toFa(roadmaps.length)} نقشه راه و {toFa(totalSteps)} مرحله وجود
            دارد.
          </p>
        </div>
        <div>
          <h3>مرحله‌به‌مرحله جلو بروید</h3>
          <p>
            هر مرحله را باز کنید تا بخوانید چه چیزی را پوشش می‌دهد، معمولاً چقدر
            زمان می‌برد و کجا یاد گرفته می‌شود.
          </p>
        </div>
        <div>
          <h3>مرحله را تکمیل کنید</h3>
          <p>
            با تکمیل هر مرحله مسیر روشن می‌شود و مرحلهٔ بعد باز می‌شود. پیشرفت
            شما در همین مرورگر ذخیره می‌ماند.
          </p>
        </div>
      </section>
      <h2>نقشه راه را انتخاب کنید</h2>
      <div className="grid">
        {roadmaps.map((r) => {
          const p = percent(progress.doneFor(r.id).length, r.steps.length);
          return (
            <Link key={r.id} className="link" to={"/roadmap/" + r.id}>
              <i>{r.short}</i>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <div className="track">
                <span style={{ width: p + "%" }} />
              </div>
              <small>
                <span>{toFa(r.steps.length)} مرحله</span>
                <span>{toFa(p)}٪ انجام شده</span>
              </small>
            </Link>
          );
        })}
      </div>
      <p className="note">
        لینک‌ها به منابع رایگان یا در دسترس در سایت‌های دیگر می‌روند. بعضی
        دوره‌ها گواهی پولی دارند.
      </p>
    </div>
  );
}
