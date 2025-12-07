/**
 * HUAY Backoffice - Main JavaScript
 * Based on original application structure
 */

// ====================================
// Application State
// ====================================

const AppState = {
    isLoggedIn: false,
    user: null,
    sidebarCollapsed: false
};

// ====================================
// Menu Configuration
// ====================================

const menuConfig = [
    {
        title: 'หน้าหลัก',
        items: [
            { icon: 'fas fa-tachometer-alt', label: 'Dashboard', href: 'index.html' },
            { icon: 'fas fa-server', label: 'Dashboard ระบบ', href: 'pages/dashboard/dashboard-system.html' },
            { icon: 'fas fa-gamepad', label: 'Dashboard เกม', href: 'pages/dashboard/dashboard-game.html' }
        ]
    },
    {
        title: 'สมาชิก',
        items: [
            { icon: 'fas fa-users', label: 'รายการสมาชิก', href: 'pages/member/member.html' },
            { icon: 'fas fa-user-plus', label: 'เพิ่มสมาชิก', href: 'pages/member/member-create.html' },
            { icon: 'fas fa-user-check', label: 'สมาชิกใหม่', href: 'pages/member/new-member-list.html' },
            { icon: 'fas fa-id-card', label: 'ข้อมูลสมาชิก', href: 'pages/member/member-info.html' },
            { icon: 'fas fa-coins', label: 'เครดิตสมาชิก', href: 'pages/member/member-credit.html' },
            { icon: 'fas fa-history', label: 'ประวัติสมาชิก', href: 'pages/member/member-log.html' },
            { icon: 'fas fa-ticket-alt', label: 'ประวัติการแทง', href: 'pages/member/member-bet.html' }
        ]
    },
    {
        title: 'ฝาก/ถอน',
        items: [
            { icon: 'fas fa-clock', label: 'รอดำเนินการ', href: 'pages/deposit-withdraw/deposit-withdraw-pending.html', badge: 41 },
            { icon: 'fas fa-list', label: 'ทั้งหมด', href: 'pages/deposit-withdraw/deposit-withdraw-all.html' },
            { icon: 'fas fa-exchange-alt', label: 'ฝาก/ถอนตรง', href: 'pages/deposit-withdraw/direct-deposit.html' },
            { icon: 'fas fa-arrow-down', label: 'ถอน Agent', href: 'pages/deposit-withdraw/withdraw-agent.html' },
            { icon: 'fas fa-arrow-up', label: 'ถอน Master', href: 'pages/deposit-withdraw/withdraw-master.html' },
            { icon: 'fas fa-hand-holding-usd', label: 'ขอเครดิต', href: 'pages/deposit-withdraw/request-credit.html' }
        ]
    },
    {
        title: 'รายงาน',
        items: [
            { icon: 'fas fa-chart-bar', label: 'รายงานประจำวัน', href: 'pages/report/report-daily.html' },
            { icon: 'fas fa-chart-pie', label: 'รายงานวันนี้', href: 'pages/report/report-today.html' },
            { icon: 'fas fa-dice', label: 'รายงานคาสิโน', href: 'pages/report/report-daily-casino.html' },
            { icon: 'fas fa-file-alt', label: 'รายงานยอดเงิน', href: 'pages/report/report-balance.html' },
            { icon: 'fas fa-calendar-alt', label: 'รายงานปฏิทิน', href: 'pages/report/report-calendar.html' },
            { icon: 'fas fa-credit-card', label: 'รายงานเครดิต', href: 'pages/report/report-credit-all.html' },
            { icon: 'fas fa-user-plus', label: 'รายงานสมัคร', href: 'pages/report/report-register.html' },
            { icon: 'fas fa-coins', label: 'คอมมิชชั่น', href: 'pages/promotion/commission.html' },
            { icon: 'fas fa-calendar-week', label: 'คอมมิชชั่นรายสัปดาห์', href: 'pages/promotion/commission-weekly.html' },
            { icon: 'fas fa-calendar', label: 'คอมมิชชั่นรายเดือน', href: 'pages/promotion/commission-month.html' },
            { icon: 'fas fa-chart-line', label: 'สรุปฝาก/ถอน Agent', href: 'pages/report/summary-dw-agent.html' }
        ]
    },
    {
        title: 'หวย',
        items: [
            { icon: 'fas fa-tachometer-alt', label: 'Dashboard หวย', href: 'pages/lotto/lotto-dashboard.html' },
            { icon: 'fas fa-ticket-alt', label: 'จัดการหวย', href: 'pages/lotto/lotto-manage.html' },
            { icon: 'fas fa-list-ol', label: 'รายการแทง', href: 'pages/lotto/betting-list.html' },
            { icon: 'fas fa-cog', label: 'ตั้งค่าหวย', href: 'pages/lotto/lotto-setting.html' },
            { icon: 'fas fa-sliders-h', label: 'ตั้งค่าการแทง', href: 'pages/lotto/lotto-bet-setting.html' },
            { icon: 'fas fa-percentage', label: 'อัตราจ่าย', href: 'pages/lotto/lotto-payment-rate.html' },
            { icon: 'fas fa-calendar-check', label: 'ตารางออกหวย', href: 'pages/lotto/lotto-schedule.html' },
            { icon: 'fas fa-toggle-on', label: 'เปิด/ปิดหวย', href: 'pages/lotto/lotto-enable-setting.html' }
        ]
    },
    {
        title: 'โปรโมชั่น',
        items: [
            { icon: 'fas fa-gift', label: 'รายการโปรโมชั่น', href: 'pages/promotion/promotion.html' },
            { icon: 'fas fa-star', label: 'VIP', href: 'pages/promotion/vip-setting.html' },
            { icon: 'fas fa-trophy', label: 'ชิงโชค', href: 'pages/promotion/lucky-draw.html' },
            { icon: 'fas fa-medal', label: 'ระดับชิงโชค', href: 'pages/promotion/lucky-draw-level.html' },
            { icon: 'fas fa-gifts', label: 'รางวัลชิงโชค', href: 'pages/promotion/lucky-draw-prizes.html' },
            { icon: 'fas fa-birthday-cake', label: 'โปรโมชั่นวันเกิด', href: 'pages/promotion/birthday-promotion.html' },
            { icon: 'fas fa-share-alt', label: 'แนะนำเพื่อน', href: 'pages/promotion/share-af-setting.html' },
            { icon: 'fas fa-users', label: 'Affiliate Commission', href: 'pages/promotion/affiliate-commission.html' }
        ]
    },
    {
        title: 'เกม',
        items: [
            { icon: 'fas fa-gamepad', label: 'มินิเกม', href: 'pages/mini-game/mini-games.html' },
            { icon: 'fas fa-dice', label: 'ไฮโล', href: 'pages/mini-game/mini-hilo.html' },
            { icon: 'fas fa-coins', label: 'หัวก้อย', href: 'pages/mini-game/mini-huakoi.html' },
            { icon: 'fas fa-hand-rock', label: 'เป่ายิ้งฉุบ', href: 'pages/mini-game/mini-paoyingchub.html' },
            { icon: 'fas fa-cog', label: 'ตั้งค่ามินิเกม', href: 'pages/mini-game/mini-setting.html' },
            { icon: 'fas fa-dice-d20', label: 'คาสิโน', href: 'pages/mini-game/casino-game.html' }
        ]
    },
    {
        title: 'ประชาสัมพันธ์',
        items: [
            { icon: 'fas fa-bullhorn', label: 'ประกาศ', href: 'pages/other/pr-announcement.html' },
            { icon: 'fas fa-scroll', label: 'ข้อความวิ่ง', href: 'pages/other/pr-marquee.html' },
            { icon: 'fas fa-window-restore', label: 'Popup ข่าวสาร', href: 'pages/other/pr-news-popup.html' },
            { icon: 'fas fa-images', label: 'Banner', href: 'pages/other/banner.html' }
        ]
    },
    {
        title: 'Payment Gateway',
        items: [
            { icon: 'fas fa-credit-card', label: 'P2P10X', href: 'pages/payment/p2p10x-setting.html' },
            { icon: 'fas fa-credit-card', label: 'AQ1', href: 'pages/payment/aq1-setting.html' },
            { icon: 'fas fa-credit-card', label: 'BitPayz', href: 'pages/payment/bitpayz-setting.html' },
            { icon: 'fas fa-credit-card', label: 'ZAAP', href: 'pages/payment/zaap-setting.html' },
            { icon: 'fas fa-credit-card', label: 'PLZ', href: 'pages/payment/plz-setting.html' }
        ]
    },
    {
        title: 'Crypto',
        items: [
            { icon: 'fas fa-wallet', label: 'Crypto Wallet', href: 'pages/crypto/crypto-wallet.html' },
            { icon: 'fas fa-coins', label: 'Crypto Commission', href: 'pages/crypto/crypto-commission.html' }
        ]
    },
    {
        title: 'ระบบ',
        items: [
            { icon: 'fas fa-user-shield', label: 'จัดการ Master', href: 'pages/system/system-master.html' },
            { icon: 'fas fa-plus-circle', label: 'เพิ่ม Master', href: 'pages/system/master-create.html' },
            { icon: 'fas fa-coins', label: 'เครดิต Master', href: 'pages/system/master-credit.html' },
            { icon: 'fas fa-percentage', label: 'คอมมิชชั่น Master', href: 'pages/system/master-commission.html' },
            { icon: 'fas fa-user-tie', label: 'จัดการ Agent', href: 'pages/system/system-agent.html' },
            { icon: 'fas fa-plus-circle', label: 'เพิ่ม Agent', href: 'pages/system/agent-create.html' },
            { icon: 'fas fa-coins', label: 'เครดิต Agent', href: 'pages/system/agent-credit.html' },
            { icon: 'fas fa-percentage', label: 'คอมมิชชั่น Agent', href: 'pages/system/agent-commission.html' },
            { icon: 'fas fa-user-cog', label: 'จัดการ Assistant', href: 'pages/system/system-assistant.html' },
            { icon: 'fas fa-plus-circle', label: 'เพิ่ม Assistant', href: 'pages/system/assistant-create.html' },
            { icon: 'fas fa-university', label: 'บัญชีธนาคาร', href: 'pages/bank/book-bank.html' },
            { icon: 'fas fa-star', label: 'บัญชีพิเศษ', href: 'pages/bank/bookbank-special.html' },
            { icon: 'fas fa-lock', label: 'ล็อคบัญชี', href: 'pages/bank/bookbank-lock.html' },
            { icon: 'fas fa-phone-alt', label: 'ติดต่อ', href: 'pages/message/contact.html' },
            { icon: 'fas fa-envelope', label: 'ข้อความเข้า', href: 'pages/message/message-in.html' },
            { icon: 'fas fa-paper-plane', label: 'ข้อความออก', href: 'pages/message/message-out.html' },
            { icon: 'fas fa-ticket-alt', label: 'Ticket', href: 'pages/message/ticket-comment.html' },
            { icon: 'fas fa-desktop', label: 'Monitoring', href: 'pages/other/monitoring.html' },
            { icon: 'fas fa-cogs', label: 'ตั้งค่าระบบ', href: 'pages/system/system-setting.html' }
        ]
    },
    {
        title: 'ตั้งค่า',
        items: [
            { icon: 'fas fa-globe', label: 'ตั้งค่าเว็บไซต์', href: 'pages/setting/setting-web.html' },
            { icon: 'fas fa-link', label: 'ตั้งค่าโดเมน', href: 'pages/setting/setting-domain.html' },
            { icon: 'fas fa-exchange-alt', label: 'ตั้งค่าฝาก/ถอน', href: 'pages/setting/setting-deposit-withdraw.html' },
            { icon: 'fas fa-sync', label: 'ตั้งค่าเทิร์นโอเวอร์', href: 'pages/setting/setting-turnover.html' },
            { icon: 'fas fa-key', label: 'เปลี่ยนรหัสผ่าน', href: 'pages/setting/change-password.html' },
            { icon: 'fas fa-book', label: 'คู่มือการใช้งาน', href: 'pages/other/user-manual.html' }
        ]
    }
];

// ====================================
// Initialization
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    checkAuth();
    
    // Initialize components
    initSidebar();
    initHeader();
    
    // Load page-specific data
    loadPageData();
});

// ====================================
// Authentication
// ====================================

function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // If not logged in and not on login page, redirect
    if (!isLoggedIn && currentPage !== 'login.html') {
        // For demo, allow access without login
        // window.location.href = 'login.html';
    }
    
    // Update state
    AppState.isLoggedIn = isLoggedIn === 'true';
    AppState.user = {
        username: localStorage.getItem('username') || 'Admin',
        role: localStorage.getItem('userRole') || 'ADMIN'
    };
    
    // Update UI
    updateUserDisplay();
}

function updateUserDisplay() {
    const userNameEl = document.querySelector('.user-name');
    if (userNameEl && AppState.user) {
        userNameEl.textContent = AppState.user.username;
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    
    // Use SPA router's basePath if available, otherwise calculate
    if (window.SPARouter && window.SPARouter.basePath) {
        window.location.href = window.SPARouter.basePath + 'login.html';
    } else {
        // Fallback: calculate path
        const currentPath = window.location.pathname;
        const pagesIndex = currentPath.indexOf('/pages/');
        if (pagesIndex !== -1) {
            window.location.href = currentPath.substring(0, pagesIndex + 1) + 'login.html';
        } else {
            window.location.href = 'login.html';
        }
    }
}

// ====================================
// Sidebar
// ====================================

function initSidebar() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    if (!sidebarMenu) return;
    
    // For SPA, always use paths from root (no prefix needed)
    // The SPA router will handle the navigation
    
    // Build menu HTML
    let menuHTML = '';
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    menuConfig.forEach(group => {
        menuHTML += `<div class="menu-group-title">${group.title}</div>`;
        
        group.items.forEach(item => {
            const itemPage = item.href.split('/').pop();
            const isActive = itemPage === currentPage ? 'active' : '';
            const badge = item.badge ? `<span class="menu-badge">${item.badge}</span>` : '';
            
            // Always use the path from menuConfig directly
            // SPA router will intercept and handle navigation
            menuHTML += `
                <a href="${item.href}" class="menu-item ${isActive}" data-page="${itemPage}">
                    <i class="${item.icon}"></i>
                    <span>${item.label}</span>
                    ${badge}
                </a>
            `;
        });
    });
    
    sidebarMenu.innerHTML = menuHTML;
    
    // Scroll to active menu item on first load only
    scrollToActiveMenu();
    
    // Toggle sidebar on mobile
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
}

// Scroll to active menu item (only on initial page load)
function scrollToActiveMenu() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    if (!sidebarMenu) return;
    
    const activeItem = sidebarMenu.querySelector('.menu-item.active');
    if (activeItem) {
        // Calculate if active item is visible
        const menuRect = sidebarMenu.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        
        // Only scroll if item is not visible
        if (itemRect.top < menuRect.top || itemRect.bottom > menuRect.bottom) {
            activeItem.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-collapsed');
    
    AppState.sidebarCollapsed = body.classList.contains('sidebar-collapsed');
}

// ====================================
// Header
// ====================================

function initHeader() {
    // User dropdown
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) {
        userDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            showUserMenu();
        });
    }
    
    // Close dropdown on outside click
    document.addEventListener('click', function() {
        hideUserMenu();
    });
}

function showUserMenu() {
    // Create dropdown menu if not exists
    let dropdown = document.querySelector('.user-dropdown .dropdown-menu');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.innerHTML = `
            <a href="#" class="dropdown-item"><i class="fas fa-user"></i> โปรไฟล์</a>
            <a href="#" class="dropdown-item"><i class="fas fa-key"></i> เปลี่ยนรหัสผ่าน</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item text-danger" onclick="logout()"><i class="fas fa-sign-out-alt"></i> ออกจากระบบ</a>
        `;
        document.querySelector('.user-dropdown').appendChild(dropdown);
    }
    
    dropdown.classList.toggle('show');
}

function hideUserMenu() {
    const dropdown = document.querySelector('.user-dropdown .dropdown-menu');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// ====================================
// Page Data Loading
// ====================================

function loadPageData() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
            loadDashboardData();
            break;
    }
}

function loadDashboardData() {
    // Load recent transactions
    loadRecentTransactions();
    
    // Load new members
    loadNewMembers();
}

function loadRecentTransactions() {
    const tbody = document.getElementById('recentTransactions');
    if (!tbody) return;
    
    const transactions = [
        { time: '10:45:23', username: 'user001', type: 'deposit', amount: 5000, status: 'success' },
        { time: '10:42:15', username: 'user015', type: 'withdraw', amount: 10000, status: 'pending' },
        { time: '10:38:47', username: 'user023', type: 'deposit', amount: 3000, status: 'success' },
        { time: '10:35:12', username: 'user007', type: 'withdraw', amount: 15000, status: 'success' },
        { time: '10:32:55', username: 'user042', type: 'deposit', amount: 2000, status: 'pending' }
    ];
    
    tbody.innerHTML = transactions.map(tx => `
        <tr>
            <td>${tx.time}</td>
            <td><span class="text-primary">${tx.username}</span></td>
            <td>
                <span class="ant-tag ${tx.type === 'deposit' ? 'ant-tag-success' : 'ant-tag-error'}">
                    ${tx.type === 'deposit' ? 'ฝาก' : 'ถอน'}
                </span>
            </td>
            <td class="${tx.type === 'deposit' ? 'text-success' : 'text-danger'}">
                ${tx.type === 'deposit' ? '+' : '-'}฿ ${tx.amount.toLocaleString()}
            </td>
            <td>
                <span class="ant-tag ${getStatusClass(tx.status)}">
                    ${getStatusText(tx.status)}
                </span>
            </td>
        </tr>
    `).join('');
}

function loadNewMembers() {
    const tbody = document.getElementById('newMembersList');
    if (!tbody) return;
    
    const members = [
        { time: '10:30:15', username: 'newuser01', name: 'สมชาย ใจดี', phone: '081-234-5678', status: 'active' },
        { time: '10:15:42', username: 'newuser02', name: 'สมหญิง รักดี', phone: '082-345-6789', status: 'active' },
        { time: '09:55:33', username: 'newuser03', name: 'มานะ ขยัน', phone: '083-456-7890', status: 'active' },
        { time: '09:30:18', username: 'newuser04', name: 'วิชัย สุขใจ', phone: '084-567-8901', status: 'active' },
        { time: '09:12:55', username: 'newuser05', name: 'สุดา มีทรัพย์', phone: '085-678-9012', status: 'active' }
    ];
    
    tbody.innerHTML = members.map(member => `
        <tr>
            <td>${member.time}</td>
            <td><span class="text-primary">${member.username}</span></td>
            <td>${member.name}</td>
            <td>${member.phone}</td>
            <td>
                <span class="ant-tag ant-tag-success">
                    ใช้งาน
                </span>
            </td>
        </tr>
    `).join('');
}

// ====================================
// Utility Functions
// ====================================

function getStatusClass(status) {
    switch(status) {
        case 'success': return 'ant-tag-success';
        case 'pending': return 'ant-tag-processing';
        case 'failed': return 'ant-tag-error';
        default: return '';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'success': return 'สำเร็จ';
        case 'pending': return 'รอดำเนินการ';
        case 'failed': return 'ไม่สำเร็จ';
        default: return status;
    }
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(amount) {
    return '฿ ' + formatNumber(amount);
}

function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatTime(date) {
    const d = new Date(date);
    return d.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// ====================================
// Notification System
// ====================================

function showNotification(type, title, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to container
    let container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('notification-hide');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ====================================
// Modal System
// ====================================

function showModal(options) {
    const { type = 'info', title, message, onConfirm, onCancel } = options;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon ${type}">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'question-circle'}"></i>
            </div>
            <h3 class="modal-title">${title}</h3>
            <p class="modal-message">${message}</p>
            <div class="modal-actions">
                ${onCancel ? '<button class="ant-btn modal-cancel">ยกเลิก</button>' : ''}
                <button class="ant-btn ant-btn-primary modal-confirm">ตกลง</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners
    modal.querySelector('.modal-confirm').addEventListener('click', () => {
        if (onConfirm) onConfirm();
        modal.remove();
    });
    
    const cancelBtn = modal.querySelector('.modal-cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (onCancel) onCancel();
            modal.remove();
        });
    }
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            if (onCancel) onCancel();
            modal.remove();
        }
    });
}

// ====================================
// API Helpers (Mock)
// ====================================

const API = {
    baseUrl: '/api',
    
    async get(endpoint) {
        // Mock API response
        console.log('GET:', endpoint);
        return { success: true, data: {} };
    },
    
    async post(endpoint, data) {
        // Mock API response
        console.log('POST:', endpoint, data);
        return { success: true, data: {} };
    },
    
    async put(endpoint, data) {
        // Mock API response
        console.log('PUT:', endpoint, data);
        return { success: true, data: {} };
    },
    
    async delete(endpoint) {
        // Mock API response
        console.log('DELETE:', endpoint);
        return { success: true };
    }
};

// ====================================
// Export for global access
// ====================================

window.AppState = AppState;
window.logout = logout;
window.showNotification = showNotification;
window.showModal = showModal;
window.API = API;

