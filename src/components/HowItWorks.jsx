export default function HowItWorks(){
  const steps = [
    {title: '1. Forward your number', desc: 'Route calls to your dedicated Craftr Voice line in minutes — no hardware required.'},
    {title: '2. We answer & book', desc: 'Our AI greets callers, answers questions, and books appointments into your calendar.'},
    {title: '3. Follow-ups automated', desc: 'SMS/email reminders and post-visit follow-ups keep patients engaged.'},
  ];
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Set up in under 10 minutes. Craftr Voice blends into your workflow and scales with your practice.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(s => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-gray-900">{s.title}</div>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
