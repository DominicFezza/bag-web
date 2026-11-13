import { useState, useEffect, createContext } from "react";
import { getMainView, getViewerView, getSideViewerView, callApi } from "./Helpers";
import Viewer from "./components/Viewer";
import MainBody from "./components/MainBody";
import Backdrop from "./components/Backdrop";
import SideViewer from "./components/SideViewer";
import ConfirmDialog from "./components/ConfirmDialog";
import { ToastContainer, toast } from 'react-toastify';
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import MainMenuBtn from "./components/MainMenuBtn";
import OverlayLoader from "./components/OverlayLoader";
import MainLoader from "./components/MainLoader";

export const AppContext = createContext(null);

function getHashRoute() {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return {
    item: parts[0],
    subItem: parts[1],
    extraItem: parts[2],
    moreItem: parts[3],
  };
}

export default function App(props) {

  const [ready, setReady] = useState(false); //for checking if app is ready

  const initialRoute = getHashRoute();

  const [navItem, setNavItem] = useState(initialRoute.item); //routing 
  const [navSubItem, setNavSubItem] = useState(initialRoute.subItem); //routing
  const [navExtraItem, setNavExtraItem] = useState(initialRoute.extraItem); //routing
  const [navMoreItem, setNavMoreItem] = useState(initialRoute.moreItem); //routing

  const [showViewer, setShowViewer] = useState(false); //controlling the display of Viewer component
  const [viewerView, setViewerView] = useState(null); //the view to be shown in viewer

  const [showSideViewer, setShowSideViewer] = useState(false); //controlling the display of SideViewer component
  const [sideViewerView, setSideViewerView] = useState(null); //the view to be shown in viewer

  const [mainView, setMainView] = useState(null); //the view tobe shown in MainBody

  const [showOverlayLoader, setShowOverlayLoader] = useState(false); //controlling the display of OverlayLoader

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [confirmDialogMessage, setConfirmDialogMessage] = useState("");
  const [confirmDialogAction, setConfirmDialogAction] = useState("");

  const [isSideBarOpen, setIsSideBarOpen] = useState(false); //controls open and close for sidebar in mobile devices

  const [auth, setAuth] = useState(false); //track user authorization status

  //currentSession
  const [currentUserData, setCurrentUserData] = useState(null);

  //App level data
  const [systemParams, setSystemParams] = useState(null);
  const [allGallery, setAllGallery] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);
  const [globalSearchFilter, setGlobalSearchFilter] = useState("");
  

  async function init() {
    /**
     * Initialize the app here
     */

    setReady(false);
    /*
    await Promise.all([
      getSystemParams(),
    ]) */
    setReady(true);
  }

  async function getSystemParams() {
    return new Promise(async resolve => {
      await callApi('get-system-params', {}).then(response => {
        if (response.status === 1) {
          setSystemParams(response.data);
          resolve(response.data)
        } else {
          resolve(null)
        }
      })
    })
  }

  function navBack() {
    window.history.back();
    setShowOverlayLoader(false);
  }

  function tellError(msg) {
    toast.error(msg);
  }

  function tellInfo(msg) {
    toast.info(msg);
  }

  function tellWarning(msg) {
    toast.warn(msg);
  }

  function tellMessage(msg) {
    toast.success(msg);
  }

  function openSideBar() {
    appContext.setIsSideBarOpen(true);
  }

  function closeSideBar() {
    appContext.setIsSideBarOpen(false);
  }

  function refresh() {
    /**
     * This function refreshes the whole app
     */
    window.location.reload(); //remember to optimize
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  function navTo(nav) {
    /**
     * This function handles navigation inside the app
     * Utilizing Hash based routing
     * nav is the object supporting the following keys: item, subItem, extraItem, moreItem
     */
    if (nav) {
      //..

      let url = '';
      if (nav.item) {
        url = `#/${nav.item}/`
        
      }

      if (nav.subItem) {
        url += `${nav.subItem}/`
      }

      if (nav.extraItem) {
        url += `${nav.extraItem}/`
      }

      if (nav.moreItem) {
        url += `${nav.moreItem}/`
      }

      window.location.hash = url;
      //..
    }
  }

  async function getCurrentUserData() {
    await callApi('get-current-user-data', {}).then(response => {
      if (response.status === 1) {
        setCurrentUserData(response.data);
      }
    })
  }

  function authCheck() {
    return new Promise(async resolve => {
      await callApi('auth-check', {}).then(response => {
        if (response.status === 1) {
          setAuth(true);
          resolve(true)
        } else {
          setAuth(false);
          resolve(false);
        }
      })
    })
  }

  
   function getAllGallery() {
    return new Promise(async (resolve, reject) => {
      await callApi('get-all-gallery', {}).then(response => {
        if (response.status === 1) {
          setAllGallery(response.data);
          resolve(response.data);
        }
      })
    })
  }

  function activateDialog(params) {
    let {
      message,
      onConfirm
    } = params;
    setConfirmDialogAction(() => { return onConfirm });
    setConfirmDialogMessage(message)
    setShowConfirmDialog(true);
  }

  function getAvailableHotels() {
    return new Promise(async (resolve, reject) => {
      await callApi('get-hotels-feed', {}).then(response => {
        if (response.status === 1) {
          setAvailableHotels(response.data);
          resolve(response.data);
        }
      })
    })
  }

  useEffect(() => {
    init();
  }, [])

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [isSideBarOpen])

  useEffect(() => {
    const syncRoute = () => {
      const route = getHashRoute();
      setNavItem(route.item);
      setNavSubItem(route.subItem);
      setNavExtraItem(route.extraItem);
      setNavMoreItem(route.moreItem);
    };

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, [])

  useEffect(() => {
    if (currentUserData) {
      //handle current user data changes here
    }
  }, [currentUserData])


  useEffect(() => {

    //check for viewers
    if (navItem === 'view') {
      //activate viewer
      setShowViewer(true);
      setViewerView(getViewerView(appContext));

      //hide other viewers
      setShowSideViewer(false)
      setSideViewerView(null);

    } else if (navItem === 'side-view') {
      //activate viewer
      setShowSideViewer(true);
      setSideViewerView(getSideViewerView(appContext));

      //hide other viewers
      setShowViewer(false)
      setViewerView(null);

    } else {
      //just set normal views
      
      
      setShowViewer(false);
      setShowSideViewer(false)

      setViewerView(null);
      setSideViewerView(null);

      const _mainView = getMainView(appContext)
      if (_mainView) {
        setMainView(_mainView);
      }

      if(!(!appContext.navItem || appContext.navItem === 'home')) {
        setTimeout(() => {
          scrollToTop(); //trigger top scrolling
        }, 200);
      }
    }
  }, [navItem, navSubItem, navExtraItem, navMoreItem]);

  const appContext = {
    refresh,
    navTo,
    mainView,
    viewerView,
    setShowOverlayLoader,
    navItem,
    navSubItem,
    navExtraItem,
    navMoreItem,
    setShowViewer,
    showViewer,
    navBack,
    showSideViewer,
    setShowSideViewer,
    sideViewerView,
    activateDialog,
    setShowConfirmDialog,
    confirmDialogAction,
    confirmDialogMessage,
    showConfirmDialog,
    tellError,
    tellInfo,
    tellMessage,
    tellWarning,
    isSideBarOpen,
    setIsSideBarOpen,
    showOverlayLoader,
    auth,
    currentUserData,
    systemParams,
    getSystemParams,
    openSideBar,
    closeSideBar,
    globalSearchFilter,
    setGlobalSearchFilter,
    availableHotels,
    setAvailableHotels,
    getAvailableHotels,
    allGallery,
    getAllGallery,
    scrollToTop,
  }

  if (ready) {
    return (
      <AppContext.Provider value={appContext}>
        <MainBody />
        <TopBar />
        <SideBar />
        <Viewer />
        <SideViewer />
        <ConfirmDialog />
        <OverlayLoader />
        <ToastContainer position="bottom-right" />
      </AppContext.Provider>
    )
  } else {
    return (
      <AppContext.Provider value={appContext}>
        <ToastContainer position="bottom-right" />
        <MainLoader />
      </AppContext.Provider>
    )
  }
}
