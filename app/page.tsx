'use client';
// import { Card } from '@tremor/react';
import Link from 'next/Link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import chatGptIcon from '../public/icons8-chatgpt.svg';

export default function LandingPage() {
  const router = useRouter();
  const [arxivLink, setArxivLink] = useState('');
  const [search, setSearch] = useState('');
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    // This function gets executed when the component mounts
    fetch('https://premrajnarkhede.online/latest-results') // Replace with your external URL
      .then((response) => response.json())
      .then((data) => {
        // Assume the data is an array of paper objects
        console.log('Latest papers', data);
        setPapers(data);
      })
      .catch((error) => {
        console.error('There was an error fetching the papers:', error);
      });
  }, []); // The empty array means this useEffect runs once when component mounts

  const handleSearch = async () => {
    // Here, you'd perform the API call with the search value, for example:

    const response = await fetch(
      `https://premrajnarkhede.online/search?search=${search}`
    );
    const data = await response.json();
    setPapers(data || []); // Adjust depending on the API response format
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
    <main>
      {/* Understand Research Papers using ChatGPT Section */}
      <section className="content-center items-center flex flex-none flex-col flex-nowrap justify-center h-screen overflow-hidden p-0 relative w-full text-center bg-hero bg-no-repeat bg-center bg-cover">
        <h1 className="relative banner-title text-center leading-none ">
          Understand Research Papers using ChatGPT
          <div className="bg-heroLight"></div>
        </h1>
        <div className="search_area">
          <h4 className="text-[28px] text-white mb-[25px]">
            Search for papers covered already
          </h4>
          <div className="search_box p-2.5 rounded-[25px] w-full">
            <form className="search-form">
              <div className="input-group">
                <div className="input-group2 flex flex-nowrap relative">
                  <input
                    type="search"
                    className="search-field py-2.5 px-3.5 text-base text-[#373d41] bg-white border border-[#c5c5c7] rounded-md grow w-full h-[80px] ps-12 "
                    placeholder="Search for papers"
                    value={search}
                    onChange={handleSearchInputChange}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        handleSearch();
                      }
                    }}
                  />
                  <div className="chat_icon">
                    <Image src={chatGptIcon} alt="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="gradient-bottom1 overflow-hidden absolute bg-no-repeat bg-contain"></div>
        <div className="gradient-bottom3"></div>
        <div className="gradient-bottom flex-none overflow-hidden absolute bg-[#7c2afd] "></div>
      </section>

      {/* Recently Added Papers or Submit arXiv link Section */}
      <section className="custom-bg w-full h-auto py-14">
        {/* Recently Added Papers */}
        <div className="pt-14 mx-auto container">
          <div className="recent_box px-6 pb-10  max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-12 text-[#F7F8F8] pt-14">
              Recently Added Papers
            </h3>

            <table className="table-auto w-full text-left mb-12">
              <thead>
                <tr>
                  <th className="border-b-2 text-[#b4bcd0] text-xl font-normal pb-2">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper) => (
                  <tr key={paper.id} className=" ">
                    <td className=" py-2 border-b">
                      <Link
                        href={`${paper.id}`}
                        className="text-[#b4bcd0] text-lg "
                      >
                        {paper.result}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submit arXiv link part */}
        <div className="">
          <div className="flex justify-center items-center w-full">
            <div className="container mx-auto ">
              <h2
                htmlFor="arxivLink"
                className="text-center text-2xl font-semibold my-8 text-[#F7F8F8] "
              >
                OR
              </h2>

              <div className="recent_box px-6 pb-10 max-w-4xl mx-auto ">
                <h2
                  htmlFor="arxivLink"
                  className="text-xl font-semibold mb-4 text-[#b4bcd0]"
                >
                  Submit arXiv link below to add the paper to coverage
                </h2>
                <div className=" w-full ">
                  <input
                    type="text"
                    id="arxivLink"
                    className="w-full py-4 px-6 border border-[#181A2D] rounded-lg bg-[#181A2D] "
                    placeholder="Paste arXiv link here"
                    value={arxivLink}
                    onChange={(e) => setArxivLink(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      className="searchButton bg-[#4C6699] text-[#F1ECF5]  py-3 px-6 rounded-lg mt-3"
                      onClick={handleSubmit}
                    >
                      {' '}
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
