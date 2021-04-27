import ContactItem from "./ContactItem";
import Button from "./Button";
import Field from "./Field";

export default function Contact() {
  return (
    <section className="container mx-auto pt-10 pb-12 h-auto" id="contact">
      <div className="bg-gray-100 p-14 flex rounded-lg">
        <div className="w-6/12">
          <p className="font-semibold text-5xl text-blue-800">Geek Contact</p>
          <p>Get in touch with us</p>
          <ContactItem
            label="Mail"
            value="geek-contact@geek.sekai"
            icon="/mail.png"
            className="mt-10"
          />
          <ContactItem
            label="Phone"
            value="081234567890"
            icon="/phone.png"
            className="mt-6"
          />
          <ContactItem
            label="Twitter"
            value="@geek_solution"
            icon="/twitter.png"
            className="mt-6"
          />
        </div>
        <div className="w-6/12">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
