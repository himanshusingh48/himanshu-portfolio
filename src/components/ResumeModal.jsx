import React from 'react'
import { X, Download, FileText } from 'lucide-react'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-800/50">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            My Resume
          </h2>
          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="Himanshu_Resume.pdf"
              className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content (PDF Viewer) */}
        <div className="flex-1 overflow-hidden bg-slate-100 min-h-[50vh]">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full text-slate-500 space-y-4 p-8 text-center bg-slate-900">
              <FileText className="w-16 h-16 text-slate-600" />
              <p>It seems the PDF cannot be displayed in your browser.</p>
              <p className="text-sm text-slate-400">Please place your actual resume named <strong className="text-sky-400">resume.pdf</strong> inside the <strong className="text-sky-400">public</strong> folder.</p>
              <a
                href="/resume.pdf"
                download="Himanshu_Resume.pdf"
                className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors mt-4 inline-block"
              >
                Download PDF Instead
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
