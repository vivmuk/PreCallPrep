/**
 * Venice API Client
 * Handles communication with the Venice API for chat, image generation, and other AI features
 */
class VeniceClient {
  constructor() {
    this.apiKey = 'kESoxywdT-XkxEwqr2_SGeJQE5WjXsI38xpRzAS3jV';
    this.baseUrl = 'https://api.venice.is';
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
    
    // Initialize API endpoints
    this.chat = {
      createCompletion: this.createChatCompletion.bind(this),
      createCompletionStream: this.createChatCompletionStream.bind(this)
    };
    
    this.images = {
      generate: this.generateImage.bind(this)
    };
  }
  
  /**
   * Create a chat completion
   * @param {Object} params - Parameters for the chat completion
   * @returns {Promise<Object>} - The chat completion response
   */
  async createChatCompletion(params) {
    const url = `${this.baseUrl}/chat/completions`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API request failed with status ${response.status}`);
    }
    
    return response.json();
  }
  
  /**
   * Create a streaming chat completion
   * @param {Object} params - Parameters for the chat completion
   * @returns {ReadableStream} - Stream of chat completion chunks
   */
  async createChatCompletionStream(params) {
    const url = `${this.baseUrl}/chat/completions`;
    
    // Add streaming parameter
    const streamParams = {
      ...params,
      stream: true
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(streamParams)
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API request failed with status ${response.status}`);
    }
    
    return this.parseSSE(response.body);
  }
  
  /**
   * Generate an image using Venice AI
   * @param {Object} params - Parameters for image generation
   * @returns {Promise<Object>} - The image generation response
   */
  async generateImage(params) {
    const url = `${this.baseUrl}/images/generations`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API request failed with status ${response.status}`);
    }
    
    return response.json();
  }
  
  /**
   * Parse Server-Sent Events (SSE) from a stream
   * @param {ReadableStream} stream - The SSE stream
   * @returns {AsyncGenerator<Object>} - Generator yielding parsed SSE data
   */
  async *parseSSE(stream) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    
    try {
      while (true) {
        const { value, done } = await reader.read();
        
        if (done) {
          break;
        }
        
        buffer += decoder.decode(value, { stream: true });
        
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';
        
        for (const line of lines) {
          if (line.trim() === '') continue;
          if (line.trim() === 'data: [DONE]') return;
          
          const message = line.replace(/^data: /, '');
          try {
            yield JSON.parse(message);
          } catch (error) {
            console.error('Error parsing SSE message:', error);
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }
  
  /**
   * Save an image to a file (for Node.js environments)
   * @param {String} imageData - Base64 encoded image data
   * @param {String} filename - Output filename
   */
  saveImageToFile(imageData, filename) {
    // Only works in Node.js environment
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const buffer = Buffer.from(imageData, 'base64');
      fs.writeFileSync(filename, buffer);
    } else {
      // Browser environment - create download link
      const link = document.createElement('a');
      link.href = `data:image/png;base64,${imageData}`;
      link.download = filename;
      link.click();
    }
  }
}

// Export the API client
export default VeniceClient; 