var Character1Data = Vue.createApp({
    data() {
        return {
            Character1: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/character1", // API 路徑s
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.Character1 = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
Character1Data.mount("#character1");



var Character2Data = Vue.createApp({
    data() {
        return {
            Character2: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/character2", // API 路徑s
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.Character2 = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
Character2Data.mount("#character2");


var Character3Data = Vue.createApp({
    data() {
        return {
            Character3: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/character3", // API 路徑s
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.Character3 = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
Character3Data.mount("#character3");