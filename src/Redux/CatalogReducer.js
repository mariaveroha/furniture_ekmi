const CATALOG_ACTION = "VISIBLE_INFO_ACTION"

const initialState = {
    catalog: [
        { id: 1, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://old-loft.com/wp-content/uploads/dsc7172-scaled.jpg' },
        { id: 2, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://8marta.by/images/detailed/3/pal-1443635462_8cgn-38.jpg' },
        { id: 3, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://www.8marta.ru/files/nodus_items/0000/0414/_cache/images/watermark94610169/_richard_end_euro_post-1591189136.jpg' },
        { id: 4, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://ladya.ru/upload/forstati/194(2).jpg' },
        { id: 5, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://tanagra.ru/indra_katalog.jpg' },
        { id: 6, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://hoff.ru/upload/hoff_resize/hoff-images/310/035/7/5da8eeed1f8dc093b6366f31cf032c76.jpg/666x444_85.jpeg' },
        { id: 7, name: 'Кровать', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://ormamebel.ru/wa-data/public/shop/products/08/06/608/images/3577/3577.970.jpg' },
        { id: 8, name: 'Кровать', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://olissys.com/upload/resize_cache/iblock/db6/586_420_2/db64d7123bc2e6183308157416336571.jpg' },
        { id: 9, name: 'Кровать', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://www.matras-city.ru/upload/resize_cache/iblock/6a7/479_361_1/6a77064599dfb4aec0dad2bdd4b4e169.jpeg' },
        { id: 10, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://cdn.divan.ru/img/v1/Wh5XAUxwsCs_bsf1lAeYN-Swj52kG81vZdrbk0cshcI/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvNDMzLzYwZjUzNTQ2ODZiZWYuanBn.jpg' },
        { id: 11, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://old-loft.com/wp-content/uploads/dsc7172-scaled.jpg' },
        { id: 12, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://8marta.by/images/detailed/3/pal-1443635462_8cgn-38.jpg' },
        { id: 13, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://www.8marta.ru/files/nodus_items/0000/0414/_cache/images/watermark94610169/_richard_end_euro_post-1591189136.jpg' },
        { id: 14, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://ladya.ru/upload/forstati/194(20).jpg' },
        { id: 15, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://tanagra.ru/indra_katalog.jpg' },
        { id: 16, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://ladya.ru/upload/forstati/194(20).jpg' },
        { id: 17, name: 'Матрас', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://www.magniflex.ru/img/product/Rest%209%20foto1.jpg' },
        { id: 18, name: 'Матрас', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://www.magniflex.ua/upload/iblock/816/sepdznfrl6qn2s0pccl9176rrp3jty3p.jpg' },
        { id: 19, name: 'Матрас', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://profsnabvl.ru/upload/stati/standartnye-razmery-matrasov/matras-dlya-vzroslyh.jpg' },
        { id: 20, name: 'Кресло', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://ladya.ru/upload/forstati/194(2).jpg' },
        { id: 21, name: 'Диван', title: 'Диана', articul: 'AZ-234', price: '50 000р', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', image: 'https://old-loft.com/wp-content/uploads/dsc7172-scaled.jpg' }
    ]
}

export default function CatalogReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export const CatalogFunction = (data) => ({ type: CATALOG_ACTION, payload: data })