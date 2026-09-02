const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

function copyEmail(event) {
    const email = "kudiratlawal1000@gmail.com";
 
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }

}
