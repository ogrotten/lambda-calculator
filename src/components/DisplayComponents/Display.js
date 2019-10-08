import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import Operators from "../ButtonComponents/OperatorButtons/Operators";

const Display = () => {
	return <div className="display">
	<Numbers />
	<Specials />
	<Operators />
	</div>;
};

export default Display;