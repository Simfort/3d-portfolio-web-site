export default function ContactForm() {
  return (
    <form
      action=""
      className="col-start-2 col-span-2 min-h-[600px] flex flex-col gap-5 p-5 bg-primary rounded-xl">
      <h2 className="text-4xl">Contact Us</h2>
      <label htmlFor="name" className="flex flex-col gap-2">
        <h3>Your name</h3>
        <input
          placeholder="What`s your name"
          className="bg-green-950 w-full invalid:border-red-700 border-2 border-green-800 rounded-xl pl-5 py-2 outline-0 shadow"
          type="text"
          name="name"
          required
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-2">
        <h3>Your email</h3>
        <input
          placeholder="What`s your email"
          className="bg-green-950 w-full invalid:border-red-700 border-2 border-green-800 rounded-xl p-2 outline-0 shadow"
          type="email"
          name="email"
          required
        />
      </label>
      <label htmlFor="desc" className="flex flex-col gap-2">
        <h3>Your message</h3>
        <textarea
          placeholder="What do you want say email"
          className="bg-green-950 h-[150px] border-green-800 invalid:border-red-700 border-2 w-full rounded-xl p-2 outline-0 shadow"
          name="desc"
          required
        />
      </label>
      <button className="mt-[50px] hover:opacity-55 active:opacity-35 bg-green-800 rounded-xl p-3 w-[100px]">
        Send
      </button>
    </form>
  );
}
