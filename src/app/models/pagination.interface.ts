export interface Pagination<T>{
    data: T[];
    next: string;
    total: number;
}
