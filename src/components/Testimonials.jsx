export default function Testimonials(){
  const items = [
    {name:'Dr. Patel', role:'Dental Clinic Owner', quote:'We cut missed calls by 80% in the first month. Bookings are up and staff is less stressed.', img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop'},
    {name:'Maya Chen', role:'Med Spa Director', quote:'Our patients love the instant response. It feels human and it just works 24/7.', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'},
    {name:'Luis Gomez', role:'Physio Clinic Manager', quote:'Setup took minutes. Now every caller gets help immediately — evenings included.', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2b?q=80&w=256&auto=format&fit=crop'},
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Loved by modern practices</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Real stories from teams who replaced voicemail with an AI that actually helps.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(t => (
            <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover"/>
                <div>
                  <figcaption className="font-semibold text-gray-900">{t.name}</figcaption>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700 text-sm">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
