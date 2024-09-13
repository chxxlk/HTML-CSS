class ScrollRevealConfig {
  constructor(options) {
    this.options = options;
    this.delay = options.delay;
  }

  reveal(selector) {
    ScrollReveal().reveal(selector, { ...this.options, delay: this.delay });
    this.delay += 100;
  }
}

const scrollRevealConfig = new ScrollRevealConfig({
  reset: true,
  distance: "200px",
  duration: 2500,
  delay: 400,
  origin: "bottom",
});

scrollRevealConfig.reveal(".name");
scrollRevealConfig.reveal(".introduction");
scrollRevealConfig.reveal(".social-media");
scrollRevealConfig.reveal(".scroll-down");
scrollRevealConfig.reveal(".container-about img");
scrollRevealConfig.reveal(".container-about .text-container");
