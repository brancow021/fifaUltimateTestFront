import React from 'react'
import ReactPaginate from "react-paginate";

export const Pagination = ({fetchPlayers, players, formik}) => {
	return (
		<>
			<ReactPaginate
				onPageChange={(nextPage) => {
					fetchPlayers({
						search: "",
						order: formik.values.orden,
						page: nextPage.selected + 1,
					});
				}}
				initialPage={0}
				pageCount={players?.TotalPages}
				containerClassName={"pagination"}
				previousLinkClassName={"pagination__link"}
				nextLinkClassName={"pagination__link"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
				nextLabel='>'
				previousLabel='<'
			/>
		</>
	);
}
