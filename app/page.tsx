import { Logo } from "@/components/Logo";
import {
  ArrowUpRight,
  BoltIcon,
  BuildingIcon,
  CheckIcon,
  FactoryIcon,
  HomeIcon,
  PanelIcon,
  SolarIcon
} from "@/components/Icons";

const activityGroups = [
  {
    icon: BoltIcon,
    number: "01",
    eyebrow: "Ενέργεια",
    title: "Παραγωγή & διανομή",
    description:
      "Δραστηριότητες που καλύπτουν την παραγωγή, τη συμπαραγωγή και τη διανομή ηλεκτρικής ενέργειας.",
    items: [
      "Υπηρεσίες διανομής ηλεκτρικού ρεύματος",
      "Παραγωγή ηλεκτρικής ενέργειας από σταθμούς",
      "Συμπαραγωγή ηλεκτρισμού και θερμότητας",
      "Παραγωγή ηλεκτρικής ενέργειας από φωτοβολταϊκά συστήματα"
    ],
    accent: "lime"
  },
  {
    icon: FactoryIcon,
    number: "02",
    eyebrow: "Ενεργειακές υποδομές",
    title: "Κατασκευή μονάδων",
    description:
      "Τεχνικές και κατασκευαστικές εργασίες για εγκαταστάσεις παραγωγής ηλεκτρικής ενέργειας.",
    items: [
      "Κατασκευή μονάδων παραγωγής ηλεκτρικής ενέργειας",
      "Κατασκευαστικές εργασίες για μονάδες παραγωγής ηλεκτρικής ενέργειας",
      "Προετοιμασία εργοταξίου",
      "Εξειδικευμένες κατασκευαστικές εργασίες π.δ.κ.α."
    ],
    accent: "cyan"
  },
  {
    icon: HomeIcon,
    number: "03",
    eyebrow: "Κατασκευές",
    title: "Οικιστικά έργα",
    description:
      "Γενικές και εξειδικευμένες κατασκευαστικές εργασίες για διαφορετικούς τύπους κατοικιών.",
    items: [
      "Γενικές κατασκευαστικές εργασίες για οικιστικά κτίρια με τη χρησιμοποίηση ιδίων υλικών (επιχείρηση που δεν υπάγεται στις διατάξεις του άρθρου 34 Ν. 2238/94)",
      "Κατασκευαστικές εργασίες σε μονοκατοικίες",
      "Κατασκευαστικές εργασίες σε διπλοκατοικίες",
      "Κατασκευαστικές εργασίες σε τριπλοκατοικίες και πολυκατοικίες",
      "Κατασκευαστικές εργασίες σε συλλογικές κατοικίες"
    ],
    accent: "yellow"
  },
  {
    icon: PanelIcon,
    number: "04",
    eyebrow: "Εμπόριο & μηχανική",
    title: "Φωτοβολταϊκά & τεχνικές υπηρεσίες",
    description:
      "Εμπορική και τεχνική δραστηριότητα γύρω από φωτοβολταϊκά, ενεργειακά έργα και ακίνητα.",
    items: [
      "Χονδρικό εμπόριο φωτοβολταϊκών στοιχείων",
      "Λιανικό εμπόριο φωτοβολταϊκών στοιχείων — δευτερεύουσα δραστηριότητα από 01/03/2026",
      "Αγοραπωλησία ιδιόκτητων ακινήτων — δευτερεύουσα δραστηριότητα από 01/03/2026",
      "Υπηρεσίες μηχανικών για ενεργειακά έργα"
    ],
    accent: "blue"
  }
];

const principles = [
  "Παραγωγή και διανομή ηλεκτρικής ενέργειας",
  "Κατασκευή ενεργειακών και οικιστικών υποδομών",
  "Εμπορία φωτοβολταϊκών στοιχείων",
  "Υπηρεσίες μηχανικών για ενεργειακά έργα"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8f1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" aria-label="PATAKIAS ENERGY — Αρχική">
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-[#34515a] md:flex"
            aria-label="Κύρια πλοήγηση"
          >
            <a className="transition hover:text-[#287f78]" href="#activities">
              Δραστηριότητες
            </a>
            <a className="transition hover:text-[#287f78]" href="#profile">
              Εταιρεία
            </a>
            <a className="transition hover:text-[#287f78]" href="#details">
              Στοιχεία
            </a>
          </nav>

          <a
            href="#details"
            className="inline-flex items-center gap-2 rounded-full border border-[#071a24]/10 bg-white/55 px-4 py-2.5 text-sm font-semibold text-[#071a24] backdrop-blur transition hover:border-[#287f78]/35 hover:bg-white/80"
          >
            Εταιρικά στοιχεία
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[790px] overflow-hidden bg-[#eaf1e8] pt-32 text-[#071a24] sm:min-h-[860px]"
      >
        <div className="solar-radiance absolute inset-0" />
        <div className="energy-beam absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c7f45c]/45 blur-3xl" />
        <div className="energy-beam energy-beam-secondary absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#52d7cc]/25 blur-3xl" />
        <div className="absolute left-[-11rem] top-1/3 h-[28rem] w-[28rem] rounded-full border border-[#287f78]/10" />
        <div className="absolute left-[-7rem] top-[39%] h-[20rem] w-[20rem] rounded-full border border-[#287f78]/10" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f6f8f1] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:px-10 lg:pb-32">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#287f78]/15 bg-white/50 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#287f78] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f4bd3d] shadow-[0_0_18px_rgba(244,189,61,0.72)]" />
              Energy · Construction · Engineering
            </div>

            <h1 className="display-face reveal reveal-delay-1 mt-7 max-w-4xl text-5xl font-semibold leading-[1.01] tracking-[-0.055em] sm:text-6xl lg:text-[5rem]">
              Ενέργεια που γίνεται{" "}
              <span className="text-[#287f78]">υποδομή.</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-8 text-[#52656c] sm:text-xl">
              Η PATAKIAS ENERGY δραστηριοποιείται στην παραγωγή ηλεκτρικής
              ενέργειας, στα φωτοβολταϊκά, στις ενεργειακές εγκαταστάσεις και
              στις κατασκευές.
            </p>

            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071a24] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#103342]"
              >
                Δείτε τις δραστηριότητες
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#profile"
                className="inline-flex items-center justify-center rounded-full border border-[#071a24]/15 bg-white/25 px-6 py-3.5 text-sm font-semibold text-[#071a24] transition hover:border-[#287f78]/40 hover:bg-white/60"
              >
                Σχετικά με την εταιρεία
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-[#071a24]/10 pt-7 sm:grid-cols-4">
              {[
                ["Παραγωγή", "ενέργειας"],
                ["Φωτοβολταϊκά", "συστήματα"],
                ["Κατασκευές", "υποδομών"],
                ["Μηχανική", "έργων"]
              ].map(([strong, label]) => (
                <div key={strong}>
                  <p className="text-sm font-bold text-[#071a24]">{strong}</p>
                  <p className="mt-1 text-sm text-[#63757b]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-7 rounded-[2.8rem] bg-gradient-to-br from-[#c7f45c]/35 via-[#52d7cc]/20 to-white/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#071a24]/10 bg-white/65 p-3 shadow-energy backdrop-blur">
              <div className="rounded-[1.45rem] border border-white/70 bg-[#f9fbf5]/75 p-5 sm:p-7">
                <div className="flex items-start justify-between border-b border-[#071a24]/10 pb-5">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#287f78]">
                      Renewable energy & infrastructure
                    </p>
                    <p className="display-face mt-2 text-2xl font-semibold text-[#071a24]">
                      Ενέργεια & υποδομές
                    </p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4bd3d] text-[#071a24] shadow-[0_0_32px_rgba(244,189,61,0.28)]">
                    <SolarIcon className="h-6 w-6" />
                  </span>
                </div>

                <div className="hero-energy-illustration relative mt-5 overflow-hidden rounded-[1.25rem] border border-[#071a24]/10 bg-[#dff0e8]">
                  <svg
                    viewBox="0 0 520 310"
                    className="block h-auto w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#edf6e9" />
                        <stop offset="1" stopColor="#cde9df" />
                      </linearGradient>
                      <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#17465a" />
                        <stop offset="1" stopColor="#071a24" />
                      </linearGradient>
                    </defs>
                    <rect width="520" height="310" rx="24" fill="url(#sky)" />
                    <circle cx="410" cy="68" r="38" fill="#F4BD3D" />
                    <g
                      fill="none"
                      stroke="#F4BD3D"
                      strokeLinecap="round"
                      strokeWidth="3"
                      opacity=".55"
                    >
                      <path d="M410 13v-8M410 131v-8M355 68h-8M473 68h-8M371 29l-6-6M449 107l-6-6M371 107l-6 6M449 29l-6 6" />
                    </g>
                    <path
                      d="M0 188C77 137 140 161 205 194s137 30 190-8 87-35 125-18v142H0Z"
                      fill="#C7F45C"
                      opacity=".62"
                    />
                    <path
                      d="M0 223c77-33 131-26 196 4s130 34 203 4 92-24 121-9v88H0Z"
                      fill="#52D7CC"
                      opacity=".55"
                    />
                    <g stroke="#52D7CC" strokeWidth="2">
                      <path d="m38 260 24-94h145l-22 94Z" fill="url(#panel)" />
                      <path d="m211 260 13-94h145l15 94Z" fill="url(#panel)" />
                      <path d="M92 166 75 260M147 166l-10 94M224 213h153M50 213h146" />
                      <path d="M100 260v24M321 260v24" stroke="#071A24" strokeWidth="5" />
                    </g>
                    <g
                      fill="none"
                      stroke="#287F78"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path d="m442 154-31 130M442 154l31 130M421 202h42M415 233h54M408 264h68" />
                      <path d="M421 181h42M442 154v-18" />
                    </g>
                    <g fill="none" stroke="#287F78" strokeWidth="2" opacity=".6">
                      <path d="M442 137c28 5 50 3 78-4M442 137c-32 4-54 1-79-5" />
                    </g>
                  </svg>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#287f78] backdrop-blur">
                    Φωτοβολταϊκά συστήματα
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#071a24]/10 bg-white/65 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c7f45c]/45 text-[#466b10]">
                      <BoltIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#071a24]">
                        Παραγωγή
                      </p>
                      <p className="mt-1 text-[11px] text-[#647078]">
                        Ηλεκτρικής ενέργειας
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#071a24]/10 bg-white/65 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#52d7cc]/25 text-[#287f78]">
                      <FactoryIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#071a24]">
                        Κατασκευή
                      </p>
                      <p className="mt-1 text-[11px] text-[#647078]">
                        Ενεργειακών μονάδων
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 -rotate-2 rounded-2xl border border-[#071a24]/10 bg-[#f4bd3d] px-5 py-3 text-[#071a24] shadow-2xl sm:-left-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#071a24]/55">
                Patakias Energy
              </p>
              <p className="mt-1 text-sm font-extrabold">
                Ήλιος · Ενέργεια · Υποδομές
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="relative bg-[#f6f8f1] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287f78]">
                Επιχειρηματική δραστηριότητα
              </p>
              <h2 className="display-face mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#071a24] sm:text-5xl">
                Ενέργεια, τεχνικά έργα και κατασκευές.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#647078] lg:ml-auto">
              Ένα διευρυμένο αντικείμενο που συνδέει την παραγωγή ενέργειας,
              τις φωτοβολταϊκές εφαρμογές, τις τεχνικές υπηρεσίες και την
              κατασκευή υποδομών.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {activityGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.number}
                  className={
                    "activity-card activity-card-" +
                    group.accent +
                    " group relative overflow-hidden rounded-[1.8rem] border border-[#dce4dd] bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 sm:p-8"
                  }
                >
                  <div className="activity-glow absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <span className="activity-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071a24] text-[#c7f45c]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.18em] text-[#aeb9b3]">
                      {group.number}
                    </span>
                  </div>

                  <p className="relative mt-7 text-[10px] font-extrabold uppercase tracking-[0.19em] text-[#287f78]">
                    {group.eyebrow}
                  </p>
                  <h3 className="display-face relative mt-2 text-3xl font-semibold tracking-[-0.025em] text-[#071a24]">
                    {group.title}
                  </h3>
                  <p className="relative mt-4 max-w-xl leading-7 text-[#69747a]">
                    {group.description}
                  </p>

                  <ul className="relative mt-7 space-y-3 border-t border-[#e8ece8] pt-6">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#4f5e64]"
                      >
                        <span className="activity-check mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f6d2] text-[#4f7f1a]">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="relative isolate overflow-hidden bg-[#1C3D4D] py-24 text-white sm:py-32"
      >
        <div className="energy-grid absolute inset-0 opacity-60" />
        <div className="absolute -right-36 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#52d7cc]/10 blur-3xl" />
        <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#c7f45c]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#c7f45c]">
              PATAKIAS ENERGY
            </p>
            <h2 className="display-face mt-4 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Από την παραγωγή έως την υλοποίηση.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
              Η εταιρεία συνδυάζει ενεργειακή δραστηριότητα, τεχνική γνώση,
              εμπορία φωτοβολταϊκών και κατασκευαστική δυνατότητα σε ένα
              συνεκτικό επιχειρηματικό αντικείμενο.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-semibold text-white/90">Κύριοι άξονες</p>
            <div className="mt-6 grid gap-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c7f45c]/10 text-[#c7f45c]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/76">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8f1] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e2dd] bg-[#eaf1e8] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c7f45c]/45 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#52d7cc]/25 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#287f78]">
                  Patakias Energy
                </p>
                <h2 className="display-face mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[#071a24] sm:text-4xl">
                  Ενεργειακά έργα και κατασκευές με ενιαία τεχνική κατεύθυνση.
                </h2>
              </div>
              <a
                href="#details"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#071a24] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#103342]"
              >
                Εταιρικά στοιχεία
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="details" className="bg-[#1C3D4D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[0.52fr_1.48fr]">
            <div>
              <Logo inverted />
              <p className="mt-5 max-w-sm leading-7 text-white/46">
                Παραγωγή ενέργειας, φωτοβολταϊκά, τεχνικά έργα και
                κατασκευές.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#c7f45c]">
                <BuildingIcon className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em]">
                  Εταιρικά στοιχεία
                </span>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-10">
                <div className="space-y-4 text-sm leading-6 text-white/62">
                  <div>
                    <p className="detail-label">Επωνυμία</p>
                    <p className="mt-1 font-semibold leading-6 text-white/92">
                      ΠΑΤΑΚΙΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΚΑΙ ΠΑΤΑΚΙΑΣ ΕΥΑΓΓΕΛΟΣ ΕΝΕΡΓΕΙΑ
                      Ι.Κ.Ε.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="detail-label">Διεύθυνση</p>
                      <p className="mt-1">Αναγεννήσεως 11</p>
                    </div>
                    <div>
                      <p className="detail-label">Περιοχή</p>
                      <p className="mt-1">Ν.Ιωνία, Τ.Κ. 14233</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="detail-label">Αριθμός Γ.Ε.ΜΗ.</p>
                      <p className="mt-1">170658301000</p>
                    </div>
                    <div>
                      <p className="detail-label">Α.Φ.Μ.</p>
                      <p className="mt-1">802135230</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="detail-label">Εταιρικό κεφάλαιο</p>
                      <p className="mt-1">200.000,00 €</p>
                    </div>
                    <div>
                      <p className="detail-label">Εγγυητικές εισφορές</p>
                      <p className="mt-1">Δεν υπάρχουν</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 border-white/10 md:border-l md:pl-10">
                  <div>
                    <p className="detail-label text-[#c7f45c]">Διαχειριστής</p>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      ΠΑΤΑΚΙΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ
                    </p>
                  </div>
                  <div>
                    <p className="detail-label text-[#c7f45c]">Εταίροι</p>
                    <div className="mt-3 space-y-2 text-sm text-white/64">
                      <div className="flex items-center justify-between gap-4">
                        <span>ΠΑΤΑΚΙΑΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</span>
                        <span className="font-mono text-[#c7f45c]">80%</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>ΠΑΤΑΚΙΑΣ ΕΥΑΓΓΕΛΟΣ</span>
                        <span className="font-mono text-[#c7f45c]">20%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="detail-label text-[#c7f45c]">
                      Εταιρική ιστοσελίδα
                    </p>
                    <a
                      href="http://patakiasenergy.gr/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#c7f45c]"
                    >
                      patakiasenergy.gr
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <p className="detail-label text-[#c7f45c]">
                      Τηλέφωνο επικοινωνίας
                    </p>
                    <a
                      href="tel:+306973827888"
                      className="mt-3 inline-block text-sm text-white/64 transition hover:text-white"
                    >
                      697 3827888
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-7 text-xs text-white/32 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PATAKIAS ENERGY. Με επιφύλαξη παντός
              δικαιώματος.
            </p>
            <p>Energy · Construction · Engineering</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
