// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// আপনার Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBRvOaUtrvKHIxODSHN-CJmLX7xlWO68-g",
  authDomain: "push-notification-73abd.firebaseapp.com",
  projectId: "push-notification-73abd",
  storageBucket: "push-notification-73abd.firebasestorage.app",
  messagingSenderId: "318439787239",
  appId: "1:318439787239:web:e9447a301cfbabd081b042"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ডে বা ট্যাব বন্ধ থাকলেও নোটিফিকেশন রিসিভ ও শো করার হ্যান্ডলার
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const title = (payload.data && payload.data.title) || 'নতুন নোটিফিকেশন';
  const options = {
    body: (payload.data && payload.data.body) || '',
    icon: payload.data && payload.data.imageUrl ? payload.data.imageUrl : undefined,
    data: payload.data
  };

  self.registration.showNotification(title, options);
});
