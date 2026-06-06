import { Component } from '@angular/core';

interface Reference {
  name: string;
  project: string;
  statement: string;
  linkedIn: string;
}

@Component({
  selector: 'app-testemonials',
  imports: [],
  templateUrl: './testemonials.html',
  styleUrl: './testemonials.scss',
})
export class Testemonials {
  references: Reference[] = [
    {
      name: 'Sahra Mueller',
      project: 'DA Bublle',
      statement:
        '‘’Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'James Rugman',
      project: 'Join',
      statement:
        '‘’Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.’’',
      linkedIn: 'https://www.linkedin.com/',
    },
    {
      name: 'Evelyn Marx',
      project: 'Sharkie',
      statement:
        '‘’ She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
      linkedIn: 'https://www.linkedin.com/',
    },
  ];
}
