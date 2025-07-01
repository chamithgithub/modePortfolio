import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  // Removed unused FormData interface

  // const PORT = process.env.PORT; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface EmailJSError {
    text: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_gc9zdbh', // Replace with your EmailJS service ID
      'template_v7x8hu9', // Replace with your EmailJS template ID
      formData,
      '5XvUFEgNKOSz6Ssru' // Replace with your EmailJS user ID
    )
    .then((response: EmailJSResponse) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err: EmailJSError) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="relative overflow-hidden py-12">
      {/* Animated Mail Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="mail-animation absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-400 filter blur-xl animate-float1"></div>
        <div className="mail-animation absolute top-1/4 right-10 w-32 h-32 rounded-full bg-purple-400 filter blur-xl animate-float2"></div>
        <div className="mail-animation absolute bottom-20 left-1/3 w-48 h-48 rounded-full bg-indigo-400 filter blur-xl animate-float3"></div>
      </div>

      <div className="max-w-md mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Want to work together or just say hello? Reach out!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-gray-100 transition-all"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-gray-100 transition-all"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700/50 dark:text-gray-100 transition-all"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-center">
              Failed to send message. Please try again or email me directly at dchamith4@gmail.com
            </div>
          )}
        </form>
        
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          Or email me directly at: <br />
          <a href="mailto:dchamith4@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            dchamith4@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;