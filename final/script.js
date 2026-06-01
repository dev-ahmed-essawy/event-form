document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector(".btn-text");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        
        // تأثير حركي عند التقديم
        submitBtn.classList.add("loading");
        btnText.textContent = "Processing...";

        // محاكاة إرسال البيانات (يمكن ربطها لاحقاً بالخادم)
        setTimeout(() => {
            submitBtn.classList.remove("loading");
            submitBtn.style.backgroundColor = "#10B981"; // لون أخضر للنجاح
            btnText.textContent = "Registration Successful! ✓";
            
            // إعادة ضبط النموذج بعد 3 ثوانٍ
            setTimeout(() => {
                form.reset();
                submitBtn.style.backgroundColor = "";
                btnText.textContent = "Secure My Pass Now";
            }, 3000);
            
        }, 1500);
    });
});
