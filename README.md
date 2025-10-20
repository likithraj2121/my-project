# DevCatalyst Website Replica

A complete replica of the DevCatalyst website built using the FinFlow app's frontend UI styling and components.

## Overview

This project replicates the DevCatalyst developer community website with the following features:

- **Modern UI Design** - Uses FinFlow's glassmorphism design system with dark theme
- **Responsive Layout** - Mobile-first approach with responsive navigation
- **Interactive Components** - Animated sections, countdown timer, and contact form
- **TypeScript Support** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens

## Project Structure

```
devcatalyst-replica/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Card.tsx            # Card component with multiple variants
│   └── Layout.tsx              # Main layout with header/footer
├── pages/
│   ├── _app.tsx               # Next.js app wrapper
│   └── index.tsx              # Main landing page
├── styles/
│   └── globals.css            # Global styles and Tailwind imports
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Website Sections

### 1. Hero Section
- **Brand Logo** - Custom DevCatalyst logo with gradient
- **Main Heading** - Animated gradient text
- **Tagline** - "Fueling the Next Generation of Developers"
- **Stats Cards** - 500+ Members, 25+ Events, 40+ Projects
- **CTA Buttons** - Primary and secondary call-to-action buttons

### 2. Community Highlights
- **Achievement Card** - Latest community milestone
- **Event Countdown** - Real-time countdown to next React.js Workshop
- **Dynamic Timer** - Live updating countdown with days, hours, minutes, seconds

### 3. About DevCatalyst
Three-column layout with:
- **What We Are** - Community description and mission
- **Why Join** - Benefits and opportunities with checkmark icons
- **Activities** - List of community activities with star icons

### 4. Meet Our Team
Team member cards featuring:
- **Divyansh Teja Edla** - President
- **Dhruv Gannaram** - Vice President
- **Parimitha** - Event Planner
- **Hemaditya Kalakota** - Technical Lead

### 5. Get Started in 3 Steps
Step-by-step process:
1. **Join the Community** - WhatsApp Community onboarding
2. **Attend a Workshop** - Beginner-friendly sessions
3. **Build a Project** - Real portfolio development

### 6. Contact Section
- **Contact Form** - Name, email, message fields with validation
- **Contact Information** - Email and location details
- **Social Links** - Instagram, Twitter, LinkedIn, WhatsApp Community buttons

## Design Features

### Color Scheme
- **Primary Colors** - Indigo gradient (primary-400 to primary-600)
- **Secondary Colors** - Teal accent (secondary-400 to secondary-600)
- **Warning Colors** - Amber highlights (warning-400 to warning-600)
- **Neutral Colors** - Dark theme with neutral-900 to neutral-100

### UI Components
- **Glassmorphism Cards** - Translucent backgrounds with blur effects
- **Gradient Buttons** - Animated hover states with scale transforms
- **Icon Integration** - Lucide React icons throughout
- **Responsive Grid** - CSS Grid and Flexbox layouts
- **Smooth Animations** - Framer Motion page transitions

### Typography
- **Font Family** - Inter for body text, Poppins for headings
- **Font Weights** - 300 (light) to 800 (bold)
- **Text Gradients** - Multi-color gradient text effects
- **Responsive Sizing** - Fluid typography scaling

## Technology Stack

- **Framework** - Next.js 14 with TypeScript
- **Styling** - Tailwind CSS with custom configuration
- **Icons** - Lucide React icon library
- **Animations** - Framer Motion for page transitions
- **Build Tool** - Next.js built-in Webpack configuration
- **Development** - Hot reload with fast refresh

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd devcatalyst-replica
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## Component Architecture

### Layout Component
```tsx
interface LayoutProps {
  children: React.ReactNode;
}
```
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Consistent header and footer
- Click-outside-to-close functionality

### Card Component
```tsx
interface CardProps {
  variant?: 'default' | 'glass' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}
```
- Multiple visual variants
- Configurable padding options
- Optional hover animations
- Compound components (CardHeader, CardTitle, CardContent, CardFooter)

### Button Component
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  isLoading?: boolean;
  fullWidth?: boolean;
}
```
- Six visual variants
- Four size options
- Icon support (left/right)
- Loading state with spinner
- Full width option

## Responsive Design

### Breakpoints
- **Mobile** - < 640px (sm)
- **Tablet** - 640px - 768px (md)
- **Laptop** - 768px - 1024px (lg)
- **Desktop** - 1024px+ (xl)

### Mobile Optimizations
- Collapsible navigation menu
- Touch-friendly button sizes
- Stacked layouts on small screens
- Optimized font sizes
- Reduced motion for accessibility

## Accessibility Features

- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **Screen Reader Support** - ARIA labels and descriptions
- **Color Contrast** - WCAG AA compliant color ratios
- **Reduced Motion** - Respects prefers-reduced-motion

## Performance Features

- **Code Splitting** - Automatic code splitting with Next.js
- **Image Optimization** - Next.js Image component (when needed)
- **CSS Optimization** - PurgeCSS removes unused styles
- **Bundle Analysis** - Webpack bundle analyzer integration
- **Fast Refresh** - Instant feedback during development

## Browser Support

- **Modern Browsers** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Grid** - Full support for modern layout techniques
- **CSS Custom Properties** - Dynamic theming support
- **Backdrop Filter** - Glassmorphism effects where supported

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
npm run start
```

## Content Customization

### Team Members
Update the `teamMembers` array in `pages/index.tsx`:
```tsx
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    avatar: 'YN', // Initials
    color: 'bg-primary-500' // Color class
  }
];
```

### Statistics
Modify the `stats` array:
```tsx
const stats = [
  { icon: Users, label: 'Members', value: '500+', color: 'text-primary-500' }
];
```

### Contact Information
Update contact details in the contact section:
```tsx
<p className="text-neutral-400 text-sm">your-email@domain.com</p>
<p className="text-neutral-400 text-sm">Your Location</p>
```

## License

This project is created as a replica for educational purposes. The original DevCatalyst branding and content belong to their respective owners.

## Contributing

This is a replica project created for demonstration purposes. For the actual DevCatalyst community, please visit their official channels.

---

**Built with ❤️ using FinFlow UI Design System**