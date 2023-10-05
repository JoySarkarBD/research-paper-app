export default function Footer() {
  return (
    <footer className="custom-bg">
      <div className="w-full p-4 text-center text-xs text-white">
        © 2023 Copyright
        <a href="https://paperplainer.com" className="text-lg">
          PaperPlainer
        </a>
        . All Rights Reserved. For feedback/modifications reach out to
        prem@paperplainer.com
        <span className="ps-8 text-lg">
          <a href="/privacy" className=" hover:underline md:mr-6">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
