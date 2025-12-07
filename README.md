# HUAY Backoffice Chunks

## 📁 ไฟล์ที่โหลดมา

### Core Files (ไฟล์หลัก)
| ไฟล์ | ขนาด | คำอธิบาย |
|------|------|----------|
| core-framework.js | 138 KB | React/Next.js framework |
| core-main.js | 104 KB | Main bundle |
| core-polyfills.js | 89 KB | Browser polyfills |
| core-webpack.js | 12 KB | Webpack runtime |
| _app.js | 293 KB | **Main app logic** |
| styles.css | 541 KB | CSS ทั้งหมด |

### Shared Chunks (ไลบรารี่ที่ใช้ร่วมกัน)
- shared-*.js - Components และ utilities ที่ใช้ร่วมกันหลายหน้า

### Page Chunks (หน้าต่างๆ)
| ไฟล์ | หน้า |
|------|------|
| page-login.js | หน้า Login |
| page-dashboard.js | Dashboard |
| page-member.js | จัดการสมาชิก |
| page-deposit-withdraw-pending.js | **ฝาก/ถอน รอดำเนินการ** |
| page-deposit-withdraw-all.js | ฝาก/ถอน ทั้งหมด |
| page-withdraw-agent.js | ถอน Agent |
| page-withdraw-master.js | ถอน Master |
| page-p2p10x-setting.js | ตั้งค่า P2P10X |
| page-book-bank.js | จัดการบัญชีธนาคาร |

## ⚠️ ข้อจำกัด

1. **โค้ด minified** - อ่านยากมาก เป็น compiled JavaScript
2. **ต้องการ API** - ต้องเชื่อมต่อกับ backend ของ huay1bet
3. **ต้องการ Auth** - ต้อง login ก่อนใช้งาน

## 🔗 URL หลังบ้าน

```
https://backoffice.huay1bet.com/login
```

## 📋 หน้าทั้งหมด (229 หน้า)

ดูได้ที่ไฟล์ `all-pages.txt`
# huay-backoffice-chunks
