import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";

const contactFormSchema = insertContactMessageSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
      console.error("Contact form error:", error);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently looking for internship opportunities and open to discussing new projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Your City, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="Let's work together"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:transform-none disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
