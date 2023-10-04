import React from "react";
import {
  Card,
  Grid,
  Title,
  Text
} from "@tremor/react";

export default function BlogPage() {
  const fetchData = () => {
  }
 
  

	
  return (
    <main className="">
	  
	
      <div className="">
		<Card className = "landing-page-card bg-gradient-to-b from-blue-100 via-blue-50 to-white h-screen">
		  <section className="bg-cover bg-center w-2/3 justify-items-center;">
			<h1>PaperPlainer Privacy Policy</h1>
				<p>Welcome to PaperPlainer!</p>
				
				<h2>Information We Collect</h2>
				<p>We may collect the following types of information when you use our web app:</p>
				<ul>
					<li>Personal Information: When you log in through Google, we may collect your name and email address.</li>
					<li>Usage Information: We may collect information about how you use our app, including your interactions and preferences.</li>
				</ul>
				
				<h2>How We Use Your Information</h2>
				<p>We may use the collected information for the following purposes:</p>
				<ul>
					<li>Provide and Improve Services: To provide, maintain, and improve our web app and its features.</li>
					<li>Personalization: To personalize your experience and provide content relevant to your interests.</li>
					<li>Communication: To communicate with you about updates, features, and important notices.</li>
				</ul>
				
				<h2>Sharing of Information</h2>
				<p>We may share your information in the following circumstances:</p>
				<ul>
					<li>With Third-Party Service Providers: We may share your information with third-party service providers that assist us in operating our app and delivering services.</li>
					<li>Legal Requirements: We may share your information if required by law or to protect our rights and interests.</li>
				</ul>
				
				<h2>Security</h2>
				<p>We take appropriate measures to protect your information from unauthorized access and misuse.</p>
				
				<h2>Your Choices</h2>
				<p>You can control certain types of information we collect and how we use it. You can also update or delete your account information.</p>
				
				<h2>Contact Us</h2>
				<p>If you have any questions or concerns about our privacy policy, you can contact us at <a href="mailto:prem@paperplainer.com">prem@paperplainer.com</a>.</p>
				
				<p>This privacy policy is effective as of 3rd Sept 2023 and may be updated from time to time. Please review it periodically.</p>
			
		  </section>
		</Card>
	  </div>
    </main>
  );
}
