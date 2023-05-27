"use client";

import { useState } from "react";

export default function Countdown() {
  const today = new Date();

  const [dday, setDDay] = useState("");

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    const diff = new Date(e.target.value).getTime() - today.getTime();
    const days = Math.floor(diff / 86400000);
    setDDay(days);
  };
  return (
    <article className="bg-gray-500 w-11/12 my-0 mx-auto text-center p-4">
      <form className="">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input type="date" onChange={handleChange} />
      </form>
      <div className="font-bold text-3xl">{title}</div>
      <div className="font-bold text-3xl">{dday && `D - ${dday}`}</div>
    </article>
  );
}
