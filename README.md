# DevDave Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring dark mode, smooth animations, and a clean design.

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 🌓 Dark mode support with theme persistence
- 📱 Mobile-first approach
- ⚡ Built with Next.js 14 App Router
- 💎 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 🖼️ Optimized images with Next.js Image
- 📧 Contact form with validation
- 🎯 SEO optimized
- ♿ Accessibility focused

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio_revamp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── sections/         # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── Button.tsx
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
└── lib/                      # Utility functions
```

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: "#F97316",  // Orange
  // Add your custom colors
}
```

### Content

1. **Personal Information**: Update content in each section component
2. **Projects**: Edit the `projects` array in `Projects.tsx`
3. **Skills**: Modify the `skills` array in `About.tsx`
4. **Contact Info**: Update `contactInfo` in `Contact.tsx`
5. **Social Links**: Change URLs in `Navbar.tsx` and `Footer.tsx`

### Images

Replace placeholder images:
1. Add your profile photo to `public/images/`
2. Update the image path in `Hero.tsx`
3. Add project screenshots to showcase your work

### SEO

Update metadata in `layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  // Add more meta tags
};
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind
- **Form Handling**: React Hook Form (optional)

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your repo and deploy
- **AWS Amplify**: Use the Amplify CLI
- **Docker**: Use the provided Dockerfile

## 🎯 Performance Optimization

- ✅ Image optimization with Next.js Image
- ✅ Code splitting by default
- ✅ CSS purging in production
- ✅ Font optimization
- ✅ Lazy loading components

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
# Add other environment variables
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**DevDave Solutions**
- Website: [devdave.com](https://devdave.com)
- GitHub: [@devdave](https://github.com/devdave)
- LinkedIn: [DevDave](https://linkedin.com/in/devdave)

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Lucide for the beautiful icons

---

Made with ❤️ using Next.js and Tailwind CSS