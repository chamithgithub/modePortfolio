// tailwind.config.js
module.exports = {
   theme: {
     extend: {
       animation: {
         float: 'float 6s ease-in-out infinite',
         marquee: 'marquee 20s linear infinite',
       },
       keyframes: {
         float: {
           '0%, 100%': { transform: 'translateY(0)' },
           '50%': { transform: 'translateY(-20px)' },
         },
         marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
       },
     },
   },
 };