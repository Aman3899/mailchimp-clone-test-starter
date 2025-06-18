"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Zap, Mail, Palette, Tag, FileText, Sparkles } from "lucide-react";

export default function Home() {
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const setupTasks = [
    {
      title: "Add your contacts",
      description: "Upload your list of subscribers or import them from another app.",
      icon: Users,
      time: "4 min",
      color: "blue"
    },
    {
      title: "Connect an integration", 
      description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
      icon: Zap,
      time: "2 min",
      color: "purple"
    },
    {
      title: "Import your brand",
      description: "We'll create email templates with your fonts, logos, colors and more.",
      icon: Palette,
      time: "2 seconds",
      color: "green"
    }
  ];

  const templates = [
    {
      title: "Custom email designs",
      type: "Made for you",
      category: "Email",
      image: "/api/placeholder/300/400",
      gradient: "from-blue-500 to-purple-600",
      special: true
    },
    {
      title: "Real estate invite",
      type: "Email",
      category: "Email", 
      image: "/api/placeholder/300/400",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Welcome new contacts",
      type: "Automation",
      category: "Automation",
      image: "/api/placeholder/300/400", 
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Bold",
      type: "Email",
      category: "Email",
      image: "/api/placeholder/300/400",
      gradient: "from-orange-500 to-red-600",
      free: true
    },
    {
      title: "Start from scratch",
      type: "Email", 
      category: "Email",
      image: "/api/placeholder/300/400",
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  const popupForms = [
    {
      title: "Discount popup",
      description: "Offer a discount to new subscribers",
      action: "See discount templates",
      icon: Tag,
      image: "/api/placeholder/300/200",
      gradient: "from-orange-400 to-pink-500"
    },
    {
      title: "Newsletter popup", 
      description: "Stay in the know",
      action: "See newsletter templates",
      icon: Mail,
      image: "/api/placeholder/300/200",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "Free content popup",
      description: "Download an e-book or guide", 
      action: "See free content templates",
      icon: FileText,
      image: "/api/placeholder/300/200",
      gradient: "from-green-400 to-teal-600"
    }
  ];

  const nextTemplate = () => {
    setCurrentTemplateIndex((prev) => (prev + 1) % Math.ceil(templates.length / getVisibleTemplates()));
  };

  const prevTemplate = () => {
    setCurrentTemplateIndex((prev) => (prev - 1 + Math.ceil(templates.length / getVisibleTemplates())) % Math.ceil(templates.length / getVisibleTemplates()));
  };

  const nextPopup = () => {
    setCurrentPopupIndex((prev) => (prev + 1) % popupForms.length);
  };

  const prevPopup = () => {
    setCurrentPopupIndex((prev) => (prev - 1 + popupForms.length) % popupForms.length);
  };

  const getVisibleTemplates = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Home
          </h1>
          <div className="flex items-center gap-3">
            <button className="group relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <span className="relative z-10">Quick actions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 transform">
              <span className="relative z-10">Create email</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8 md:space-y-12">
        {/* Welcome Section */}
        <div className="text-center space-y-4 py-8 md:py-12">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-pulse">
            Welcome, Amanullah! Let's dive in.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Setup Progress */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-1/3 space-y-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Finish setting up your account</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">0%</span>
                  <span className="text-gray-500 dark:text-gray-500">0 of 4 tasks completed</span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-4 md:gap-6">
              {setupTasks.map((task, index) => (
                <div key={index} className={`group relative bg-gradient-to-br ${task.color === 'blue' ? 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' : task.color === 'purple' ? 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' : 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'} rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/50 dark:border-gray-700/50`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-full bg-gradient-to-r ${task.color === 'blue' ? 'from-blue-500 to-blue-600' : task.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-green-500 to-green-600'} shadow-lg`}>
                      <task.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full">
                      {task.time}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {task.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Top templates for Amanullah</h2>
            <button className="group flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors duration-300">
              View all email templates 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                style={{ transform: `translateX(-${currentTemplateIndex * (100 / Math.ceil(templates.length / getVisibleTemplates()))}%)` }}
              >
                {templates.map((template, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                      <div className={`relative h-48 md:h-56 bg-gradient-to-br ${template.gradient} overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        {template.free && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                            FREE
                          </div>
                        )}
                        {template.special && (
                          <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-1 rounded-full shadow-lg">
                            <Sparkles className="h-3 w-3" />
                            Made for you
                          </div>
                        )}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent"></div>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {template.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          {template.category === "Email" ? <Mail className="h-3 w-3" /> : template.category === "Automation" ? <Zap className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                          {template.category}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button 
                onClick={prevTemplate}
                className="group p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
              </button>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
                <span>{currentTemplateIndex + 1}</span>
                <span>of</span>
                <span>{Math.ceil(templates.length / getVisibleTemplates())}</span>
              </div>
              <button 
                onClick={nextTemplate}
                className="group p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Popup Forms Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                Grow your audience with custom popup forms
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Beta
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Popups with incentives convert best. Choose the incentive you want to offer people who sign up through your form.
              </p>
            </div>
            <button className="group flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors duration-300">
              View all popup forms
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {popupForms.map((popup, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                <div className={`relative h-40 bg-gradient-to-br ${popup.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <popup.icon className="h-12 w-12 text-white/80 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform" />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {popup.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {popup.description}
                    </p>
                  </div>
                  <button className="group/btn text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium transition-colors duration-300 flex items-center gap-1">
                    {popup.action}
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Section - Start from Scratch */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Start from scratch</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Create your own unique design with our drag-and-drop email builder
            </p>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform">
              <span className="relative z-10">Get started</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}