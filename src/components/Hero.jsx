import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs text-gray-700 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 animate-pulse" />
                AI Receptionist for Clinics & SMBs
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Never miss another patient call again
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                Craftr Voice answers, books, and follows up 24/7 — a friendly AI receptionist that handles calls like your best staff member.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#start" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-semibold shadow-lg hover:brightness-110">Start your 14-day free trial</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-50">See how it works</a>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {title: 'More bookings', desc: 'Convert missed calls into confirmed appointments.'},
                  {title: 'Lower staff costs', desc: 'Automate routine calls and after-hours coverage.'},
                  {title: 'Happier patients', desc: 'No hold music. Instant, friendly assistance.'},
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">{b.title}</div>
                    <div className="mt-1 text-sm text-gray-600">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  );
}
