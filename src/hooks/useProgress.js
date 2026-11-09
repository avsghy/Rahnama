import { useState, useEffect } from "react";
const KEY = "rahnama-progress";
function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch (err) {
    return {};
  }
}
export default function useProgress() {
  const [done, setDone] = useState(load);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(done));
    } catch (error) {}
  }, [done]);
  const doneFor = (id) => done[id] || [];
  const toggle = (id, index) => {
    setDone((prev) => {
      const list = prev[id] || [];
      const next = list.includes(index)
        ? list.filter((i) => i !== index)
        : [...list, index];
      return { ...prev, [id]: next };
    });
  };
  return { doneFor, toggle };
}
