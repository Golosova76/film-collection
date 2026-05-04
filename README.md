# Film Collection

Film Collection is a small Angular application for browsing a collection of films using mock data. The project is built as a practice application for core Angular concepts: standalone components, routing, custom directives, custom pipes, and Angular Signals.

The application does not use RxJS. All reactive state is handled with Angular Signals.

## Features

- Film catalog page with a list of film cards
- Film details page with full information about a selected film
- Search by film title
- Automatic focus on the search input using a custom autofocus directive
- Favorite status toggling for each film
- Computed list of favorite films in the service
- Breadcrumb navigation
- Header and footer displayed on every page
- Wildcard route handling for unknown URLs
- Custom duration pipe for displaying film length in a readable format

## Tech Stack

- Angular 20+
- TypeScript
- SCSS
- Angular Standalone Components
- Angular Signals
- Angular Router
- New Angular control flow syntax: `@if`, `@for`, `@switch`

## Project Structure

The project is organized into logical folders by responsibility:

```text
src/
  app/    
    films/      
      components/
      directives/
      models/
      pages/
      pipes/
      services/
    layout/
      components/
      model/
    not-found/             
    app.routes.ts  
```

## Mock Data

The application uses mock film data. Each film contains the following fields:

- `id`
- `title`
- `year`
- `genre`
- `rating`
- `duration`
- `description`
- `posterUrl`
- `isFavorite`


## Pages

### Home Page

The home page displays the film catalog.

Users can:

- view all films;
- search films by title;
- add or remove a film from favorites;
- open the film details page by clicking on a film card.

If no films match the search query, the page displays the message:

```text
Nothing found
```

### Film Details Page

The film details page displays full information about the selected film.

The film id is read from the URL parameter.

Displayed information includes:

- poster;
- title;
- release year;
- genre;
- rating;
- duration;
- description.

The duration is formatted using a custom standalone pipe.

Examples:

```text
60  -> 1h
45  -> 45min
90  -> 1h 30min
```

The page also contains a Back button for returning to the film list.

### About Page

The About page contains a short description of the Film Collection application.

## Routing

The application contains routes for:

- home page;
- film details page;
- about page;
- unknown routes.

Navigation is implemented with Angular Router and `routerLink`, without full page reloads.

## Signals

The application uses Angular Signals for state management.

Implemented signal-based logic includes:

- film collection stored in `signal()`;
- search query stored in `signal()`;
- filtered film list created with `computed()`;
- favorite films list created with `computed()`;
- component communication through `input()` and `output()`.

## Custom Directive

The project includes a standalone autofocus directive.

It automatically sets focus on the search input when the element appears in the DOM.

## Custom Pipe

The project includes a standalone duration pipe.

It converts duration in minutes into a human-readable format:

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Or run Angular CLI directly:

```bash
ng serve
```

Open the application in the browser:

```text
http://localhost:4200
```

## Code Quality

The project meets the following requirements:

- strict TypeScript mode enabled;
- no linting errors;
- standalone Angular components only;
- no NgModules;
- no RxJS for application state;
- clean folder structure;
- reusable logic extracted into services, directives, and pipes.

