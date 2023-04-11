import * as React from 'react';
import type { V2_MetaFunction } from '@remix-run/react';
import { Header } from '~/components/marketing/header';
import { Footer } from '~/components/marketing/footer';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'BrainBits.dev' }];
};

export default function Index() {
  return (
    <div className='bg-white'>
      <Header />
      <main className='isolate'>
        <div className='relative pt-14'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#fdba74] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl text-center'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  Organize your brain bits.
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  BrainBits is a brain content aggregator. Keep track of fun
                  code snippets, links, tweets, and more. Let your brain garbage
                  collect without fear.
                </p>
                {/* <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    href='#'
                    className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Let's go.
                  </a>
                  <a
                    href='#'
                    className='text-sm font-semibold leading-6 text-gray-900'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div> */}
              </div>

              {/* screenshot - replace with app */}
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <img
                    src='http://via.placeholder.com/2432x1442'
                    alt='App screenshot'
                    width={2432}
                    height={1442}
                    className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
                  />
                  {/* <img
                    src='https://tailwindui.com/img/component-images/project-app-screenshot.png'
                    alt='App screenshot'
                    width={2432}
                    height={1442}
                    className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
