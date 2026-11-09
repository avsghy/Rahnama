import { useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { roadmaps } from "../data/roadmaps";
import { toFa, percent } from "../Utilities/utils";
export default function Roadmap({ progress }) {
  const { id } = useParams();
  const roadmap = roadmaps.find((r) => r.id === id);
  if (!roadmap) return <NotFound />;
  return <RoadmapView key={roadmap.id} roadmap={roadmap} progress={progress} />;
}
function RoadmapView({ roadmap, progress }) {
  const steps = roadmap.steps;
  const done = progress.doneFor(roadmap.id);
  const [openStep, setOpenStep] = useState(-1);
  const choiceKey = `choice-${roadmap.id}`;
  const [choice, setChoice] = useState(() => {
    try {
      return localStorage.getItem(choiceKey);
    } catch {
      return null;
    }
  });
  function onPath(step, pick = choice) {
    const value = step.choices?.value;
    return !value || value === pick;
  }
  function isChoiceLocked(step) {
    const value = step.choices?.value;
    return Boolean(value && choice && value !== choice);
  }
  function isUnlocked(i) {
    if (steps[i].choices?.value && !choice) return false;
    for (let j = 0; j < i; j++) {
      if (onPath(steps[j]) && !done.includes(j)) return false;
    }
    return true;
  }
  const pathSteps = steps.map((s, i) => i).filter((i) => onPath(steps[i]));
  const total = pathSteps.length;
  const doneCount = pathSteps.filter((i) => done.includes(i)).length;
  const current = pathSteps.find((i) => !done.includes(i)) ?? -1;
  function nextAfter(i, pick) {
    for (let j = i + 1; j < steps.length; j++) {
      if (onPath(steps[j], pick)) return j;
    }
    return -1;
  }
  function openAndScroll(i) {
    setOpenStep(i);
    if (i === -1) return;
    setTimeout(() => {
      const el = document.getElementById("step-" + i);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }
  function pickChoice(stepIndex, value) {
    setChoice(value);
    try {
      localStorage.setItem(choiceKey, value);
    } catch {}
    if (!done.includes(stepIndex)) {
      progress.toggle(roadmap.id, stepIndex);
    }
    openAndScroll(nextAfter(stepIndex, value));
  }
  function clearChoice(stepIndex) {
    steps.forEach((s, i) => {
      const belongs =
        i === stepIndex || (choice && s.choices?.value === choice);
      if (belongs && done.includes(i)) progress.toggle(roadmap.id, i);
    });
    setChoice(null);
    try {
      localStorage.removeItem(choiceKey);
    } catch {}
    setOpenStep(stepIndex);
  }
  function toggleOpen(i) {
    if (!isUnlocked(i) || isChoiceLocked(steps[i])) return;
    setOpenStep(openStep === i ? -1 : i);
  }
  function markStep(i) {
    if (!isUnlocked(i) || isChoiceLocked(steps[i])) return;
    const alreadyDone = done.includes(i);
    progress.toggle(roadmap.id, i);
    if (alreadyDone) return;
    openAndScroll(nextAfter(i, choice));
  }
  const message =
    current === -1
      ? "مسیر کامل شد. آفرین!"
      : toFa(doneCount) + " از " + toFa(total) + " مرحله انجام شده";
  return (
    <div className="container">
      <header className="header in">
        <h1>{roadmap.name}</h1>
        <p className="title">{roadmap.description}</p>
        <div className="progress">
          <div className="track">
            <span style={{ width: percent(doneCount, total) + "%" }} />
          </div>
          <em>{message}</em>
        </div>
      </header>
      <ol className="tl">
        {steps.map((step, i) => {
          const isDone = done.includes(i);
          const choiceLocked = isChoiceLocked(step);
          const blocked = !isUnlocked(i) || choiceLocked;
          const isOpen = openStep === i && !blocked;
          const options = step.choices?.options;
          const selected = options?.find((opt) => opt.value === choice);
          const classes = ["step", "in"];
          if (isDone) classes.push("done");
          if (i === current) classes.push("now");
          if (isOpen) classes.push("open");
          if (blocked) classes.push("locked");
          if (choiceLocked) classes.push("choice-locked");
          return (
            <li
              key={i}
              id={"step-" + i}
              className={classes.join(" ")}
              style={{ "--i": i + 1 }}
            >
              <div className="node">
                <span>{toFa(i + 1)}</span>
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <article className="card">
                <button
                  className="head"
                  aria-expanded={isOpen}
                  onClick={() => toggleOpen(i)}
                  disabled={blocked}
                >
                  <h3>{step.title}</h3>
                  <span className="wk">{step.time}</span>
                  <svg className="ch" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="body">
                  <div>
                    <p>{step.text}</p>
                    {step.links?.length > 0 && (
                      <>
                        <h4>کجا یاد بگیریم</h4>
                        <ul className="res">
                          {step.links.map((link) => (
                            <li key={link.url}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="t">{link.type}</span>
                                {link.name}
                                <svg className="ar" viewBox="0 0 24 24">
                                  <path d="M7 17L17 7M9 7h8v8" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {options && (
                      <div className="choices">
                        {!choice && (
                          <p className="choices-hint">
                            یکی را انتخاب کنید — بقیه قفل می‌شوند:
                          </p>
                        )}
                        <div className="choices-row">
                          {options.map((opt) => (
                            <button
                              key={opt.value}
                              className={
                                "choice" +
                                (choice === opt.value ? " selected" : "")
                              }
                              disabled={Boolean(choice) && choice !== opt.value}
                              onClick={() => pickChoice(i, opt.value)}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                        {choice && (
                          <p className="choices-current">
                            انتخاب شما:{" "}
                            <strong>{selected?.label ?? choice}</strong>{" "}
                            <button
                              className="choice-clear"
                              onClick={() => clearChoice(i)}
                            >
                              تغییر انتخاب
                            </button>
                          </p>
                        )}
                      </div>
                    )}
                    {!options && (
                      <button className="score" onClick={() => markStep(i)}>
                        {isDone ? "انجام شد (بازگردانی)" : "تکمیل این مرحله"}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
