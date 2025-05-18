function translatePage() {
  const translations = {
    // Headings and Buttons
    "Hello There": "مرحباً بك",
    "Welcome To Adidas Website": "مرحباً بك في موقع أديداس",
    "Meet Our Team": "تعرف على فريقنا",
    "Subscribe to Our Newsletter": "اشترك في النشرة البريدية",
    "Get the latest updates and promotions from Adidas":
      "احصل على أحدث العروض والتحديثات من أديداس",
    "Our Achievements": "إنجازاتنا",
    "What Our Customers Say": "آراء عملائنا",
    "Contact Us": "تواصل معنا",
    "We Were Born To Create": "وُلدنا لنُبدع",
    "Through sport, we have the power to change lives":
      "من خلال الرياضة، نملك القدرة على تغيير الحياة",
    "Find us on social networks:": "تابعنا على وسائل التواصل الاجتماعي:",
    Subscribe: "اشترك",
    "Products Sold": "منتج تم بيعه",
    "Years in Business": "سنة من الخبرة",
    "Stores Worldwide": "متجر حول العالم",
    "Best sportswear I've ever worn. Highly recommend!":
      "أفضل ملابس رياضية استخدمتها على الإطلاق. أنصح بها بشدة!",
    "Adidas shoes changed my life – stylish, comfortable, and durable!":
      "أحذية أديداس غيرت حياتي - أنيقة، مريحة، ومتينة!",
    Team: "الفريق",
    Newsletter: "النشرة البريدية",
    Stats: "الإحصائيات",
    Testimonials: "آراء العملاء",
    Contact: "اتصل بنا",
    Portfolio: "المعرض",
    Home: "الرئيسية",
    Email: "البريد الإلكتروني",
  };

  const elements = document.querySelectorAll("*");

  elements.forEach((el) => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      const trimmedText = el.textContent.trim();
      if (translations[trimmedText]) {
        el.textContent = translations[trimmedText];
      }
    }
  });

  // ترجمة زر الترجمة نفسه بعد الضغط
  const translateBtn = document.querySelector(".translate-btn");
  if (translateBtn) {
    translateBtn.textContent = "English";
    translateBtn.onclick = () => location.reload(); // يرجع للإنجليزي بإعادة تحميل الصفحة
  }
}
// Smooth scrolling for all anchor links with hashes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
