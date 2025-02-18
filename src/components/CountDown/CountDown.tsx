import { useEffect, useState } from "react";

export const CountDown = () => {
  const [time, setTime] = useState(5 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
      <p className="m-10">{formatTime(time)}</p>
      <div className="flex gap-5">
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          Stop
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(5 * 60);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
