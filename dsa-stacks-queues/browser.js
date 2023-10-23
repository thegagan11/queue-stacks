class BrowserHistory {
    constructor() {
      // Initialize two stacks for back and forward history
      this.backStack = [];
      this.forwardStack = [];
      this.currentSite = null;
    }
  
    // Visit a new site
    visit(site) {
      // Clear the forward history when visiting a new site
      this.forwardStack = [];
      // Add the current site to the back history
      if (this.currentSite) {
        this.backStack.push(this.currentSite);
      }
      // Set the current site to the new site
      this.currentSite = site;
    }
  
    // Go back to the previous site
    goBack() {
      if (this.backStack.length > 0) {
        // Push the current site to the forward history
        this.forwardStack.push(this.currentSite);
        // Pop the previous site from the back history
        this.currentSite = this.backStack.pop();
      }
    }
  
    // Go forward to the next site
    goForward() {
      if (this.forwardStack.length > 0) {
        // Push the current site to the back history
        this.backStack.push(this.currentSite);
        // Pop the next site from the forward history
        this.currentSite = this.forwardStack.pop();
      }
    }
  
    // Get the current site
    getCurrentSite() {
      return this.currentSite;
    }
  
    // Check if there's a site to go back to
    canGoBack() {
      return this.backStack.length > 0;
    }
  
    // Check if there's a site to go forward to
    canGoForward() {
      return this.forwardStack.length > 0;
    }
  }
  