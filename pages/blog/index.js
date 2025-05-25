import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function BlogIndex({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog - Ryan Guidry</title>
                <meta name="description" content="Articles about web development, engineering, and data science by Ryan Guidry" />
                <link rel="stylesheet" href="/css/blog.css" />
            </Head>

            <main className="blog-index">
                <div className="blog-header">
                    <h1>Blog</h1>
                    <p>Thoughts and insights about web development, engineering principles, and data science.</p>
                </div>

                <section className="blog-categories">
                    <h2><i className="fas fa-tags"></i> Categories</h2>
                    <div className="category-pills">
                        <Link href="/blog/category/web-development">Web Development</Link>
                        <Link href="/blog/category/engineering">Engineering</Link>
                        <Link href="/blog/category/data-science">Data Science</Link>
                    </div>
                </section>

                {allPostsData.length > 0 ? (
                    <>
                        {allPostsData[0] && (
                            <section className="featured-post">
                                <h2>Latest Post</h2>
                                <div className="post-card featured">
                                    <div className="post-content">
                                        <span className="category">{allPostsData[0].category}</span>
                                        <h3>{allPostsData[0].title}</h3>
                                        <p>{allPostsData[0].excerpt}</p>
                                        <div className="post-meta">
                                            <time>
                                                <i className="fas fa-calendar"></i>
                                                {new Date(allPostsData[0].date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                            <span className="read-time">
                                                <i className="fas fa-clock"></i>
                                                {allPostsData[0].readTime} min read
                                            </span>
                                        </div>
                                        <Link href={`/blog/${allPostsData[0].slug}`} className="read-more">
                                            Read More <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        )}

                        <section className="all-posts">
                            <h2>All Posts</h2>
                            <div className="posts-grid">
                                {allPostsData.slice(1).map(({ slug, date, title, excerpt, category, readTime }) => (
                                    <article key={slug} className="post-card">
                                        <div className="post-content">
                                            <span className="category">{category}</span>
                                            <h3>{title}</h3>
                                            <p>{excerpt}</p>
                                            <div className="post-meta">
                                                <time>
                                                    <i className="fas fa-calendar"></i>
                                                    {new Date(date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </time>
                                                <span className="read-time">
                                                    <i className="fas fa-clock"></i>
                                                    {readTime} min read
                                                </span>
                                            </div>
                                            <Link href={`/blog/${slug}`} className="read-more">
                                                Read More <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="no-posts">
                        <p>No blog posts found. Check back soon!</p>
                    </div>
                )}
            </main>
        </Layout>
    );
}