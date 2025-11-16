export default function Pricing(){
  const tiers = [
    {name:'Starter', price:'$99', period:'/mo', features:['500 minutes included','Basic call flows','Booking to calendar','Email summaries']},
    {name:'Pro', price:'$299', period:'/mo', featured:true, features:['2,500 minutes included','Advanced call flows','Two-way SMS follow-ups','CRM integrations']},
    {name:'Scale', price:'Custom', period:'', features:['High-volume minutes','Dedicated success manager','Custom integrations','SLA & security reviews']},
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, scalable pricing</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Start free, upgrade when you see the value. No setup fees. Cancel anytime.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-2xl border ${t.featured? 'border-indigo-300 shadow-indigo-200/50 shadow-xl':'border-gray-200 shadow-sm'} bg-white p-6`}>
              <div className="flex items-baseline gap-2">
                <div className="text-xl font-semibold text-gray-900">{t.name}</div>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-gray-900">{t.price}</div>
                <div className="text-gray-500">{t.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map(f => <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400"/> {f}</li>)}
              </ul>
              <a href="#start" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold ${t.featured? 'bg-gray-900 text-white hover:brightness-110':'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50'}`}>Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
