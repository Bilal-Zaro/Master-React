import React, { useState } from 'react';
import { Search, Book, Moon, BookOpen, Play, Heart, Users, User, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('quran');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Journey With The Holy Quran</h1>
            <p className="text-xl mb-8 opacity-90">Read, listen, and learn with our comprehensive Quran resources</p>
            
            <div className="bg-white rounded-full p-2 flex items-center max-w-xl mx-auto shadow-lg">
              <input 
                type="text" 
                placeholder="Search surah, ayah, or translation..." 
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-3">
                <Search size={20} />
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg flex items-center gap-2">
                <Book size={20} />
                <span>Start Reading</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg flex items-center gap-2">
                <Play size={20} />
                <span>Listen to Recitation</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0yNCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAgLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0wIDI0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6Ii8+PC9nPjwvc3ZnPg==')] opacity-10 bg-repeat z-0"></div>
      </section>
      
      {/* Navigation Tabs */}
      <section className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto">
            {['quran', 'recitation', 'tafsir', 'memorization', 'prayer', 'community'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Surahs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Surahs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', verses: 7, type: 'Meccan' },
              { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', verses: 286, type: 'Medinan' },
              { id: 36, name: 'Ya-Sin', arabicName: 'يس', verses: 83, type: 'Meccan' },
              { id: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', verses: 78, type: 'Medinan' },
              { id: 67, name: 'Al-Mulk', arabicName: 'الملك', verses: 30, type: 'Meccan' },
              { id: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', verses: 4, type: 'Meccan' }
            ].map((surah) => (
              <div 
                key={surah.id} 
                className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{surah.name}</h3>
                    <p className="text-gray-600">{surah.type} · {surah.verses} verses</p>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                    {surah.id}
                  </div>
                </div>
                <p className="text-3xl text-right mb-4 font-arabic text-emerald-800">{surah.arabicName}</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 font-medium">
                    <span>Read</span>
                    <ArrowRight size={16} />
                  </button>
                  <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-emerald-600 p-2">
                      <Play size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-emerald-600 p-2">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-6 py-3 rounded-lg font-medium">
              View All 114 Surahs
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Explore Our Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Enhance your Quranic journey with tools designed to help you read, understand, and implement the teachings of the Holy Quran</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <BookOpen size={28} />, 
                title: 'Multiple Translations', 
                description: 'Access over 50 translations in 25 languages to understand the Quran in your preferred language.' 
              },
              { 
                icon: <Play size={28} />, 
                title: 'Audio Recitations', 
                description: 'Listen to beautiful recitations from renowned Qaris with adjustable speed and repeating options.' 
              },
              { 
                icon: <Book size={28} />, 
                title: 'Tafsir & Commentary', 
                description: 'Dive deep into the meaning of verses with scholarly explanations and historical context.' 
              },
              { 
                icon: <Calendar size={28} />, 
                title: 'Daily Reading Plan', 
                description: 'Develop a consistent habit with personalized reading plans tailored to your schedule.' 
              },
              { 
                icon: <Moon size={28} />, 
                title: 'Prayer Times', 
                description: 'Never miss a prayer with accurate prayer times based on your location and preferred calculation method.' 
              },
              { 
                icon: <Users size={28} />, 
                title: 'Study Circles', 
                description: 'Join virtual study groups to learn collaboratively and discuss Quranic teachings with others.' 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-emerald-600 mb-4 bg-emerald-50 p-3 inline-block rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Daily Verse */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-emerald-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-xl font-medium mb-2">Verse of the Day</h3>
                <h4 className="text-3xl font-bold mb-6">Surah Al-Baqarah 2:286</h4>
                <p className="text-emerald-100">Updated daily to provide inspiration and guidance for your journey.</p>
                <button className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg font-medium inline-flex items-center gap-2 self-start">
                  <Play size={16} />
                  <span>Listen</span>
                </button>
              </div>
              <div className="md:w-3/5 p-8">
                <p className="text-3xl text-right mb-6 font-arabic text-gray-800">لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ</p>
                <p className="text-gray-700 mb-6">"Allah does not burden a soul beyond that it can bear. It gets every good that it earns, and it suffers every ill that it earns."</p>
                <div className="flex justify-between items-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                    <span>Read Full Context</span>
                    <ArrowRight size={16} />
                  </button>
                  <button className="text-gray-500 hover:text-emerald-600">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Learning Resources</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Enhance your understanding with our carefully curated educational content</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beginner\'s Guide to Tajweed',
                image: '/api/placeholder/400/250',
                category: 'Recitation',
                duration: '12 lessons'
              },
              {
                title: 'Understanding Quranic Arabic',
                image: '/api/placeholder/400/250',
                category: 'Language',
                duration: '24 lessons'
              },
              {
                title: 'Stories of the Prophets',
                image: '/api/placeholder/400/250',
                category: 'History',
                duration: '18 lessons'
              }
            ].map((resource, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">{resource.category}</span>
                    <span className="text-gray-500 text-sm">{resource.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                    <span>Start Learning</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium">
              Browse All Resources
            </button>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Growing Community</h2>
              <p className="text-gray-600 mb-6">Connect with fellow learners from around the world, participate in interactive discussions, and enhance your spiritual journey together.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { count: '2M+', label: 'Active Users' },
                  { count: '120+', label: 'Countries' },
                  { count: '50K+', label: 'Study Groups' },
                  { count: '1M+', label: 'App Downloads' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600">{stat.count}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                <User size={18} />
                <span>Create Free Account</span>
              </button>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="Community studying Quran together" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">What Our Users Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Hear from people whose lives have been transformed through their Quranic journey</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ahmed M.',
                location: 'Egypt',
                text: 'This platform has transformed my relationship with the Quran. The translations and tafsir have helped me understand verses I\'ve recited for years but never fully comprehended.'
              },
              {
                name: 'Sarah K.',
                location: 'United States',
                text: 'As a revert to Islam, this website has been invaluable. The step-by-step memorization tools and pronunciation guides have given me confidence in my recitation.'
              },
              {
                name: 'Yusuf R.',
                location: 'Malaysia',
                text: 'The study circles feature connected me with other learners worldwide. We meet weekly to discuss verses, and it\'s enhanced my understanding immensely.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-700">"{testimonial.text}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Download */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Take the Quran With You Everywhere</h2>
              <p className="mb-6 text-emerald-100">Download our mobile app to access all features offline. Continue your reading, listening, and learning journey wherever you go.</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-black hover:bg-gray-900 py-3 px-6 rounded-lg flex items-center gap-3">
                  <div className="text-3xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 11h18"/><path d="M18 16.5V18"/><path d="M18 22v-1.5"/><path d="M22 18h-1.5"/><path d="M16.5 18H15"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-medium">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black hover:bg-gray-900 py-3 px-6 rounded-lg flex items-center gap-3">
                  <div className="text-3xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 3 14 9-14 9V3Z"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-medium">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/api/placeholder/300/600" 
                alt="Mobile app showcase" 
                className="max-h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Receive weekly Quranic reflections, learning resources, and community updates</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
      )}
      export default Home;