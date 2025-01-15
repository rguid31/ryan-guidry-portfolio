import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Ensure the posts directory exists
if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getSortedPostsData() {
    // Get file names under /posts
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = fileNames.map((fileName) => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the slug
            return {
                slug,
                ...matterResult.data,
            };
        });

        // Sort posts by date
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else if (a.date > b.date) {
                return -1;
            } else {
                return 0;
            }
        });
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

export function getAllPostSlugs() {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames.map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, ''),
                },
            };
        });
    } catch (error) {
        console.error('Error getting post slugs:', error);
        return [];
    }
}

export async function getPostData(slug) {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the slug and contentHtml
        return {
            slug,
            contentHtml,
            ...matterResult.data,
        };
    } catch (error) {
        console.error(`Error getting post data for ${slug}:`, error);
        return null;
    }
} 