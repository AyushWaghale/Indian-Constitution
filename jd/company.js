var businessLaws = {
   "Company-Laws":[
    {
        "name": "Company Law",
        "description": "Company law governs the formation, operation, and dissolution of companies. It covers areas such as corporate governance, shareholder rights, and regulatory compliance."
    },
    {
      "name": "Company Registration Law",
      "description": "Specifies the legal requirements and procedures for registering a company, including the types of entities, documentation needed, and fees involved."
  },
  {
      "name": "Corporate Governance",
      "description": "Governance practices that regulate the relationship between a company's management, its board, shareholders, and other stakeholders. It includes principles, rules, and processes by which a company is operated and controlled."
  },
  {
      "name": "Corporate Compliance",
      "description": "Ensures that companies comply with all relevant laws, regulations, and standards governing their operations, including financial reporting, environmental regulations, and labor laws."
  },
  {
      "name": "Director's Duties",
      "description": "Specifies the duties and responsibilities of company directors, including fiduciary duties, duty of care, duty of loyalty, and duty to act in good faith in the best interests of the company."
  },
  {
      "name": "Shareholder Rights",
      "description": "Defines the rights and privileges of shareholders, including voting rights, dividend entitlements, right to information, and right to participate in major company decisions."
  },
  {
      "name": "Mergers and Acquisitions Law",
      "description": "Regulates the process of mergers, acquisitions, and takeovers involving companies, including due diligence, shareholder approval, and legal documentation."
  },
  {
      "name": "Insolvency Law",
      "description": "Deals with the legal framework for handling financially distressed companies, including bankruptcy proceedings, debt restructuring, and liquidation."
  }
    ,
    {
        "name": "Labor Law",
        "description": "Labor law regulates the relationship between employers and employees. It addresses issues such as wages, working conditions, employment contracts, and workplace safety."
    },
    {
      "name": "Minimum Wage Law",
      "description": "Specifies the minimum hourly or monthly wage that employers must pay to employees. It aims to ensure that workers receive fair compensation for their labor."
  },
  {
      "name": "Working Hours Regulation",
      "description": "Sets limits on the number of hours an employee can work per day or per week. It may also include provisions for rest breaks, overtime pay, and regulations for shift work."
  },
  {
      "name": "Employment Contracts",
      "description": "Defines the legal relationship between employers and employees, including terms and conditions of employment, job responsibilities, compensation, benefits, and termination procedures."
  },
  {
      "name": "Discrimination Law",
      "description": "Prohibits discrimination in hiring, promotion, compensation, and other aspects of employment based on factors such as race, gender, age, religion, disability, or sexual orientation."
  },
  {
      "name": "Health and Safety Regulations",
      "description": "Imposes obligations on employers to provide a safe and healthy work environment for employees. It includes measures to prevent workplace accidents, injuries, and occupational illnesses."
  },
  {
      "name": "Labor Union Law",
      "description": "Regulates the formation, operation, and activities of labor unions or trade unions. It may include provisions for collective bargaining, strikes, lockouts, and union membership rights."
  },
  {
      "name": "Employee Benefits Law",
      "description": "Covers benefits provided by employers to employees, such as health insurance, retirement plans, paid leave, disability benefits, and other fringe benefits."
  },
  {
      "name": "Dismissal and Termination Law",
      "description": "Defines the legal grounds and procedures for terminating employment, including dismissal for cause, layoffs, redundancy, and severance pay. It also addresses wrongful termination and unfair dismissal."
  }
    ,
    {
        "name": "Tax Law",
        "description": "Tax law governs the assessment and collection of taxes. It includes regulations related to income tax, corporate tax, sales tax, and other forms of taxation."
    },
    {
        "name": "Intellectual Property Law",
        "description": "Intellectual property law protects creations of the mind, such as inventions, literary and artistic works, trademarks, and trade secrets. It includes areas like patent law, copyright law, and trademark law."
    },
    {
      "name": "Patent Law",
      "description": "Grants inventors exclusive rights to their inventions, preventing others from making, using, selling, or distributing the patented invention without permission."
  },
  {
      "name": "Trademark Law",
      "description": "Protects brand names, logos, slogans, and other identifiers that distinguish goods or services in the marketplace from those of competitors."
  },
  {
      "name": "Copyright Law",
      "description": "Grants creators exclusive rights to their original works of authorship, such as literary, artistic, musical, and dramatic works, as well as software, databases, and architectural designs."
  },
  {
      "name": "Trade Secret Law",
      "description": "Protects confidential business information that provides a competitive advantage, such as formulas, processes, designs, patterns, customer lists, and marketing strategies."
  },
  {
      "name": "Industrial Design Law",
      "description": "Protects the visual design of objects that are not purely utilitarian, such as the shape, surface, or ornamentation of a product."
  },
  {
      "name": "Plant Variety Protection Law",
      "description": "Grants breeders of new plant varieties exclusive rights to their plant varieties, preventing others from reproducing, selling, or using the protected variety without permission."
  },
  {
      "name": "Integrated Circuit Layout Design Law",
      "description": "Protects the layout designs of integrated circuits, preventing unauthorized copying or use of the layout designs."
  }
]};

// Get the div where we want to display the data
var div = document.getElementById("Company-laws");

// Loop through the company laws and create HTML elements to display them
businessLaws["Company-Laws"].forEach(function(law) {
  var lawElement = document.createElement("div");
  lawElement.innerHTML = "<h3>" + law.name + "</h3><p>" + law.description + "</p>";
  div.appendChild(lawElement);
});

/*
// Get the div where we want to display the data
var div = document.getElementById("Company-laws");

// Loop through the business laws and create HTML elements to display them
Laws.business_laws.forEach(function(law) {
  var lawElement = document.createElement("div");
  lawElement.innerHTML = "<h3>" + law.name + "</h3><p>" + law.description + "</p>";
  div.appendChild(lawElement);
});

*/