import Head from 'next/head';
import Link from 'next/link';

const podcastEpisodes = [
  { title: 'Episode 1: Introduction to Web Development', file: '/audio/episode1.wav' },
  { title: 'Episode 2: Advanced Engineering Concepts', file: '/audio/episode2.wav' },
  { title: 'Episode 3: Data Science in Practice', file: '/audio/episode3.wav' },
];

const Podcasts = () => {
  return (
    <>
      <Head>
        <title>Podcasts - Ryan Guidry</title>
        <meta name="description" content="Podcasts by Ryan Guidry" />
        <link rel="stylesheet" href="/css/blog.css" />
      </Head>

      <main className="blog-index">
        <div className="blog-header">
          <h1>Podcasts</h1>
          <p>Explore my collection of podcasts on various topics including web development, engineering, and data science.</p>
        </div>

        <section className="blog-categories">
          <h2><i className="fas fa-tags"></i> Categories</h2>
          <div className="category-pills">
            <Link href="/podcasts/category/technology">Technology</Link>
            <Link href="/podcasts/category/engineering">Engineering</Link>
            <Link href="/podcasts/category/science">Science</Link>
          </div>
        </section>

        <section className="podcast-episodes">
          <h2>Episodes</h2>
          <ul>
            {podcastEpisodes.map((episode, index) => (
              <li key={index}>
                <h3>{episode.title}</h3>
                <audio controls>
                  <source src={episode.file} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </section>

        {/* Add podcast content here */}
      </main>
    </>
  );
};

export default Podcasts; 