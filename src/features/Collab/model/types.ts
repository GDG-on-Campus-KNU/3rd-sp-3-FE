export interface PageNumber {
	pageNumber: number;
	nextPage: (by: number) => void;
	prevPage: (by: number) => void;
}
