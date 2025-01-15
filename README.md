# Ryan Guidry's Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my professional experience, projects, and blog posts.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Blog Platform**: Integrated blog with Markdown support
- **Portfolio Showcase**: Highlighted projects with detailed case studies
- **Skills Grid**: Visual representation of technical skills and expertise
- **Contact Form**: Direct way to get in touch
- **Dark/Light Mode**: Color scheme following system preferences

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: JavaScript/React
- **Styling**: CSS3 with modern features
- **Content**: Markdown for blog posts
- **Icons**: Font Awesome
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── components/         # Reusable React components
│   └── layout/        # Layout components
├── lib/               # Utility functions
├── pages/             # Next.js pages
│   ├── blog/         # Blog pages
│   └── projects/     # Project pages
├── posts/            # Markdown blog posts
├── public/           # Static assets
│   ├── css/         # Global CSS files
│   └── images/      # Image assets
└── styles/          # Component-specific styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Blog Posts

Blog posts are written in Markdown format and stored in the `posts` directory. Each post should include frontmatter with the following fields:

```markdown
---
title: 'Post Title'
date: 'YYYY-MM-DD'
excerpt: 'Brief description of the post'
author: 'Your Name'
category: 'Category'
readTime: X
tags: ['tag1', 'tag2']
---
```

## 🎨 Styling

The project uses a consistent color palette:
- Primary Color (Navy): #14213D
- Secondary Color (Orange): #FCA311
- Background: #FFFFFF
- Text: #000000
- Gray: #E5E5E5

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

Key configuration files:
- `next.config.js` - Next.js configuration
- `package.json` - Project dependencies and scripts
- `lib/posts.js` - Blog post utilities

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ryan Guidry**
- Website: [ryanguidry.com](https://ryanguidry.com)
- LinkedIn: [@rmguidry](https://linkedin.com/in/rmguidry)
- GitHub: [@rguid31](https://github.com/rguid31)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- The blog system uses static site generation for optimal performance
- Images should be optimized before adding to the project
- Keep blog post images in the `public/images/blog` directory
- Project images should be stored in `public/images/projects`
