import { useState } from "react";

export default function Countdown() {
  const [stop, setStop] = useState("");
  const startTime = Date.now();
  setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor(elapsedTime % 1000);
    let stop = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    setStop(stop);
  }, 1000);

  return (
    <article className="flex font-bold text-3xl">
      <div>{stop}</div>
    </article>
  );
}
