import React, { useState } from 'react';
import { PaperData, PaperSummary } from '../types';
import { generatePaperSummary } from '../services/geminiService';
import { BookOpen, Loader2, ChevronDown, ChevronUp, FileText, Lightbulb, Target, Search, CheckCircle } from 'lucide-react';

interface PaperCardProps {
  paper: PaperData;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  const [summary, setSummary] = useState<PaperSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleGenerateSummary = async () => {
    if (summary) {
      setExpanded(!expanded);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await generatePaperSummary(paper.title, paper.rawText);
      setSummary(result);
      setExpanded(true);
    } catch (err) {
      setError("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wide text-blue-600 bg-blue-50 rounded-full">
              {paper.category}
            </span>
            <h3 className="text-lg font-semibold text-slate-900 leading-tight mb-2">
              {paper.title}
            </h3>
            <p className="text-slate-500 text-sm line-clamp-2">
              {summary ? summary.introduction : "Click to analyze this paper with Gemini..."}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="p-2 bg-slate-100 rounded-full text-slate-400">
              <FileText size={20} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={handleGenerateSummary}
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              summary
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow"
            }`}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Analyzing...
              </>
            ) : summary ? (
              <>
                {expanded ? "Hide Summary" : "Show Summary"}
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </>
            ) : (
              <>
                <BookOpen size={16} />
                Generate Summary
              </>
            )}
          </button>
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
      </div>

      {expanded && summary && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Authors</span>
              <div className="text-slate-700 font-medium">{summary.author}</div>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Journal</span>
              <div className="text-slate-700 font-medium">{summary.journal}</div>
            </div>
             <div className="col-span-1 md:col-span-2">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Keywords</span>
              <div className="flex flex-wrap gap-2">
                {summary.keywords.map((k, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-600 text-xs">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                <Search size={18} />
                <h4>Problem & Conclusion</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{summary.problem_conclusion}</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-2">
                <Lightbulb size={18} />
                <h4>New Findings</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{summary.new_findings}</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 font-semibold mb-2">
                <Target size={18} />
                <h4>Value & Implications (for 120 Emergency)</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{summary.value_implications}</p>
            </div>
          </div>
          
          <div className="pt-2 text-xs text-slate-400 font-mono">
            DOI: {summary.doi}
          </div>
        </div>
      )}
    </div>
  );
};