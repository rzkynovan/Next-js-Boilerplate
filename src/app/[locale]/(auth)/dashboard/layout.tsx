import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import { BaseTemplate } from '@/templates/BaseTemplate';

interface LayoutInterface {
  // user: User;
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutInterface) {
  return (
    <BaseTemplate
      leftNav={
        <li>
          <Link
            href="/dashboard/"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            <Image
              src="/assets/images/user/dashboard/logo.png"
              width={123}
              height={26}
              alt="logo"
            />
          </Link>
        </li>
      }
      rightNav={
        <div className="flex items-center gap-4 py-3">
          <div className="flex flex-col items-end">
            <p className=" text-base font-semibold text-black">
              {/* {user?.firstName} */}
              Rizky Novan
            </p>
            <p className="text-sm">Mahasiswa</p>
          </div>
          <UserButton />
        </div>
      }
    >
      {children}
    </BaseTemplate>
  );
}
