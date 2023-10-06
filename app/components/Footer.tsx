import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <b className="text-sm text-slate-300	  mt-0">
              <Link
                className=" mt-0 text-sm inline-block text-slate-300 transition "
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </b>

            <p className="mt-4 text-sm text-slate-300	 sm:order-first sm:mt-0">
              &copy; 2023 Copyright. All Rights Reserved.
              <br /> For feedback/modifications reach out to{' '}
              <strong className="text-[18px]">prem@paperplainer.com</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
