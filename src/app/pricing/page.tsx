import React from 'react'

export default function pricing() {
    const pricingPlans = [
        {
            title: 'Starter',
            price: 'Free',
            description: 'All the basics for getting started.',
            features: ['1 Project', 'Basic Support', 'Community Access']
        },
        {
            title: 'Pro',
            price: '$9/mo',
            description: 'For ambitious projects.',
            features: ['10 Projects', 'Priority Support', 'Community Forums']
        },
        {
            title: 'Enterprise',
            price: 'Contact Us',
            description: 'Advanced features for teams.',
            features: ['Unlimited Projects', 'Dedicated Support', 'One-on-one Meetings']
        }
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 text-gray-700">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    See more about this page on&nbsp;
                    <code className="font-mono font-bold">src/app/pricing/page.tsx</code>
                </p>
            </div>
            <h1 className="text-5xl font-bold mb-10">Pricing Plans</h1>
            <section className="grid md:grid-cols-3 gap-10">
                {pricingPlans.map(plan => (
                    <div key={plan.title} className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold">{plan.title}</h2>
                        <p className="text-xl">{plan.price}</p>
                        <p className="my-4 border-b pb-4">{plan.description}</p>
                        <ul className="list-disc pl-5">
                            {plan.features.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <footer className="text-center mt-10">
                <p className="text-sm opacity-50">This is a demo project for educational purposes only, you can see this page in /src/app/pricing/page.tsx</p>
            </footer>
        </main>
    )
}
