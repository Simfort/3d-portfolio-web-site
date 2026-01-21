"use server";
import nodemailer from "nodemailer";

export default async function contactAction(formData: FormData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "simfart2010@yandex.ru",
      pass: process.env.YANDEX_APP_PASSWORD,
    },
  });
  transporter.on("error", (err) => {
    console.error(err);
    throw new Error(err.message);
  });

  try {
    const data = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      desc: formData.get("desc") as string,
    };
    const info = await transporter.sendMail({
      from: "simfart2010@yandex.ru",
      to: "simfart2010@yandex.ru",
      subject: `3D Portfolio Site Message ${data.name} ${data.email}`,
      text: data.desc,
    });
    console.log(info.messageId);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
}
