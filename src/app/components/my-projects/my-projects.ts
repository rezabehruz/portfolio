import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language-service';

interface Project {
  name: string;
  photo: string;
  duration: string;
  techs: {
    name: string;
    url: string;
  }[];
  description: {
    title: string;
    details: string;
  }[];
}

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {

  languageService = inject(LanguageService);

  projects = computed<Project[]>(()=>{
        if(this.languageService.language() == 'english') return this.projectsEN;
        else return this.projectsDE;
  });
  
  projectsEN: Project[] = [
    {
      name: 'El Pollo loco',
      photo: 'assets/images/projects/el-pollo-loco.png',
      duration: '5 weeks',
      techs: [
        { name: 'JavaScript', url: 'assets/icons/technologies/js.png' },
        { name: 'CSS', url: 'assets/icons/technologies/css.png' },
        { name: 'Html', url: 'assets/icons/technologies/html.png' },
      ],
      description: [
        {
          title: 'About the project',
          details:
            'A Jump-and-Run game based on an object-oriented approach. Help Character to find coins and poison bottles to fight against the killer whale.',
        },
        {
          title: 'How I have organised my work process',
          details:
            'I keep my code clean by breaking the project into reusable modules with clear, descriptive names for files, variables, and classes. I document each part to explain its purpose and use. Regular testing helps me catch bugs early and maintain reliability. This approach ensures scalable and maintainable code.',
        },
        {
          title: 'What I have learnt',
          details:
            'I enjoyed this project as it strengthened my understanding of Object-Oriented Programming in JavaScript and key game concepts like game loops and collision detection. I also improved my use of JavaScript intervals to handle timed events and animations. Overall, it enhanced my coding skills and practical OOP knowledge.',
        },
      ],
    },
    {
      name: 'Join',
      photo: 'assets/images/projects/join.png',
      duration: '2 months',
      techs: [
        { name: 'angular', url: 'assets/icons/technologies/angular.png' },
        { name: 'typeScript', url: 'assets/icons/technologies/ts.png' },
        { name: 'HTML', url: 'assets/icons/technologies/sass.png' },
      ],
      description: [
        {
          title: 'About the project',
          details:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        },
        {
          title: 'How I have organised my work process',
          details:
            'In this group project, we organized the code into reusable Angular components and services to keep it modular and maintainable. We used clear and consistent naming for files, variables, and classes to enhance readability. Trello helped us manage tasks and coordinate work effectively. Although modular design helped maintain code clarity and teamwork.',
        },
        {
          title: 'My group work experience',
          details:
            'Our team consisted of 4 members, and my role involved contributing to all parts of the project rather than focusing on just one area. I actively participated in developing various features and supported team collaboration. Strong teamwork and open communication were key to our successful cooperation and project delivery.',
        },
      ],
    },
  ];

  projectsDE : Project[] = [
    {
      name: 'El Pollo loco',
      photo: 'assets/images/projects/el-pollo-loco.png',
      duration: '5 weeks',
      techs: [
        { name: 'JavaScript', url: 'assets/icons/technologies/js.png' },
        { name: 'CSS', url: 'assets/icons/technologies/css.png' },
        { name: 'Html', url: 'assets/icons/technologies/html.png' },
      ],
      description: [
        {
          title: 'Über das Projekt',
          details:
            'Ein Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf der Spielfigur, Münzen und Giftflaschen zu finden, um gegen den Schwertwal zu kämpfen.',
        },
        {
          title: 'Wie ich meinen Arbeitsprozess organisiert habe',
          details:
            'Ich halte meinen Code sauber, indem ich das Projekt in wiederverwendbare Module aufteile und klare, beschreibende Namen für Dateien, Variablen und Klassen verwende. Ich dokumentiere jeden Teil, um dessen Zweck und Nutzung zu erklären. Regelmäßige Tests helfen mir, Fehler frühzeitig zu entdecken und die Zuverlässigkeit zu gewährleisten. Dieser Ansatz sorgt für skalierbaren und wartbaren Code.',
        },
        {
          title: 'Was ich gelernt habe',
          details:
            'Ich habe dieses Projekt sehr genossen, da es mein Verständnis von objektorientierter Programmierung in JavaScript sowie grundlegenden Spielkonzepten wie Spielschleifen und Kollisionserkennung vertieft hat. Außerdem habe ich meine Fähigkeiten im Umgang mit JavaScript-Intervallen zur Steuerung zeitgesteuerter Ereignisse und Animationen verbessert. Insgesamt hat es meine Programmierkenntnisse und mein praktisches Wissen in OOP erweitert.',
        },
      ],
    },
    {
      name: 'Join',
      photo: 'assets/images/projects/join.png',
      duration: '2 months',
      techs: [
        { name: 'angular', url: 'assets/icons/technologies/angular.png' },
        { name: 'typeScript', url: 'assets/icons/technologies/ts.png' },
        { name: 'HTML', url: 'assets/icons/technologies/sass.png' },
      ],
      description: [
        {
          title: 'Über das Projekt',
          details:
            'Task-Manager, inspiriert vom Kanban-System. Erstellen und Organisieren von Aufgaben mithilfe von Drag-and-Drop-Funktionen sowie Zuweisen von Benutzern und Kategorien.',
        },
        {
          title: 'Wie ich meinen Arbeitsprozess organisiert habe',
          details:
            'In diesem Gruppenprojekt haben wir den Code in wiederverwendbare Angular-Komponenten und Services organisiert, um ihn modular und wartbar zu halten. Wir haben klare und konsistente Namen für Dateien, Variablen und Klassen verwendet, um die Lesbarkeit zu verbessern. Trello hat uns dabei geholfen, Aufgaben zu verwalten und die Arbeit effektiv zu koordinieren. Das modulare Design hat zur Klarheit des Codes und zur Zusammenarbeit im Team beigetragen.',
        },
        {
          title: 'Meine Erfahrung in der Gruppenarbeit',
          details:
            'Unser Team bestand aus 4 Mitgliedern, und meine Rolle bestand darin, zu allen Teilen des Projekts beizutragen, anstatt mich nur auf einen Bereich zu konzentrieren. Ich habe aktiv an der Entwicklung verschiedener Funktionen mitgewirkt und die Teamarbeit unterstützt. Starke Zusammenarbeit und offene Kommunikation waren der Schlüssel zu unserem erfolgreichen Miteinander und dem erfolgreichen Abschluss des Projekts.',
        },
      ],
    },
  ];

  currentProject: number = 0;
  current = signal<number>(0);

  changeCurrentProject(index: number): void {
    this.currentProject = index;
  }
}
