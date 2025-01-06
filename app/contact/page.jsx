"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const WorkTogetherAnimation = dynamic(
  () => import("@/components/animations/WorkTogetherAnimation"),
  { ssr: false }
);
const QrContact = dynamic(() => import("@/components/QrContact"), { ssr: false });

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+90) 507 442 14 68",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ilkcan.irturk@outlook.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Turkey",
  },
];

const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{1,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxLengths = {
      firstname: 50,
      lastname: 50,
      message: 500,
      phone: 15,
      email: 100,
    };

    if (maxLengths[name] && value.length > maxLengths[name]) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";
    switch (name) {
      case "firstname":
      case "lastname":
        if (value.length < 2) {
          error = "Minimum 2 characters required";
        } else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/.test(value)) {
          error = "Only letters allowed";
        }
        break;
      case "email":
        if (!isValidEmail(value)) {
          error = "Invalid email format";
        }
        break;
      case "phone":
        if (!isValidPhone(value)) {
          error = "Invalid phone format (e.g., 90XXXXXXXXXX)";
        }
        break;
      case "message":
        if (value.length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname || formData.firstname.length < 2) {
      newErrors.firstname = "First name is required (min 2 characters)";
    }
    if (!formData.lastname || formData.lastname.length < 2) {
      newErrors.lastname = "Last name is required (min 2 characters)";
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Valid phone number is required";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message is required (min 10 characters)";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowErrors(true);
      toast.error("Please fix the errors in the form!");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: "İlkcan",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setShowErrors(false);
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[74%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4 justify-between">
                <h3 className="text-4xl text-accent">Let's work together!</h3>
                <WorkTogetherAnimation />
              </div>
              <p className="text-white/60">
                Looking forward to working together! Share your ideas or
                questions below, and I'll get back to you soon.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Firstname"
                    required
                    maxLength={50}
                    className="w-full h-12"
                  />
                  {showErrors && errors.firstname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Lastname"
                    required
                    maxLength={50}
                    className="w-full h-12"
                  />
                  {showErrors && errors.lastname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    required
                    maxLength={100}
                    className="w-full h-12"
                  />
                  {showErrors && errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone number"
                    required
                    maxLength={15}
                    className="w-full h-12"
                  />
                  {showErrors && errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              {/* select */}
              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder="Type your message here."
                  required
                  maxLength={750}
                />
                <div className="flex justify-between items-center text-xs mt-1">
                  {showErrors && errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                  <p className="text-gray-400 ml-auto text-lg">
                    {formData.message.length}
                    <span className="text-lg text-accent">/</span>750
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 order-2 xl:order-none">
            <div className="flex flex-col gap-8">
              <QrContact />
              <ul className="flex flex-col gap-6">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-[10px] flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg hover:text-accent">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;