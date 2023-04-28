import { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';


const scroll = new SmoothScroll();

export function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        scroll.animateScroll(document.querySelector(link.getAttribute('href')));
      });
    });
  }, []);
}
