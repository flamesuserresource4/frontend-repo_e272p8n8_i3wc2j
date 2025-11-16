export default function CTA(){
  return (
    <section id="start" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-orange-50"/>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-200/60 bg-white/80 backdrop-blur p-10 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Ready to delight every caller?</h3>
          <p className="mt-3 text-gray-700">Start your 14-day free trial — no credit card required. Be live in minutes.</p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold shadow-lg hover:brightness-110">Start your 14-day free trial</a>
          </div>
        </div>
      </div>
    </section>
  )
}
