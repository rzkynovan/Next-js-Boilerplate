import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <li>
          <Link
            href="/"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            {t('home_link')}
          </Link>
        </li>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_up_link')}
            </Link>
          </li>
        </>
      }
    >
      <div className="max-w-6xl">{props.children}</div>
    </BaseTemplate>
  );
}
