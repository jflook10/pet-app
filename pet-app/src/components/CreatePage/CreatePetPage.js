import React from "react";

import Typography from "@material-ui/core/Typography";

import CreatePetMutation from './CreatePetMutation'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


export const CreatePetPage = () => {
		return (
			<div>
				<Typography variant="h2" gutterBottom>
					Add a Pet the Registry
				</Typography>
				<CreatePetMutation />
			</div>
		);
}



export default CreatePetPage;
