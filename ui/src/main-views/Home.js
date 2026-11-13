import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import HomeLanding from "../views/HomeLanding";

export default function Home(props) {

	const appContext = useContext(AppContext);

	const [ view, setView ] = useState(null);

	async function init() {
		//run initializations here
	}

	function getView() {
		if(
			!appContext.navSubItem &&
			!appContext.navExtraItem &&
			!appContext.navMoreItem
		) {
			return <HomeLanding/>
		} 

		return null;
	}

	useEffect(() => {
		init();
	}, [ ])

	useEffect(() => {
		const _view = getView();
		if(_view) {
			setView(_view);
		}
	}, [ appContext.navSubItem, appContext.navExtraItem, appContext.navMoreItem ])

	//return desired view
	return view;
}