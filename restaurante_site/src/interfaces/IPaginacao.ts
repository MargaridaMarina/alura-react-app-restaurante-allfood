export interface IPaginacao<T> {
    // informacoes do Response body da api
    count: number
    next: string
    previous: string
    results: T[]
}