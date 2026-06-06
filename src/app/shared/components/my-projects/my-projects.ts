import { Component, signal } from '@angular/core';

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
  projects: Project[] = [
    {
      name: 'DA Bubble',
      photo: 'assets/images/projects/da-bubble.png',
      duration: '3 weeks',
      techs: [
        { name: 'angular', url: 'assets/icons/technologies/angular.png' },
        { name: 'typeScript', url: 'assets/icons/technologies/ts.png' },
        { name: 'fireBase', url: 'assets/icons/technologies/firebase.png' },
      ],
      description: [
        {
          title: 'About the project',
          details:
            'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        },
        {
          title: 'How I have organised my work process',
          details:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
        {
          title: 'My group work experience',
          details:
            'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
        },
      ],
    },
    {
      name: 'Sharkie',
      photo: 'assets/images/projects/sharkie.png',
      duration: '5 weeks',
      techs: [
        { name: 'angular', url: 'assets/icons/technologies/angular.png' },
        { name: 'typeScript', url: 'assets/icons/technologies/ts.png' },
        { name: 'CSS', url: 'assets/icons/technologies/css.png' },
      ],
      description: [
        {
          title: 'About the project',
          details:
            'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        },
        {
          title: 'How I have organised my work process',
          details:
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
        {
          title: 'What I have learnt',
          details:
            'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.',
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
        { name: 'HTML', url: 'assets/icons/technologies/html.png' },
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
            'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
        },
        {
          title: 'My group work experience',
          details:
            'How many people were in the team and what was your role? Describe your tasks  in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
        },
      ],
    },
    {
      name: 'Ongoing Project',
      photo: 'assets/images/projects/comming.png',
      duration: '3 weeks',
      techs: [
        { name: 'angular', url: 'assets/icons/technologies/angular.png' },
        { name: 'typeScript', url: 'assets/icons/technologies/ts.png' },
        { name: 'CSS', url: 'assets/icons/technologies/css.png' },
        { name: 'HTML', url: 'assets/icons/technologies/html.png' },
        { name: 'Sass', url: 'assets/icons/technologies/sass.png' },
      ],
      description: [
        {
          title: 'About the project',
          details:
            'What are you currently working on and what features are you implementing? What is the key to success in your projects?  You can mention good planning,  code quality and execution. Show a desire to learn new technologies and continually improve your skills.',
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
