document.querySelectorAll(".projects-Btn").forEach(button => {
  button.addEventListener("click", function () {
    const target = this.getAttribute("data-target");
    window.location.href = target;
  });
});


function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let cookie of cookieArray) {
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring((name + "=").length, cookie.length);
    }
  }
  return null;
}

window.onload = function () {
  const consent = getCookie("cookieConsent");
  const banner = document.getElementById("cookie-banner");
  const overlay = document.getElementById("cookie-overlay");
  
  if (!consent && banner) {
    banner.style.display = "block";
    overlay.style.display = "block";
  } else {
    banner.style.display = "none";
    overlay.style.display = "none";
  }
};

function openPreferences() {
  document.getElementById("cookie-preferences").style.display = "block";
  document.getElementById("cookie-overlay").style.display = "block";
}

function closePreferences() {
  document.getElementById("cookie-preferences").style.display = "none";
}

function acceptCookies() {
  setCookie("cookieConsent", "accepted", 365, JSON.stringify({
    analytics: true,
    functional: true,
    marketing: true
  }));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
}

function declineCookies() {
  setCookie("cookieConsent", "declined", 365, JSON.stringify({
    analytics: false,
    functional: false,
    marketing: false
  }));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
}

function savePreferences() {
  const consent = {
    analytics: document.getElementById("analytics").checked,
    functional: document.getElementById("functional").checked,
    marketing: document.getElementById("marketing").checked
  };

  setCookie("cookieConsent", "custom", 365, JSON.stringify(consent));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
  closePreferences();
}

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  }
}

function resetConsentPreferences() {
  deleteAllCookies();
  document.getElementById("cookie-preferences").style.display = "block";
  const checkboxesToReset = [
    "analytics",
    "functional",
    "marketing"
  ];

  checkboxesToReset.forEach(id => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = false;
    }
  });
}





/*--- Cookies-versão-LocalStorage ---*/
/*
window.onload = function () {
  const consent = localStorage.getItem("cookieConsent");
  const banner = document.getElementById("cookie-banner");
  const overlay = document.getElementById("cookie-overlay");
  
  if (!consent && banner) {
    banner.style.display = "block";
    overlay.style.display = "block";
  } else {
    banner.style.display = "none";
    overlay.style.display = "none";
  }
};

function openPreferences() {
  document.getElementById("cookie-preferences").style.display = "block";
  document.getElementById("cookie-overlay").style.display = "block";
}

function closePreferences() {
  document.getElementById("cookie-preferences").style.display = "none";
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted", JSON.stringify({
    analytics: true,
    functional: true,
    marketing: true
  }));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "declined", JSON.stringify({
    analytics: false,
    functional: false,
    marketing: false
  }));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
}

function savePreferences() {
  const consent = {
    analytics: document.getElementById("analytics").checked,
    functional: document.getElementById("functional").checked,
    marketing: document.getElementById("marketing").checked
  };
  localStorage.setItem("cookieConsent", "custom", JSON.stringify(consent));
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
  closePreferences();
}

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

function resetConsentPreferences() {
  localStorage.removeItem("cookieConsent");

  deleteAllCookies();

  document.getElementById("cookie-preferences").style.display = "block";
  const checkboxesToReset = [
    "analytics",
    "functional",
    "marketing"
  ];

  checkboxesToReset.forEach(id => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = false;
    }
  });
}
*/