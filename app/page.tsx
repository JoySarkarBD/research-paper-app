"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import {
  Card,
  Grid,
  Title,
  Text
} from "@tremor/react";
import Link from 'next/link';

export default function LandingPage() {
  const router = useRouter();
  const [arxivLink, setArxivLink] = useState('');
  const [search, setSearch] = useState('');
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    // This function gets executed when the component mounts
    fetch('https://premrajnarkhede.online/latest-results') // Replace with your external URL
      .then(response => response.json())
      .then(data => {
        // Assume the data is an array of paper objects
        console.log("Latest papers",data)
		setPapers(data);
      })
      .catch(error => {
        console.error("There was an error fetching the papers:", error);
      });
	}, []); // The empty array means this useEffect runs once when component mounts

  const handleSearch = async () => {
    // Here, you'd perform the API call with the search value, for example:
	
    const response = await fetch(`https://premrajnarkhede.online/search?search=${search}`);
    const data = await response.json();
    setPapers(data || []);  // Adjust depending on the API response format
	};
  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = () => {
    if (arxivLink) {
      // Assuming you want to append the arXiv link to the base URL
		const cleanedLink = arxivLink.replace(/^https:\/\/arxiv.org\//, '');

		// Replace "/" in the cleaned link with "-"
		const formattedLink = cleanedLink.replace(/\//g, '-');
		router.push(`/paper/${encodeURIComponent(formattedLink)}`);
	  
	  
    }
  };
  return (

    <main className="">
	  
	
      <div className="">
		<Card className = "landing-page-card prem_svg h-screen">
		  <section className="bg-cover bg-center">
			
			<h1 className="text-3xl text-center mt-10 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
			  Understand Research Papers using ChatGPT
			</h1>
			

			<div className="flex justify-center mt-6">
			  <div className="w-1/2">
				<h2 htmlFor="search" className="text-xl font-semibold mb-4">
				  Search for papers covered already
				</h2>
					<input
					  type="text"
					  id="search"
					  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
					  placeholder="Search for papers"
					  value={search}
					  onChange={handleSearchInputChange}
					  onKeyPress={event => {
						if (event.key === 'Enter') {
						  event.preventDefault();
						  handleSearch();
						}
					  }}
					/>
			  </div>
			</div>
		  </section>

		  <section className="mt-10 mx-auto max-w-4xl">
			<h2 className="text-xl font-semibold mb-4">Recently Added Papers</h2>
			<table className="w-full border-collapse">
			  <thead>
				<tr className="border-b">
				  <th className="text-left py-2">Title</th>
				</tr>
			  </thead>
			  <tbody>
				{
				papers.map(paper => (
                <tr key={paper.id} className="border-b">
                  	<Link href={`${paper.id}`}>
						{paper.result}
					</Link>
                </tr>
				))
				}
				
			  </tbody>
			</table>
		  </section>

		  <section className="mt-10">
			<div className="flex justify-center">
			  <div className="w-1/2">
				<h2 htmlFor="arxivLink" className="text-center text-xl font-semibold mb-4">
				  OR
				</h2>
				<h2 htmlFor="arxivLink" className="text-xl font-semibold mb-4">
				  Submit arXiv link below to add the paper to coverage
				</h2>
				<div className="flex items-center">
				  <input
					type="text"
					id="arxivLink"
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
					placeholder="Paste arXiv link here"
					value={arxivLink}
					onChange={(e) => setArxivLink(e.target.value)}
				  />
				<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full" onClick={handleSubmit}> Submit</button>
				</div>
			  </div>
			</div>
		  </section>
		  <section className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://paperplainer.com" className="hover:underline">PaperPlainer</a>. All Rights Reserved.
			For feedback/modifications reach out to prem@paperplainer.com
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
			</ul>
			</div>
		</section>
		</Card>
	  </div>
	  
	  
    </main>
	
  );
}
