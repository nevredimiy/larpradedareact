const headerBottomMenu = [
    {
        id: 1,
        link: '/',
        linkText: 'Главная',
    },
    {
        id: 2,
        link: 'categories',
        linkText: 'Категорії товару',
    },
    {
        id: 3,
        link: 'all-goods',
        linkText: 'Усі товари',
        dropMenu: [
            {
                id: 31,
                link: 'pendant',
                linkText: 'Підвіси',
            },
            {
                id: 32,
                link: 'Earrings',
                linkText: 'Сережки',
            },
            {
                id: 33,
                link: 'keychain',
                linkText: 'Брелки',
            },
        ]
    },
    {
        id: 4,
        link: 'bestsellers',
        linkText: 'Хіти продаж',
        dropMenu: [
            {
                id: 41,
                link: 'rings',
                linkText: 'Каблучки',
                dropMenu: [
                    {
                        id: 411,
                        link: 'wedding-rings',
                        linkText: 'Обручки',
                        dropMenu: [
                            {
                                id: 4111,
                                link: 'test1',
                                linkText: 'Test 1',
                            }, 
                            {
                                id: 4112,
                                link: 'test2',
                                linkText: 'Test 2',
                            }    
                        ]
                    }, 
                    {
                        id: 412,
                        link: 'not-wedding-rings',
                        linkText: 'Необручки',
                    }    
                ]
            },
             {
                id: 42,
                link: 'chains',
                linkText: 'Ланцюги',
            },
        ]
    },
    {
        id: 5,
        link: 'sells',
        linkText: 'Акції',
    },
]
export { headerBottomMenu }