export interface IPaginatedResultDto<T> {
    items: T[];
    pageNumber: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}