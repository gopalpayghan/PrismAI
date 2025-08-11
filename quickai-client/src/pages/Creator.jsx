import React from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
  Code,
  Heart,
} from "lucide-react";

const Creator = () => {
  return (
    <div className="min-h-screen bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-20 xl:px-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8 flex justify-center">
              {/* Floating Creator Image */}
              <div className="relative animate-float">
                <img
                  src={assets.creator}
                  alt="Creator"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-8 border-white/40 backdrop-blur-sm"
                />
                {/* Floating Border Effect */}
                <div className="absolute inset-0 border-4 border-primary/50 rounded-full"></div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Meet the <span className="text-primary">Creator</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate developer and AI enthusiast behind PrismAI.
              Transforming ideas into reality through innovative technology and
              creative solutions.
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Heart className="text-primary" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hello! I'm the creator of PrismAI, a platform designed to
                  harness the power of artificial intelligence for content
                  creation. With a passion for technology and innovation, I've
                  dedicated myself to building tools that make AI accessible to
                  everyone.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey in technology spans several years, focusing on web
                  development, AI integration, and user experience design. I
                  believe in creating solutions that not only solve problems but
                  also inspire creativity.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Building since 2020</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Code className="w-5 h-5 text-primary" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              PrismAI Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  AI-Powered Content
                </h3>
                <p className="text-gray-600">
                  Generate high-quality articles, blog titles, and creative
                  content using advanced AI models.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Image Generation
                </h3>
                <p className="text-gray-600">
                  Create stunning visuals and artwork with our AI image
                  generation capabilities.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Background Removal
                </h3>
                <p className="text-gray-600">
                  Professional image editing tools powered by machine learning
                  algorithms.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Resume Analysis
                </h3>
                <p className="text-gray-600">
                  Get detailed feedback and suggestions to improve your resume
                  with AI insights.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers,
              entrepreneurs, and AI enthusiasts. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:gopalpralhadpayghan@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/gopalpayghan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gopalpayghan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Creator;
