# MSL Precall Planning Platform

An AI-powered platform for Medical Science Liaison precall planning.

## Overview

This application provides Medical Science Liaisons (MSLs) with tools to prepare for their interactions with Healthcare Professionals (HCPs). It includes features like PDF summarization, call planning checklists, and competitive intelligence gathering.

## Features

- PDF Summarizer with audio review capability
- Meeting Objectives planning
- Call Planning Checklists
- Next Best Dialogue suggestions
- Learning from HCP interactions
- Competitive Intelligence dashboard

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the local development server:
   ```
   npm start
   ```
4. Open your browser to `http://localhost:8000`

## Deploying to Netlify

This project is configured for deployment on Netlify. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Create a new site on Netlify and connect to your repository
3. Netlify will automatically detect the build settings from the netlify.toml file

### Troubleshooting Netlify Deployment

If you encounter the error `npm error code ETARGET` for Font Awesome, this has been fixed by:

1. Updating the package.json to use the correct package name `@fortawesome/fontawesome-free` instead of `font-awesome`
2. Setting the version to `^6.4.2` which is an available version
3. Using CDN links in HTML files with integrity hashes for better caching

## Browser Compatibility

This application is designed to work with:

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## License

MIT 