'use client';
import Footer from 'app/components/Footer';
import Navbar from 'app/navbar';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import BeautifulArticle from '../../article';

const socket = io('https://premrajnarkhede.online');

export default function BlogPage({ params }: { params: { slug: string } }) {
  const [status, setStatus] = useState('');
  const [result, setResult] = useState('');
  const [slug, setSlug] = useState(params);
  const [artData, setArtData] = useState(['NA', 'NA', ``]);
  const [regen, setRegen] = useState('0');
  const fetchData = (slug, regen) => {
    //const fws = document.querySelectorAll('div.mermaid');
    console.log('slug', slug);
    socket.on('status', (data) => {
      console.log(data);
      setStatus(data);
    });

    socket.on('result', (data) => {
      console.log('data', data);
      setArtData([data[0], data[1], '']);
      setArtData(data);
      socket.off('status');
      socket.off('result');
    });
    socket.emit('search', { slug: slug, regen: regen });
  };

  useEffect(() => {
    // Ensure the slug exists before making the API call
    const queryParams = new URLSearchParams(window.location.search);
    const regen = queryParams.get('regen') || 0; // fallback to 0 if not found
    setRegen(Number(regen)); // Ensure it's a number
    console.log('regen', regen);
    fetchData(slug, regen);
  }, slug); // This effect runs whenever the slug changes

  return (
    <>
      <main>
        <Navbar user={undefined} />
        <section className="custom-bg w-full min-h-screen h-full">
          <div className="pt-[135px]">
            <div className="container mx-auto">
              <div className="flex items-center justify-center w-full">
                <div className="w-full min-w-[300px] max-w-7xl">
                  <p className="text-white">
                    Status: <span className="text-[#AEB5CA] ">{status}</span>
                  </p>{' '}
                  <BeautifulArticle article_data={artData} />
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
