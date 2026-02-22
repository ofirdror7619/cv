# Ofir Dror - CV & Portfolio Website

A modern, responsive CV and portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme**: Professional dark color scheme with custom colors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Sections**: Smooth scrolling navigation between different CV sections
- **Professional Layout**: Clean and organized presentation of experience, skills, and education
- **Contact Form**: Functional contact form for easy communication
- **Optimized Performance**: Built with Next.js for fast loading and excellent SEO

## 🎨 Design

- **Background**: #0F172A (Deep navy)
- **Card Background**: #1E293B (Slate gray)
- **Text**: #E2E8F0 (Light gray)
- **Accent**: #38BDF8 (Light blue)

## 📚 Sections

- **About**: Professional summary and contact information
- **Experience**: Detailed work history from 2014 to present
- **Education**: Academic background and certifications
- **Skills**: Technical skills with proficiency levels
- **Contact**: Contact form and social media links

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: React 19, Node.js

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ofirdror/cv.git
   cd cv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
cv/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── components/        # React components
│       ├── About.tsx      # About section
│       ├── Contact.tsx    # Contact form
│       ├── Education.tsx  # Education & certifications
│       ├── Experience.tsx # Professional experience
│       ├── Navigation.tsx # Navigation bar
│       └── Skills.tsx     # Technical skills
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Customization

To customize this CV for your own use:

1. Update personal information in `src/components/About.tsx`
2. Modify work experience in `src/components/Experience.tsx`
3. Update education details in `src/components/Education.tsx`
4. Adjust skills and proficiency levels in `src/components/Skills.tsx`
5. Update contact information in `src/components/Contact.tsx`

## 📧 Contact

- **Email**: ofirdror7619@gmail.com
- **Phone**: 054-7550489
- **Location**: Petah Tikva, Israel
- **LinkedIn**: [linkedin.com/in/ofir-dror](https://linkedin.com/in/ofir-dror)
- **GitHub**: [github.com/ofirdror](https://github.com/ofirdror)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Ofir Dror