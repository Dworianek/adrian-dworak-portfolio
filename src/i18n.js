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
          "Pomysł na aplikację narodził się w poprzedniej pracy. Grafik online ma na celu ułatwić zarządzanie jak i przekazanie  grafiku pracownikom zarówno z Polski jak i ukrainy. Dodatkowo zaimplementowany został minimalistyczny panel administratora służący do zmiany hasła.",
        //Proejct2
        project2Header: "Generator Hasła",
        project2Text:
          "Prosta aplikacja służąca do generowania losowego hasła w celu uniknięcia podawania przy rejestracji prostych, standardowych haseł. Do wyboru mamy możliwość skorzystania z kilku metod generacji hasła (małe litery, duże litery, cyfry jak i znaki specjalne).",
        //Proejct3
        project3Header: "Gra - zgadywanie koloru RGB",
        project3Text:
          "Gra komputerowa której głównym celem jest odbadnięcie wcześniej wylosowanego koloru RGB. Sama rozgrywka polega na poprawnym wskazaniu kafelka o kolorze który naszym zdaniem jest poszukiwanym odcieniem. Każda liczba prób jest zliczana i podawana finalnie jako wynik.",
        //Proejct4
        project4Header: "Aplikacja Pogodowa",
        project4Text:
          "Aplikacja pogodowa której napisane było zmotywowane poznaniem tematyki API. Aplikacja pozwala na uzyskanie informacji pogodowych: temperatura, ciśnienie, godzina wschodu czy zachodu słońca. Istnieje możliwość podania interesującego nas miasta.",
        //Proejct5
        project5Header: "Aplikacja Pokedex",
        project5Text:
          "Projekt Pokedex korzysta z zewnętrznego interfejsu programowania aplikacji (API), aby dynamicznie pobierać dane o Pokemonach z I generacji. Dzięki temu użytkownicy mają dostęp do aktualnych informacji, zapewniając interaktywne i pełne doświadczenie z eksploracji ich.",
        //Proejct6
        project6Header: "Aplikacja Mood-App",
        project6Text:
          "Aplikacja do wywiadu z samopoczucia pozwala użytkownikom śledzić swoje codzienne doświadczenia. Po wybraniu poziomu samopoczucia, użytkownik zaznacza swoje aktywności i dodaje krótką notatkę. Zebrane informacje  zapisują się w tabeli, umożliwiając analizę  trendów.",
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
        //Project1
        project1Header: "Employee Scheduler",
        project1Text:
          "The idea for the application was born in a previous job. The online schedule is designed to facilitate the management and transfer of the schedule to employees from both Poland and Ukraine. In addition, a minimalist administrator panel has been implemented for changing the password.",
        //Project2
        project2Header: "Password Generator",
        project2Text:
          "A simple application used to generate a random password in order to avoid entering simple, standard passwords during registration. We can choose from several methods of password generation (lowercase letters, uppercase letters, numbers and special characters).",
        //Project3
        project3Header: "Game - RGB color guessing",
        project3Text:
          "A computer game whose main goal is to check the previously drawn RGB color. The game itself consists in correctly indicating a tile with a color that we think is the shade we are looking for. Each number of attempts is counted and finally given as a result.",
        //Project4
        project4Header: "Weather App",
        project4Text:
          "The weather application which was written motivated by learning about the API. A simple application allows you to obtain weather information such as: temperature, pressure, time of sunrise or sunset. You can enter the city you are interested in.",
        //Proejct5
        project5Header: "Aplication  Pokedex",
        project5Text:
          "The Pokedex project uses an external application programming interface (API) to dynamically retrieve data about Generation I Pokemon. This gives users access to up-to-date information, providing an interactive and complete experience of exploring it.",
        //Proejct6
        project6Header: "Aplication  Mood-App",
        project6Text:
          "The mood interview application allows users to track their daily experiences. After selecting their mood level, users mark their activities and add a brief note. The collected information is automatically saved in a table, enabling the analysis of long-term trends.",
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
