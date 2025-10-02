import { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (event) => {
    event.preventDefault()
    try {
      setResult("Sending...")
      setIsLoading(true)
      const formData = new FormData(event.target);
      formData.append("access_key", "f8944466-2d14-435f-ba45-10f4e037e45a");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong.")
      console.log('error :>> ', error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <p className="text-cyan">{result}</p>
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
