const initailState1 = {
  list: { loginstatus: false, account: "", password: "" }, //設置初始值為false未登入
};

export const LoingReducer = (state = initailState1, action) => {
  switch (action.type) {
    case "in":
      //return 切記要用初始值定義的key去裝資料
      //紀錄登入狀態、帳號密碼
      //console.log(action)
      return {
        list: {
          loginstatus: true,
          account: action.list.account,
          password: action.list.password,
        },
      };

    case "out":
      //return 切記要用初始值定義的key去裝資料
      //紀錄登出狀態、清空帳號密碼
      //console.log(action)
      return { list: { loginstatus: false, account: "", password: "" } };

    default:
      return state;
  }
};

//測試後端，資料判斷帳密是否正確
const handlerLoginOut = () => {
  let Useraccount = Useraccount.current.value;
  let Userpassword = Userpassword.current.value;
};

//發送POST請求到登入路由
axios
  .post("", { Useraccount, password: Userpassword })
  .then((res) => {
    if (res.data.message == "登入成功") {
      LoginDispatch({
        type: "in",
        list: { account: Useaccount, password: Userpassword },
      });
      alert("登入成功");
      Navigate(`/`);
    } else {
      alert("信箱或密碼錯誤");
    }
  })
  .catch((error) => {
    console.error("發生錯誤:", error);
  });
