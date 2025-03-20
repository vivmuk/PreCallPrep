# MSL Precall Planning Platform

An AI-powered platform for Medical Science Liaisons to prepare for healthcare provider engagements, powered by the Venice AI API.

## Overview

This platform helps Medical Science Liaisons (MSLs) prepare effectively for healthcare provider (HCP) interactions by providing tools for:

- Meeting objectives planning
- Call checklists
- Next best dialogue generation
- HCP insights through AI-powered conversations
- Competitive & market intelligence
- Scientific document summarization

## Features

- **Dashboard**: Overview of upcoming engagements, recent activities, and quick actions
- **Meeting Objectives**: Define and structure objectives for HCP interactions
- **Call Planning Checklist**: Comprehensive checklists for pre-call preparation
- **Next Best Dialogue**: AI-generated talking points for effective communication
- **Learn from HCP**: AI-powered conversations to gather insights from HCPs
- **Competitive Intelligence**: Market data and competitor analysis
- **PDF Summarizer**: AI-powered scientific document summarization

## Getting Started

### Prerequisites

- Node.js 14+ installed
- Web browser (Chrome, Firefox, Edge recommended)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open your browser and navigate to `http://localhost:8000`

## API Integration

This platform integrates with the Venice AI API for AI-powered features:

- Chat completions for dialogue generation
- Document summarization
- Image generation (for visualizations)

The API key is configured in `src/api/venice.js`. If you need to update it, replace the existing key with your own.

## File Structure

- `/src`: Source code
  - `/api`: API integrations
  - `/pages`: HTML templates for different pages
  - `index.js`: Main JavaScript file
- `/css`: Stylesheets
- `index.html`: Main application file

## Example Workflows

### Preparing for an HCP Meeting

1. Start on the Dashboard
2. Select "Plan Meeting" from Quick Actions
3. Define meeting objectives and agenda
4. Generate a call checklist
5. Create next best dialogue points
6. Review competitive intelligence
7. Summarize relevant publications

### Summarizing a Scientific Paper

1. Navigate to "PDF Summarizer"
2. Upload a PDF or use the sample file
3. Select summary preferences
4. Click "Generate Summary"
5. Review and save the AI-generated summary

## Customization

The platform includes sample mock data for demonstration purposes. In a production environment, you would integrate with your organization's data sources.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 