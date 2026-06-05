import { ArrowUpRight } from "lucide-react";

import { PAYMENT_ARCHITECTURE, PROJECT } from "../lib/constants";

interface Props {
  onStart: () => void;
}

export default function Home({ onStart }: Props) {
  return (
    <section className="hero" style={{
      "--ink": PROJECT.palette[0],
      "--accent": PROJECT.palette[1],
      "--sun": PROJECT.palette[2],
      "--paper": PROJECT.palette[3],
    } as React.CSSProperties}>
      <div>
        <h1>{PROJECT.name}</h1>
        <p>{PROJECT.mission}</p>
        <div className="integration-strip">
          <span>Stellar payment architecture</span>
          <strong>{PAYMENT_ARCHITECTURE.contract}</strong>
          <p>{PAYMENT_ARCHITECTURE.approach}</p>
        </div>
        <button onClick={onStart}>
          <ArrowUpRight size={18} />
          {PROJECT.contractAction}
        </button>
      </div>
      <div className="motion-card">
        <span>{PROJECT.metric}</span>
        <strong>{PROJECT.stat}</strong>
        <p>{PAYMENT_ARCHITECTURE.integration}: {PAYMENT_ARCHITECTURE.integrationUse}</p>
      </div>
    </section>
  );
}
