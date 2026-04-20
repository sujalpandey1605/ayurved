import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { getRouter } from './router';
import './styles.css';

const router = getRouter();

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  // Lightweight Scroll Reveal Logic
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe elements with reveal classes
  const observeElements = () => {
    const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
    reveals.forEach((el) => observer.observe(el));
  };

  // Run on initial load and after some delay to ensure DOM is ready
  setTimeout(observeElements, 500);

  // Re-observe when router navigation happens
  router.subscribe("onResolved", () => {
    setTimeout(observeElements, 400);
  });
}
