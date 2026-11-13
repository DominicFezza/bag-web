import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import ContactUsLanding from "../views/ContactUsLanding";

export default function ContactUs(props) {

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
			return <ContactUsLanding/>
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