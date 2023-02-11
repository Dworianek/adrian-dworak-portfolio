import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    pl: {
      translation: {
        //Navbar Text
        navAbout: "O Mnie",
        navProject: "Projekty",
        navSkills: "Umiejętności",
        navExperience: "Doświadczenie",
        navContact: "Kontakt",
        // About Text
        welcome: "Cześć jestem Adrian",
        welcomeAdd: "I szukam nowych wyzwań zawodowych.",
        about1: "Frontend Developer",
        about2: "Weekendowo DJ",
        about3: "Kochający Pizzę",
        about4: "Hobbista Squoash'a",
        cvText: "Moje CV",
        // Project Text
        projectHeader: "Projekty",
        projectText: "Rzuć okiem na moje ostatnie projekty.",
        projectButton: "Sprawdź Projekt",
        //Proejct1
        project1Header: "Grafik Pracowniczy",
        project1Text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //Proejct2
        project2Header: "Aplikacja Inwentaryzacyjna",
        project2Text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //Proejct3
        project3Header: "Gradient Generator",
        project3Text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // Skills Text
        skillsHeader: "Umiejętności",
        skillsText: "Technologie i narzędzia z których korzystam.",
        // Experience Text
        experienceHeader: "Doświadczenie",
        experienceText: "Tak wygląda moja krótka przygoda zawodowa.",
        //Work 1
        experienceWork1Header: "Stażysta Frontend Developer",
        experienceWork1Li1: "Rozbudowa/Optymalizacja Strony WWW",
        experienceWork1Li2: "Tworzenie Stron w oparciu o szablony",
        experienceWork1Li3: "Edycja/Retusz zdjęć przed dodaniem na stronę",
        experienceWork1Li4: "Przygotowanie tekstów przed publikacją",
        experienceWork1Li5: "Dbałość o SEO",
        experienceWork1Date: "06-2018-09.2019",
        //Work 2
        experienceWork2Header: "Informatyk / Administrator ERP",
        experienceWork2Li1: "Utrzymanie Ruchu - IT",
        experienceWork2Li2: "Administrowanie systemu ERP",
        experienceWork2Li3: "Programista VBA",
        experienceWork2Date: "04-2021-Obecnie",
        //Work 3
        experienceWork3Header: "Specjalista od Marketingu",
        experienceWork3Li1: "Tworzenie stron internetowych - Wordpress",
        experienceWork3Li2: "Pozycjonowanie Wizytówek Google - GMB",
        experienceWork3Li3: "Proste usługi graficzne",
        experienceWork3Li4: "Pozostałe usługi IT",
        experienceWork3Date: "01-2020-Obecnie",
        // Contact Text
        contactHeader: "Kontakt",
        contactText: "Jeśli masz pytania, skontaktuj się ze mną.",
        phone: "Telefon",
        email: "E-mail",
      },
    },
    eng: {
      translation: {
        //Navbar Text
        navAbout: "About Me",
        navProject: "Projects",
        navSkills: "Skills",
        navExperience: "Experience",
        navContact: "Contact",
        // About Text
        welcome: "Hi, I'm Adrian",
        welcomeAdd: "I am looking for new professional challenges.",
        about1: "Frontend Developer",
        about2: "Weekend DJ",
        about3: "Loving Pizza",
        about4: "Squoash Hobbyist",
        cvText: "My CV",
        // Project Text
        projectHeader: "Projects",
        projectText: "Take a look at my recent projects.",
        projectButton: "Check Project",
        //Proejct1
        project1Header: "Employee Scheduler",
        project1Text:
          "ENGLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //Proejct2
        project2Header: "Inventory application",
        project2Text:
          "ENGLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //Proejct3
        project3Header: "Gradient Generator",
        project3Text:
          "ENGLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        // Skills Text
        skillsHeader: "Skills",
        skillsText: "Technologies and tools I use.",
        // Experience Text
        experienceHeader: "Experience",
        experienceText: "This is my short professional adventure.",
        // Work 1
        experienceWork1Header: "Frontend Developer Trainee",
        experienceWork1Li1: "Expansion/Optimization of the Website",
        experienceWork1Li2: "Website creation based on templates",
        experienceWork1Li3: "Retouch photos before adding to the website",
        experienceWork1Li4: "Preparation of texts before publication",
        experienceWork1Li5: "Taking care of SEO",
        experienceWork1Date: "06-2018-09.2019",
        // Work 2
        experienceWork2Header: "IT specialist / ERP Administrator",
        experienceWork2Li1: "Maintenance - IT",
        experienceWork2Li2: "Administration of the ERP system",
        experienceWork2Li3: "VBA programmer",
        experienceWork2Date: "04-2021-Actually",
        // Work 3
        experienceWork3Header: "Marketing Specjalist",
        experienceWork3Li1: "Website development - Wordpress",
        experienceWork3Li2: "Google Business Card Positioning - GMB",
        experienceWork3Li3: "Simple graphic services",
        experienceWork3Li4: "Other IT services",
        experienceWork3Date: "01-2020-Actually",
        // Contact Text
        contactHeader: "Contact",
        contactText: "If you have questions, please contact me.",
        phone: "Phone",
        email: "E-mail",
      },
    },
  },
});

export default i18n;
