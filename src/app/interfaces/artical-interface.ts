export interface ArticalInterface {
    id: string;
    articalBody: string;
    image: string;
    title: string;
    category: string
    userId: string,
    comments: {
        comment: string,
        userId: string,
        username: string
    }[]
}
