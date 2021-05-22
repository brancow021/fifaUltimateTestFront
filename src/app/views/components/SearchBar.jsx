import React, { useState } from "react";
import {
	Button,
	FilterBox,
	Input,
	LabelInput,
	Menu,
	Select,
} from "../../../styles/StyleComponents";

export const SearchBar = React.memo(({ formik }) => {
	const [showMenu, setshowMenu] = useState(true);

	return (
		<>
			<FilterBox>
				<div>
					<form className='form' onSubmit={formik.handleSubmit}>
						<Menu
							onClick={() => {
								setshowMenu(!showMenu);
							}}>
							<i class='fa fa-bars fa-2x' aria-hidden='true'></i>
						</Menu>

						<div
							className='row'
							style={
								showMenu ? { display: "block" } : { display: "none" }
							}>
							<LabelInput htmlFor=''>Buscar:</LabelInput>
							<Input
								type='text'
								onChange={formik.handleChange}
								name='keyword'
								placeholder='Buscar por nombre'
								value={formik.values.keyword}
							/>

							<Select
								defaultValue={0}
								value={formik.values.type}
								onChange={formik.handleChange}
								name='type'>
								<option disabled value='' defaultValue>
									Tipo de busqueda
								</option>
								<option value='forName'>Por Nombres</option>
								<option value='forTeam'>Por Equipo</option>
							</Select>

							{formik.values.type === "forName" ? (
								<Select
									value={formik.values.orden}
									onChange={formik.handleChange}
									name='orden'>
									<option
										disabled
										value=''
										defaultValue>
										Ordenamiento
									</option>
									<option value='asc'>Ascendente</option>
									<option value='desc'>Descendente</option>
								</Select>
							) : null}

							<Button type='submit'>
								<i class='fa fa-search' aria-hidden='true'></i>
							</Button>
						</div>
					</form>
				</div>
			</FilterBox>
		</>
	);
});
