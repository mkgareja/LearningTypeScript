import Cmp from './base-component';
import * as Validation from '../util/validation';
import { autobind as Autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';
import axios from "axios";

// ProjectInput Class
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validation.Validatable = {
      value: enteredTitle,
      required: true
    };
    const descriptionValidatable: Validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };
    const peopleValidatable: Validation.Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    };

    if (
      !Validation.validate(titleValidatable) ||
      !Validation.validate(descriptionValidatable) ||
      !Validation.validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}

  

// let options:any = {
//   method: 'GET',
//   url: 'https://imdb8.p.rapidapi.com/auto-complete',
//   params: {q: 'India'},
//   headers: {
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//     'x-rapidapi-key': 'nNbGL5Fj3Omsh4mg1TlkbGmBj4ypp1N4lBxjsnyzNvCiQ7DkpZ'
//   }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
//     response.data.d.forEach((element:any) => {
//       projectState.addProject(element.l, element.s, element.rank);
//     });

// }).catch(function (error) {
//     console.error(error);
// });


let config: any = {
  method: 'get',
  url: 'http://localhost:3001',
  headers: { }
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    response.data.d.forEach((element: any) => {
      projectState.addProject(element.l, element.s, element.rank);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
