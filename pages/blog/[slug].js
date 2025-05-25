import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData
        }
    };
}

export default function BlogPost({ postData }) {
    if (!postData) return <div>Post not found</div>;

    return (
        <Layout>
            <Head>
                <title>{postData.title} - Ryan Guidry's Blog</title>
                <meta name="description" content={postData.excerpt || 'Blog post by Ryan Guidry'} />
                <link rel="stylesheet" href="/css/blog.css" />
            </Head>

            <main className="blog-post-content">
                <Link href="/blog" className="back-link">
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>

                <article>
                    <header className="post-header">
                        <h1>{postData.title}</h1>
                        <div className="post-meta">
                            <time>
                                <i className="fas fa-calendar"></i>
                                {new Date(postData.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                            {postData.category && (
                                <span className="category">
                                    <i className="fas fa-tag"></i>
                                    {postData.category}
                                </span>
                            )}
                            {postData.readTime && (
                                <span className="read-time">
                                    <i className="fas fa-clock"></i>
                                    {postData.readTime} min read
                                </span>
                            )}
                        </div>
                    </header>

                    <div 
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                    />
                </article>
            </main>
        </Layout>
    );
} 