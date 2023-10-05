import Link from 'next/link';

export default function Footer() {
  return (
    <div className="custom-bg px-4 mx-auto md:px-24 lg:px-8">
      <div className="flex flex-col-reverse justify-between pt-5 pb-10  lg:flex-row">
        <p className="text-[15px] text-[#b4bcd0]">
          © 2023 Copyright PaperPlainer . All Rights Reserved. For
          feedback/modifications reach out to prem@paperplainer.com
        </p>
        <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/privacy"
              className="text-[15px] text-[#b4bcd0] transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
