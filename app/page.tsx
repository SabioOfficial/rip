import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 px-[4dvw] py-16">
      <div className="flex flex-col gap-2 self-center">
        <h1 className="text-5xl">graveyard (real)</h1>
        <p>don't pay your respects</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">section 1: das unfinished</h2>
        <p>don't look closely it's cringe af</p>
      </div>
      <hr className="border"></hr>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/obserpoint-logo-or-something.svg" alt="wow look at this little green circle.. now close your eyes and press Alt+F4..." width={32} height={32}></Image>
          <h3 className="text-3xl">Obserpoint</h3>
        </div>
        <p>There wasn't a <span className="text-xl">point</span> of continuing this... get it? Obser<span className="text-xl">point</span>? No? FUCK</p>
        <div className="flex flex-col gap-1 p-4 border-2">
          <p><span className="text-xl">discontinuation reason:</span> code and shit was very jumbled and messy and it wasnt interesting enough for me to continue :D</p>
          <p><span className="text-xl">would i work on this again:</span> <span className="text-red-600">HELL NO</span></p>
        </div>
      </div>
      <hr className="border"></hr>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/weird-ass-clock.jpg" alt="who the fuck draws this (alarm clock with detailed feet and hands btw)" width={32} height={32}></Image>
          <h3 className="text-3xl">Timeset</h3>
        </div>
        <p>The app looked as ugly as you (very ugly) and got me demotivated NOOOooOOOOOOooooO also it was a stupid fucking idea</p>
        <div className="flex flex-col gap-1 p-4 border-2">
          <p><span className="text-xl">discontinuation reason:</span> burnt out + shit idea </p>
          <p><span className="text-xl">would i work on this again:</span> <span className="text-red-600">FUCK NO</span></p>
        </div>
      </div>
      <hr className="border"></hr>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/slackbot-happy-idk.png" alt="slackbot very happy png i found on the internyet" width={32} height={32}></Image>
          <h3 className="text-3xl">UserRate</h3>
        </div>
        <p>i couldn't finish this in time for the summer of making "game jam" as other projects had priority idk what you fucking call it</p>
        <div className="flex flex-col gap-1 p-4 border-2">
          <p><span className="text-xl">discontinuation reason:</span> other projects were prioritized + ran out of time</p>
          <p><span className="text-xl">would i work on this again:</span> <span className="text-green-500">YES!</span></p>
        </div>
      </div>
    </div>
  );
}
