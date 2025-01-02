# README: Basic Next.js Concepts

## 1. Files & Folder Structure Explained
This project follows the standard Next.js app directory structure:

- `.next`: Contains the compiled build files generated after running the build command.
- `node_modules`: Stores all project dependencies installed via npm or yarn.
- `public`: Contains static files such as images, fonts, or other assets accessible directly via `/public` paths.
- `src/app`: The main directory for your application’s logic and pages. It includes:
  - **`(login)`**: A grouped folder with subpages like `newuser` and `signup`.
  - **`about`**: A standalone page.
  - **`contact`**: Contains `page.jsx` and associated styles in `page.module.css`.
  - **`products`**: Demonstrates nested routing with folders for categories like `groceries`, `meat`, and dynamic routes like `[id]`.
  - **`services`**: Includes a `page.jsx` file showcasing another standalone route.
  - **`layout.js`**: Defines shared layouts across your application.
  - **`globals.css`**: Contains global styles applied across all components and pages.

## 2. Routing with Pages, Nested Routes & Grouping Pages
- Next.js automatically maps files in the `src/app` directory to routes.
- Nested routes are created by nesting folders within `app`.
- Grouping pages is achieved by wrapping folders with parentheses (e.g., `(login)` for organizing related pages without affecting the URL).

## 3. Mastering Dynamic Routes, Nested Dynamic Routes, Catch All Routes
- **Dynamic Routes**: Defined by square brackets in filenames, e.g., `[id]` maps to `/products/meat/:id`.
- **Nested Dynamic Routes**: E.g., `[reviewId]` inside the `review` folder creates deeper nested dynamic paths like `/products/meat/review/:reviewId`.
- **Catch All Routes**: Use `[...slug]` to capture multiple segments.

## 4. Link Component - How to Link Navigate Between Pages & Dynamic Pages
- Use the `Link` component to navigate between pages.
- Example:
  ```jsx
  <Link href="/products/meat">Meat</Link>
  <Link href="/products/meat/chicken">Chicken</Link>
  ```

## 5. How to Add CSS Styles: CSS Modules & `globals.css`
- **CSS Modules**: Scoped styles for a specific component. Example:
  ```jsx
  import styles from './page.module.css';
  <h1 className={styles.heading}>Contact Us</h1>
  ```
- **`globals.css`**: Global styles applied universally. Example:
  ```css
  body {
    font-family: Arial, sans-serif;
  }
  ```

## 6. How to Add Fonts, Variable Fonts, Google Fonts
- Add fonts via the `<link>` tag in `layout.js` or import directly.
- Example:
  ```jsx
  import { Roboto } from '@next/font/google';
  const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
  ```

## 7. Mastering Layout & Nested Layouts
- Layouts allow you to define reusable UI sections (e.g., headers, footers).
- Use `layout.js` to wrap components:
  ```jsx
  export default function Layout({ children }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
  ```
- Nested layouts provide separate layouts for specific sections.

## 8. How to Add Local & Remote Images | Image Optimizations & Best Practices
- Use the `Image` component for optimized images:
  ```jsx
  import Image from 'next/image';
  <Image src="/meat.jpg" alt="Meat" width={500} height={300} />
  ```
- Supports local images (from `public` folder) and remote images (configure in `next.config.js`).

## 9. Event Handling, Creating Functions & Managing States
- Event handling in React is straightforward. Example:
  ```jsx
  const handleClick = () => alert('Button clicked!');
  return <button onClick={handleClick}>Click Me</button>;
  ```
- Use `useState` for state management:
  ```jsx
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
  ```

