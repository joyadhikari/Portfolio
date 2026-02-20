// // // Simple reveal on scroll
// //     const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } }) }, {threshold:0.12});
// //     document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// //     // Mock contact
// //     document.getElementById('sendBtn').addEventListener('click', ()=>{
// //       const n = document.getElementById('name').value.trim();
// //       const e = document.getElementById('email').value.trim();
// //       const m = document.getElementById('msg').value.trim();
// //       if(!n||!e||!m){ alert('Please fill all fields'); return; }
// //       alert('Message sent (demo). Replace with fetch to your endpoint.');
// //       document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('msg').value='';
// //     });

// //     // Scroll to contact when clicking Contact
// //     document.getElementById('contactNow').addEventListener('click', ()=>{ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); });
// //     // Scroll to About
// //     const aboutBtn = document.getElementById('aboutNow');
// //     if(aboutBtn){ aboutBtn.addEventListener('click', ()=>{ const a = document.getElementById('about'); if(a) a.scrollIntoView({behavior:'smooth'}); }); }
// //     // Scroll to Work/Projects
// //     const workBtn = document.getElementById('workNow');
// //     if(workBtn){ workBtn.addEventListener('click', ()=>{ const p = document.getElementById('projects'); if(p) p.scrollIntoView({behavior:'smooth'}); }); }
// //     // Blog placeholder: scroll to top or show coming soon
// //     const blogBtn = document.getElementById('blogNow');
// //     if(blogBtn){ blogBtn.addEventListener('click', ()=>{ alert('Blog is coming soon — replace with your blog link.'); }); }
// //     const downloadResumeBtn = document.getElementById('downloadResume');
// //     if(downloadResumeBtn){
// //       downloadResumeBtn.addEventListener('click', async (e)=>{
// //         const href = downloadResumeBtn.getAttribute('href');
// //         try{
// //           const resp = await fetch(href, { method: 'HEAD' });
// //           if(!resp.ok){
// //             e.preventDefault();
// //             alert('Resume PDF not found. Place resume.pdf in the project root or update the link.');
// //           }
// //         }catch(err){
// //           e.preventDefault();
// //           alert('Resume PDF unavailable. Place resume.pdf at project root or update the link.');
// //         }
// //       });
// //     }

// //       // Avatar image load/fallback handling: add .has-img on successful load, .no-img on error
// //       document.querySelectorAll('.avatar-img').forEach(img=>{
// //         const parent = img.closest('.avatar');
// //         if(!parent) return;
// //         img.addEventListener('load', ()=>{ parent.classList.add('has-img'); parent.classList.remove('no-img'); });
// //         img.addEventListener('error', ()=>{ parent.classList.add('no-img'); parent.classList.remove('has-img'); });
// //         // If the image is already in cache and loaded
// //         if(img.complete && img.naturalWidth){ parent.classList.add('has-img'); }
// //         // If the user places a photo named avatar.jpg or avatar.png in the root, prefer it
// //         (async ()=>{
// //           try{
// //             const candidates = ['avatar.jpg','avatar.png'];
// //             for(const cand of candidates){
// //               const res = await fetch(cand, { method: 'HEAD' });
// //               if(res.ok){ img.src = cand; break; }
// //             }
// //           }catch(e){/* ignore */}
// //         })();
// //       });

// // ==============================
// // Smooth Scroll Navigation
// // ==============================

// const aboutBtn = document.getElementById("aboutNow");
// const contactBtn = document.getElementById("contactNow");

// aboutBtn.addEventListener("click", () => {
//   document.getElementById("about").scrollIntoView({
//     behavior: "smooth"
//   });
// });

// contactBtn.addEventListener("click", () => {
//   document.getElementById("contact").scrollIntoView({
//     behavior: "smooth"
//   });
// });


// // ==============================
// // Scroll Reveal Animation
// // ==============================

// const reveals = document.querySelectorAll(".reveal");

// function revealOnScroll() {
//   const windowHeight = window.innerHeight;

//   reveals.forEach((element) => {
//     const elementTop = element.getBoundingClientRect().top;
//     const revealPoint = 100;

//     if (elementTop < windowHeight - revealPoint) {
//       element.classList.add("active");
//     }
//   });
// }

// window.addEventListener("scroll", revealOnScroll);


// // ==============================
// // Contact Form Validation
// // ==============================

// const sendBtn = document.getElementById("sendBtn");

// sendBtn.addEventListener("click", () => {
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const number = document.getElementById("Number").value.trim();
//   const message = document.getElementById("msg").value.trim();

//   // Basic validation
//   if (name === "" || email === "" || number === "" || message === "") {
//     alert("Please fill all fields!");
//     return;
//   }

//   // Email format validation
//   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!email.match(emailPattern)) {
//     alert("Please enter a valid email address!");
//     return;
//   }

//   // Phone number validation (10 digits)
//   const phonePattern = /^[0-9]{10}$/;
//   if (!number.match(phonePattern)) {
//     alert("Enter valid 10-digit phone number!");
//     return;
//   }

//   alert("Message sent successfully! ✅");

//   // Clear form
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("Number").value = "";
//   document.getElementById("msg").value = "";
// });


// // ==============================
// // Optional: Button Hover Effect
// // ==============================

// const buttons = document.querySelectorAll(".nav-btn");

// buttons.forEach(btn => {
//   btn.addEventListener("mouseover", () => {
//     btn.style.transform = "scale(1.05)";
//   });

//   btn.addEventListener("mouseout", () => {
//     btn.style.transform = "scale(1)";
//   });
// });





// ===============================
// Run after DOM fully loads
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Smooth Scroll Navigation
  // ===============================

  const aboutBtn = document.getElementById("aboutNow");
  const contactBtn = document.getElementById("contactNow");

  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
      });
    });
  }


  // ===============================
  // Scroll Reveal Animation (Professional Version)
  // ===============================

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach(el => observer.observe(el));


  // ===============================
  // Contact Form Validation
  // ===============================

  const sendBtn = document.getElementById("sendBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const number = document.getElementById("Number");
      const message = document.getElementById("msg");

      const nameVal = name.value.trim();
      const emailVal = email.value.trim();
      const numberVal = number.value.trim();
      const messageVal = message.value.trim();

      if (!nameVal || !emailVal || !numberVal || !messageVal) {
        showMessage("Please fill all fields!", "error");
        return;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailVal)) {
        showMessage("Enter a valid email address!", "error");
        return;
      }

      // Phone validation
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(numberVal)) {
        showMessage("Enter a valid 10-digit phone number!", "error");
        return;
      }

      showMessage("Message sent successfully! 🚀", "success");

      // Clear fields
      name.value = "";
      email.value = "";
      number.value = "";
      message.value = "";
    });
  }


  // ===============================
  // Custom Message Function
  // ===============================

  function showMessage(text, type) {
    let msgBox = document.createElement("div");
    msgBox.innerText = text;

    msgBox.style.position = "fixed";
    msgBox.style.bottom = "20px";
    msgBox.style.right = "20px";
    msgBox.style.padding = "12px 18px";
    msgBox.style.borderRadius = "8px";
    msgBox.style.color = "#fff";
    msgBox.style.fontWeight = "600";
    msgBox.style.zIndex = "9999";
    msgBox.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    msgBox.style.transition = "all 0.3s ease";

    if (type === "success") {
      msgBox.style.background = "#16a34a";
    } else {
      msgBox.style.background = "#dc2626";
    }

    document.body.appendChild(msgBox);

    setTimeout(() => {
      msgBox.style.opacity = "0";
      setTimeout(() => {
        msgBox.remove();
      }, 300);
    }, 2500);
  }

});

