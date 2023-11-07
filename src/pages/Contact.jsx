import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_c7zszyp",
        "template_a2m94gf",
        form.current,
        "xI59AIFZh8TlGx7Vp"
      );
    } catch (err) {
      console.log(err.text);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className=" p-[4vw] max-w-2xl mx-auto ">
      <h1 className="text-2xl mb-2">Contact</h1>
      <h2 className="text-lg text-zinc-500 mb-2">
        Let&apos;s talk about working together{" "}
      </h2>
      <p className="text-zinc-500 text-[15px] flex items-center">
        <span className="h-2 w-2 bg-green-500 inline-block mr-1 rounded-full animate-ping-slow"></span>
        Available for new opportunities
      </p>
      <div className="grid grid-cols-2 gap-2 my-4 text-zinc-600">
        <a
          href={"tel:+2347048078103"}
          className="border border-zinc-200 p-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200 transition-all"
        >
          Call me <i className="fa-solid fa-phone-flip ml-2"></i>
        </a>
        <a
          className="border border-zinc-200 p-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200 transition-all"
          href="mailto:greatochuko123@gmail.com"
          rel="noopener noreferrer"
        >
          Email Me<i className="fa-regular fa-envelope  ml-2"></i>
        </a>
        <a
          className="border border-zinc-200 p-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200 transition-all"
          href="https://twitter.com/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dm me<i className="fa-brands fa-x-twitter ml-2"></i>
        </a>

        <a
          className="border border-zinc-200 p-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200 transition-all"
          href="https://linkedin.com/in/greatochuko123"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect<i className="fa-brands fa-linkedin-in ml-2"></i>
        </a>
      </div>
      <p className="text-center text-zinc-400">or</p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-2 gap-y-[2vh] gap-x-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="p-4 bg-zinc-100 rounded-md focus:outline-zinc-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="p-4 bg-zinc-100 rounded-md focus:outline-zinc-200"
        />
        <textarea
          className="col-span-2 p-3 h-[20vh] bg-zinc-100 rounded-md resize-none focus:outline-zinc-200"
          name="message"
          id="message"
          cols="20"
          rows="10"
        ></textarea>
        <input
          className="p-4 cursor-pointer text-white col-span-2 rounded-md bg-zinc-800 mt disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          value={loading ? "Sending" : "Send"}
          disabled={loading}
        />
      </form>
    </main>
  );
}
