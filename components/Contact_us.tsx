"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const input_css =
  "mt-4 border-[1px] p-2 rounded-lg bg-transparent max-w-[560px] sm:w-[340px] w-[270px]";
const hover_Css =
  "gradient-text hover:scale-125 transition-all px-2 border-[1.2px] p-2 rounded-lg font-bold";

const YOUR_ACCESS_KEY_HERE = "e503ae55-ff00-4af2-b75c-2fee6c19f66d";

export function Contact_us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: YOUR_ACCESS_KEY_HERE,
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // console.error("Msg sent → ", result);
        toast.success("Message sent!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        console.error("Error submitting form → ", result.error);
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form → ", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  }

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flexCenter flex-col gap-5 py-6">
        <input type="hidden" name="access_key" value={YOUR_ACCESS_KEY_HERE} />
        {/* Optional: Subject an be prefilled using type="hidden" or type="text" for normal user submitted input */}
        <input
          type="hidden"
          name="Contact me Subject"
          value="Contact me Subject"
        />

        {/* Optional: From Name you want to see in the email. Default is "Notifications".  */}
        <input
          type="hidden"
          name="Msg from Portfolio"
          value="ak_next_js_portfolio"
        />

        <div>
          <label htmlFor="name" className="ml-1">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className={input_css}
          />
        </div>
        <div>
          <label htmlFor="email" className="ml-1">
            Your Email
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
            className={input_css}
          />
        </div>
        <div>
          <label htmlFor="message" className="ml-1">
            Your Message
          </label>{" "}
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Enter your Message..."
            required
            className={input_css}
          ></textarea>
        </div>
        <button type="submit" className={hover_Css}>
          Submit
        </button>
      </form>
    </>
  );
}

// export function Contact_us() {
//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         access_key: YOUR_ACCESS_KEY_HERE,
//         name: e.target.name.value,
//         email: e.target.email.value,
//         message: e.target.message.value,
//       }),
//     });
//     const result = await response.json();
//     if (result.success) {
//       toast.success("Message sent!");
//       console.log(result);
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="flexCenter flex-col gap-5 py-6">
//         <h2 className="text-xl txtOutlineCSS pb-3">Get in touch</h2>
//         <div>
//           {/* <label htmlFor="name">Name</label> */}
//           <input
//             type="text"
//             name="name"
//             required
//             placeholder="Full name"
//             className={input_css}
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="email">Email</label> */}
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="email@example.com"
//             className={input_css}
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="message">Message</label> */}
//           <textarea
//             name="message"
//             rows={3}
//             placeholder="Enter your Message..."
//             required
//             className={input_css}
//           ></textarea>
//         </div>
//         <button type="submit" className={hover_Css}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }
