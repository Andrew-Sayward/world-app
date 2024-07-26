# Running the Application

## Installation
To run the application, start by installing the required packages:

```bash
  npm install
```

## Launching the Application
To start a local instance of the application, run:

```bash
  npm run dev
```

# Project Structure

## Overview
The project utilizes a modern app directory-based instance of Next JS, as recommended by React. This setup provides the necessary features for our application.

## API Integration
We call our API endpoint and pass the data into a listing component, which displays countries as cards.

## Pagination
All countries are loaded initially but are displayed eight at a time, using a "Load More" button to manage visibility.

## Navigation
Upon selecting a country, users can view more detailed information and navigate either to additional countries or return to the main listing.

## Search and Region Selection
Functionality for searching and selecting regions is managed through a context to maintain state across components. Changes in this state filter the array of countries.

## Typescript
Typescript ensures correct data modeling during the build, enhancing application reliability.

## Conditional Rendering
Certain data is conditionally rendered to prevent page errors when data is missing.

## Formatting Code
Run the following command to format the code:


# Considerations

## Dark Mode
While the dark mode implementation could also be managed via context similar to search functionality, time constraints limited this integration.

## Secure API Key Storage
In a production environment, API keys should not be hardcoded. Instead, we would use environment variables to manage sensitive information securely.
