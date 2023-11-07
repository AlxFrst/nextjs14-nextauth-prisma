import React from 'react'

export default function about() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  See more about this page on&nbsp;
                  <code className="font-mono font-bold">src/app/about/page.tsx</code>
              </p>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
              <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">About Our Company</h1>
              <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl">
                  We are a cutting-edge company specializing in innovative solutions. Our team is comprised of
                  dedicated professionals who are passionate about driving progress and excellence in the industry.
              </p>
              <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mt-4">
                  Founded in 2021, our mission is to deliver exceptional services and products that exceed the expectations
                  of our clients. We believe in building strong relationships, fostering innovation, and making a positive
                  impact in the communities we serve.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-5xl">
              <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-neutral-700 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Vision</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                      To be the leading provider of innovative solutions, recognized for our commitment to excellence and our contribution to technology advancement.
                  </p>
              </div>
              <div className="flex flex-col items-center p-6 border border-gray-300 dark:border-neutral-700 rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Values</h2>
                  <ul className="list-disc text-gray-600 dark:text-gray-300 mt-2">
                      <li>Innovation and Creativity</li>
                      <li>Integrity and Transparency</li>
                      <li>Quality and Excellence</li>
                      <li>Collaboration and Teamwork</li>
                  </ul>
              </div>
          </div>
          <footer className="text-center mt-10">
              <p className="text-sm opacity-50">This is a demo project for educational purposes only, you can see this page in /src/app/about/page.tsx</p>
          </footer>
      </main>
      
  )
}
