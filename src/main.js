const { Plugin } = require('obsidian');

// This plugin enhances media experience in Obsidian with advanced features for various media types
// For the full source code, visit: https://github.com/iris2jane/media-plus

/**
 * Media Plus Plugin
 * 
 * Features:
 * - Article Mode: Display subtitles in a flowing text format
 * - Automatic Subtitle Scrolling: Follows the current playback position
 * - Highlight Active Subtitles: Visual indicators for currently playing parts
 * - Copy Timestamps & Ranges: Create Obsidian internal links with proper time format
 * - Visual Timeline Navigation: Click on any subtitle to jump to that position
 * - Keyboard Navigation: Use arrow keys or j/k to navigate between subtitles
 * - Expandable: Designed to support various media types in the future
 */
module.exports = class MediaPlus extends Plugin {
    async onload() {
        console.log('Media Plus plugin loaded');
        
        // Initialize plugin
        this.addStylesToDocument();
        
        // Set default states
        this.autoScrollEnabled = false;
        this.autoScrollButton = null;
        this.currentActiveIndex = -1;
        this.articleModeEnabled = true;
        
        // Setup observers and handlers
        this.setupAutoScroll();
        this.createSelectionToolbar();
        this.registerDomEvents();
    }
    
    onunload() {
        console.log('Media Plus plugin unloaded');
        // Cleanup code
    }
    
    // Add plugin styles to the document
    addStylesToDocument() {
        // CSS styles are defined here
        const style = document.createElement('style');
        style.id = 'media-plus-styles';
        style.textContent = `/* Styles will be added here */`;
        document.head.appendChild(style);
    }
    
    // Other methods will be included in the full source code
}; 