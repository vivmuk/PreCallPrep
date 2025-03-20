/**
 * MSL Precall Planning Platform - Main JavaScript
 */

// Import the Venice API client
import VeniceClient from './api/venice.js';

// Initialize the Venice API client
const venice = new VeniceClient();

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  console.log('MSL Precall Planning Platform initialized');
  initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
  // Toggle sidebar functionality
  initSidebar();
  
  // Initialize tooltips and popovers
  initBootstrapComponents();
  
  // Check which page we're on and initialize page-specific functionality
  initPageSpecificFunctions();
}

/**
 * Initialize sidebar functionality
 */
function initSidebar() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
    });
  }
  
  // Add the active class to the current page link
  const currentPageUrl = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.list-group-item');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href').split('/').pop();
    if (linkHref === currentPageUrl || (currentPageUrl === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Initialize Bootstrap components
 */
function initBootstrapComponents() {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Initialize popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

/**
 * Initialize page-specific functionality based on the current URL
 */
function initPageSpecificFunctions() {
  const path = window.location.pathname;
  const page = path.split('/').pop();
  
  // Handle index/dashboard page
  if (page === '' || page === 'index.html') {
    initDashboard();
  }
  // Handle PDF Summarizer page
  else if (page === 'pdf-summarizer.html') {
    initPdfSummarizer();
  }
  // Handle Next Best Dialogue page
  else if (page === 'next-dialogue.html') {
    initNextDialogue();
  }
  // Handle Learn from HCP page
  else if (page === 'learn-from-hcp.html') {
    initLearnFromHcp();
  }
  // Handle Competitive Intelligence page
  else if (page === 'competitive-intel.html') {
    initCompetitiveIntel();
  }
  // Handle Call Checklist page
  else if (page === 'call-checklist.html') {
    initCallChecklist();
  }
  // Handle Meeting Objectives page
  else if (page === 'meeting-objectives.html') {
    initMeetingObjectives();
  }
}

/**
 * Initialize dashboard charts and data
 */
function initDashboard() {
  console.log('Initializing Dashboard');
  // Dashboard specific code here
}

/**
 * Initialize PDF Summarizer functionality
 */
function initPdfSummarizer() {
  console.log('Initializing PDF Summarizer');
  
  const summarizeBtn = document.getElementById('summarizeBtn');
  const fileInput = document.getElementById('fileInput');
  const dropzone = document.getElementById('dropzone');
  const usePreloadedPdf = document.getElementById('usePreloadedPdf');
  
  // Handle the summarize button click
  if (summarizeBtn) {
    summarizeBtn.addEventListener('click', async function() {
      const summaryType = document.getElementById('summaryType').value;
      const includeMethodology = document.getElementById('includeMethodology').checked;
      const includeResults = document.getElementById('includeResults').checked;
      const includeImplications = document.getElementById('includeImplications').checked;
      const includeLimitations = document.getElementById('includeLimitations').checked;
      const customFocus = document.getElementById('customFocus').value;
      
      try {
        // In a real implementation, we would send the PDF file to a backend service
        // that would extract the text and then use the Venice API to generate a summary
        
        // For now, we'll simulate the API call
        const summaryPrompt = `Please summarize this scientific paper with a focus on ${summaryType} format.${customFocus ? ` Pay special attention to ${customFocus}.` : ''} Include sections on: ${includeMethodology ? 'Methodology & Study Design, ' : ''}${includeResults ? 'Key Results & Outcomes, ' : ''}${includeImplications ? 'Clinical Implications, ' : ''}${includeLimitations ? 'Limitations & Future Directions' : ''}.`;
        
        console.log('Summary prompt:', summaryPrompt);
        
        // In a real implementation:
        // const summary = await venice.createChatCompletion({
        //   model: "llama-3.3-70b",
        //   messages: [
        //     {
        //       role: "system",
        //       content: "You are an AI assistant specialized in summarizing scientific papers and clinical documents for Medical Science Liaisons."
        //     },
        //     {
        //       role: "user",
        //       content: summaryPrompt
        //     }
        //   ]
        // });
        
        // Show summary controls
        document.getElementById('summaryControls').classList.remove('d-none');
      } catch (error) {
        console.error("Error generating summary:", error);
      }
    });
  }
}

/**
 * Initialize Next Best Dialogue functionality
 */
function initNextDialogue() {
  console.log('Initializing Next Best Dialogue');
  
  const generateBtn = document.getElementById('generateDialogueBtn');
  
  if (generateBtn) {
    generateBtn.addEventListener('click', async function() {
      const hcpSelect = document.getElementById('hcpSelect').value;
      const topicSelect = document.getElementById('topicSelect').value;
      const productSelect = document.getElementById('productSelect').value;
      const includeTalkingPoints = document.getElementById('includeTalkingPoints').checked;
      const includeSupportingData = document.getElementById('includeSupportingData').checked;
      const includeAnticipatedQuestions = document.getElementById('includeAnticipatedQuestions').checked;
      const includeObjections = document.getElementById('includeObjections').checked;
      
      try {
        // In a real implementation, we would use the Venice API to generate dialogue points
        const prompt = `Generate next best dialogue for a medical science liaison meeting with ${hcpSelect} about ${topicSelect} related to ${productSelect}. ${includeTalkingPoints ? 'Include key talking points. ' : ''}${includeSupportingData ? 'Include supporting data. ' : ''}${includeAnticipatedQuestions ? 'Include anticipated questions. ' : ''}${includeObjections ? 'Include objection handling.' : ''}`;
        
        console.log('Dialogue prompt:', prompt);
        
        // In a real implementation:
        // const dialogue = await venice.createChatCompletion({
        //   model: "llama-3.3-70b",
        //   messages: [
        //     {
        //       role: "system",
        //       content: "You are an AI assistant specialized in helping Medical Science Liaisons prepare for HCP interactions."
        //     },
        //     {
        //       role: "user",
        //       content: prompt
        //     }
        //   ]
        // });
        
        // Show dialogue controls
        document.getElementById('dialogueControls').classList.remove('d-none');
      } catch (error) {
        console.error("Error generating dialogue:", error);
      }
    });
  }
}

/**
 * Initialize Learn from HCP functionality
 */
function initLearnFromHcp() {
  console.log('Initializing Learn from HCP');
  
  const suggestedTopics = document.querySelectorAll('.suggested-topic');
  
  if (suggestedTopics) {
    suggestedTopics.forEach(topic => {
      topic.addEventListener('click', function() {
        const topicText = this.textContent.trim();
        // In a real implementation, we would insert the topic into the chat iframe
        console.log('Selected topic:', topicText);
      });
    });
  }
}

/**
 * Initialize Competitive Intelligence functionality
 */
function initCompetitiveIntel() {
  console.log('Initializing Competitive Intelligence');
  
  // Set up modal for news analysis
  const newsItems = document.querySelectorAll('.news-item-link');
  
  if (newsItems) {
    newsItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const newsTitle = this.getAttribute('data-title');
        const newsCategory = this.getAttribute('data-category');
        
        // Update modal content
        const modal = document.getElementById('newsAnalysisModal');
        if (modal) {
          const modalTitle = modal.querySelector('.modal-title');
          if (modalTitle) {
            modalTitle.textContent = newsTitle;
          }
          
          // In a real implementation, we would use the Venice API to generate analysis
          const prompt = `Analyze this ${newsCategory} news: "${newsTitle}". Provide a summary, potential impact on our products, recommended actions, and talking points for discussions with healthcare providers.`;
          
          console.log('Analysis prompt:', prompt);
          
          // Show the modal
          const bsModal = new bootstrap.Modal(modal);
          bsModal.show();
        }
      });
    });
  }
}

/**
 * Initialize Call Checklist functionality
 */
function initCallChecklist() {
  console.log('Initializing Call Checklist');
  
  const generateBtn = document.getElementById('generateChecklistBtn');
  
  if (generateBtn) {
    generateBtn.addEventListener('click', function() {
      const hcpSelect = document.getElementById('hcpSelect').value;
      const visitDate = document.getElementById('visitDate').value;
      const visitType = document.getElementById('visitType').value;
      const objectives = document.getElementById('meetingObjectives').value;
      
      // In a real implementation, we would use the Venice API to generate a customized checklist
      const prompt = `Generate a call preparation checklist for a ${visitType} meeting with ${hcpSelect} on ${visitDate} with the following objectives: ${objectives}`;
      
      console.log('Checklist prompt:', prompt);
      
      // Show the checklist container
      document.getElementById('checklistPlaceholder').classList.add('d-none');
      document.getElementById('generatedChecklist').classList.remove('d-none');
    });
  }
  
  // Handle checklist item completion
  const checklistItems = document.querySelectorAll('.form-check-input');
  
  if (checklistItems) {
    checklistItems.forEach(item => {
      item.addEventListener('change', function() {
        const parentItem = this.closest('.checklist-item');
        if (parentItem) {
          if (this.checked) {
            parentItem.classList.add('completed');
          } else {
            parentItem.classList.remove('completed');
          }
          
          // Update progress bar
          updateChecklistProgress();
        }
      });
    });
  }
}

/**
 * Update checklist progress bar
 */
function updateChecklistProgress() {
  const totalItems = document.querySelectorAll('.checklist-item').length;
  const completedItems = document.querySelectorAll('.checklist-item.completed').length;
  const progressBar = document.getElementById('checklistProgress');
  
  if (progressBar && totalItems > 0) {
    const progressPercent = Math.round((completedItems / totalItems) * 100);
    progressBar.style.width = progressPercent + '%';
    progressBar.setAttribute('aria-valuenow', progressPercent);
    
    // Update progress text
    const progressText = document.getElementById('progressText');
    if (progressText) {
      progressText.textContent = `${completedItems} of ${totalItems} completed (${progressPercent}%)`;
    }
  }
}

/**
 * Initialize Meeting Objectives functionality
 */
function initMeetingObjectives() {
  console.log('Initializing Meeting Objectives');
  
  const saveBtn = document.getElementById('saveObjectivesBtn');
  
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      const meetingType = document.getElementById('meetingType').value;
      const objectives = document.querySelectorAll('.objective-input');
      const agendaItems = document.querySelectorAll('.agenda-item');
      
      // Collect objectives
      const objectivesList = [];
      objectives.forEach(objective => {
        if (objective.value.trim() !== '') {
          objectivesList.push(objective.value.trim());
        }
      });
      
      // Collect agenda items
      const agendaList = [];
      agendaItems.forEach(item => {
        const topic = item.querySelector('.agenda-topic').value;
        const time = item.querySelector('.agenda-time').value;
        const owner = item.querySelector('.agenda-owner').value;
        
        if (topic.trim() !== '') {
          agendaList.push({
            topic: topic,
            time: time,
            owner: owner
          });
        }
      });
      
      // In a real implementation, we would save this data to a database or local storage
      console.log('Meeting objectives saved:', {
        type: meetingType,
        objectives: objectivesList,
        agenda: agendaList
      });
      
      // Show success alert
      const alertContainer = document.getElementById('alertContainer');
      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="fas fa-check-circle me-2"></i> Meeting objectives saved successfully!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      }
    });
  }
}

// Export functions for use in other modules
export {
  initializeApp,
  initSidebar,
  initBootstrapComponents,
  initPageSpecificFunctions
}; 