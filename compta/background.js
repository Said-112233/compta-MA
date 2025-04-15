// background.js

// الاستماع إلى حدث النقر على أيقونة الإضافة في شريط الأدوات
chrome.action.onClicked.addListener((tab) => {
    // عند النقر، قم بإنشاء تبويب جديد
    chrome.tabs.create({
      // استخدم chrome.runtime.getURL للحصول على المسار الصحيح لملف index.html داخل الإضافة
      url: chrome.runtime.getURL("index.html")
    });
  });