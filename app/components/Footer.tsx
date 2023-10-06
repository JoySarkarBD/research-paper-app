import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-bg px-4 mx-auto md:px-24 lg:px-8">
      <div className=" pt-14 pb-2 text-center ">
        <div className="copy-rights"></div>
        <p className="text-[15px] text-[#b4bcd0] mt-0 leading-none ">
          © 2023 Copyright <strong className="text-[18px]">PaperPlainer</strong>{' '}
          . All Rights Reserved.
        </p>
        <p className="text-[15px] text-[#b4bcd0] mt-0 leading-none">
          For feedback/modifications reach out to{' '}
          <strong className="text-[18px]">prem@paperplainer.com</strong>
        </p>

        <ul className="">
          <li>
            <Link
              href="/privacy"
              className="text-[15px] text-[#b4bcd0] transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
