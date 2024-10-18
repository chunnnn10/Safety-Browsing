const express = require("express");
const cors = require("cors"); // 導入 CORS
const path = require("path"); //導入 path 模組
const app = express();
const PORT = process.env.PORT || 3000; //正常環境應該運行 const PORT = 3000;
const BASE_URL = "https://dev.chunnnn10.com"; // 定義基礎網址，方便更改

// 配置靜態文件路徑
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(
    "/developer_dashboard",
    express.static(path.join(__dirname, "public/developer_dashboard")),
);
app.use(
    "/it_admin_dashboard",
    express.static(path.join(__dirname, "public/it_admin_dashboard")),
);
app.use(
    "/user_dashboard",
    express.static(path.join(__dirname, "public/user_dashboard")),
);

// 根路由
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// 開發者面板路由
app.get("/developer_dashboard", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public/developer_dashboard",
            "developer_dashboard.html",
        ),
    );
});

// IT 管理員面板路由
app.get("/it_admin_dashboard", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public/it_admin_dashboard",
            "it_admin_dashboard.html",
        ),
    );
});

// 用戶面板路由
app.get("/user_dashboard", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public/user_dashboard", "user_dashboard.html"),
    );
});

// 暫存黑名單數據
let blacklist = ["youtube.com", "malicious-site.com", "whatsapp.com"];

// 登入路由
const users = [
    { username: "admin", password: "password", type: "developer" },
    { username: "itadmin", password: "password", type: "companyAdmin" },
    { username: "user1", password: "password", type: "user" },
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        (u) => u.username === username && u.password === password,
    );
    if (user) {
        res.status(200).json({
            message: "Login successful!",
            userType: user.type,
        });
    } else {
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

// 使用 CORS 和 JSON 解析
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // 設置靜態文件夾

// 黑名單 API 示例
app.get("/get-blacklist", (req, res) => {
    res.json({ blacklist: blacklist });
});

// 獲取瀏覽記錄的 API
let browsingRecords = []; // 保存所有的瀏覽記錄

// 記錄訪問的 URL 的端點
app.post("/log", (req, res) => {
    const { url, timestamp } = req.body;
    console.log(`URL 被訪問: ${url}, 時間: ${timestamp}`);
    // 這裡可以將數據保存到數據庫中
    browsingRecords.push({ url, timestamp }); // 將訪問記錄存儲
    res.status(200).send("訪問記錄已接收");
});

// 獲取所有瀏覽記錄
app.get("/get-browsing-records", (req, res) => {
    res.json({ records: browsingRecords });
});

// 通知管理員的端點
app.post("/notify", (req, res) => {
    const { message } = req.body;
    console.log(`通知: ${message}`);
    res.status(200).send("通知已接收");
});

// 用戶管理
// 用戶更新 API
app.post("/update-user", (req, res) => {
    const { oldUsername, newUsername, newPassword } = req.body;
    const user = users.find((u) => u.username === oldUsername);

    if (user) {
        user.username = newUsername; // 更新用戶名
        user.password = newPassword; // 更新密碼
        res.status(200).send("用戶信息已更新");
    } else {
        res.status(404).send("用戶未找到");
    }
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器正在 ${BASE_URL} 運行`);
});
