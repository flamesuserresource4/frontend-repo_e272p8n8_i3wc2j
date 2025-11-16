export default function FAQ(){
  const faqs = [
    {q:'Can it integrate with my calendar?', a:'Yes. We connect to Google, Outlook, and most popular EMR/CRM calendars.'},
    {q:'Is it HIPAA compliant?', a:'We follow strict security practices and can sign BAAs for eligible plans.'},
    {q:'How accurate is the AI?', a:'We fine-tune for your specialty and monitor continuously for quality.'},
    {q:'What does setup look like?', a:'Forward your phone number and choose your call flows. You can be live in under 10 minutes.'},
  ];
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">FAQs</h2>
        </div>
        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-gray-900 font-medium">{f.q}</span>
                <span className="text-gray-500 group-open:hidden">+</span>
                <span className="text-gray-500 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
