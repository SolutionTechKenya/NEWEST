const industries = [
    "Education & Training",
    "Law & Legal Services",
    "Media & Entertainment",
    "Hospitality & Tourism",
    "Business & Finance",
    "Logistics & Supply Chain Management",
    "Agriculture & Environmental Science",
    "Marketing & Communications",
    "Healthcare & Life Sciences",
    "Engineering & Manufacturing",
    "Programming & Software Development",
    "Web Development",
    "Artificial Intelligence & Machine Learning",
    "Data Science & Analytics",
    "Cybersecurity & Ethical Hacking",
    "Cloud Computing & DevOps",
    "UI/UX Design & Product Development",
    "Blockchain & Web3",
    "Game Development"
];

// Embedded JSON data
const companies = [
    {
      "name": "Tech Innovators Ltd",
      "industry": "Web Development",
      "location": "Nairobi",
      "courses": ["Computer Science", "Software Engineering"]
    },
    {
      "name": "AI Research Hub",
      "industry": "Artificial Intelligence & Machine Learning",
      "location": "Mombasa",
      "courses": ["AI", "Machine Learning"]
    },
    {
      "name": "Data Solutions Co.",
      "industry": "Data Science & Analytics",
      "location": "Kisumu",
      "courses": ["Data Science", "Data Analytics"]
    },
    {
      "name": "Ona",
      "industry": "Artificial Intelligence & Machine Learning",
      "location": "Nairobi",
      "courses": ["Computer Science", "Software Engineering", "Data Analysis & Visualization", "Natural Language Processing (NLP)"]
    },
    {
      "name": "Microsoft Corporation",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Software Engineering", "Cloud Computing", "Web Development", "AI and ML Frameworks (TensorFlow, PyTorch)"]
    },
    {
      "name": "UN-Habitat",
      "industry": "Data Science & Analytics",
      "location": "Nairobi",
      "courses": ["Data Science", "Statistical Analysis", "Predictive Analytics", "Big Data Technologies"]
    },
    {
      "name": "KPMG",
      "industry": "Data Science & Analytics",
      "location": "Nairobi",
      "courses": ["Data Analysis & Visualization", "Business Intelligence", "Data Engineering", "Data Mining"]
    },
    {
      "name": "SEIDOR Kenya Limited",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Computer Science", "Information Technology", "Software Engineering", "Web Development"]
    },
    {
      "name": "Lewa Wildlife Conservancy",
      "industry": "Cybersecurity & Ethical Hacking",
      "location": "Nairobi",
      "courses": ["Network Security", "Cryptography", "Ethical Hacking", "Digital Forensics"]
    },
    {
      "name": "Konza Technology City",
      "industry": "Cloud Computing & DevOps",
      "location": "Machakos",
      "courses": ["Cloud Architecture", "DevOps Practices", "Containerization (Docker, Kubernetes)", "Cloud Security"]
    },
    {
      "name": "Nova Pioneer Tatu Primary & International",
      "industry": "UI/UX Design & Product Development",
      "location": "Nairobi",
      "courses": ["User Interface Design", "User Experience Design", "Interaction Design", "Visual Design"]
    },
    {
      "name": "Zeraki",
      "industry": "Game Development",
      "location": "Nairobi",
      "courses": ["Game Design", "Game Programming", "Game Engine Development (Unity, Unreal Engine)", "Mobile Game Development"]
    },
    {
      "name": "Switch Media",
      "industry": "Web Development",
      "location": "Nairobi",
      "courses": ["Web Application Development", "Front-End Development", "Back-End Development", "Content Management Systems (CMS)"]
    },
    {
      "name": "Altimate Business Machines",
      "industry": "Engineering & Manufacturing",
      "location": "Kenya",
      "courses": ["Electronics", "Electrical Engineering", "Technical Troubleshooting"]
    },
    {
      "name": "Zamara",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Problem Solving", "Communication", "Project Management"]
    },
    {
      "name": "Tenwek Hospital",
      "industry": "Healthcare & Life Sciences",
      "location": "Bomet",
      "courses": ["Clinical Medicine", "Healthcare Management"]
    },
    {
      "name": "Standard Chartered Bank",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Finance", "Data Analysis", "Business Operations"]
    },
    {
      "name": "Office of the Director of Public Prosecutions (ODPP)",
      "industry": "Law & Legal Services",
      "location": "Nairobi",
      "courses": ["Law", "Legal Research", "Criminal Justice"]
    },
    {
      "name": "United Nations",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Donor Relations", "Architecture", "Environmental Studies"]
    },
    {
      "name": "KeNIC",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Procurement", "Marketing", "Technical Support"]
    },
    {
      "name": "Jubilee Insurance",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Underwriting", "Procurement", "Risk Management"]
    },
    {
      "name": "Cytonn",
      "industry": "Law & Legal Services",
      "location": "Nairobi",
      "courses": ["Law", "Commercial Legal Thinking", "Business Law"]
    },
    {
      "name": "SKM",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Law", "Communication", "Finance", "Accounting"]
    },
    {
      "name": "Mater Misericordiae Hospital",
      "industry": "Healthcare & Life Sciences",
      "location": "Nairobi",
      "courses": ["Medicine", "Obstetrics & Gynaecology", "Surgery", "Paediatrics"]
    },
    {
      "name": "Mwananchi Credit",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Audit", "Human Resources", "Financial Analysis"]
    },
    {
      "name": "CIFOR-ICRAF",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Sustainable Development", "Environmental Communication", "Political Science"]
    },
    {
      "name": "Mace",
      "industry": "Engineering & Manufacturing",
      "location": "Nairobi",
      "courses": ["Quantity Surveying", "Project Management", "Construction Management"]
    },
    {
      "name": "World Vision",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Research", "Statistics", "Economics", "Data Science"]
    },
    {
      "name": "Kenya National Bureau of Statistics (KNBS)",
      "industry": "Data Science & Analytics",
      "location": "Nairobi",
      "courses": ["Statistics", "Data Science", "Geospatial Information Systems"]
    },
    {
      "name": "Tatu City",
      "industry": "Engineering & Manufacturing",
      "location": "Kiambu",
      "courses": ["Research", "CRM Systems", "Project Management"]
    },
    {
      "name": "Java House",
      "industry": "Hospitality & Tourism",
      "location": "Nairobi",
      "courses": ["Computer Science", "Information Technology", "Digital Electronics"]
    },
    {
      "name": "SBM Bank",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Finance", "Securities Services", "Data Analysis"]
    },
    {
      "name": "Equity Bank",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Digital Banking", "Customer Relationship Management", "Finance"]
    },
    {
      "name": "Centum Investment",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Private Equity", "Real Estate Development", "Financial Analysis"]
    },
    {
      "name": "Deloitte East Africa",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Audit", "Consulting", "Data Analytics", "Cybersecurity"]
    },
    {
      "name": "Kenya Airways",
      "industry": "Hospitality & Tourism",
      "location": "Nairobi",
      "courses": ["IT", "Marketing", "Sustainable Aviation"]
    },
    {
      "name": "Unilever",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Marketing", "Supply Chain Management", "Finance"]
    },
    {
      "name": "Nation Media Group",
      "industry": "Media & Entertainment",
      "location": "Nairobi",
      "courses": ["Journalism", "Digital Media", "Content Creation"]
    },
    {
      "name": "IBM Kenya",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["AI", "Cloud Computing", "Software Development"]
    },
    {
      "name": "Aga Khan Foundation",
      "industry": "Education & Training",
      "location": "Nairobi",
      "courses": ["Development Studies", "Education", "Healthcare"]
    },
    {
      "name": "Switch Media",
      "industry": "Media & Entertainment",
      "location": "Nairobi",
      "courses": ["Video Production", "Technical Engineering", "Broadcasting"]
    },
    {
      "name": "Lewa Wildlife Conservancy",
      "industry": "Agriculture & Environmental Science",
      "location": "Laikipia",
      "courses": ["Wildlife Research", "ICT", "Community Engagement"]
    },
    {
      "name": "Konza Technopolis",
      "industry": "Programming & Software Development",
      "location": "Machakos",
      "courses": ["Cloud Computing", "Data Science", "Smart City Solutions"]
    },
    {
      "name": "UNEP",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Environmental Policy", "Sustainability", "Data Analysis"]
    },
    {
      "name": "ACTED",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Humanitarian Aid", "Project Management", "Logistics"]
    },
    {
      "name": "Rise & Learn Global",
      "industry": "Education & Training",
      "location": "Nairobi",
      "courses": ["Leadership Development", "HR Management", "Training"]
    },
    {
      "name": "Judiciary of Kenya",
      "industry": "Law & Legal Services",
      "location": "Nairobi",
      "courses": ["Law", "Judicial Processes", "Legal Research"]
    },
    {
      "name": "Crawford International School",
      "industry": "Education & Training",
      "location": "Nairobi",
      "courses": ["Teaching", "Curriculum Design", "Educational Technology"]
    },
    {
      "name": "Barizi Communications",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Software Development", "UI/UX Design", "Cybersecurity"]
    },
    {
      "name": "NuPEA",
      "industry": "Engineering & Manufacturing",
      "location": "Nairobi",
      "courses": ["Energy Management", "Project Development", "Renewable Energy"]
    },
    {
      "name": "KPDA",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Built Environment", "Research", "Advocacy"]
    },
    {
      "name": "Bridge International Academies",
      "industry": "Education & Training",
      "location": "Nairobi",
      "courses": ["Teaching", "Curriculum Development", "Educational Technology"]
    },
    {
      "name": "Dahua Technology",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Pre-Sales", "Technical Documentation", "Solution Design"]
    },
    {
      "name": "Reeds Africa Consult",
      "industry": "Law & Legal Services",
      "location": "Nairobi",
      "courses": ["Legal Support", "Corporate Law", "Compliance"]
    },
    {
      "name": "Storymoja",
      "industry": "Media & Entertainment",
      "location": "Nairobi",
      "courses": ["Content Creation", "Publishing", "Creative Writing"]
    },
    {
      "name": "Glitex Solutions",
      "industry": "Web Development",
      "location": "Nairobi",
      "courses": ["UI/UX Design", "Social Media Marketing", "Web Development"]
    },
    {
      "name": "MOGO Kenya",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Sales", "Financial Products", "Customer Relationship Management"]
    },
    {
      "name": "Reckitt",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["HR", "Finance", "Supply Chain", "Marketing"]
    },
    {
      "name": "Embu County Government",
      "industry": "Government",
      "location": "Embu",
      "courses": ["ICT", "Public Administration", "Project Management"]
    },
    {
      "name": "Majid Al Futtaim",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["IT Network Management", "Retail Operations", "Customer Experience"]
    },
    {
      "name": "Google Kenya",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["Software Engineering", "AI", "Machine Learning", "Data Science"]
    },
    {
      "name": "Price Waterhouse Coopers (PwC)",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Audit", "Tax", "Consulting", "Data Analytics"]
    },
    {
      "name": "Kenya Revenue Authority (KRA)",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Taxation", "Finance", "Data Management"]
    },
    {
      "name": "Insurance Regulatory Authority (IRA)",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Underwriting", "Risk Management", "Finance"]
    },
    {
      "name": "Parliament of Kenya",
      "industry": "Government",
      "location": "Nairobi",
      "courses": ["Public Administration", "Policy Analysis", "Legal Research"]
    },
    {
      "name": "Central Bank of Kenya",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Finance", "Economics", "Monetary Policy"]
    },
    {
      "name": "Kenya Ports Authority (KPA)",
      "industry": "Logistics & Supply Chain Management",
      "location": "Mombasa",
      "courses": ["Supply Chain Management", "Logistics", "Port Operations"]
    },
    {
      "name": "Coca-Cola Beverages Africa",
      "industry": "Business & Finance",
      "location": "Nairobi",
      "courses": ["Marketing", "Sales", "Supply Chain Management"]
    },
    {
      "name": "KenGen",
      "industry": "Engineering & Manufacturing",
      "location": "Nairobi",
      "courses": ["Renewable Energy", "Engineering", "Environmental Sciences"]
    },
    {
      "name": "Kenya Power",
      "industry": "Engineering & Manufacturing",
      "location": "Nairobi",
      "courses": ["Electrical Engineering", "Energy Management", "Utility Services"]
    },
    {
      "name": "International Livestock Research Institute (ILRI)",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Agricultural Sciences", "Data Analysis", "Environmental Studies"]
    },
    {
      "name": "Presidential Digital Talent Programme",
      "industry": "Programming & Software Development",
      "location": "Nairobi",
      "courses": ["ICT", "Software Development", "Data Science"]
    },
    {
      "name": "Kenya Medical Research Institute (KEMRI)",
      "industry": "Healthcare & Life Sciences",
      "location": "Nairobi",
      "courses": ["Medical Research", "Public Health", "Biotechnology"]
    },
    {
      "name": "Kenya Civil Aviation Authority",
      "industry": "Hospitality & Tourism",
      "location": "Nairobi",
      "courses": ["Aviation Management", "Air Traffic Control", "Aeronautical Engineering"]
    },
    {
      "name": "Kenya Pipeline Company (KPC)",
      "industry": "Engineering & Manufacturing",
      "location": "Nairobi",
      "courses": ["Petroleum Engineering", "Logistics", "Project Management"]
    },
    {
      "name": "Save the Children",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Humanitarian Aid", "Project Management", "Child Welfare"]
    },
    {
      "name": "United Nations Environment Programme (UNEP)",
      "industry": "Agriculture & Environmental Science",
      "location": "Nairobi",
      "courses": ["Environmental Policy", "Sustainability", "Data Analysis"]
    },
    {
        "name": "International Centre of Insect Physiology and Ecology (ICIPE)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Entomology", "Agricultural Sciences", "Environmental Studies"]
      },
      {
        "name": "Kenya Agricultural and Livestock Research Organization (KALRO)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Sciences", "Livestock Management", "Data Analysis"]
      },
      {
        "name": "Kenya Forest Service (KFS)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Forestry", "Environmental Conservation", "Wildlife Management"]
      },
      {
        "name": "Kenya Wildlife Service (KWS)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Wildlife Management", "Conservation Biology", "Tourism"]
      },
      {
        "name": "Kenya Institute of Curriculum Development (KICD)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Curriculum Design", "Educational Technology", "Teaching"]
      },
      {
        "name": "Kenya National Library Service (KNLS)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Library Science", "Information Management", "Research"]
      },
      {
        "name": "Kenya National Archives and Documentation Service",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Archival Studies", "History", "Research"]
      },
      {
        "name": "Kenya Institute of Special Education (KISE)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Special Education", "Teaching", "Curriculum Development"]
      },
      {
        "name": "Kenya Institute of Mass Communication (KIMC)",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Public Relations"]
      },
      {
        "name": "Kenya School of Law",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Legal Research", "Judicial Processes"]
      },
      {
        "name": "Kenya School of Government (KSG)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Public Administration", "Policy Analysis", "Leadership"]
      },
      {
        "name": "Kenya School of Monetary Studies (KSMS)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Economics", "Monetary Policy"]
      },
      {
        "name": "Kenya School of Aviation (KSA)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Aviation Management", "Aeronautical Engineering", "Air Traffic Control"]
      },
      {
        "name": "Kenya Industrial Research and Development Institute (KIRDI)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Industrial Engineering", "Product Development", "Research"]
      },
      {
        "name": "Kenya Marine and Fisheries Research Institute (KMFRI)",
        "industry": "Agriculture & Environmental Science",
        "location": "Mombasa",
        "courses": ["Marine Biology", "Fisheries Management", "Environmental Science"]
      },
      {
        "name": "Kenya Institute for Public Policy Research and Analysis (KIPPRA)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Public Policy", "Economics", "Data Analysis"]
      },
      {
        "name": "Kenya Institute of Administration (KIA)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Public Administration", "Leadership", "Policy Analysis"]
      },
      {
        "name": "Kenya Institute of Management (KIM)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Business Management", "Leadership", "Project Management"]
      },
      {
        "name": "Kenya Institute of Supplies Management (KISM)",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Procurement", "Logistics"]
      },
      {
        "name": "Kenya Institute of Social Work and Community Development (KISWCD)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Social Work", "Community Development", "Project Management"]
      },
      {
        "name": "Kenya Institute of Business and Counselling Studies (KIBCS)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Business Management", "Counselling", "Leadership"]
      },
      {
        "name": "Kenya Institute of Professional Studies (KIPS)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Business Management", "IT", "Project Management"]
      },
      {
        "name": "Kenya Institute of Highways and Building Technology (KIHBT)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Civil Engineering", "Construction Management", "Project Management"]
      },
      {
        "name": "Kenya Institute of Surveying and Mapping (KISM)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Surveying", "Geospatial Analysis", "Mapping"]
      },
      {
        "name": "Andela Kenya",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Web Development", "Cloud Computing"]
    },
    {
        "name": "Huawei Kenya",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Network Engineering", "Cybersecurity", "IT Support"]
    },
    {
        "name": "Safal Group",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Product Design", "Supply Chain Management"]
    },
    {
        "name": "BASF East Africa Ltd",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Environmental Science", "Quality Control"]
    },
    {
        "name": "KEMSA (Kenya Medical Supplies Agency)",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Pharmacy", "Healthcare Logistics", "Procurement"]
    },
    {
        "name": "Amref Health Africa",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Public Health", "Community Health", "Medical Research"]
    },
    {
        "name": "Unga Group Limited",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Food Science", "Nutrition", "Agribusiness"]
    },
    {
        "name": "EABL (East African Breweries Limited)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Industrial Engineering", "Marketing", "Supply Chain Management"]
    },
    {
        "name": "Bidco Africa",
        "industry": "Business & Finance",
        "location": "Thika",
        "courses": ["Business Management", "Marketing", "Engineering"]
    },
    {
        "name": "Davis & Shirtliff",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Water Engineering", "Mechanical Engineering", "Sales & Marketing"]
    },
    {
        "name": "Moringa School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Software Development", "Data Science", "UI/UX Design"]
    },
    {
        "name": "Eco Bank Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Investment Banking", "Risk Management"]
    },
    {
        "name": "Isuzu East Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Automotive Technology", "Supply Chain"]
    },
    {
        "name": "Toyota Kenya",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Automotive Engineering", "Marketing", "Logistics"]
    },
    {
        "name": "Kenya Red Cross",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Disaster Management", "First Aid Training", "Public Health"]
    },
    {
        "name": "Bayer East Africa",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Biotechnology", "Pharmaceutical Science"]
    },
    {
        "name": "Kenya Seed Company",
        "industry": "Agriculture & Environmental Science",
        "location": "Kitale",
        "courses": ["Agriculture", "Seed Technology", "Crop Science"]
    },
    {
        "name": "Geothermal Development Company (GDC)",
        "industry": "Engineering & Manufacturing",
        "location": "Nakuru",
        "courses": ["Geology", "Renewable Energy", "Mechanical Engineering"]
    },
    {
        "name": "Kenya Meat Commission",
        "industry": "Agriculture & Environmental Science",
        "location": "Athi River",
        "courses": ["Food Science", "Animal Science", "Supply Chain Management"]
    },
    {
        "name": "Kenya Tea Development Agency (KTDA)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Tea Production", "Agribusiness", "Supply Chain Management"]
    },
    {
        "name": "National Museums of Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["History", "Archaeology", "Museum Management"]
    },
    {
        "name": "Athi Water Works Development Agency",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Water Engineering", "Environmental Science", "Hydrology"]
    },
    {
        "name": "Kenya Maritime Authority",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Maritime Studies", "Logistics", "Naval Engineering"]
    },
    {
        "name": "EcoFarm Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Nakuru",
        "courses": ["Agroecology", "Soil Science", "Climate-Smart Agriculture"]
      },
      {
        "name": "Pulse Studios Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Film Production", "Sound Design", "Digital Storytelling"]
      },
      {
        "name": "Nexus Capital Partners",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Investment Analysis", "Portfolio Management", "Financial Modeling"]
      },
      {
        "name": "CargoLink Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Freight Forwarding", "Customs Clearance", "Inventory Optimization"]
      },
      {
        "name": "MediSphere Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Biomedical Engineering", "Pharmaceutical Research", "Telemedicine"]
      },
      {
        "name": "CodeCraft Academy",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Python Development", "API Design", "System Architecture"]
      },
      {
        "name": "InsightAnalytix",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Predictive Modeling", "Business Analytics", "Data Pipeline Engineering"]
      },
      {
        "name": "CloudNest Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Serverless Architecture", "IaC (Terraform)", "CI/CD Pipelines"]
      },
      {
        "name": "ChainForge Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Smart Contracts", "DeFi Protocols", "NFT Development"]
      },
      {
        "name": "EduHub Africa",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["EdTech Solutions", "Curriculum Design", "E-Learning Platforms"]
      },
      {
        "name": "Cineverse Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Cinematography", "Post-Production", "Streaming Technologies"]
      },
      {
        "name": "FinDigital Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Digital Payments", "RegTech Solutions", "Cryptocurrency Markets"]
      },
      {
        "name": "AgriTech Analytics",
        "industry": "Agriculture & Environmental Science",
        "location": "Kisumu",
        "courses": ["Satellite Farming", "Crop Yield Prediction", "Agri-Data Platforms"]
      },
      {
        "name": "AutoMech Kenya",
        "industry": "Engineering & Manufacturing",
        "location": "Mombasa",
        "courses": ["Automotive Robotics", "Quality Assurance Systems", "Lean Manufacturing"]
      },
      {
        "name": "Web3Works Africa",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Decentralized Applications", "Web3 Security", "DAO Architecture"]
      },
      {
        "name": "NLP Labs Africa",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Speech Recognition Systems", "Chatbot Development", "Multilingual NLP"]
      },
      {
        "name": "BioData Solutions",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Bioinformatics", "Epidemiological Modeling", "Clinical Trial Analytics"]
      },
      {
        "name": "DesignOptic Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Accessibility Design", "UX Writing", "Design Thinking"]
      },
      {
        "name": "SkillBridge Academy",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Vocational Training", "Competency-Based Education", "Skills Assessment"]
      },
      {
        "name": "PodcastHub Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Audio Engineering", "Podcast Monetization", "Voice Acting"]
      },
      {
        "name": "Gastronomy Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Culinary Arts", "Food Tourism", "Beverage Management"]
      },
      {
        "name": "ImpactInvest Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Social Impact Bonds", "ESG Investing", "Development Finance"]
      },
      {
        "name": "DroneLog Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Drone Delivery Systems", "Warehouse Automation", "Route Optimization"]
      },
      {
        "name": "AquaTech Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Kisumu",
        "courses": ["Aquaponics", "Water Resource Management", "Fisheries Technology"]
      },
      {
        "name": "NeuroMed Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Neurological Research", "Medical Device Innovation", "Clinical Neuroscience"]
      },
      {
        "name": "RoboFab Kenya",
        "industry": "Engineering & Manufacturing",
        "location": "Thika",
        "courses": ["Industrial Robotics", "Additive Manufacturing", "Quality Control Systems"]
      },
      {
        "name": "FinCode Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Algorithmic Trading Systems", "Regulatory Compliance Software", "Payment Gateways"]
      },
      {
        "name": "AccessiWeb Africa",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["WCAG Compliance", "Assistive Technologies", "Inclusive Design"]
      },
      {
        "name": "VisionAI Africa",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Computer Vision for Agriculture", "Facial Recognition Systems", "AI Ethics"]
      },
      {
        "name": "CyberForensics Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Digital Evidence Recovery", "Malware Analysis", "Cryptocurrency Tracing"]
      },
      {
        " name": "CloudOps Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Security Best Practices", "Server Management", "Cloud Migration Strategies"]
      },
      {
        "name": "User First Design",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["User -Centered Design", "Wireframing", "Usability Testing"]
      },
      {
        "name": "BlockChain Innovations",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Development", "Cryptographic Protocols", "Decentralized Finance"]
      },
      {
        "name": "Epic Games Kenya",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design Principles", "Multiplayer Game Development", "Game Monetization Strategies"]
      },
      {
        "name": "LearnSmart Academy",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Online Learning Platforms", "Instructional Design", "Assessment Strategies"]
      },
      {
        "name": "Advocates for Justice",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Human Rights Law", "Legal Advocacy", "Public Interest Law"]
      },
      {
        "name": "Creative Media Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Content Strategy", "Media Ethics", "Digital Marketing"]
      },
      {
        "name": "Wealth Management Group",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Wealth Management", "Investment Strategies", "Financial Planning"]
      },
      {
        "name": "TransLogistics Kenya",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics Management", "Supply Chain Optimization", "Transport Planning"]
      },
      {
        "name": "CodeLab Kenya",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Full Stack Development", "Mobile App Development", "Software Testing"]
      },
      {
        "name": "WebCraft Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Responsive Web Design", "E-commerce Development", "SEO Strategies"]
      },
      {
        "name": "DataVision Analytics",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Visualization", "Statistical Analysis", "Big Data Technologies"]
      },
      {
        "name": "SecureTech Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity Fundamentals", "Risk Assessment", "Incident Management"]
      },
      {
        "name": "DesignHive Kenya",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Interaction Design", "Visual Communication", "User  Experience Research"]
      },
      {
        "name": "CryptoTech Innovations",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": [" Cryptocurrency Development", "Blockchain Applications", "Smart Contract Auditing"]
      },
      {
        "name": "GameDev Academy",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Development Fundamentals", "Character Design", "Game Monetization"]
      },
      {
        "name": "AgriLab Innovations",
        "industry": "Agriculture & Environmental Science",
        "location": "Eldoret",
        "courses": ["Precision Agriculture", "Drone Farming", "Food Security Systems"]
      },
      {
        "name": "CryptoNest Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Tokenomics", "Blockchain Scalability", "Web3 Gaming"]
      },
      {
        "name": "Luxury Escapes Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Luxury Hospitality Management", "Event Coordination", "Guest Relations"]
      },
      {
        "name": "AgriFuture Solutions",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Sustainable Farming Practices", "Agricultural Policy", "Food Safety Management"]
      },
      {
        "name": "HealthTech Innovations",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Health Informatics", "Telehealth Solutions", "Healthcare Analytics"]
      },
      {
        "name": "Constructive Solutions",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Construction Management", "Structural Engineering", "Project Planning"]
      },
      {
        "name": "AI Solutions Africa",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI for Business", "Data Mining", "Machine Learning Algorithms"]
      },
      {
        "name": "CloudSphere Solutions",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Infrastructure", "DevOps Methodologies", "Container Management"]
      },
      {
        "name": "LexPatria Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Intellectual Property Law", "Constitutional Law", "Legal Drafting"]
      },
      {
        "name": "Savannah Resorts Group",
        "industry": "Hospitality & Tourism",
        "location": "Maasai Mara",
        "courses": ["Eco-Tourism", "Hotel Management", "Cultural Tourism"]
      },
      {
        "name": "BuildTech Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Thika",
        "courses": ["Civil Engineering", "3D Printing", "Smart Materials"]
      },
      {
        "name": "PixelForge Studios",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Progressive Web Apps", "Web Performance Optimization", "Jamstack Development"]
      },
      {
        "name": "DeepMind Africa",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Neural Networks", "Computer Vision", "Reinforcement Learning"]
      },
      {
        "name": "CyberShield Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Threat Intelligence", "Penetration Testing", "SOC Operations"]
      },
      {
        "name": "UXNest Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Design Systems", "User  Research", "Prototyping Tools"]
      },
      {
        "name": "GameChanger Studios",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["3D Modeling", "AR/VR Development", "Game Physics"]
      },
      {
        "name": "LegalEase Kenya",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Alternative Dispute Resolution", "Legal Tech", "Compliance Management"]
      },
      {
        "name": "WildTrails Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Nanyuki",
        "courses": ["Adventure Tourism", "Wildlife Photography Tours", "Eco-Lodge Management"]
      },
      {
        "name": "LogiSmart Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Analytics", "Last-Mile Delivery Solutions", "Cold Chain Management"]
      },
      {
        "name": "HealthAI Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medical Imaging AI", "Genomic Data Analysis", "Drug Discovery Platforms"]
      },
      {
        "name": "DevOps Dynamics",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Microservices Architecture", "Kubernetes Orchestration", "Monitoring & Observability"]
      },
      {
        "name": "SecureNet Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["IoT Security", "Blockchain Security", "Incident Response"]
      },
      {
        "name": "CloudForge Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Multi-Cloud Management", "Cloud Cost Optimization", "Disaster Recovery"]
      },
      {
        "name": "PixelPioneers",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Procedural Generation", "Game AI", "Esports Platforms"]
      },
      {
        "name": "JurisTech Africa",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Legal Process Automation", "Contract Analytics", "E-Discovery Systems"]
      },
      {
        "name": "EduTech Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["EdTech Solutions", "E-Learning Platforms", "Instructional Design"]
      },
      {
        "name": "LegalEdge Partners",
        "industry": "Law & Legal Services",
        "location": "Mombasa",
        "courses": ["Corporate Law", "Legal Tech", "Compliance Strategies"]
      },
      {
        "name": "AfroCinema Studios",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Film Production", "Scriptwriting", "Digital Animation"]
      },
      {
        "name": "SafariQuest Resorts",
        "industry": "Hospitality & Tourism",
        "location": "Maasai Mara",
        "courses": ["Eco-Tourism Management", "Wildlife Conservation Tourism", "Hospitality Analytics"]
      },
      {
        "name": "FinTech Frontier",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Digital Banking Solutions", "Blockchain Finance", "Financial Analytics"]
      },
      {
        "name": "CargoMaster Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Port Logistics", "Customs Compliance", "IoT in Supply Chain"]
      },
      {
        "name": "GreenGrowth Agribusiness",
        "industry": "Agriculture & Environmental Science",
        "location": "Nakuru",
        "courses": ["Sustainable Farming", "Agri-Tech Integration", "Soil Health Management"]
      },
      {
        "name": "HealthBridge Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Kisumu",
        "courses": ["Telemedicine Systems", "Public Health Analytics", "Medical Robotics"]
      },
      {
        "name": "PrecisionMech Engineering",
        "industry": "Engineering & Manufacturing",
        "location": "Thika",
        "courses": ["Automation Systems", "3D Printing", "Quality Assurance Engineering"]
      },
      {
        "name": "CodeFrontier Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Quantum Computing Basics", "API Development", "Low-Code Platforms"]
      },
      {
        "name": "NexusWeb Solutions",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["WebAssembly", "Headless CMS Development", "Web Accessibility Standards"]
      },
      {
        "name": "DeepLogic AI",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI Ethics", "Generative AI Models", "Edge AI Implementation"]
      },
      {
        "name": "DataPulse Analytics",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Real-Time Analytics", "Data Governance", "MLOps Practices"]
      },
      {
        "name": "CyberGuard East Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cloud Security Posture Management", "Threat Hunting", "Zero Trust Architecture"]
      },
      {
        "name": "CloudPioneers Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Multi-Cloud Networking", "FinOps Practices", "GitOps Workflows"]
      },
      {
        "name": "DesignHub Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Voice User Interface Design", "Augmented Reality Interfaces", "Design Ops"]
      },
      {
        "name": "ChainPulse Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["CBDC Development", "Blockchain Interoperability", "Decentralized Identity Systems"]
      },
      {
        "name": "PixelCraft Studios",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Metaverse Development", "Game Monetization Strategies", "Procedural Content Generation"]
      },
      {
        "name": "SkillForge Academy",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Micro-Credentialing Systems", "Competency-Based Learning", "VR in Education"]
      },
      {
        "name": "Civic Legal Group",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Digital Rights Law", "Cyber Law", "Legal Data Analytics"]
      },
      {
        "name": "Buni Media Hub",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Virtual Production", "Interactive Media", "Transmedia Storytelling"]
      },
      {
        "name": "EcoLodge Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Diani",
        "courses": ["Sustainable Resort Management", "Cultural Heritage Tourism", "Adventure Tourism Planning"]
      },
      {
        "name": "Finclusion Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Islamic Finance", "Impact Investing", "Financial Inclusion Strategies"]
      },
      {
        "name": "LogiTrack Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Blockchain in Logistics", "Autonomous Vehicle Logistics", "Supply Chain Resilience"]
      },
      {
        "name": "AgriGenome Labs",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Genomics", "Biofortification", "Climate Resilience Crops"]
      },
      {
        "name": "MediData Solutions",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Health Data Interoperability", "Clinical Trial Management", "AI in Diagnostics"]
      },
      {
        "name": "RoboBuild Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Mombasa",
        "courses": ["Collaborative Robotics", "Digital Twin Technology", "Sustainable Manufacturing"]
      },
      {
        "name": "DevOpsNest Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Chaos Engineering", "Platform Engineering", "Observability Stack Development"]
      },
      {
        "name": "WebNest Africa",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web3 Integration", "Jamstack Architecture", "Progressive Web Apps"]
      },
      {
        "name": "EthicalAI Kenya",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI Governance", "Federated Learning", "Explainable AI"]
      },
      {
        "name": "BioAnalytix Africa",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Bioinformatics Pipelines", "Genomic Data Analysis", "Clinical Data Management"]
      },
      {
        "name": "SecurIT Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Quantum Cryptography", "Cloud Workload Protection", "Security Orchestration"]
      },
      {
        "name": "CloudMatrix Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Hybrid Cloud Management", "Cloud Cost Analytics", "Edge Computing"]
      },
      {
        "name": "UXFactor Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Emotional Design", "Service Design", "UX Metrics & Analytics"]
      },
      {
        "name": "DeFiNest Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Stablecoin Development", "DAO Governance Models", "Cross-Chain Bridges"]
      },
      {
        "name": "Nexus Gaming Africa",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Cloud Gaming Infrastructure", "Esports Management", "Game Localization"]
      },
      {
        "name": "EduAnalytix Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Learning Analytics", "Adaptive Learning Systems", "Gamification in Education"]
      },
      {
        "name": "IPGuard Africa",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Patent Law", "Technology Licensing", "IP Valuation"]
      },
      {
        "name": "AfroVR Studios",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["360° Video Production", "Virtual Reality Storytelling", "Spatial Audio Design"]
      },
      {
        "name": "Heritage Tours Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Lamu",
        "courses": ["Cultural Tourism Management", "Heritage Site Preservation", "Community-Based Tourism"]
      },
      {
        "name": "FinLit Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Financial Literacy Programs", "Behavioral Finance", "Regulatory Technology"]
      },
      {
        "name": "DroneLogix Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Drone Delivery Systems", "Last-Mile Logistics", "Autonomous Warehouse Systems"]
      },
      {
        "name": "AquaCulture Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Kisumu",
        "courses": ["Aquatic Ecosystems", "Fish Farming Technology", "Water Quality Management"]
      },
      {
        "name": "NeuroMed Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Neurotechnology", "Brain-Computer Interfaces", "Cognitive Science Applications"]
      },
      {
        "name": "SmartGrid Kenya",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Smart Grid Technology", "Energy Storage Systems", "Microgrid Design"]
      },
      {
        "name": "CodeNest Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Quantum Programming", "Embedded Systems Development", "Compiler Design"]
      },
      {
        "name": "WebForge Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["WebAssembly Applications", "Static Site Generation", "Web Security Protocols"]
      },
      {
        "name": "AI4Good Kenya",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI for Social Impact", "Bias Mitigation", "AI in Public Policy"]
      },
      {
        "name": "GeoData Kenya",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Geospatial Machine Learning", "Satellite Imagery Analysis", "Location Intelligence"]
      },
      {
        "name": "CyberResilience Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cyber Threat Intelligence", "Digital Forensics", "Security Automation"]
      },
      {
        "name": "CloudNova Africa",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud-Native Development", "Serverless Architectures", "Cloud Migration Strategies"]
      },
      {
        "name": "UXLabs Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Neuromarketing in UX", "Accessibility Audits", "Design Token Systems"]
      },
      {
        "name": "NFT Nexus Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["NFT Marketplace Development", "Digital Collectibles Strategy", "IPFS Implementation"]
      },
      {
        "name": "IndieGame Studios",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Indie Game Marketing", "Procedural Narrative Design", "Game Analytics"]
      },
      {
        "name": "EduVR Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Virtual Classrooms", "Immersive Learning Experiences", "VR Content Creation"]
      },
      {
        "name": "LegalBot Africa",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Legal Chatbot Development", "Document Automation", "AI Contract Review"]
      },
      {
        "name": "AfroPod Studios",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Podcast Analytics", "Audio Branding", "Interactive Audio Content"]
      },
      {
        "name": "GastroTour Kenya",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Culinary Tourism", "Food Experience Design", "Beverage Tourism"]
      },
      {
        "name": "InsureTech Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Parametric Insurance", "AI Underwriting", "Claims Automation"]
      },
      {
        "name": "PortTech Africa",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Port Automation Systems", "Maritime Logistics", "Customs Blockchain Solutions"]
      },
      {
        "name": "AgriDrone Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Eldoret",
        "courses": ["Drone Crop Monitoring", "Precision Spraying", "Aerial Survey Analysis"]
      },
      {
        "name": "BioPrint Kenya",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["3D Bioprinting", "Tissue Engineering", "Medical Material Science"]
      },
      {
        "name": "RenewableTech Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Nakuru",
        "courses": ["Solar Farm Design", "Wind Energy Systems", "Renewable Energy Storage"]
      },
      {
        "name": "QuantumCode Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Quantum Algorithms", "Post-Quantum Cryptography", "Quantum Machine Learning"]
      },
      {
        "name": "WebAnalytix Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Performance Monitoring", "Core Web Vitals Optimization", "SEO Analytics"]
      },
      {
        "name": "RoboEthics Lab",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI Policy Development", "Robot Rights Framework", "Ethical AI Certification"]
      },
      {
        "name": "ClimateData Africa",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Climate Modeling", "Carbon Footprint Analysis", "Environmental Data Visualization"]
      },
      {
        "name": "CyberRange Kenya",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cyber Range Simulations", "ICS/SCADA Security", "Security Awareness Training"]
      },
      {
        "name": "CloudAI Africa",
        "industry": "Cloud Computing & DevOps",
        "location": " Nairobi",
        "courses": ["AI in Cloud Services", "Cloud-Native AI Solutions", "Data Lake Architecture"]
      },
      {
        "name": "DesignSprint Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Rapid Prototyping", "User  Journey Mapping", "Design Thinking Workshops"]
      },
      {
        "name": "BlockChainX Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain for Supply Chain", "Smart Contract Development", "Tokenomics"]
      },
      {
        "name": "GameDev Hub",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Development Bootcamp", "Game Monetization Strategies", "Game Design Principles"]
      },
      {
        "name": "Strathmore University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Business", "Law", "IT", "Engineering"]
      },
      {
        "name": "Africa Nazarene University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Law", "Theology", "Business Administration", "Computer Science"]
      },
      {
        "name": "Riara University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Law", "Business", "Education", "International Relations"]
      },
       {
        "name": "Mount Kenya University",
        "industry": "Education & Training",
        "location": "Thika",
        "courses": ["Business", "Law", "Health Sciences", "Engineering"]
      },
      {
        "name": "The Co-operative University of Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Co-operative Management", "Business", "IT", "Agriculture"]
      },
      {
        "name": "Amboseli Institute of Hospitality and Tourism",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism Management", "Culinary Arts"]
      },
      {
        "name": "PrideInn Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Food & Beverage Service", "Event Planning"]
      },
      {
        "name": "Villa Rosa Kempinski",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Operations", "Customer Service", "Culinary Arts"]
      },
      {
        "name": "Sarova Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Culinary Arts"]
      },
      {
        "name": "Fairmont The Norfolk",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Event Management"]
      },
      {
        "name": "Nairobi Serena Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Customer Service"]
      },
      {
        "name": "CMA Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Legal Research", "Corporate Law"]
      },
      {
        "name": "Oraro & Company Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Litigation", "Commercial Law"]
      },
      {
        "name": "TripleOKLaw Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Legal Research", "Corporate Governance"]
      },
      {
        "name": "Anjarwalla & Khanna",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Corporate Law", "Banking Law"]
      },
      {
        "name": "Hamilton Harrison & Mathews",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Legal Research", "Commercial Litigation"]
      },
      {
        "name": "Daly & Inamdar Advocates",
        "industry": "Law & Legal Services",
        "location": "Mombasa",
        "courses": ["Law", "Shipping Law", "Maritime Law"]
      },
      {
        "name": "Mediamax Network Limited",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media", "Video Editing"]
      },
      {
        "name": "The Standard Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Photography", "Graphic Design"]
      },
      {
        "name": "Kenya Broadcasting Corporation (KBC)",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Film Production", "Sound Engineering"]
      },
       {
        "name": "Radio Africa Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media"]
      },
       {
        "name": "Longhorn Publishers",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Editing", "Publishing", "Graphic Design"]
      },
      {
        "name": "Absa Bank Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Accounting"]
      },
      {
        "name": "Co-operative Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Customer Service"]
      },
      {
        "name": "KCB Group",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Risk Management"]
      },
      {
        "name": "I&M Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Investment"]
      },
      {
        "name": "DTB Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Accounting"]
      },
      {
        "name": "NCBA Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Business Administration"]
      },
      {
        "name": "Bollore Transport & Logistics",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Logistics", "Supply Chain", "Port Management"]
      },
      {
        "name": "Mitchell Cotts",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Shipping", "Freight Forwarding"]
      },
      {
        "name": "Kuehne + Nagel",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain Management", "Warehousing"]
      },
      {
        "name": "DHL",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain", "Operations Management"]
      },
      {
        "name": "Schenker",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain", "Freight Forwarding"]
      },
      {
        "name": "Maersk",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Shipping", "Logistics", "Port Operations"]
      },
      {
        "name": "One Acre Fund",
        "industry": "Agriculture & Environmental Science",
        "location": "Kakamega",
        "courses": ["Agronomy", "Sustainable Agriculture", "Rural Development"]
      },
      {
        "name": "Alliance for a Green Revolution in Africa (AGRA)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Economics", "Policy", "Program Management"]
      },
      {
        "name": "World Agroforestry (ICRAF)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agroforestry", "Environmental Science", "Sustainable Development"]
      },
      {
        "name": "Practical Action",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Sustainable Agriculture", "Renewable Energy", "Climate Change"]
      },
      {
        "name": "Food and Agriculture Organization of the United Nations (FAO)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Nutrition", "Environmental Science"]
      },
      {
        "name": "Scanad",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Public Relations"]
      },
      {
        "name": "Ogilvy Africa",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Digital Marketing", "Communications"]
      },
      {
        "name": "WPP-Scangroup",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Public Relations", "Market Research"]
      },
      {
        "name": "TBWARAAD Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Creative Strategy", "Digital Marketing"]
      },
      {
        "name": "Dentsu Aegis Network",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Digital Marketing", "Media Planning", "Advertising"]
      },
      {
        "name": "Gina Din Group",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Public Relations", "Communications", "Event Management"]
      },
      {
        "name": "Aga Khan University Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Healthcare Management"]
      },
      {
        "name": "MP Shah Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Healthcare", "Medical Technology", "Hospital Administration"]
      },
      {
        "name": "Nairobi Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Pharmacy"]
      },
      {
        "name": "Gertrude's Children's Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Paediatrics", "Nursing", "Child Health"]
      },
     {
        "name": "Kenyatta National Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Surgery", "Nursing"]
      },
      {
        "name": "AAR Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Healthcare Management", "Clinical Services", "Public Health"]
      },
      {
        "name": "Bamburi Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Mombasa",
        "courses": ["Mechanical Engineering", "Electrical Engineering", "Chemical Engineering"]
      },
      {
        "name": "East African Breweries Limited (EABL)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Process Engineering", "Supply Chain"]
      },
      {
        "name": "Bidco Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Thika",
        "courses": ["Food Science", "Engineering", "Manufacturing"]
      },
      {
        "name": "Devki Group",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Engineering", "Manufacturing", "Operations"]
      },
      {
        "name": "Sameer Group",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Engineering", "Automotive Technology", "Manufacturing"]
      },
      {
        "name": "Kapa Oil Refineries",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Process Engineering", "Quality Control"]
      },
      {
        "name": "Craft Silicon",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Database Management", "FinTech"]
      },
      {
        "name": "Cellulant",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Mobile Development", "FinTech"]
      },
      {
        "name": "Africa's Talking",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Cloud Computing", "API Development"]
      },
      {
        "name": "Intel Corporation",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Computer Science", "Electrical Engineering"]
      },
      {
        "name": "Oracle",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Database Administration", "Cloud Computing"]
      },
       {
        "name": "Asilia Technologies",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "UI/UX Design", "E-commerce"]
      },
      {
        "name": "NMG Digital",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "Digital Marketing", "Content Management"]
      },
      {
        "name": "iBiz Africa",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "Mobile Development", "Digital Strategy"]
      },
      {
        "name": "Webafrica Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Hosting", "Web Design", "Digital Marketing"]
      },
      {
        "name": "Sokowatch",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "E-commerce", "Logistics Technology"]
      },
      {
        "name": "BitHub Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Development", "Cryptocurrency", "Decentralized Applications"]
      },
        {
        "name": "AI Kenya",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Data Science", "AI Ethics"]
      },
      {
        "name": "Deep Learning Indaba",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Deep Learning", "Natural Language Processing", "Computer Vision"]
      },
      {
        "name": "DataCamp",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analysis", "Machine Learning", "Data Visualization"]
      },
      {
        "name": "Africa Data Technologies",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Big Data", "Business Intelligence"]
      },
      {
        "name": "Serianu",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "Ethical Hacking", "Network Security"]
      },
      {
        "name": "Check Point Software Technologies",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Network Security", "Cyber Threat Intelligence", "Security Engineering"]
      },
       {
        "name": "Amazon Web Services (AWS)",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "Cloud Architecture"]
      },
      {
        "name": "Microsoft Azure",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "Azure Services"]
      },
      {
        "name": "Google Cloud Platform (GCP)",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "GCP Services"]
      },
      {
        "name": "InVision",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Management", "Design Thinking"]
      },
      {
        "name": "UserTesting",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Usability Testing", "User Research", "UX Strategy"]
      },
       {
        "name": "Black Division Games",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Programming", "Unity", "Unreal Engine"]
      },
      {
        "name": "Brookhouse School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Teaching", "Curriculum Development", "Educational Leadership"]
    },
    {
        "name": "Riara Group of Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Early Childhood Education", "Special Needs Education", "Educational Psychology"]
    },
    {
        "name": "Braeburn Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Secondary Education", "Mathematics", "Science Education"]
    },
    {
        "name": "Hillcrest International Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["International Baccalaureate", "English Literature", "History"]
    },
    {
        "name": "Peponi School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Boarding School Management", "Sports Coaching", "Drama and Theatre"]
    },
    {
        "name": "Cavendish University Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Law", "Business", "Public Health"]
    },
    {
        "name": "Africa International University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Theology", "Education", "Business"]
    },
    {
        "name": "Great Lakes University of Kisumu",
        "industry": "Education & Training",
        "location": "Kisumu",
        "courses": ["Public Health", "Community Development", "Business"]
    },
    {
        "name": "Kisii University",
        "industry": "Education & Training",
        "location": "Kisii",
        "courses": ["Education", "Agriculture", "Business"]
    },
    {
        "name": "University of Eldoret",
        "industry": "Education & Training",
        "location": "Eldoret",
        "courses": ["Agriculture", "Forestry", "Education"]
    },
    {
        "name": "MMU",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Education", "Engineering", "Business"]
    },
    {
        "name": "Africa Digital Media Institute",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Film", "Photography", "Animation"]
    },
   {
        "name": "Coulson Harney",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Corporate Law", "Real Estate Law"]
    },
    {
        "name": "Kaplan & Stratton",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Commercial Law", "Intellectual Property Law"]
    },
    {
        "name": "Bowmans",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Mergers and Acquisitions", "Banking Law"]
    },
    {
        "name": "DLA Piper Africa",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "International Law", "Energy Law"]
    },
    {
        "name": "ALN Kenya | Anjarwalla & Khanna",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Tax Law", "Employment Law"]
    },
    {
        "name": "MMC Africa Law",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Litigation", "Arbitration"]
    },
   {
        "name": "Citizen TV",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media"]
    },
    {
        "name": "KTN",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Film", "Television", "News"]
    },
    {
        "name": "NTV",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Digital", "Radio", "Television"]
    },
    {
        "name": "The Star",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Writing", "Editing", "Photography"]
    },
    {
        "name": "Business Daily",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Business Writing", "Economic Analysis", "Financial Reporting"]
    },
    {
        "name": "People Daily",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Writing", "Editing", "Current Affairs"]
    },
    {
        "name": "Tribe Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality", "Hotel Management", "Customer Relations"]
    },
    {
        "name": "Hemingways Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Operations", "Event Planning", "Concierge Services"]
    },
    {
        "name": "Sankara Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Food and Beverage Management", "Restaurant Operations", "Bar Management"]
    },
    {
        "name": "The Boma Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Sustainable Tourism", "Community Engagement", "Cultural Heritage"]
    },
    {
        "name": "Safari Park Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Event Management", "Conference Planning", "Exhibition Coordination"]
    },
   {
        "name": "Stanbic Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Banking", "Finance", "Investment"]
    },
    {
        "name": "Equity Investment Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Investment Banking", "Financial Analysis", "Wealth Management"]
    },
    {
        "name": "Old Mutual",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Insurance", "Actuarial Science", "Risk Management"]
    },
    {
        "name": "ICEA LION Group",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Financial Planning", "Investment Advisory", "Pension Management"]
    },
    {
        "name": "Sanlam Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Insurance", "Financial Services", "Investment Management"]
    },
    {
        "name": "Carrefour",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Inventory Management", "Distribution"]
    },
    {
        "name": "Naivas Supermarket",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Retail Management", "Supply Chain Operations", "Warehouse Management"]
    },
    {
        "name": "Quickmart Supermarket",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Analysis", "Logistics Coordination", "Procurement"]
    },
    {
        "name": "Tuskys Supermarket",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Planning", "Demand Forecasting", "Transportation Management"]
    },
    {
        "name": "Uchumi Supermarket",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Inventory Control", "Logistics Optimization", "Distribution Strategy"]
    },
    {
        "name": "Del Monte Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Thika",
        "courses": ["Fruit Processing", "Food Technology", "Agricultural Science"]
    },
    {
        "name": "Kakuzi Plc",
        "industry": "Agriculture & Environmental Science",
        "location": "Murang'a",
        "courses": ["Avocado Farming", "Macadamia Cultivation", "Horticulture"]
    },
    {
        "name": "Homegrown Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Vegetable Production", "Organic Farming", "Crop Management"]
    },
    {
        "name": "Twiga Foods",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Supply Chain", "Food Distribution", "Agri-Tech"]
    },
    {
        "name": "JWT Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Brand Management", "Advertising Strategy", "Creative Campaigns"]
    },
    {
        "name": "BBDO East Africa",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing Research", "Consumer Insights", "Digital Advertising"]
    },
    {
        "name": "Saatchi & Saatchi",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising Production", "Media Buying", "Social Media Marketing"]
    },
    {
        "name": "Havas Media",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Media Planning", "Digital Strategy", "Content Marketing"]
    },
    {
        "name": "Edelman Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Public Relations", "Corporate Communications", "Crisis Management"]
    },
    {
        "name": "Kenyatta University Teaching, Referral & Research Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Surgery", "Nursing"]
    },
    {
        "name": "Avenue Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medical Administration", "Clinical Research", "Public Health"]
    },
    {
        "name": "The Karen Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Cardiology", "Oncology", "Neurosurgery"]
    },
    {
        "name": "Mater Misericordiae Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Obstetrics", "Pediatrics", "Internal Medicine"]
    },
    {
        "name": "Coptic Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Ophthalmology", "Dentistry", "Pharmacy"]
    },
    {
        "name": "Mumias Sugar Company",
        "industry": "Engineering & Manufacturing",
        "location": "Kakamega",
        "courses": ["Sugar Production", "Process Engineering", "Quality Control"]
    },
    {
        "name": "ARM Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Cement Manufacturing", "Civil Engineering", "Construction Materials"]
    },
    {
        "name": "Eldoret Steel Mills",
        "industry": "Engineering & Manufacturing",
        "location": "Eldoret",
        "courses": ["Steel Production", "Metallurgy", "Mechanical Engineering"]
    },
    {
        "name": "Simba Corp",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Automotive Engineering", "Vehicle Maintenance", "Sales and Marketing"]
    },
    {
        "name": "Insteel Limited",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Steel Fabrication", "Structural Engineering", "Manufacturing Processes"]
    },
     {
        "name": "M-Pesa Foundation Academy",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Data Science", "Cybersecurity"]
    },
    {
        "name": "iHub",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Web Development", "Mobile App Development"]
    },
    {
        "name": "Gearbox",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Embedded Systems", "IoT", "Hardware Development"]
    },
    {
        "name": "LakeHub",
        "industry": "Programming & Software Development",
        "location": "Kisumu",
        "courses": ["Web Development", "Mobile App Development", "Digital Marketing"]
    },
    {
        "name": "Nairobi Dev School",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Full-Stack Development", "Frontend Development", "Backend Development"]
    },
    {
        "name": "Andela",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Frontend Development", "Backend Development", "Full-Stack Development"]
    },
    {
        "name": "Moringa School",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Frontend Development", "Backend Development", "Full-Stack Development"]
    },
    {
        "name": "WeThinkCode_",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Frontend Development", "Backend Development", "Full-Stack Development"]
    },
    {
        "name": "AfriBlocks",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Frontend Development", "Backend Development", "Full-Stack Development"]
    },
   {
        "name": "Google AI Research",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Deep Learning", "Natural Language Processing"]
    },
    {
        "name": "Microsoft AI Research",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Deep Learning", "Computer Vision"]
    },
    {
        "name": "IBM Research Africa",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Deep Learning", "Data Science"]
    },
    {
        "name": "DeepMind",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Deep Learning", "Reinforcement Learning"]
    },
     {
        "name": "Data Science Africa",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Data Visualization"]
    },
    {
        "name": "Africa Data Hub",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Data Analysis", "Data Engineering"]
    },
   {
        "name": "K Cyber Security",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "Ethical Hacking", "Network Security"]
    },
    {
        "name": "Intrasoft Technologies",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "Ethical Hacking", "Penetration Testing"]
    },
    {
        "name": "Liquid Telecom",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "Cloud Architecture"]
    },
    {
        "name": "Safaricom Cloud",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "Cloud Engineering"]
    },
   {
        "name": "UI/UX Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Management", "Design Thinking"]
    },
    {
        "name": "Design Kenya Society",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Development", "Interaction Design"]
    },
    {
        "name": "Blockchain Association of Kenya",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Development", "Cryptocurrency", "Decentralized Applications"]
    },
     {
        "name": "Ludique Works",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Development", "Game Art"]
    },
    {
        "name": "Nova Pioneer Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Teaching", "Leadership", "Curriculum Development"]
      },
      {
        "name": "Bridge International Academies",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Education Management", "Instructional Design", "Technology in Education"]
      },
      {
        "name": "SPARK Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Primary Education", "Educational Technology", "Special Education"]
      },
      {
        "name": "Crawford International School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["IB Program", "Cambridge Curriculum", "Extracurricular Activities"]
      },
      {
        "name": "Rosslyn Academy",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["American Curriculum", "International Education", "Student Affairs"]
      },
      {
        "name": "Moi University",
        "industry": "Education & Training",
        "location": "Eldoret",
        "courses": ["Engineering", "Medicine", "Agriculture"]
      },
      {
        "name": "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Engineering", "Agriculture", "Technology"]
      },
      {
        "name": "Maseno University",
        "industry": "Education & Training",
        "location": "Kisumu",
        "courses": ["Education", "Arts", "Science"]
      },
      {
        "name": "Egerton University",
        "industry": "Education & Training",
        "location": "Nakuru",
        "courses": ["Agriculture", "Veterinary Medicine", "Engineering"]
      },
      {
        "name": "Dedan Kimathi University of Technology",
        "industry": "Education & Training",
        "location": "Nyeri",
        "courses": ["Engineering", "Technology", "Business"]
      },
      {
        "name": "Umma University",
        "industry": "Education & Training",
        "location": "Kajiado",
        "courses": ["Islamic Studies", "Business", "Education"]
      },
      {
        "name": "Pan Africa Christian University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Theology", "Business", "Counseling Psychology"]
      },
      {
        "name": "Hamilton Harrison & Mathews",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Corporate Law", "Commercial Litigation", "Banking Law"]
      },
      {
        "name": "Dentons Hamilton Harrison & Mathews",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Real Estate Law", "Intellectual Property", "Employment Law"]
      },
      {
        "name": "Walker Kontos Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Civil Litigation", "Criminal Law", "Family Law"]
      },
      {
        "name": "Njoroge Regeru & Company Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Environmental Law", "Human Rights Law", "Constitutional Law"]
      },
      {
        "name": "Iseme, Kamau & Maema Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Arbitration", "Mediation", "Dispute Resolution"]
      },
      {
        "name": "Otieno Omuga & Ouma Advocates",
        "industry": "Law & Legal Services",
        "location": "Kisumu",
        "courses": ["Land Law", "Succession Law", "Insurance Law"]
      },
      {
        "name": "Nation Media Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Photography", "Graphic Design"]
      },
      {
        "name": "Kenya News Agency",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Reporting", "Editing", "News Production"]
      },
      {
        "name": "Associated Press",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["International News", "Feature Writing", "Investigative Journalism"]
      },
      {
        "name": "Reuters",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Financial Reporting", "Breaking News", "Global Affairs"]
      },
      {
        "name": "BBC Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Broadcast Journalism", "Documentary Production", "Digital Media"]
      },
      {
        "name": "CNN",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Television Production", "News Anchoring", "Political Reporting"]
      },
      {
        "name": "DusitD2 Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Guest Relations", "Event Coordination"]
      },
      {
        "name": "Crowne Plaza Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Food & Beverage Service", "Catering Management", "Culinary Arts"]
      },
      {
        "name": "Radisson Blu Hotel Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Rooms Division Management", "Front Office Operations", "Housekeeping"]
      },
      {
        "name": "Hilton Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Sales & Marketing", "Revenue Management", "Customer Service"]
      },
      {
        "name": "InterContinental Hotel Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Conference & Banqueting", "Event Planning", "Meeting Management"]
      },
      {
        "name": "Kenya Commercial Bank (KCB)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Banking Operations", "Financial Analysis", "Credit Management"]
      },
      {
        "name": "Standard Chartered Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Investment Banking", "Corporate Finance", "Treasury Management"]
      },
      {
        "name": "Citibank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Global Markets", "Trade Finance", "Risk Management"]
      },
      {
        "name": "Equity Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Retail Banking", "SME Banking", "Microfinance"]
      },
      {
        "name": "Bank of Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Commercial Banking", "International Banking", "Business Development"]
      },
      {
        "name": "Kenya Ports Authority",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Port Operations", "Shipping Management", "Logistics Coordination"]
      },
      {
        "name": "Express Kenya",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Freight Forwarding", "Customs Brokerage", "Transportation Planning"]
      },
      {
        "name": "Siginon Group",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Warehousing", "Distribution", "Supply Chain Optimization"]
      },
      {
        "name": "Trans Africa Motors",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Fleet Management", "Vehicle Maintenance", "Logistics Technology"]
      },
      {
        "name": "Multiple Hauliers",
        "industry": "Logistics & Supply Chain Management",
        "location": "Mombasa",
        "courses": ["Bulk Transportation", "Cross-Border Logistics", "Shipping"]
      },
      {
        "name": "Kenya Seed Company",
        "industry": "Agriculture & Environmental Science",
        "location": "Kitale",
        "courses": ["Seed Production", "Agronomy", "Crop Improvement"]
      },
      {
        "name": "Osho Chemical Industries",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agrochemicals", "Fertilizers", "Pest Control"]
      },
      {
        "name": "Elgon Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Crop Protection", "Soil Science", "Agricultural Marketing"]
      },
      {
        "name": "Vegpro Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Horticulture", "Floriculture", "Sustainable Agriculture"]
      },
      {
        "name": "Finlays",
        "industry": "Agriculture & Environmental Science",
        "location": "Kericho",
        "courses": ["Tea Plantation Management", "Sustainable Farming Practices", "Environmental Conservation"]
      },
      {
        "name": "Interactive Media Services (IMS)",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Digital Marketing", "Social Media Management", "Content Creation"]
      },
      {
        "name": "Yellow Pages Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising Sales", "Marketing Strategy", "Business Development"]
      },
      {
        "name": "Scanad Group",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising Campaigns", "Market Research", "Brand Communication"]
      },
      {
        "name": "Media Edge Interactive",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Media Planning", "Digital Advertising", "Search Engine Optimization (SEO)"]
      },
      {
        "name": "Tell-Em Public Relations",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Public Relations Strategy", "Media Relations", "Corporate Communication"]
      },
      {
        "name": "AMREF Health Africa",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Public Health", "Global Health", "Community Health"]
      },
      {
        "name": "PATH",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Health Technology", "Vaccine Development", "Disease Control"]
      },
      {
        "name": "Clinton Health Access Initiative (CHAI)",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Health Policy", "Health Systems", "Pharmaceutical Management"]
      },
      {
        "name": "Jhpiego",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Maternal Health", "Reproductive Health", "Family Planning"]
      },
      {
        "name": "FHI 360",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["HIV/AIDS Prevention", "Infectious Diseases", "Health Research"]
      },
      {
        "name": "Kenya Petroleum Refineries Limited",
        "industry": "Engineering & Manufacturing",
        "location": "Mombasa",
        "courses": ["Chemical Engineering", "Process Control", "Petroleum Engineering"]
      },
      {
        "name": "Athi River Mining (ARM) Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Civil Engineering", "Materials Science", "Quality Assurance"]
      },
      {
        "name": "Unga Group Limited",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Food Processing", "Mechanical Engineering", "Electrical Engineering"]
      },
      {
        "name": "Brookside Dairy Limited",
        "industry": "Engineering & Manufacturing",
        "location": "Ruiru",
        "courses": ["Dairy Technology", "Food Science", "Quality Control"]
      },
      {
        "name": "Orbit Chemical Industries Ltd",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Manufacturing", "Process Engineering", "Industrial Chemistry"]
      },
      {
        "name": "iLab Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Mobile Development", "Web Development", "Data Science"]
      },
      {
        "name": "AkiraChix",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Web Design", "Digital Skills"]
      },
      {
        "name": "mLab East Africa",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Mobile App Development", "UX/UI Design", "Entrepreneurship"]
      },
      {
        "name": "Sote Hub",
        "industry": "Programming & Software Development",
        "location": "Kisumu",
        "courses": ["Web Development", "Software Development", "Digital Marketing"]
      },
      {
        "name": "Techno Brain",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "IT Consulting", "Business Intelligence"]
      },
      {
        "name": "Angani",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Cloud Hosting", "Web Design", "Digital Marketing"]
      },
      {
        "name": "Kenya Website Experts",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "SEO", "E-commerce Solutions"]
      },
      {
        "name": "Brand Design Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Design", "Graphic Design", "Branding"]
      },
      {
        "name": "Creative Hub",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Design", "Digital Marketing", "Content Creation"]
      },
      {
        "name": "The Netlink Group",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Hosting", "Domain Registration", "Web Security"]
      },
      {
        "name": "Okoa AI",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Data Science", "AI Applications"]
      },
      {
        "name": "Instadeep",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Deep Learning", "Natural Language Processing", "Computer Vision"]
      },
      {
        "name": "Africa AI",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI Strategy", "Data Analytics", "AI Ethics"]
      },
      {
        "name": "Explore AI Academy",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI Education", "Machine Learning", "Data Science"]
      },
      {
        "name": "Sama",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Annotation", "Data Training", "AI Solutions"]
      },
      {
        "name": "Cloud Factory",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Processing", "Machine Learning", "Data Analysis"]
      },
      {
        "name": "CyberSec Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity Training", "Ethical Hacking", "Security Audits"]
      },
      {
        "name": "Information Systems Audit and Control Association (ISACA)",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity Certifications", "IT Governance", "Risk Management"]
      },
      {
        "name": "Africa Cloud",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Solutions", "Cloud Migration", "Cloud Security"]
      },
      {
        "name": "Dimension Data",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Services", "DevOps Consulting", "Managed Services"]
      },
      {
        "name": "UX Design Kenya",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UX Research", "UI Design", "Usability Testing"]
      },
      {
        "name": "Nairobi Design Institute",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Design Thinking", "Product Design", "User-Centered Design"]
      },
      {
        "name": "Kenya Blockchain Association",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Technology", "Cryptocurrency", "Decentralized Finance (DeFi)"]
      },
      {
        "name": "Nendo",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Art", "Game Programming"]
      },
      {
        "name": "Amref Health Africa",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Public Health", "Research", "Medical Training"]
      },
      {
        "name": "Moringa School",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Data Science", "Web Development"]
      },
      {
        "name": "iHub",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Technology Innovation", "Entrepreneurship", "Software Development"]
      },
      {
        "name": "Safaricom PLC",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Network Engineering", "Software Development", "IT Support"]
      },
      {
        "name": "KCB Group",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Accounting"]
      },
      {
        "name": "Equity Group Holdings",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Investment Management"]
      },
      {
        "name": "Co-operative Bank of Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Risk Management"]
      },
      {
        "name": "Absa Bank Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Customer Service"]
      },
      {
        "name": "Standard Chartered Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Compliance"]
      },
      {
        "name": "DTB Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Operations"]
      },
      {
        "name": "NCBA Group",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Credit Analysis"]
      },
      {
        "name": "I&M Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Wealth Management"]
      },
      {
        "name": "Kenyatta University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Education", "Sciences", "Arts"]
      },
      {
        "name": "University of Nairobi",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Engineering", "Medicine", "Law"]
      },
      {
        "name": "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Engineering", "Agriculture", "Technology"]
      },
     
      {
        "name": "Multimedia University of Kenya",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Media Studies", "IT", "Business"]
      },
      {
        "name": "Riara University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Law", "Business", "Education"]
      },
      {
        "name": "Daystar University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Communication", "Business", "Arts"]
      },
      {
        "name": "Africa Nazarene University",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Law", "Theology", "Business"]
      },
      {
        "name": "Catholic University of Eastern Africa (CUEA)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Theology", "Law", "Business"]
      },
      {
        "name": "Daly & Inamdar Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Commercial Law", "Property Law"]
      },
      {
        "name": "Kaplan & Stratton Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Banking Law", "Insurance Law"]
      },
      {
        "name": "Anjarwalla & Khanna",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Tax Law", "Environmental Law"]
      },
      {
        "name": "Coulson Harney Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Employment Law", "Intellectual Property Law"]
      },
      {
        "name": "Oraro & Company Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Dispute Resolution", "Construction Law"]
      },
      {
        "name": "TripleOKLaw Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Real Estate Law", "Family Law"]
      },
      {
        "name": "NTV Kenya",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Media Production"]
      },
      {
        "name": "Citizen TV",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media"]
      },
      {
        "name": "KTN News",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "News Reporting", "Media Technology"]
      },
      {
        "name": "The Standard Group PLC",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Publishing", "Digital Media"]
      },
      {
        "name": "Radio Africa Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Media Management"]
      },
      {
        "name": "Royal Media Services",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media"]
      },
      {
        "name": "Kenya Broadcasting Corporation (KBC)",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Media Technology"]
      },
      {
        "name": "Serena Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Tourism", "Culinary Arts"]
      },
      {
        "name": "Sarova Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Event Planning"]
      },
      {
        "name": "Villa Rosa Kempinski",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Customer Service", "Food and Beverage Management"]
      },
      {
        "name": "Radisson Blu Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Sales and Marketing", "Event Coordination"]
      },
      {
        "name": "The Tribe Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Guest Relations", "Concierge Services"]
      },
      {
        "name": "Safari Park Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Recreation Management"]
      },
      {
        "name": "Fairmont The Norfolk",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Customer Service", "Culinary Arts"]
      },
       {
        "name": "Crowne Plaza Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Business Administration", "Marketing"]
      },
      {
        "name": "Siginon Group",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Freight Forwarding", "Warehousing"]
      },
      {
        "name": "Mitchell Cotts",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Shipping", "Clearing and Forwarding", "Supply Chain Solutions"]
      },
      {
        "name": "Bollore Transport & Logistics",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics Management", "Transportation", "Customs Brokerage"]
      },
       {
        "name": "DHL",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Courier Services", "Supply Chain Solutions"]
      },
      {
        "name": "Kuehne + Nagel",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics Management", "Freight", "Contract Logistics"]
      },
      {
        "name": "TNT Express",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Courier Services", "Logistics", "Supply Chain Management"]
      },
      {
        "name": "FedEx",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Shipping", "Supply Chain Solutions"]
      },
      {
        "name": "Twiga Foods",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Science", "Supply Chain Management", "Data Analytics"]
      },
      {
        "name": "SunCulture",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Engineering", "Renewable Energy", "Sustainable Agriculture"]
      },
      {
        "name": "Apollo Agriculture",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agronomy", "Data Science", "Financial Analysis"]
      },
      {
        "name": "iProcure",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Procurement", "Agricultural Technology"]
      },
      {
        "name": "Kilimo Trust",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Development", "Project Management", "Community Development"]
      },
      {
        "name": "One Acre Fund",
        "industry": "Agriculture & Environmental Science",
        "location": "Kakamega",
        "courses": ["Agricultural Science", "Microfinance", "Rural Development"]
      },
       {
        "name": "Kenya Forest Service",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Forestry", "Environmental Science", "Natural Resource Management"]
      },
      {
        "name": "Ogilvy Africa",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Public Relations"]
      },
      {
        "name": "Scanad",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Brand Management"]
      },
      {
        "name": "WPP-Scangroup",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Communications", "Digital Advertising"]
      },
      {
        "name": "TBWARAAD Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Creative Strategy", "Digital Marketing"]
      },
      {
        "name": "Dentsu Aegis Network",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Media Planning", "Digital Marketing"]
      },
      {
        "name": "MediaCom",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Media Planning", "Advertising", "Digital Strategy"]
      },
      {
        "name": "PwC Kenya",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analytics", "Business Intelligence", "Statistical Analysis"]
      },
      {
        "name": "Deloitte Kenya",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Data Engineering"]
      },
       {
        "name": "Ernst & Young (EY) Kenya",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analytics", "Data Visualization", "Predictive Modeling"]
      },
       {
        "name": "KPMG Kenya",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analysis", "Data Mining", "Statistical Modeling"]
      },
       {
        "name": "Maseno University",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Kisumu",
        "courses": ["Artificial Intelligence", "Machine Learning", "Computer Science"]
      },
      {
        "name": "Dedan Kimathi University of Technology",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nyeri",
        "courses": ["Artificial Intelligence", "Robotics", "Data Science"]
      },
       {
        "name": "ICT Authority",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "Network Security", "Information Security"]
      },
      {
        "name": "Kenya National Highways Authority (KeNHA)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Civil Engineering", "Structural Engineering", "Project Management"]
      },
      {
        "name": "Kenya Pipeline Company",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Petroleum Engineering", "Process Engineering"]
      },
      {
        "name": "East African Breweries Limited (EABL)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Process Engineering", "Quality Control"]
      },
      {
        "name": "Brookside Dairy",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Food Science", "Dairy Technology", "Quality Assurance"]
      },
     {
        "name": "Kenya Bureau of Standards (KEBS)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Quality Assurance", "Standardization", "Metrology"]
      },
      {
        "name": "Car and General",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Automotive Engineering", "Sales and Marketing"]
      },
      {
        "name": "Davis & Shirtliff",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Mechanical Engineering", "Water Engineering"]
      },
      {
        "name": "ARM Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Mining Engineering", "Environmental Science"]
      },
      {
        "name": "Google",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "Software Development", "DevOps"]
      },
      {
        "name": "Microsoft",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "Software Engineering", "System Administration"]
      },
     {
        "name": "Amazon Web Services (AWS)",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "System Architecture"]
      },
      {
        "name": "IBM",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "Software Development", "IT Infrastructure"]
      },
      {
        "name": "Oracle",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "Database Management", "System Administration"]
      },
      {
        "name": "Safaricom",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "Network Engineering", "Software Development"]
      },
     {
        "name": "MPESA Foundation Academy",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Management", "Web Development"]
      },
      {
        "name": "Design Thinking Society of Kenya",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Design Thinking", "User Research", "Interaction Design"]
      },
      {
        "name": "Livity Africa",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Digital Design", "UI/UX", "Creative Problem Solving"]
      },
      {
        "name": "Gearbox",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["Product Design", "Prototyping", "Innovation"]
      },
      {
        "name": "BlackRhino VR",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Virtual Reality", "Augmented Reality", "Game Design"]
      },
      {
        "name": "Usiku Games",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Development", "Animation"]
      },
     {
        "name": "Nairobi Game Developers Community",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Development", "Programming", "Art and Animation"]
      },
      {
        "name": "Internet of Things (IoT) Kenya",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["IoT", "Blockchain", "Web Development"]
      },
      {
        "name": "BitHub Africa",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Technology", "Cryptocurrency", "Web3 Development"]
      },
       {
        "name": "Africa Blockchain Developers",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Development", "Smart Contracts", "Decentralized Applications"]
      },
      {
        "name": "Kenya Red Cross Society",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Nursing", "Public Health", "Disaster Management"]
    },
    {
        "name": "AAR Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Healthcare Management", "Medical Technology"]
    },
    {
        "name": "Gertrude's Children's Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Pediatrics", "Nursing", "Pharmacy"]
    },
    {
        "name": "Aga Khan University Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Medical Research"]
    },
    {
        "name": "MP Shah Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Surgery", "Anesthesiology"]
    },
    {
        "name": "Nairobi Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Medical Imaging"]
    },
    {
        "name": "Coptic Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Surgery", "Internal Medicine"]
    },
    {
        "name": "Avenue Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Clinical Services"]
    },
    {
        "name": "The Nairobi Women's Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Obstetrics & Gynecology", "Nursing", "Pediatrics"]
    },
    {
        "name": "Karen Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Cardiology", "Oncology"]
    },
    {
        "name": "Getrude's Childrens Hospital",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Accounting", "Business Administration"]
    },
    {
        "name": "Little Red School House",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Early Childhood Education", "Special Education", "Curriculum Development"]
    },
    {
        "name": "Brookhouse School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Secondary Education", "IB Program", "STEM Education"]
    },
    {
        "name": "Braeburn School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Primary Education", "Secondary Education", "Arts and Humanities"]
    },
    {
        "name": "Hillcrest International Schools",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["International Education", "Cambridge Curriculum", "Co-curricular Activities"]
    },
    {
        "name": "Rosslyn Academy",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["American Curriculum", "Christian Education", "Leadership Development"]
    },
    {
        "name": "St. Andrews Turi",
        "industry": "Education & Training",
        "location": "Nakuru",
        "courses": ["British Curriculum", "Boarding School", "Sports and Arts"]
    },
    {
        "name": "Peponi School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Secondary Education", "A-Levels", "University Preparation"]
    },
    {
        "name": "Kenton College Preparatory School",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Primary Education", "British Curriculum", "Character Development"]
    },
    {
        "name": "International School of Kenya (ISK)",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["International Baccalaureate", "Global Citizenship", "Experiential Learning"]
    },
    {
        "name": "Oraro & Company Advocates",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Accounting", "Auditing"]
    },
    {
        "name": "Bowmans Kenya",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Corporate Law", "Commercial Litigation", "Intellectual Property Law"]
    },
    {
        "name": "Dentons Hamilton Harrison & Mathews",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Banking Law", "Real Estate Law", "Tax Law"]
    },
    {
        "name": "ALN Kenya | Anjarwalla & Khanna",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Mergers and Acquisitions", "Energy Law", "Project Finance"]
    },
    {
        "name": "Kaplan & Stratton",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Constitutional Law", "Human Rights Law", "Environmental Law"]
    },
    {
        "name": "Daly & Inamdar Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Family Law", "Criminal Law", "Civil Litigation"]
    },
    {
        "name": "Coulson Harney",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Employment Law", "Insurance Law", "Arbitration"]
    },
    {
        "name": "TripleOKLaw Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["ICT Law", "Privacy Law", "Cybersecurity Law"]
    },
    {
        "name": "MMC Africa Law",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Competition Law", "Consumer Protection Law", "Trade Law"]
    },
    {
        "name": "Walker Kontos Advocates",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Shipping Law", "Aviation Law", "Maritime Law"]
    },
    {
        "name": "Royal Media Services",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Digital Marketing", "Public Relations", "Advertising"]
    },
    {
        "name": "The Standard Group PLC",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Social Media Marketing", "Content Strategy", "Brand Management"]
    },
    {
        "name": "Nation Media Group",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Creative Writing", "Graphic Design", "Media Planning"]
    },
    {
        "name": "Radio Africa Group",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Broadcast Journalism", "Radio Production", "Voice Acting"]
    },
    {
        "name": "Kenya Broadcasting Corporation (KBC)",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Television Production", "Film Making", "Script Writing"]
    },
    {
        "name": "Switch Media",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Video Editing", "Motion Graphics", "Animation"]
    },
    {
        "name": "Mediamax Network Limited",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Broadcasting", "Digital Media"]
    },
    {
        "name": "Citizen TV",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Media Studies", "Communication", "Public Relations"]
    },
    {
        "name": "NTV Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Journalism", "Digital Media", "Content Creation"]
    },
    {
        "name": "KTN News",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["News Reporting", "Current Affairs", "Investigative Journalism"]
    },
    {
        "name": "Serena Hotels",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Accounting", "Business Administration", "Finance"]
    },
    {
        "name": "Sarova Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Culinary Arts", "Tourism Management"]
    },
    {
        "name": "Villa Rosa Kempinski",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Food and Beverage Management", "Event Planning", "Customer Service"]
    },
    {
        "name": "Radisson Blu Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Sales and Marketing", "Event Coordination"]
    },
    {
        "name": "The Tribe Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Guest Relations", "Concierge Services", "Front Office Operations"]
    },
    {
        "name": "Safari Park Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Tourism", "Recreation Management", "Entertainment"]
    },
    {
        "name": "Fairmont The Norfolk",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Culinary Arts", "Pastry and Baking", "Restaurant Management"]
    },
    {
        "name": "Hemingways Collection",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Luxury Hospitality", "Boutique Hotel Management", "Wildlife Tourism"]
    },
    {
        "name": "Sankara Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Operations", "Revenue Management", "Digital Marketing"]
    },
    {
        "name": "Crowne Plaza Nairobi",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Business Administration", "Marketing", "Event Planning"]
    },
    {
        "name": "Siginon Group",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Customer Service", "Hospitality", "Tourism"]
    },
    {
        "name": "Mitchell Cotts",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Shipping", "Clearing and Forwarding", "Supply Chain Solutions"]
    },
    {
        "name": "Bollore Transport & Logistics",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics Management", "Transportation", "Customs Brokerage"]
    },
    {
        "name": "DHL",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Courier Services", "Supply Chain Solutions", "Warehouse Management"]
    },
    {
        "name": "Kuehne + Nagel",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Freight", "Contract Logistics", "Distribution Management"]
    },
    {
        "name": "TNT Express",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Courier Services", "Logistics", "Supply Chain Management"]
    },
    {
        "name": "FedEx",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Shipping", "Supply Chain Solutions", "Global Logistics"]
    },
    {
        "name": "Lamu Port-South Sudan-Ethiopia Transport (LAPSSET) Corridor Development Authority",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Infrastructure Development", "Project Management", "Logistics Planning"]
    },
    {
        "name": "Kenya Railways Corporation",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Rail Transport", "Freight Logistics", "Infrastructure Management"]
    },
    {
        "name": "Twiga Foods",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Agricultural Logistics", "E-Commerce"]
    },
    {
        "name": "SunCulture",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Development", "Marketing"]
    },
    {
        "name": "Apollo Agriculture",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agronomy", "Data Science", "Financial Analysis"]
    },
    {
        "name": "iProcure",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Procurement", "Agricultural Technology"]
    },
    {
        "name": "Kilimo Trust",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agricultural Development", "Project Management", "Community Development"]
    },
    {
        "name": "One Acre Fund",
        "industry": "Agriculture & Environmental Science",
        "location": "Kakamega",
        "courses": ["Agricultural Science", "Microfinance", "Rural Development"]
    },
    {
        "name": "Kenya Forest Service",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Forestry", "Environmental Science", "Natural Resource Management"]
    },
    {
        "name": "National Environment Management Authority (NEMA)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Environmental Policy", "Compliance", "Assessment"]
    },
    {
        "name": "World Agroforestry Centre (ICRAF)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agroforestry", "Sustainable Agriculture", "Climate Change"]
    },
    {
        "name": "Ogilvy Africa",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Environmental Science", "Research"]
    },
    {
        "name": "Scanad",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Machine Learning", "Data Science", "AI Development"]
    },
    {
        "name": "WPP-Scangroup",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Network Security", "Ethical Hacking", "Cybersecurity Analysis"]
    },
    {
        "name": "TBWARAAD Kenya",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps Practices", "System Administration"]
    },
    {
        "name": "Dentsu Aegis Network",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["AI", "Data Science", "Machine Learning"]
    },
    {
        "name": "MediaCom",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analysis", "Statistical Modeling", "Business Intelligence"]
    },
    {
        "name": "PwC Kenya",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Web Development", "Mobile App Development"]
    },
    {
        "name": "Deloitte Kenya",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Front-End Development", "Back-End Development", "Full-Stack Development"]
    },
    {
        "name": "Ernst & Young (EY) Kenya",
        "industry": "Blockchain & Web3",
        "location": "Nairobi",
        "courses": ["Blockchain Technology", "Cryptocurrency", "Decentralized Applications"]
    },
    {
        "name": "KPMG Kenya",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Development", "Animation"]
    },
    {
        "name": "Maseno University",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Kisumu",
        "courses": ["Cybersecurity", "Network Security", "Ethical Hacking"]
    },
    {
        "name": "Dedan Kimathi University of Technology",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nyeri",
        "courses": ["Artificial Intelligence", "Robotics", "Data Science"]
    },
    {
        "name": "ICT Authority",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Artificial Intelligence", "Data Science", "Cloud Computing"]
    },
    {
        "name": "Kenya National Highways Authority (KeNHA)",
        "industry": "Artificial Intelligence & Machine Learning",
        "location": "Nairobi",
        "courses": ["Artificial Intelligence", "Civil Engineering", "Project Management"]
    },
    {
        "name": "Kenya Pipeline Company",
        "industry": "Cloud Computing & DevOps",
        "location": "Nairobi",
        "courses": ["Cloud Computing", "DevOps", "Software Engineering"]
    },
    {
        "name": "East African Breweries Limited (EABL)",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Sustainability", "Environmental Management"]
    },
    {
        "name": "Brookside Dairy",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Food Science", "Dairy Technology", "Quality Assurance"]
    },
    {
        "name": "Kenya Bureau of Standards (KEBS)",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Compliance", "Regulations"]
    },
    {
        "name": "Car and General",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Sales"]
    },
    {
        "name": "Davis & Shirtliff",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain", "Distribution"]
    },
    {
        "name": "ARM Cement",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Analysis", "Statistical Analysis", "Data Mining"]
    },
    {
        "name": "Google",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Environmental Studies", "Sustainability"]
    },
    {
        "name": "Microsoft",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["UI/UX Design", "Product Management", "Human-Computer Interaction"]
    },
    {
        "name": "Amazon Web Services (AWS)",
        "industry": "Game Development",
        "location": "Nairobi",
        "courses": ["Game Design", "Game Development", "Computer Graphics"]
    },
    {
        "name": "IBM",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Media Production", "Broadcasting", "Journalism"]
    },
    {
        "name": "Oracle",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Education", "Teaching", "Curriculum Development"]
    },
    {
        "name": "Design Thinking Society of Kenya",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Legal Studies", "Human Rights"]
    },
    {
        "name": "Livity Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Media", "Communication", "Film"]
    },
    {
        "name": "Gearbox",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality", "Tourism", "Event Management"]
    },
    {
        "name": "BlackRhino VR",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Accounting", "Economics"]
    },
    {
        "name": "Usiku Games",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain", "Transportation"]
    },
    {
        "name": "Nairobi Game Developers Community",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Environmental Science", "Sustainability"]
    },
    {
        "name": "Internet of Things (IoT) Kenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Public Relations"]
    },
    {
        "name": "BitHub Africa",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Healthcare", "Medicine", "Nursing"]
    },
    {
        "name": "Africa Blockchain Developers",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Engineering", "Manufacturing", "Product Design"]
    },
    {
        "name": "Andela",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Development", "Data Science", "Cloud Computing"]
      },
      {
        "name": "Safaricom",
        "industry": "Telecommunications",
        "location": "Nairobi",
        "courses": ["Network Engineering", "Software Development", "Business Analytics"]
      },
      {
        "name": "Cellulant",
        "industry": "Fintech",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Mobile Development", "Data Science"]
      },
      {
        "name": "Africa Data Technologies",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Data Engineering"]
      },
      {
        "name": "iHub",
        "industry": "Technology Innovation",
        "location": "Nairobi",
        "courses": ["Software Development", "Entrepreneurship", "Design Thinking"]
      },
      {
        "name": "M-KOPA",
        "industry": "Fintech",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Data Analysis", "Financial Modeling"]
      },
      {
        "name": "Branch International",
        "industry": "Fintech",
        "location": "Nairobi",
        "courses": ["Data Science", "Software Development", "Mobile Payments"]
      },
      {
        "name": "Tala",
        "industry": "Fintech",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Mobile Development"]
      },
      {
        "name": "Craft Silicon",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Database Management", "Web Development"]
      },
      {
        "name": "Seven Seas Technologies",
        "industry": "Technology Solutions",
        "location": "Nairobi",
        "courses": ["IT Consulting", "Software Implementation", "Network Solutions"]
      },
      {
        "name": "KOKO Networks",
        "industry": "Technology & Energy",
        "location": "Nairobi",
        "courses": ["Software Engineering", "IoT", "Data Analytics"]
      },
      {
        "name": "SolarNow",
        "industry": "Renewable Energy",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Renewable Energy Systems", "Sales & Marketing"]
      },
      {
        "name": "PowerGen Renewable Energy",
        "industry": "Renewable Energy",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Project Management", "Business Development"]
      },
      {
        "name": "Off Grid Electric",
        "industry": "Renewable Energy",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Software Development", "Data Analysis"]
      },
      {
        "name": "d.light",
        "industry": "Renewable Energy",
        "location": "Nairobi",
        "courses": ["Product Design", "Marketing", "Sales"]
      },
      {
        "name": "Sanergy",
        "industry": "Environmental Solutions",
        "location": "Nairobi",
        "courses": ["Environmental Engineering", "Business Development", "Logistics"]
      },
      {
        "name": "Ecotact",
        "industry": "Environmental Conservation",
        "location": "Nairobi",
        "courses": ["Environmental Science", "Wildlife Management", "Community Development"]
      },
      {
        "name": "Space Kenya",
        "industry": "Real Estate",
        "location": "Nairobi",
        "courses": ["Architecture", "Project Management", "Sales & Marketing"]
      },
       {
        "name": "Knight Frank Kenya",
        "industry": "Real Estate",
        "location": "Nairobi",
        "courses": ["Real Estate Management", "Property Valuation", "Market Research"]
      },
      {
        "name": "Hass Consult",
        "industry": "Real Estate",
        "location": "Nairobi",
        "courses": ["Real Estate", "Sales and Marketing", "Property Management"]
      },
      {
        "name": "Villa Care",
        "industry": "Real Estate",
        "location": "Nairobi",
        "courses": ["Property Management", "Customer Service", "Sales"]
      },
       {
        "name": "Regus",
        "industry": "Real Estate",
        "location": "Nairobi",
        "courses": ["Business Administration", "Customer Service", "Sales and Marketing"]
      },
       {
        "name": "Open Capital Advisors",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Financial Analysis", "Management Consulting", "Investment Analysis"]
      },
       {
        "name": "Penda Health",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Healthcare Management", "Clinical Medicine", "Nursing"]
      },
      {
        "name": "Gertrude's Children's Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Pediatrics", "Nursing", "Healthcare Administration"]
      },
      {
        "name": "AAR Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Nursing", "Healthcare Management"]
      },
      {
        "name": "Avenue Healthcare",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Clinical Medicine", "Nursing", "Pharmacy"]
      },
      {
        "name": "MP Shah Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medicine", "Surgery", "Nursing"]
      },
      {
        "name": "Nairobi Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medical Internships", "Nursing", "Pharmacy"]
      },
      {
        "name": "Kenyatta National Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Medical Internships", "Nursing", "Pharmacy"]
      },
      {
        "name": "Minet Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Insurance", "Risk Management", "Financial Analysis"]
      },
      {
        "name": "APA Insurance",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Underwriting", "Actuarial Science", "Insurance"]
      },
      {
        "name": "GA Insurance",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Underwriting", "Claims Management", "Insurance"]
      },
      {
        "name": "Madison Insurance",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Insurance", "Finance", "Customer Service"]
      },
      {
        "name": "Britam",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Actuarial Science", "Finance", "Investment"]
      },
       {
        "name": "Jubilee Insurance",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Healthcare Management", "Insurance", "Customer Service"]
      },
      {
        "name": "Longhorn Publishers",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Publishing", "Editorial", "Marketing"]
      },
      {
        "name": "East African Educational Publishers",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Publishing", "Editorial", "Sales and Marketing"]
      },
      {
        "name": "Oxford University Press East Africa",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Editorial", "Publishing", "Sales and Marketing"]
      },
      {
        "name": "Phoenix Publishers",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Publishing", "Editing", "Marketing"]
      },
      {
        "name": "Story Moja",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Creative Writing", "Publishing", "Journalism"]
      },
      {
        "name": "Nation Media Group",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Brand Management"]
      },
      {
        "name": "Standard Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Media Production", "Digital Marketing"]
      },
      {
        "name": "Radio Africa Group",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Radio Broadcasting", "Advertising"]
      },
      {
        "name": "Royal Media Services",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "TV Production", "Digital Media"]
      },
       {
        "name": "Switch Media",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Public Relations", "Marketing"]
      },
      {
        "name": "Sarova Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Culinary Arts", "Tourism"]
      },
      {
        "name": "Serena Hotels",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Culinary Arts"]
      },
      {
        "name": "Hemingways Collection",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Tourism", "Customer Service"]
      },
      {
        "name": "Tamarind Group",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Culinary Arts", "Restaurant Management", "Hospitality"]
      },
      {
        "name": "The Tribe Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hotel Management", "Customer Service", "Tourism"]
      },
      {
        "name": "Fairmont The Norfolk",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Tourism"]
      },
      {
        "name": "Villa Rosa Kempinski",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Tourism"]
      },
       {
        "name": "Java House",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Customer Service", "Public Relations"]
      },
      {
        "name": "Maersk",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Logistics", "Shipping"]
      },
      {
        "name": "DHL",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain", "Operations Management"]
      },
      {
        "name": "Schenker",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain Management", "Transportation"]
      },
      {
        "name": "Kuehne + Nagel",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain Management", "Freight Forwarding"]
      },
      {
        "name": "Lukenya University",
        "industry": "Education & Training",
        "location": "Makueni",
        "courses": ["Environmental Science", "Agriculture", "Research"]
      },
      {
        "name": "Del Monte Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Thika",
        "courses": ["Agronomy", "Food Science", "Agricultural Engineering"]
      },
      {
        "name": "Kakuzi",
        "industry": "Agriculture & Environmental Science",
        "location": "Murang'a",
        "courses": ["Agronomy", "Horticulture", "Agricultural Management"]
      },
      {
        "name": "Twiga Foods",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Agronomy", "Business Development"]
      },
       {
        "name": "CIFOR-ICRAF",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["GIS", "Remote Sensing", "Data Analysis"]
      },
      {
        "name": "Ogilvy Africa",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Public Relations", "Digital Marketing"]
      },
      {
        "name": "Scanad",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Brand Management", "Market Research"]
      },
      {
        "name": "TBWAKenya",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Digital Marketing", "Creative Strategy"]
      },
      {
        "name": "Dentsu Aegis Network",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Media Planning", "Digital Marketing", "Market Research"]
      },
      {
        "name": "WPP-Scangroup",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Advertising", "Public Relations", "Market Research"]
      },
      {
        "name": "Vivo Activewear",
        "industry": "Retail",
        "location": "Nairobi",
        "courses": ["Marketing", "Sales", "Supply Chain Management"]
      },
      {
        "name": "Naivas Supermarket",
        "industry": "Retail",
        "location": "Nairobi",
        "courses": ["Retail Management", "Supply Chain Management", "Marketing"]
      },
      {
        "name": "Tuskys Supermarket",
        "industry": "Retail",
        "location": "Nairobi",
        "courses": ["Retail Operations", "Marketing", "Supply Chain Management"]
      },
      {
        "name": "Quickmart Supermarket",
        "industry": "Retail",
        "location": "Nairobi",
        "courses": ["Retail Management", "Marketing", "Customer Service"]
      },
      {
        "name": "Artcafe",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Restaurant Management", "Culinary Arts", "Customer Service"]
      },
      {
        "name": "Brew Bistro",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Restaurant Management", "Culinary Arts", "Hospitality"]
      },
      {
        "name": "The Lord Erroll",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Restaurant Management", "Culinary Arts", "Hospitality"]
      },
      {
        "name": "CJ's",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Restaurant Management", "Customer Service", "Hospitality"]
      },
      {
        "name": "Sankara Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Tourism"]
      },
      {
        "name": "Radisson Blu Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Tourism"]
      },
      {
        "name": "Crowne Plaza Hotel",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Culinary Arts", "Tourism"]
      },
       {
        "name": "Kenya Airways",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Logistics", "Supply Chain Management", "Operations"]
      },
      {
        "name": "National Construction Authority (NCA)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Civil Engineering", "Construction Management", "Architecture"]
      },
      {
        "name": "Kenya Electricity Generating Company (KenGen)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Mechanical Engineering", "Renewable Energy"]
      },
      {
        "name": "Bamburi Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Chemical Engineering", "Process Engineering"]
      },
      {
        "name": "East African Breweries Limited (EABL)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Process Engineering", "Quality Control"]
      },
      {
        "name": "Brookside Dairy",
        "industry": "Engineering & Manufacturing",
        "location": "Ruiru",
        "courses": ["Food Science", "Process Engineering", "Quality Assurance"]
      },
       {
        "name": "Deloitte East Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "IT Audit", "Risk Management"]
      },
      {
        "name": "Davis & Shirtliff",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Electrical Engineering", "Sales Engineering"]
      },
      {
        "name": "Bidco Africa",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Accounting", "Marketing"]
      },
      {
        "name": "Absa Bank Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Acacia Innovations",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Environmental Science", "Sustainable Agriculture", "Agribusiness"]
    },
    {
        "name": "Africa Legal Network",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "International Law", "Human Rights Law"]
    },
    {
        "name": "African Wildlife Foundation",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Wildlife Conservation", "Ecology", "Environmental Management"]
    },
    {
        "name": "Aga Khan Hospital",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Nursing", "Medicine", "Public Health"]
    },
    {
        "name": "Agricultural Finance Corporation",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Agricultural Economics", "Finance", "Business Administration"]
    },
    {
        "name": "Andersen Tax",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Taxation", "Accounting", "Finance"]
    },
    {
        "name": "ARM Cement",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Mechanical Engineering", "Industrial Engineering"]
    },
    {
        "name": "Base Titanium",
        "industry": "Engineering & Manufacturing",
        "location": "Kwale",
        "courses": ["Mining Engineering", "Environmental Engineering", "Geology"]
    },
    {
        "name": "Betta Power Services",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Renewable Energy", "Power Systems"]
    },
    {
        "name": "Biofoods Kenya",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Food Science", "Dairy Technology", "Quality Assurance"]
    },
    {
        "name": "Boresha Limited",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Logistics", "Operations Management"]
    },
    {
        "name": "Boston Consulting Group (BCG)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Business Administration", "Economics", "Management Consulting"]
    },
    {
        "name": "British American Tobacco (BAT)",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Sales", "Business Administration"]
    },
    {
        "name": "Car and General",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Mechanical Engineering", "Automotive Engineering", "Sales Engineering"]
    },
    {
        "name": "Catholic Relief Services",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Development Studies", "Project Management"]
    },
    {
        "name": "Cellulant",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Accounting", "Business Development"]
    },
    {
        "name": "Centre for Rights Education and Awareness (CREAW)",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Human Rights", "Gender Studies"]
    },
    {
        "name": "Chandaria Industries",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Chemical Engineering", "Mechanical Engineering", "Production Management"]
    },
    {
        "name": "Citi Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Clearlink Technologies",
        "industry": "Web Development",
        "location": "Nairobi",
        "courses": ["Web Development", "Software Engineering", "UI/UX Design"]
    },
    {
        "name": "Clifford Chance",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Corporate Law", "Commercial Law"]
    },
    {
        "name": "Community Justice Centre",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Human Rights Law", "Social Justice"]
    },
    {
        "name": "Concours Motors",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Event Management", "Marketing", "Customer Service"]
    },
    {
        "name": "Cooperative Bank of Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Accounting"]
    },
    {
        "name": "Copia Global",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Logistics", "Operations Management"]
    },
    {
        "name": "Corporate Staffing Services",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Human Resources", "Recruitment", "Business Administration"]
    },
    {
        "name": "CQS Search",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Human Resources", "Recruitment", "Business Administration"]
    },
    {
        "name": "Crayon Data",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Data Analytics"]
    },
    {
        "name": "Cyber Security Africa",
        "industry": "Cybersecurity & Ethical Hacking",
        "location": "Nairobi",
        "courses": ["Cybersecurity", "Network Security", "Ethical Hacking"]
    },
    {
        "name": "Dalberg",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Business Administration", "Economics", "Management Consulting"]
    },
    {
        "name": "Dar es Salaam Institute of Technology (DIT)",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering"]
    },
    {
        "name": "Dawa Limited",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Pharmacy", "Biochemistry", "Pharmaceutical Sciences"]
    },
    {
        "name": "Delta Corp East Africa Limited",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Logistics", "Operations Management"]
    },
    {
        "name": "Dentons Hamilton Harrison & Mathews",
        "industry": "Law & Legal Services",
        "location": "Nairobi",
        "courses": ["Law", "Corporate Law", "Commercial Law"]
    },
    {
        "name": "Development Bank of Kenya",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Diageo",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Sales", "Business Administration"]
    },
    {
        "name": "Digital Divide Data (DDD)",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Data Science", "Web Development"]
    },
    {
        "name": "Disrupt Africa",
        "industry": "Media & Entertainment",
        "location": "Nairobi",
        "courses": ["Journalism", "Media Studies", "Communication"]
    },
    {
        "name": "Duma Works",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Human Resources", "Recruitment", "Business Administration"]
    },
    {
        "name": "EcoBank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Econet Wireless",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Telecommunications Engineering", "Computer Science"]
    },
    {
        "name": "Egon Zehnder",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Human Resources", "Recruitment", "Business Administration"]
    },
    {
        "name": "Eldama Technologies",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Data Science", "Web Development"]
    },
    {
        "name": "Emirates",
        "industry": "Hospitality & Tourism",
        "location": "Nairobi",
        "courses": ["Hospitality Management", "Tourism", "Customer Service"]
    },
    {
        "name": "Ernst & Young (EY)",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Accounting", "Finance", "Business Administration"]
    },
    {
        "name": "Ethical Leadership Alliance Centre",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Leadership Development", "Ethics", "Organizational Development"]
    },
    {
        "name": "Facebook",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Public Relations"]
    },
    {
        "name": "Fahari ICT",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Data Science", "Web Development"]
    },
    {
        "name": "FAO",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Environmental Science", "Development Studies"]
    },
    {
        "name": "Farm Concern International",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Agribusiness", "Rural Development"]
    },
    {
        "name": "Fidelity Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Fintrac Global",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Agribusiness", "Rural Development"]
    },
    {
        "name": "Flamingo Horticulture",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Horticulture", "Agronomy", "Plant Science"]
    },
    {
        "name": "Food for the Hungry",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Agriculture", "Nutrition", "Community Development"]
    },
    {
        "name": "GA Life",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Insurance", "Finance", "Actuarial Science"]
    },
    {
        "name": "Gap Africa",
        "industry": "Education & Training",
        "location": "Nairobi",
        "courses": ["Teaching", "Community Development", "Environmental Conservation"]
    },
    {
        "name": "GDC",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Geothermal Energy", "Engineering", "Environmental Science"]
    },
    {
        "name": "GIZ",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Sustainable Development", "Agriculture", "Environmental Management"]
    },
    {
        "name": "Global Communities",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Community Development", "Agriculture", "Environmental Conservation"]
    },
    {
        "name": "Google",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Machine Learning", "Data Analytics"]
    },
    {
        "name": "Grassroots Business Fund",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Investment", "Business Administration"]
    },
    {
        "name": "Greenpeace",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Environmental Science", "Environmental Activism", "Policy Advocacy"]
    },
    {
        "name": "Grey",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Advertising", "Public Relations"]
    },
    {
        "name": "Gro Intelligence",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Agriculture", "Economics"]
    },
    {
        "name": "GSK",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Pharmaceutical Sciences", "Medicine", "Public Health"]
    },
    {
        "name": "Habitat for Humanity",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Construction Management", "Civil Engineering", "Architecture"]
    },
    {
        "name": "Hatch Africa",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Engineering", "Project Management", "Construction"]
    },
    {
        "name": "Hellen Keller International",
        "industry": "Healthcare & Life Sciences",
        "location": "Nairobi",
        "courses": ["Public Health", "Nutrition", "Community Health"]
    },
    {
        "name": "Henkel",
        "industry": "Marketing & Communications",
        "location": "Nairobi",
        "courses": ["Marketing", "Sales", "Business Administration"]
    },
    {
        "name": "Hivos",
        "industry": "Agriculture & Environmental Science",
        "location": "Nairobi",
        "courses": ["Sustainable Development", "Environmental Management", "Agriculture"]
    },
    {
        "name": "HSBC",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Huawei",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Telecommunications Engineering", "Computer Science"]
    },
     {
        "name": "I&M Bank",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Banking", "Economics"]
    },
    {
        "name": "Iceahub",
        "industry": "Programming & Software Development",
        "location": "Nairobi",
        "courses": ["Software Engineering", "Web Development", "Mobile App Development"]
    },
    {
        "name": "IDEO",
        "industry": "UI/UX Design & Product Development",
        "location": "Nairobi",
        "courses": ["User Interface Design", "User Experience Design", "Product Design"]
    },
    {
        "name": "IFC",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Investment", "Economics"]
    },
    {
        "name": "IKEA",
        "industry": "Logistics & Supply Chain Management",
        "location": "Nairobi",
        "courses": ["Supply Chain Management", "Logistics", "Operations Management"]
    },
    {
        "name": "ILRI",
        "industry": "Data Science & Analytics",
        "location": "Nairobi",
        "courses": ["Data Science", "Statistics", "Agriculture"]
    },
    {
        "name": "Imara Africa Securities",
        "industry": "Business & Finance",
        "location": "Nairobi",
        "courses": ["Finance", "Investment", "Economics"]
    },
    {
        "name": "Insta Products (EPZ) Ltd",
        "industry": "Engineering & Manufacturing",
        "location": "Nairobi",
        "courses": ["Food Science", "Chemical Engineering", "Process Engineering"]
    }
    
      
    ];

let filteredCompanies = [];
let isSearching = false;

// DOM Elements
const searchForm = document.getElementById('searchForm');
const industrySelect = document.getElementById('industry');
const loadingContainer = document.getElementById('loadingContainer');
const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');
const resultsGrid = document.getElementById('resultsGrid');
const noResults = document.getElementById('noResults');
const searchButton = document.getElementById('searchButton');

// Populate industry dropdown
industries.forEach(industry => {
    const option = document.createElement('option');
    option.value = industry;
    option.textContent = industry;
    industrySelect.appendChild(option);
});

// Remove the fetch logic since data is embedded
loadingContainer.classList.add('hidden');

// Handle form submission
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!industrySelect.value || isSearching) return;
    isSearching = true;
    searchButton.disabled = true;
    searchButton.innerHTML = `
        <span class="button-spinner"></span>
        Searching...
    `;
    
    setTimeout(() => {
        filteredCompanies = companies.filter(company => 
            company.industry === industrySelect.value
        );
        resultsGrid.innerHTML = '';
        noResults.classList.add('hidden');
        
        if (filteredCompanies.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            filteredCompanies.forEach(company => {
                const card = document.createElement('div');
                card.className = 'company-card';
                card.innerHTML = `
                    <div class="company-header">
                        <h3>${company.name}</h3>
                        <span class="industry-tag">${company.industry}</span>
                    </div>
                    <div class="company-location">
                        <span class="location-icon">📍</span>
                        ${company.location}
                    </div>
                    <div class="company-courses">
                        <h4>Related Courses</h4>
                        ${company.courses ? `
                            <ul class="courses-list">
                                ${company.courses.map(course => `<li>${course}</li>`).join('')}
                            </ul>
                        ` : '<p class="no-courses">No related courses available</p>'}
                    </div>
                    <button class="apply-button" data-company="${encodeURIComponent(company.name)}">
                        Apply on the official website
                    </button>
                `;
                resultsGrid.appendChild(card);

                // Add click event listener to the apply button
                const applyButton = card.querySelector('.apply-button');
                applyButton.addEventListener('click', (event) => {
                    const companyName = decodeURIComponent(event.target.dataset.company);
                    // Create search query URL
                    const searchQuery = `${companyName} careers apply`;
                    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                    // Open in new tab
                    window.open(searchUrl, '_blank');
                });
            });
        }
        
        isSearching = false;
        searchButton.disabled = false;
        searchButton.innerHTML = 'Find Internships/attachments';
    }, 800);
});
