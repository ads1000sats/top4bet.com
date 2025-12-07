/**
 * HUAY Backoffice - Single Page Application (SPA) Router
 * โหลดเฉพาะเนื้อหาส่วนกลางโดยไม่ต้องโหลด sidebar ใหม่
 */

// ====================================
// SPA Router
// ====================================

const SPARouter = {
    contentContainer: null,
    currentPage: null,
    cache: new Map(),
    basePath: '',
    isInitialized: false,
    
    init() {
        this.contentContainer = document.getElementById('pageContent');
        if (!this.contentContainer) {
            console.error('SPA: Content container not found');
            return;
        }
        
        // Calculate base path (project root)
        this.basePath = this.calculateBasePath();
        
        // Intercept all menu clicks
        this.interceptLinks();
        
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            } else {
                // Handle back to index
                const pagePath = this.getPagePathFromUrl();
                if (pagePath) {
                    this.loadPage(pagePath, false);
                }
            }
        });
        
        // Set initial state
        const initialPage = this.getPagePathFromUrl();
        history.replaceState({ page: initialPage }, '', window.location.href);
        
        this.currentPage = initialPage;
        this.isInitialized = true;
        
        console.log('SPA Router initialized, basePath:', this.basePath);
    },
    
    calculateBasePath() {
        // Get the path and find project root
        const path = window.location.pathname;
        
        // If we're at index.html or root
        if (path.endsWith('index.html') || path.endsWith('/')) {
            return path.substring(0, path.lastIndexOf('/') + 1);
        }
        
        // If we're in pages folder
        const pagesIndex = path.indexOf('/pages/');
        if (pagesIndex !== -1) {
            return path.substring(0, pagesIndex + 1);
        }
        
        return path.substring(0, path.lastIndexOf('/') + 1);
    },
    
    interceptLinks() {
        // Use event delegation for all clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;
            
            const href = link.getAttribute('href');
            
            // Skip external links, hash links, and non-page links
            if (!href || 
                href.startsWith('http') || 
                href.startsWith('#') || 
                href.startsWith('javascript:') ||
                link.hasAttribute('data-no-spa') ||
                link.getAttribute('target') === '_blank') {
                return;
            }
            
            // Handle internal page navigation
            if (href.endsWith('.html')) {
                e.preventDefault();
                this.navigate(href, link);
            }
        });
    },
    
    getPagePathFromUrl() {
        const path = window.location.pathname;
        const basePath = this.basePath || this.calculateBasePath();
        
        // Get relative path from base
        let relativePath = path.replace(basePath, '');
        
        // Handle root
        if (!relativePath || relativePath === '' || relativePath === '/') {
            return 'index.html';
        }
        
        return relativePath;
    },
    
    navigate(href, linkElement = null) {
        // Normalize href - resolve relative paths
        let pagePath = this.resolveHref(href);
        
        // Debug logging
        if (pagePath.includes('pages/pages/')) {
            console.warn('SPA: Detected duplicate pages/ in path:', {
                originalHref: href,
                resolvedPath: pagePath,
                currentUrl: window.location.pathname
            });
            // Fix it
            pagePath = pagePath.replace('pages/pages/', 'pages/');
        }
        
        // Handle index.html - reload the whole page to show dashboard content
        if (pagePath === 'index.html' || pagePath === '' || pagePath === '/') {
            window.location.href = this.basePath + 'index.html';
            return;
        }
        
        // Handle login.html - always full page reload
        if (pagePath === 'login.html' || pagePath.endsWith('/login.html')) {
            window.location.href = this.basePath + 'login.html';
            return;
        }
        
        this.loadPage(pagePath, true);
    },
    
    resolveHref(href) {
        // Normalize href first
        let normalized = href.trim();
        
        // Remove query string and hash
        if (normalized.includes('?')) {
            normalized = normalized.split('?')[0];
        }
        if (normalized.includes('#')) {
            normalized = normalized.split('#')[0];
        }
        
        // If href is index.html or login.html, it's always from root
        if (normalized === 'index.html' || normalized === 'login.html') {
            return normalized;
        }
        
        // If href starts with 'pages/', it's an absolute path from root
        if (normalized.startsWith('pages/')) {
            return normalized;
        }
        
        // If href starts with '/', remove it and treat as absolute from root
        if (normalized.startsWith('/')) {
            normalized = normalized.substring(1);
            // If it's pages/... after removing /, return it
            if (normalized.startsWith('pages/')) {
                return normalized;
            }
            // Otherwise treat as root file
            return normalized || 'index.html';
        }
        
        // For relative paths (../ or ./), resolve from current page
        // But we need to be careful - if the result goes outside pages/, it's wrong
        try {
            // Get current page URL
            const currentUrl = new URL(window.location.href);
            
            // Resolve href relative to current page
            const resolvedUrl = new URL(href, currentUrl);
            
            // Get path relative to base path
            const baseUrl = new URL(this.basePath, window.location.origin);
            const resolvedPath = resolvedUrl.pathname;
            const basePath = baseUrl.pathname;
            
            // Extract relative path from base
            let relativePath = resolvedPath;
            if (resolvedPath.startsWith(basePath)) {
                relativePath = resolvedPath.substring(basePath.length);
            }
            
            // Remove leading slash
            if (relativePath.startsWith('/')) {
                relativePath = relativePath.substring(1);
            }
            
            // Validate: if path contains 'pages/pages/', it's wrong - fix it
            if (relativePath.includes('pages/pages/')) {
                // Remove the duplicate 'pages/'
                relativePath = relativePath.replace('pages/pages/', 'pages/');
            }
            
            return relativePath || 'index.html';
        } catch (error) {
            console.error('SPA: Error resolving href', href, error);
            // Fallback to simple resolution
            let resolved = href;
            
            // Remove leading ../
            while (resolved.startsWith('../')) {
                resolved = resolved.substring(3);
            }
            
            // Remove leading ./
            if (resolved.startsWith('./')) {
                resolved = resolved.substring(2);
            }
            
            // Remove leading /
            if (resolved.startsWith('/')) {
                resolved = resolved.substring(1);
            }
            
            // Fix duplicate pages/
            if (resolved.includes('pages/pages/')) {
                resolved = resolved.replace('pages/pages/', 'pages/');
            }
            
            return resolved;
        }
    },
    
    async loadPage(pagePath, pushState = true) {
        // Don't reload if same page
        if (pagePath === this.currentPage && this.isInitialized) {
            return;
        }
        
        // Show loading
        this.showLoading();
        
        try {
            // Build full URL for fetch
            const fullUrl = this.basePath + pagePath;
            
            // Fetch page content
            let html;
            if (this.cache.has(pagePath)) {
                html = this.cache.get(pagePath);
            } else {
                const response = await fetch(fullUrl);
                if (!response.ok) {
                    throw new Error(`Page not found: ${fullUrl}`);
                }
                html = await response.text();
                this.cache.set(pagePath, html);
            }
            
            // Extract content from the page
            const content = this.extractContent(html);
            
            // Update the content area with animation
            this.contentContainer.style.opacity = '0';
            
            await new Promise(resolve => setTimeout(resolve, 100));
            
            this.contentContainer.innerHTML = content.html;
            
            this.contentContainer.style.opacity = '1';
            
            // Update page title
            if (content.title) {
                document.title = content.title;
            }
            
            // Update breadcrumb
            this.updateBreadcrumb(content.breadcrumb || this.extractBreadcrumb(pagePath));
            
            // Update active menu item
            this.updateActiveMenu(pagePath);
            
            // Update URL
            if (pushState) {
                history.pushState({ page: pagePath }, '', fullUrl);
            }
            
            // Execute any inline scripts
            this.executeScripts(this.contentContainer);
            
            // Scroll to top of content
            this.contentContainer.scrollTop = 0;
            
            // Trigger page load event
            window.dispatchEvent(new CustomEvent('spa:pageload', { detail: { page: pagePath } }));
            
            this.currentPage = pagePath;
            
        } catch (error) {
            console.error('SPA: Failed to load page', error);
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    },
    
    extractContent(html) {
        // Create a temporary DOM to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Get title first
        const titleEl = doc.querySelector('title');
        const title = titleEl ? titleEl.textContent : '';
        
        // Try to find the main content area - prioritize .page-content (inside main-content)
        // This is the actual content without sidebar/header
        const contentSelectors = [
            '.page-content',           // Most pages use this
            '.page-container',         // Dashboard uses this
            '#pageContent',            // SPA container
            '.app-content',            // Alternative
            'main .page-container'     // Fallback
        ];
        
        let contentEl = null;
        for (const selector of contentSelectors) {
            contentEl = doc.querySelector(selector);
            if (contentEl) break;
        }
        
        // Get breadcrumb info from page header
        const pageTitle = doc.querySelector('.page-title');
        const pageSubtitle = doc.querySelector('.page-subtitle');
        
        // Get any inline styles from the page
        const styleEl = doc.querySelector('style');
        const inlineStyles = styleEl ? styleEl.outerHTML : '';
        
        // Build content HTML
        let contentHtml = '';
        
        if (contentEl) {
            // Wrap in page-container for consistent styling
            if (contentEl.classList.contains('page-content')) {
                contentHtml = `<div class="page-container">${contentEl.innerHTML}</div>`;
            } else if (contentEl.classList.contains('page-container')) {
                contentHtml = contentEl.outerHTML;
            } else {
                contentHtml = `<div class="page-container">${contentEl.innerHTML}</div>`;
            }
        } else {
            // Fallback: try to get content from main-content
            const mainContent = doc.querySelector('.main-content');
            if (mainContent) {
                const pageContent = mainContent.querySelector('.page-content');
                contentHtml = pageContent 
                    ? `<div class="page-container">${pageContent.innerHTML}</div>`
                    : `<div class="page-container">${mainContent.innerHTML}</div>`;
            } else {
                contentHtml = `<div class="page-container"><p>ไม่พบเนื้อหา</p></div>`;
            }
        }
        
        // Add inline styles if any
        if (inlineStyles) {
            contentHtml = inlineStyles + contentHtml;
        }
        
        return {
            html: contentHtml,
            title: title,
            breadcrumb: {
                title: pageTitle ? pageTitle.textContent : '',
                subtitle: pageSubtitle ? pageSubtitle.textContent : ''
            }
        };
    },
    
    extractBreadcrumb(pagePath) {
        // Extract breadcrumb from page path
        const parts = pagePath.replace('pages/', '').replace('.html', '').split('/');
        const pageName = parts[parts.length - 1];
        
        // Convert page name to readable title
        const title = pageName
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
        
        return { title, subtitle: '' };
    },
    
    updateBreadcrumb(breadcrumb) {
        const breadcrumbEl = document.querySelector('.breadcrumb');
        if (!breadcrumbEl) return;
        
        const activeItem = breadcrumbEl.querySelector('.breadcrumb-item.active');
        if (activeItem && breadcrumb.title) {
            activeItem.textContent = breadcrumb.title;
        }
    },
    
    updateActiveMenu(pagePath) {
        // Remove all active states
        document.querySelectorAll('.menu-item.active').forEach(item => {
            item.classList.remove('active');
        });
        
        // Find and activate the matching menu item
        const pageFile = pagePath.split('/').pop();
        const menuItem = document.querySelector(`.menu-item[data-page="${pageFile}"]`);
        if (menuItem) {
            menuItem.classList.add('active');
            
            // Scroll menu item into view if needed (without affecting sidebar scroll position)
            // We don't scroll here to preserve user's scroll position
        }
    },
    
    executeScripts(container) {
        // Find all script tags and execute them
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = oldScript.textContent;
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    },
    
    showLoading() {
        // Add loading class to content
        if (this.contentContainer) {
            this.contentContainer.classList.add('loading');
        }
        
        // Show loading overlay
        let loader = document.querySelector('.spa-loading');
        if (!loader) {
            loader = document.createElement('div');
            loader.className = 'spa-loading';
            loader.innerHTML = `
                <div class="spa-loading-spinner">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
            `;
            document.body.appendChild(loader);
        }
        loader.classList.add('show');
    },
    
    hideLoading() {
        // Remove loading class
        if (this.contentContainer) {
            this.contentContainer.classList.remove('loading');
        }
        
        // Hide loading overlay
        const loader = document.querySelector('.spa-loading');
        if (loader) {
            loader.classList.remove('show');
        }
    },
    
    showError(message) {
        if (this.contentContainer) {
            this.contentContainer.innerHTML = `
                <div class="page-container">
                    <div class="spa-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h2>ไม่พบหน้าที่ต้องการ</h2>
                        <p>${message}</p>
                        <button class="ant-btn ant-btn-primary" onclick="window.location.href='${this.basePath}index.html'">
                            กลับหน้าหลัก
                        </button>
                    </div>
                </div>
            `;
        }
    },
    
    // Clear cache (useful for development)
    clearCache() {
        this.cache.clear();
        console.log('SPA cache cleared');
    }
};

// ====================================
// Initialize SPA when DOM is ready
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Only initialize SPA if we're on a page with the SPA layout
    if (document.getElementById('pageContent')) {
        SPARouter.init();
    }
});

// Export for global access
window.SPARouter = SPARouter;

