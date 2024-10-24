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
      <h1 className="mb-2 text-2xl dark:text-zinc-100">Contact</h1>
      <h2 className="mb-2 text-lg text-zinc-500 dark:text-zinc-200">
        Let&apos;s talk about working together{" "}
      </h2>
      <p className="text-zinc-500 dark:text-zinc-200 text-[15px] flex items-center">
        <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full animate-ping-slow"></span>
        Available for new opportunities
      </p>
      <div className="grid grid-cols-2 gap-2 my-4 text-zinc-600">
        <a
          href={"tel:+2347048078103"}
          className="p-4 transition-all border rounded-lg border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200"
        >
          Call me <i className="ml-2 fa-solid fa-phone-flip"></i>
        </a>
        <a
          className="p-4 transition-all border rounded-lg border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200"
          href="mailto:officialgreatochuko@gmail.com"
          rel="noopener noreferrer"
        >
          Email Me<i className="ml-2 fa-regular fa-envelope"></i>
        </a>
        <a
          className="p-4 transition-all border rounded-lg border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200"
          href="https://twitter.com/officialochuko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dm me<i className="ml-2 fa-brands fa-x-twitter"></i>
        </a>

        <a
          className="p-4 transition-all border rounded-lg border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-200"
          href="https://linkedin.com/in/greatochuko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect<i className="ml-2 fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <p className="mb-4 text-center text-zinc-400">or</p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-2 gap-y-[2vh] gap-x-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="p-4 rounded-md bg-zinc-100 dark:bg-zinc-800 dark:placeholder:text-zinc-400 dark:text-zinc-200 dark:focus:outline-zinc-800 focus:outline-zinc-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="p-4 rounded-md bg-zinc-100 dark:bg-zinc-800 dark:placeholder:text-zinc-400 dark:text-zinc-200 dark:focus:outline-zinc-800 focus:outline-zinc-200"
        />
        <textarea
          className="col-span-2 p-3 h-[20vh] bg-zinc-100 dark:bg-zinc-800 dark:placeholder:text-zinc-400 dark:text-zinc-200 dark:focus:outline-zinc-800 rounded-md resize-none focus:outline-zinc-200"
          name="message"
          id="message"
          cols="20"
          rows="10"
        ></textarea>
        <input
          className="col-span-2 p-4 font-semibold text-white rounded-md cursor-pointer bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-white dark:text-zinc-900 mt disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          value={loading ? "Sending" : "Send"}
          disabled={loading}
        />
      </form>
    </main>
  );
}
