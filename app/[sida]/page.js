import { notFound } from "next/navigation";
import { sidor, bostader } from "@/content";
import { Sida, Formular, BostadKort } from "@/components/Delar";

// Den här filen skapar alla undersidor automatiskt utifrån "sidor" i content.js.
// Du behöver aldrig ändra här.

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(sidor).map((sida) => ({ sida }));
}

export async function generateMetadata({ params }) {
  const { sida } = await params;
  const s = sidor[sida];
  return s ? { title: s.rubrik } : {};
}

export default async function Undersida({ params }) {
  const { sida } = await params;
  const s = sidor[sida];
  if (!s) notFound();

  return (
    <Sida rubrik={s.rubrik} ingress={s.ingress}>
      {s.typ === "formular" && <Formular rubrik={s.rubrik} falt={s.falt} knapp={s.knapp} />}

      {s.typ === "bostader" && (
        <div className="grid-3">
          {bostader.lista.map((b) => (
            <BostadKort key={b.rubrik + b.info} b={b} />
          ))}
        </div>
      )}

      {s.typ === "text" && (
        <div className="prose">
          {s.stycken.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </Sida>
  );
}
