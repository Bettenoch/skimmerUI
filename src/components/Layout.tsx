import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Footer from './Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {/* Desktop Navigation */}
      <div className='gap-4 hidden md:block'>
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <div className='flex h-16 justify-between p-8 items-center fixed md:hidden bg-slate-300/80 w-full z-50'>
        <Link to="/" className='flex items-center'>
          <img
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt='logo'
            className="mr-2"
          />
          <h1 className='text-xl font-lato font-thick text-slate-50'>FetchIt</h1>
        </Link>
        <MobileNav />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full mx-auto min-h-screen">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
