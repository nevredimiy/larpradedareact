const headerTopMenu = [
    {
        id: 1,
        link: 'write-to-us',
        linkText: 'Напиши нам',
    },
    {
        id: 2,
        link: 'about-us',
        linkText: 'Про нас',
    },
    {
        id: 3,
        link: 'telephones',
        linkText: 'Телефони',
        dropMenu: [
            {
                id: 31,
                link: 'tel:+380965582148',
                linkText: '+38 096 558 21 48',
            },
            {
                id: 32,
                link: 'tel:+380965582148',
                linkText: '+38 096 558 21 48',
            },
            {
                id: 33,
                link: 'tel:+380965582148',
                linkText: '+38 096 558 21 48',
            },
        ]
    },
    {
        id: 4,
        link: 'cabinet',
        linkText: 'Особистий кабінет',
        dropMenu: [
            {
                id: 41,
                link: 'log-in',
                linkText: 'Авторизуватися',
                dropMenu: [
                    {
                        id: 411,
                        link: 'realy',
                        linkText: 'Realy',
                    }    
                ]
            },
             {
                id: 42,
                link: 'sing-in',
                linkText: 'Зареєструватися',
            },
        ]
    },
]
export { headerTopMenu }