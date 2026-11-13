import axios from 'axios';
import Home from './main-views/Home';
import AboutUs from './main-views/AboutUs';
import ContactUs from './main-views/ContactUs';
import Services from './main-views/Services';


export const BASE_API = 'https://api.menatsafari.co.tz/api/';

export const CDN_URL = 'https://menatsafari.co.tz/cdn/';


export function getMainView(app) {
  if (app.navItem === 'home') {
    return <Home />
  } else if (app.navItem === 'about_us') {
    return <AboutUs />
  } else if (app.navItem === 'contact_us') {
    return <ContactUs />
  } else if (app.navItem === 'services') {
    return <Services />
  } else {
    //default home
    return <Home />
  }

  return null;
}

export function getViewerView(app) {
  if(
    app.navSubItem === '' &&
    app.navExtraItem &&
    !app.navMoreItem
  ) 

  return null;
}

export function getSideViewerView(app) {
  
  return null;
}


export function getInlineLoader() {
  return (
    <div className="Loader"></div>
  )
}


export function formatDate(timestamp, fromPhp = true) {
  timestamp = (fromPhp) ? Number(timestamp) * 1000 : timestamp;
  let date = new Date(timestamp);
  return (date.toLocaleString());
}

export function callApi(url, params) {
  return new Promise(async resolve => {
    await getLocalUser().then(user => {
      // .. setup form data
      let formData = new FormData();
      formData.append('language', getCookie('language'));

      for (let key in params) {
        formData.append(key, params[key]);
      }

      for (let key in user) {
        formData.append(key, user[key]);
      }

      // Retry mechanism: try up to 3 times
      let attempt = 0;
      const maxRetries = 3;

      const makeRequest = async () => {
        try {
          const response = await axios.post(BASE_API + url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(url, response.data);
          resolve(response.data); // Successfully resolve with response data
        } catch (error) {
          attempt++;
          if (attempt < maxRetries) {
            console.log(`Attempt ${attempt} failed. Retrying...`);
            makeRequest(); // Retry the request
          } else {
            resolve({
              status: 0,
              msg: "Network Connection Error after 3 attempts",
            }); // Resolve after 3 failed attempts
          }
        }
      };

      // Start the request attempts
      makeRequest();
    });
  });
}

export function getLocalUser() {
  return new Promise(async resolve => {
    //use cookies
    let userId = getCookie('adminId');
    let userToken = getCookie('adminToken');
    let userType = getCookie('adminType');

    resolve({
      userId,
      userToken,
      userType,
    })


  })
}

export function setCookie(cname, cvalue, exdays) {
  cname = 'werenium-admin-'+cname;
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  cname = 'werenium-admin-'+cname;
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function formatMoney(x) {
  //round x to 2 decimal places before og function
  x = Number(x);
  x = x.toFixed(0);

  //then continue
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export function formatMoneyShorten(num, digits = 2) {
  num = Number.parseFloat(num);
  if (num <= 1 && num >= -1) {
    return num;
  }

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return Math.abs(num) >= item.value; // Use absolute value of num
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export function stringToArray(string) {
  const array = string.split(",").map(item => item.trim());
  return array;
}

export function arrayToString(arr) {
  return arr.join(', ');
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
