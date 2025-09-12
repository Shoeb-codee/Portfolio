import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef();
  const [emailError, setEmailError] = useState("");

  // GSAP scroll-trigger animation
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!regex.test(email)) {
      setEmailError("⚠️ Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  // Send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (emailError) {
      toast.error("Please fix the errors before sending.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong ❌");
        }
      );
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: form.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(form.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        "input, textarea",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        "button",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.4,
        },
        "-=0.2"
      );
  });

  return (
    <div
      id="Contacts"
      ref={sectionRef}
      className="scroll-mt-24 bg-slate-800 p-8 rounded-2xl max-w-lg mx-auto my-16 shadow-xl"
    >
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Contact Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 rounded-lg border-none bg-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 rounded-lg border-none bg-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          required
          onChange={(e) => validateEmail(e.target.value)}
        />
        {emailError && (
          <span className="text-red-400 text-sm">{emailError}</span>
        )}
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-lg border-none bg-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="text-white text-sm md:text-base font-semibold rounded-full py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 active:scale-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
