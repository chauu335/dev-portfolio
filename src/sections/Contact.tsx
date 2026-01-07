import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  // Phone,
  Send,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hoangchau2310@gmail.com",
    href: "mailto:hoangchau2310@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+1 (825) 712-7485",
  //   href: "tel:+18257127485",
  // },
  { icon: MapPin, label: "Location", value: "Edmonton, AB", href: "#" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configurations is missing. Have ya check ye environment variables??"
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! I am going to set back to you soon!",
      });
    } catch (error) {
      console.error("EmailJS error: ", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.";
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-base-content/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Have a project idea?
            <span className="italic text-accent-content"> Let's connect!</span>
          </h2>
          <p className="text-accent-content/70 animate-fade-in animation-delay-200">
            Whether you have a question, want to collaborate, or just want to
            say hi, my inbox is always open. I will try my best to get back to
            you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
          <div className="glass-custom p-8 rounded-3xl border border-base-content/30 animate-fade-in animation-delay-300">
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Tell me your name..."
                  className="input w-full rounded-xl outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="input w-full rounded-xl outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  id="message"
                  required
                  placeholder="Leave your message here..."
                  className="textarea w-full rounded-xl outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <Button
                className="w-full btn-primary"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role="alert"
                  className={`alert alert-soft ${
                    submitStatus.type === "success"
                      ? "alert-success"
                      : "alert-error"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass-custom rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-base-100/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-base-content/10 flex items-center justify-center group-hover:bg-base-content/20 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-accent-content/70">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-custom rounded-3xl p-8 border border-base-content/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-accent-content/70 text-sm">
                I am currently looking for internship and collaboration on
                exciting projects. Feel free to reach out if you have any
                opportunities or just want to connect{" "}
                <span className="font-sans">:D</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
