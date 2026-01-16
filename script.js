// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
});

<!-- 2️⃣ Add this script at the bottom of your HTML (before </body>) -->
<script>
  const path = window.location.pathname.split("/").filter(Boolean);
  const breadcrumb = document.getElementById("breadcrumb");
  let html = `<a href="/">Home</a>`;
  let pathAcc = "";

  path.forEach((part, index) => {
    pathAcc += `/${part}`;
    const name = part.replace("-", " ");
    if (index === path.length - 1) {
      html += ` &gt; <span>${name}</span>`;
    } else {
      html += ` &gt; <a href="${pathAcc}">${name}</a>`;
    }
  });

  breadcrumb.innerHTML = html;
</script>

<!-- 3️⃣ Optional styling -->
<style>
  #breadcrumb {
    font-size: 14px;
    margin: 20px 0;
  }
  #breadcrumb a {
    color: #000000; /* black for Calming Currents theme */
    text-decoration: none;
  }
  #breadcrumb a:hover {
    text-decoration: underline;
  }
  #breadcrumb span {
    color: #444;
  }
</style>

  <script>
    // --- 1) read ?service= from the URL
    const params = new URLSearchParams(window.location.search);
    const serviceFromUrl = params.get('service');

    // --- 2) map any friendly alternate slugs to the exact option values (optional)
    // Use this if you ever want multiple aliases; for now it's identity mapping
    const validSlugs = new Set([
      'back-exfoliation','deep-tissue','manicure','pedicure','body-scrub','back-exfoliation','aromatherapy-massage','full-body','deep-cleansing','gel-soak','deep-cleansing','gents-manicure','deep-tissue','manicure','cupping','head-massage'
    ]);

    // --- 3) set the dropdown value if provided and valid
    const select = document.getElementById('serviceSelect');
    if (serviceFromUrl && validSlugs.has(serviceFromUrl)) {
      select.value = serviceFromUrl;
    }

    // --- 4) store the page the user came from as origin (useful for tracking)
    // e.g. /service.html#manicure or full URL
    document.getElementById('origin').value = document.referrer || window.location.href;

    // --- 5) OPTIONAL: show a friendly message if unknown service
    if (serviceFromUrl && !validSlugs.has(serviceFromUrl)) {
      // if service unknown, you could show a note. For now we just leave the dropdown untouched.
      console.warn('Unknown service requested:', serviceFromUrl);
    }
  </script>
