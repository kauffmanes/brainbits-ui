import { Link, useLocation } from '@remix-run/react';

export function Header() {
  return (
    <header className='bg-white shadow absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            {/* <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              /> */}
            <strong>BrainBits.dev</strong>
          </Link>
        </div>
      </nav>
    </header>
  );
}
