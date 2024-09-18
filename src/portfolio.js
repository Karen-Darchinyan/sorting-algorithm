/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  topic: "Տեսակավորման ալգորիթմների համեմատական արդյունավետության որոշման կայք",
  title: "Տեսակավորման ալգորիթմներ",
  name: "Կարեն Դարչինյան",
  logo_name: "Algorithms",
  nickname: "",
  subTitle:
    "Համակարգչային գիտություններում տեսակավորման ալգորիթմը ալգորիթմ է, որը դասավորում է էլեմենտները ցանկից որոշակի կարգով։ Այն դեպքում, երբ ցանկի էլեմենտը ունի մի քանի դաշտ, ապա այդ դաշտը, որը համարվում է հաջորդականության կրիտերիա, անվանվում է տեսակավորման բանալի։ Պրակտիկայում բանալու փոխարեն հաճախ հանդիսանում է թիվը, իսկ մնացած դաշտերում պահվում են որևիցե տվյալներ, որոնք ոչ մի կերպ չեն ազդում ալգորիթմի աշխատանքի վրա։",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "",
  // linkedin: "",
  // gmail: "",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Պղպջակային տեսակավորում",
      fileName: "bubbleSort",
      href: "/bubble-sort",
      skills: [
        "⚡ Մենք անցնում ենք ամբողջ զանգվածով և համեմատում ընթացիկ տարրը հաջորդի հետ:",
        "⚡ Եթե այն ավելի մեծ է, քան հաջորդը, ապա մենք դրանք վերադասավորում ենք:",
        "⚡ Եթե ոչ ավելին, ավելացրեք ցուցիչը և համեմատեք հաջորդ երկու տարրերը:",
        "⚡ Հասնելով վերջում մենք գիտենք, որ զանգվածի ամենամեծ տարրը գտնվում է վերջին դիրքում:",
        "⚡ Մենք կրկնում ենք գործընթացը N անգամ (որտեղ N-ը զանգվածի երկարությունն է) և ամեն անգամ, երբ անցնում ենք վերջին տեսակավորված տարրը:",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Կոկտեյլային տեսակավորում",
      fileName: "cocktailSort",
      href: "/cocktail-sort",
      skills: [
        "⚡ Սկսեք զանգվածի սկզբից և օգտագործեք փուչիկների տեսակավորումը՝ ամենամեծը զանգվածի վերջը տեղափոխելու համար:",
        "⚡ Սկսեք զանգվածի վերջից և ամենափոքր միավորը տեղափոխեք զանգվածի սկիզբ:",
        "⚡ Կրկնել 1-ին և 2-րդ քայլերը, մինչև զանգվածը դասավորվի:",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Ներդրմամբ տեսակավորում",
      fileName: "insertionSort",
      href: "/insertion-sort",
      skills: [
        "⚡ Մենք սկսում ենք զանգվածի առաջին տարրից, որն արդեն դասավորված է համարվում:",
        "⚡ Վերցնում ենք հաջորդ տարրը և համեմատում դասավորված մասի նախորդ տարրերի հետ:",
        "⚡ Եթե նոր տարրն ավելի փոքր է, ապա մենք նախորդ տարրերը տեղափոխում ենք աջ՝ տարածք ազատելու համար:",
        "⚡ Տեսակավորված տարրերի մեջ տեղադրում ենք նոր տարր ճիշտ դիրքում:",
        "⚡ Մենք կրկնում ենք այս գործընթացը յուրաքանչյուր լրացուցիչ տարրի համար, մինչև ամբողջ զանգվածը տեսակավորվի:",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Շելլի տեսակավորում",
      fileName: "shellSort",
      href: "/shell-sort",
      skills: [
        "⚡ Ընտրելով մեկնարկային միջակայքը ℎ, սովորաբար զանգվածի երկարության կեսը:",
        "⚡ Յուրաքանչյուր քայլում հեռավորության վրա գտնվող տարրեր h-ն տեսակավորվում է ներդիրի տեսակավորման միջոցով:",
        "⚡ Ընդմիջումը կրճատվում է, օրինակ, բաժանվում է 2-ի:",
        "⚡ Ալգորիթմը կրկնվում է այնքան ժամանակ, մինչև միջակայքը հավասարվի 1-ի, և կատարվի ամբողջ զանգվածի վերջնական տեսակավորումը։",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Միաձուլման տեսակավորում",
      fileName: "mergeSort",
      href: "/merge-sort",
      skills: [
        "⚡ Բաժանում. Բնօրինակ զանգվածը բաժանվում է երկու մասի, մինչև յուրաքանչյուր մաս դառնա առանձին տարր:",
        "⚡ Տեսակավորում. Այս մասերից յուրաքանչյուրը համարվում է տեսակավորված, քանի որ մեկ տարրը միշտ դասավորված է ինքնուրույն:",
        "⚡ Միաձուլում. Տեսակավորված մասերի զույգերը միավորվում են մեկ տեսակավորված զանգվածում՝ տարրերը միմյանց հետ համեմատելով:",
        "⚡ Կրկնում. Այս միաձուլման գործընթացը կրկնվում է այնքան ժամանակ, մինչև բոլոր կտորները միաձուլվեն մեկ տեսակավորված զանգվածի մեջ:",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Արագ տեսակավորում",
      fileName: "quickSort",
      href: "/quick-sort",
      skills: [
        "⚡ Առանցքային ընտրություն. ընտրում է զանգվածի մեկ տարրը (օրինակ՝ առաջին, վերջին, պատահական կամ միջին տարրը):",
        "⚡ Զանգվածի բաժանում. Զանգվածի բոլոր տարրերը տեղափոխվում են այնպես, որ հղումից փոքր տարրերը գտնվում են դրա ձախ կողմում, իսկ հղումից մեծ տարրերը գտնվում են աջ կողմում:",
        "⚡ Ռեկուրսիվ տեսակավորում. երկու մասերից յուրաքանչյուրի համար (առանցքային տարրի ձախ և աջ) արագ տեսակավորումը կիրառվում է ռեկուրսիվ կերպով:",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Analysis Page
const analysis = {
  title: "Ալգորիթմների վերլուծություն",
  description:
    "Տեսակավորման ալգորիթմները համակարգչային գիտության մեջ հիմնարար նշանակություն ունեն, տվյալները սահմանված կարգով կազմակերպելու համար: Յուրաքանչյուր ալգորիթմի արդյունավետության վերլուծությունը օգնում է հասկանալ դրա լավագույն օգտագործման դեպքը՝ հիմնված ժամանակի, տարածության և այլ գործոնների վրա:",
  header_image_path: "analysis.svg",
  sections: [
    {
      title: "Պղպջակների տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "bubble-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. O(n) </strong><br/> Եթե զանգվածն արդեն տեսակավորված է, ապա տեսակավորման կարիք չկա:",
            "<strong>Գործի միջին բարդություն. O(n<sup>2</sup>)</strong> <br/> Դա տեղի է ունենում, երբ զանգվածի տարրերը խառնված են (ոչ աճող, ոչ նվազող):",
            "<strong>Ամենավատ դեպքի բարդությունը. O(n<sup>2</sup>)</strong><br/> Եթե մենք ցանկանում ենք տեսակավորել աճման կարգով, և զանգվածը նվազման կարգով է, ապա տեղի է ունենում ամենավատ դեպքը:",
          ],
          color: "#0879bf",
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Տիեզերքի բարդությունը պայմանավորված է O(1)նրանով, որ լրացուցիչ փոփոխական է օգտագործվում փոխանակման համար:",
            "են երկու լրացուցիչ փոփոխականներ: Այսպիսով, տիեզերական բարդությունը կլինի O(2).",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Կոկտեյլային տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "cocktail-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. O(n)</strong><br/> Դա տեղի է ունենում, երբ տեսակավորումը չի պահանջվում, այսինքն՝ զանգվածն արդեն տեսակավորված է: Կոկտեյլների լավագույն ժամանակային բարդությունը O(n) է :",
            "<strong>Գործի միջին բարդություն. O(n<sup>2</sup>) </strong><br/> Դա տեղի է ունենում, երբ զանգվածի տարրերը խառնված են, որը պատշաճ կերպով չի աճում և չի իջնում: Կոկտեյլ տեսակավորման միջին գործի ժամանակային բարդությունը O(n<sup>2</sup>) է :",
            "<strong>Ամենավատ դեպքի բարդությունը. O(n<sup>2</sup>)</strong> <br/> Դա տեղի է ունենում, երբ զանգվածի տարրերը պահանջվում է տեսակավորել հակառակ հերթականությամբ: Դա նշանակում է, որ ենթադրենք, դուք պետք է դասավորեք զանգվածի տարրերը աճման կարգով, բայց դրա տարրերը նվազման կարգով են: Կոկտեյլների ամենավատ ժամանակային բարդությունը O(n<sup>2</sup>) է :",
          ],
          color: "#0879bf",
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Կոկտեյլային սորտի տիեզերական բարդությունը O(1) է:",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Ներդրմամբ տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "insertion-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. O(n) </strong><br/> Երբ զանգվածն արդեն տեսակավորված է, արտաքին օղակն աշխատում է n մի քանի անգամ, մինչդեռ ներքին օղակն ընդհանրապես չի աշխատում: Այսպիսով, կան միայն nմի շարք համեմատություններ: Այսպիսով, բարդությունը գծային է:",
            "<strong>Գործի միջին բարդություն. O(n<sup>2</sup>) </strong> <br/> Դա տեղի է ունենում, երբ զանգվածի տարրերը խառնված են (ոչ աճող, ոչ նվազող):",
            "<strong>Ամենավատ դեպքի բարդությունը. O(n<sup>2</sup>) </strong><br/> Ենթադրենք, զանգվածը աճման կարգով է, և դուք ցանկանում եք այն տեսակավորել նվազման կարգով: Այս դեպքում տեղի է ունենում ամենավատ դեպքի բարդությունը: <br/> Յուրաքանչյուր տարր պետք է համեմատվի մյուս տարրերից յուրաքանչյուրի հետ, այնպես որ յուրաքանչյուր n-րդ տարրի համար (n-1) կատարվում են մի շարք համեմատություններ: <br/> Այսպիսով, համեմատությունների ընդհանուր թիվը = n*(n-1) ~ n2",
          ],
          color: "#0879bf"
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Տիեզերական բարդությունը պայմանավորված է նրանով, որ օգտագործվում է O(1) լրացուցիչ փոփոխական : key",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Շելլի տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "shall-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. O(n*log n) </strong><br/> Երբ զանգվածն արդեն տեսակավորված է, յուրաքանչյուր միջակայքի (կամ աճի) համեմատությունների ընդհանուր թիվը հավասար է զանգվածի չափին:",
            "<strong>Գործի միջին բարդություն. O(n*log n) </strong> <br/> Միջին դեպքի բարդությունը O(n<sup>1.25</sup>) շուրջ է։",
            "<strong>Ամենավատ դեպքի բարդությունը. O(n<sup>2</sup>)</strong>-ից փոքր կամ հավասար <br/> Վատագույն դեպքի բարդությունը shell տեսակավորման համար միշտ փոքր է կամ հավասար O(n<sup>2</sup>): <br/> Համաձայն Պունենի թեորեմի, shall տեսակավորման ամենավատ դեպքի բարդությունը Θ(Nlog N<sup>2</sup>/(log log N)<sup>2</sup>) կամ Θ(Nlog N<sup>2</sup>/log log N) կամ Θ(N(log N)<sup>2</sup>) կամ ինչ-որ բան է արանքում։",
          ],
          color: "#0879bf",
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Shall տեսակավորման տիեզերական բարդությունը O(1) է:",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Միաձուլման տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "marge-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. O(n*log n) </strong><br/>",
            "<strong>Գործի միջին բարդություն. O(n*log n) </strong> <br/>",
            "<strong>Ամենավատ դեպքի բարդությունը. O(n*log n) </strong><br/>",
          ],
          color: "#0879bf",
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Marge տեսակավորման տիեզերական բարդությունը O(n) է:",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Արագ տեսակավորման վերլուծություն",
      analysiss: [
        {
          title: "Տեսակավորման բարդություն",
          logo_path: "sort-complexity.png",
          image: "quick-sort-analysis.png",
          description: "",
          color: "#000000",
        },
        {
          title: "Ժամանակի բարդություն",
          logo_path: "time-complexity.png",
          description: [
            "<strong>Գործի լավագույն բարդությունը. [Big-omega] O(n*log n) </strong><br/> Դա տեղի է ունենում, երբ առանցքային տարրը միշտ միջին տարրն է կամ մոտ է միջին տարրին:",
            "<strong>Գործի միջին բարդություն. [Big-theta] O(n*log n) </strong> <br/> Դա տեղի է ունենում, երբ վերը նշված պայմանները չեն առաջանում:",
            "<strong>Ամենավատ դեպքի բարդությունը. [Big-O] O(n<sup>2</sup>) </strong><br/> Դա տեղի է ունենում, երբ ընտրված առանցքային տարրը կա՛մ ամենամեծն է, կա՛մ ամենափոքր տարրը: <br/> Այս պայմանը հանգեցնում է այն դեպքին, երբ առանցքային տարրը գտնվում է տեսակավորված զանգվածի ծայրահեղ ծայրում: Մի ենթազանգվածը միշտ դատարկ է, իսկ մյուս ենթազանգվածը պարունակում է n - 1 տարր: Այսպիսով, արագ տեսակավորումը կանչվում է միայն այս ենթազանգվածի վրա: <br/> Այնուամենայնիվ, արագ տեսակավորման ալգորիթմը ավելի լավ կատարում է ցրված առանցքների համար:",
          ],
          color: "#0879bf",
        },
        {
          title: "Տիեզերական բարդություն",
          logo_path: "space-complexity.png",
          description: [
            "Տիեզերական բարդությունը արագ տեսակավորման համար է O(log n).",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best analysis is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my analysiss in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};
const bubbleSort = {

};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  analysis,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
