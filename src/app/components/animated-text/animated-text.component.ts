import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrl: './animated-text.component.css',
})
export class AnimatedTextComponent {
  ngOnInit() {
    this.setupAnimation();
  }

  setupAnimation() {
    const words = [
      'Shop smarter 🧠',
      'Grow faster 📈',
      'Connect better 🤝',
      'All in one zone 🎯',
    ];

    gsap.to('#cursor', {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    let tlMaster = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to('#animated-text', { duration: 1, text: word });
      tlMaster.add(tlText);
    });
  }
}
