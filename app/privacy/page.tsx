import Footer from 'app/components/Footer';
import Navbar from 'app/navbar';

export default function BlogPage() {
  const fetchData = () => {};

  return (
    <>
      <Navbar user={undefined} />
      <main>
        <section className="custom-bg w-full h-auto">
          <div className="py-10">
            <div className="container mx-auto">
              <div className="flex items-center justify-center  w-full">
                <div className="w-full min-w-[300px] max-w-7xl">
                  <h1 className="text-slate-50 leading-tight">
                    PaperPlainer Privacy Policy
                  </h1>
                  <p className="text-slate-100 mt-0 text-[17.5px]">
                    Welcome to PaperPlainer!
                  </p>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0">
                    Information We Collect
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    We may collect the following types of information when you
                    use our web app:
                  </p>
                  <ul className="text-slate-300 text-[17.5px]">
                    <li className="text-[17.5px]">
                      Personal Information: When you log in through Google, we
                      may collect your name and email address.
                    </li>
                    <li className="text-[17.5px]">
                      Usage Information: We may collect information about how
                      you use our app, including your interactions and
                      preferences.
                    </li>
                  </ul>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0	">
                    How We Use Your Information
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    We may use the collected information for the following
                    purposes:
                  </p>
                  <ul className="text-slate-300 text-[17.5px]">
                    <li className="text-[17.5px]">
                      Provide and Improve Services: To provide, maintain, and
                      improve our web app and its features.
                    </li>
                    <li className="text-[17.5px]">
                      Personalization: To personalize your experience and
                      provide content relevant to your interests.
                    </li>
                    <li className="text-[17.5px]">
                      Communication: To communicate with you about updates,
                      features, and important notices.
                    </li>
                  </ul>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0	">
                    Sharing of Information
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="text-slate-300 text-[17.5px]">
                    <li className="text-[17.5px]">
                      With Third-Party Service Providers: We may share your
                      information with third-party service providers that assist
                      us in operating our app and delivering services.
                    </li>
                    <li className="text-[17.5px]">
                      Legal Requirements: We may share your information if
                      required by law or to protect our rights and interests.
                    </li>
                  </ul>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0	">
                    Security
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    We take appropriate measures to protect your information
                    from unauthorized access and misuse.
                  </p>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0	">
                    Your Choices
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    You can control certain types of information we collect and
                    how we use it. You can also update or delete your account
                    information.
                  </p>

                  <h2 className="text-slate-100 mb-[10px] ml-[-1.883px] text-left leading-[34.5px] tracking-[-0.45px] mr-0 mt-14 p-0	">
                    Contact Us
                  </h2>
                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    If you have any questions or concerns about our privacy
                    policy, you can contact us at{' '}
                    <a href="mailto:prem@paperplainer.com">
                      prem@paperplainer.com
                    </a>
                    .
                  </p>

                  <p className="text-slate-300 mt-0 text-[17.5px]">
                    This privacy policy is effective as of 3rd Sept 2023 and may
                    be updated from time to time. Please review it periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
