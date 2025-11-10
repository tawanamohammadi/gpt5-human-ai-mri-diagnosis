import React from 'react';

// SVG Icons for the UI
const UpvoteIcon = () => (
  <svg className="w-6 h-6 hover:text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4 4 12h5v8h6v-8h5L12 4z"/></svg>
);
const DownvoteIcon = () => (
  <svg className="w-6 h-6 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="m12 20 8-8h-5V4h-6v8H4l8 8z"/></svg>
);
const CommentIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
);
const ShareIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="m18 16.08-5.41-3.51c.14-.23.21-.49.21-.77s-.07-.54-.21-.77L18 7.5V5h-5v2.92L7.59 5.41 6 6.5l5.41 3.51c-.14.23-.21.49-.21.77s.07.54.21.77L6 17.5l1.59 1.09L13 16.08V19h5v-2.92z"/></svg>
);
const OrcidIcon = () => (
  <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="#A6CE39"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.384h2.953v10.83H7.369V4.384zm1.477 12.338c-.813 0-1.47-.655-1.47-1.47s.656-1.47 1.47-1.47 1.47.656 1.47 1.47-.656 1.47-1.47 1.47zm3.568-1.528h-1.58V8.92h1.58c1.996 0 2.853 1.27 2.853 3.034 0 1.764-.857 3.034-2.853 3.034z"/></svg>
);
const ScholarIcon = () => (
    <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 512 512" fill="#4285F4"><path d="M256 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 416-208 416z"/><path fill="#FFF" d="m156.3 211.5 99.7-49.8 99.7 49.8-99.7 49.8-99.7-49.8zm199.3 25.5L256 286.8l-99.7-49.8v69.8l99.7 49.8 99.7-49.8v-69.8z"/></svg>
);
const GitHubIcon = () => (
    <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 16 16" fill="#FFFFFF"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
);
const MediumIcon = () => (
    <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M7.42 15.66c.21 0 .42-.05.62-.16l3.41-1.84c.2-.11.31-.32.31-.54V8.31c0-.22-.11-.43-.31-.54l-4.87-2.64c-.4-.22-.89-.04-1.1.36-.22.4-.04.89.36 1.1l3.75 2.03v3.91l-3.2 1.73c-.4.22-.58.71-.36 1.1.22.41.72.59 1.11.37zm7.47-5.32c.21 0 .42-.05.62-.16l3.66-2.02c.4-.22.58-.71.36-1.1s-.71-.58-1.1-.36l-3.66 2.02c-.4.22-.58.71-.36 1.1.21.4.7.58 1.1.36zm-.12 2.12c.22 0 .43-.05.63-.16l2.36-1.3c.4-.22.58-.71.36-1.1s-.71-.58-1.1-.36l-2.36 1.3c-.4.22-.58.71-.36 1.1.22.4.7.56 1.1.36z"/></svg>
);
const LinkIcon = () => (
    <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
);


const Header = () => (
    <header className="bg-[#1A1A1B] border-b border-[#343536] p-2 flex items-center sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex items-center w-full">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF4500"/>
                <path d="M10 15.5c-1.6 0-3.1-1.1-3.6-2.6H13.6c-.5 1.5-2 2.6-3.6 2.6zm3.3-4.1c-.5-.4-1.2-.6-1.9-.6s-1.4.2-1.9.6c-.7.5-1.1 1.3-1.1 2.2h5.9c0-.9-.5-1.7-1-2.2zm-6.8-4c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8z" fill="#FFF"/>
                <ellipse cx="14.6" cy="7.4" rx="1.1" ry="1.8" fill="#FFF"/>
            </svg>
            <span className="text-white font-bold text-lg hidden sm:block">reddit</span>
            <div className="flex-grow mx-4">
                <input type="text" placeholder="Search Reddit" className="bg-[#272729] border border-[#343536] rounded-md px-4 py-1.5 w-full text-sm focus:outline-none focus:border-white" />
            </div>
            <img src="https://styles.redditmedia.com/t5_fsol1i/styles/profileIcon_v2qeva7zloyf1.jpg?s=eb8f8e3de578d7e4832cdd639d863335a0333578" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
    </header>
);

const PostContent = () => {
    const sectionTitleStyle = "text-xl font-bold mt-6 mb-3 text-cyan-400 flex items-center";
    const listItemStyle = "list-disc ml-6 mb-1";
    const codeStyle = "font-mono bg-[#272729] px-2 py-1 rounded text-sm text-gray-300 mr-1 mb-1 inline-block";
    const linkStyle = "text-cyan-400 hover:underline";

    return (
        <div>
            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">🔹</span> Project Overview
            </h2>
            <p><strong>Title:</strong> ChatGPT-5 in Lumbar MRI Interpretation: A Multidisciplinary Case Study</p>
            <p><strong>Author:</strong> Tawana Mohammadi</p>
            <p><strong>Affiliation:</strong> Tawana Network – Ethical AI & Data Transparency Research Hub</p>
            <p className="mt-3">
                After publishing the preprint on Zenodo (currently under account review 🕐), I ran an AI-based peer
                review through <strong className="text-white">Gemini 2.5</strong> and <strong className="text-white">GPT-5</strong>, both evaluating it as if for Q1 journals like <i className="text-gray-300">Nature Scientific
                Reports</i> and <i className="text-gray-300">IEEE Transactions on Medical Imaging</i>.
            </p>

            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">🧠</span> Feedback Summary
            </h2>
            <p>Both reviews praised:</p>
            <ul>
                <li className={listItemStyle}>Novelty and ethical clarity</li>
                <li className={listItemStyle}>Transparent methodology (Human-AI Synergy Model)</li>
                <li className={listItemStyle}>Professional academic writing</li>
            </ul>
            <p className="mt-2">But they also emphasized:</p>
             <ul>
                <li className={listItemStyle}>Sample size = 1, no statistical validation</li>
                <li className={listItemStyle}>Need for quantitative metrics</li>
                <li className={listItemStyle}>Requirement for an Ethics/IRB statement</li>
                <li className={listItemStyle}>More formal tables & comparative visuals</li>
            </ul>
            <p className="mt-3 bg-[#272729] border-l-4 border-cyan-400 p-3 rounded-r-md">
                Both concluded <strong>Major Revision</strong>, not rejection. That’s actually encouraging — it means the work has potential once reinforced scientifically.
            </p>

            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">🔬</span> Action Plan (Major Revision)
            </h2>
             <ul>
                <li className={listItemStyle}>Expand dataset (10–20 lumbar MRI cases)</li>
                <li className={listItemStyle}>Add quantitative evaluation (sensitivity, specificity, κ-value)</li>
                <li className={listItemStyle}>Add visual comparison (Radiologist vs ChatGPT-5 vs GPT-4 Vision)</li>
                <li className={listItemStyle}>Insert formal Ethics Statement + IRB ID</li>
                <li className={listItemStyle}>Update abstract to reflect “single-case limitation”</li>
                <li className={listItemStyle}>Prepare Rebuttal Letter for resubmission</li>
            </ul>

            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">🎯</span> Goal & Timeline
            </h2>
            <p><strong>Target journals:</strong> <i>Scientific Reports, AI in Medicine, Diagnostics</i></p>
            <p><strong>Expected window:</strong> Q1 2026</p>
            <p><strong>End goal:</strong> Demonstrate a reproducible Human-AI diagnostic workflow under ethical AI frameworks.</p>

            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">🪶</span> Personal Note
            </h2>
            <p>
                This stage taught me how AI feedback can mirror real peer review — rigorous, structured, and even philosophical at times. I see this as part of a bigger vision: promoting transparent, ethical, and human-centered AI research from independent labs like mine.
            </p>
            <p className="text-sm text-gray-400 mt-6">(© 2025 Tawana Mohammadi – All Rights Reserved)</p>

            <hr className="border-t border-[#343536] my-6" />

            <h2 className={sectionTitleStyle}>
                <span className="text-2xl mr-2">👤</span> About the Author
            </h2>
            <p>
                <strong>Tawana Mohammadi (توانا محمدی)</strong> is an independent AI researcher, educator, and data strategist working at the intersection of ethics, intelligence, and data governance. Their mission is to design human-centered, transparent, and responsible AI systems that empower individuals and organizations through ethical innovation and data literacy.
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2 text-gray-200">Research Interests</h3>
            <ul className="list-disc ml-6 space-y-1">
                <li>AI Ethics & Governance</li>
                <li>Data Transparency & Strategy</li>
                <li>Prompt Engineering & AI Literacy</li>
                <li>Cybersecurity & Digital Rights</li>
                <li>Human-AI Collaboration</li>
            </ul>

            <h3 className="text-lg font-bold mt-4 mb-2 text-gray-200">Skills & Tech Stack</h3>
            <p>
                <code className={codeStyle}>AI Systems</code><code className={codeStyle}>Data Strategy</code><code className={codeStyle}>Machine Learning</code><code className={codeStyle}>Prompt Engineering</code><code className={codeStyle}>Open Data</code><code className={codeStyle}>Cybersecurity</code><code className={codeStyle}>Ethics Frameworks</code><code className={codeStyle}>Python</code><code className={codeStyle}>PyTorch</code><code className={codeStyle}>OpenAI API</code><code className={codeStyle}>TensorFlow</code><code className={codeStyle}>Git</code><code className={codeStyle}>LangChain</code>
            </p>
        </div>
    );
};

const Sidebar = () => (
    <aside className="hidden lg:block space-y-4">
        <div className="bg-[#1A1A1B] border border-[#343536] rounded-md">
             <div className="bg-cover bg-center h-16 rounded-t-md" style={{backgroundImage: "url('https://styles.redditmedia.com/t5_fsol1i/styles/profileBanner_v2_f8i16y7hloyf1.jpg?s=c8f877d544cf810355f3088b9a89791097e3a005')"}}></div>
            <div className="p-3">
                <div className="flex items-center -mt-8">
                    <img src="https://styles.redditmedia.com/t5_fsol1i/styles/profileIcon_v2qeva7zloyf1.jpg?s=eb8f8e3de578d7e4832cdd639d863335a0333578" alt="Tawana Mohammadi" className="w-16 h-16 rounded-full border-4 border-[#1A1A1B]" />
                    <h3 className="ml-3 font-bold text-lg">u/tawanamohammadi</h3>
                </div>
                <p className="text-sm text-gray-400 mt-2">AI Researcher • Data Strategist • Educator. "Ethics in intelligence, transparency in data."</p>
                <a href="https://tawana.online" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-full w-full block text-center mt-4 hover:bg-cyan-600 transition-colors">
                    Visit Website
                </a>
            </div>
        </div>

        <div className="bg-[#1A1A1B] border border-[#343536] rounded-md">
            <h3 className="font-bold p-3 border-b border-[#343536]">Relevant Links</h3>
            <ul className="p-3 space-y-2 text-sm">
                <li><a href="https://orcid.org/0009-0005-6825-6728" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"><OrcidIcon /> ORCID Profile</a></li>
                <li><a href="https://scholar.google.com/citations?user=VP8O0a4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"><ScholarIcon /> Google Scholar</a></li>
                <li><a href="https://github.com/tawanamohammadi" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"><GitHubIcon /> GitHub Projects</a></li>
                <li><a href="https://tawanamohammadi.medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"><MediumIcon /> Medium Articles</a></li>
                <li><a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Mohammadi%2C%20Tawana%22" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline"><LinkIcon /> Zenodo Publications</a></li>
            </ul>
        </div>
    </aside>
);


const App: React.FC = () => {
    return (
        <div className="bg-[#030303] min-h-screen font-sans">
            <Header />
            <main className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-[#1A1A1B] border border-[#343536] rounded-md flex">
                        {/* Voting Section */}
                        <div className="flex flex-col items-center p-2 bg-[#161617] rounded-l-md">
                            <UpvoteIcon />
                            <span className="font-bold text-sm my-1">2025</span>
                            <DownvoteIcon />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 w-full">
                            <div className="flex items-center text-xs text-gray-400">
                                <img src="https://styles.redditmedia.com/t5_fsol1i/styles/profileIcon_v2qeva7zloyf1.jpg?s=eb8f8e3de578d7e4832cdd639d863335a0333578" alt="Profile" className="w-6 h-6 rounded-full mr-2" />
                                <span className="font-bold text-white">u/tawanamohammadi</span>
                                <span className="mx-1">•</span>
                                <span>Posted on Nov, 2025</span>
                            </div>
                            <h1 className="text-2xl font-bold my-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
                                My Research Journey — From Preprint to Major Revision: ChatGPT-5 in Lumbar MRI Interpretation
                            </h1>
                            <div className="text-sm leading-relaxed">
                               <PostContent />
                            </div>
                            <div className="flex items-center space-x-4 mt-4 text-gray-400 font-bold text-xs">
                               <button className="flex items-center hover:bg-[#272729] p-2 rounded">
                                   <CommentIcon /> 11 Comments
                               </button>
                               <button className="flex items-center hover:bg-[#272729] p-2 rounded">
                                   <ShareIcon /> Share
                               </button>
                           </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </main>
        </div>
    );
};

export default App;
