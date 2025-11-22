import React, { useState, useMemo } from 'react';
import { PAPERS } from './constants';
import { Category } from './types';
import { PaperCard } from './components/PaperCard';
import { Phone, Filter, Layers } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredPapers = useMemo(() => {
    if (selectedCategory === 'All') return PAPERS;
    return PAPERS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const categories = Object.values(Category);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Phone size={20} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Call Center <span className="text-blue-600">Literature</span>
            </h1>
          </div>
          <div className="text-sm text-slate-500 font-medium hidden sm:block">
            120 Emergency Optimization Project
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction / Context */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Library</h2>
          <p className="text-slate-600 max-w-3xl text-lg leading-relaxed">
            This curated collection of academic literature supports the optimization of the 120 emergency call center. 
            Use the AI-powered analysis tools to generate concise summaries, key findings, and practical implications for each paper.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 border-r border-slate-200 mr-2">
              <Filter size={16} />
              <span>Filter:</span>
            </div>
            <button
              onClick={() => setSelectedCategory('All')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Papers
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Paper List */}
        <div className="grid gap-6">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
              <Layers size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">No papers found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
          Powered by Google Gemini • SUSTech 120 Project
        </div>
      </footer>
    </div>
  );
}

export default App;