const products = [
    {
        id: 1,
        name: 'Bartolomes de las casas 1',
        href: '#',
        imageSrc: '../images/casa1.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Jorge',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Lopez',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Manuel',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Claudia',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        perfil: 'Black',
    },
    // More products...
]

export default function Publication() {
    return (
        <div className="flex flex-col bg-white m-1">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                    <div>
                        <img src={product.imageSrc}
                            alt={product.imageAlt} className="flex w-20 h-20" />
                    </div>
                    <div className="m-3">
                        <p>Ubicacion</p>
                        <p>Name de Usuario</p>
                        <p>$500</p>
                    </div>
                </div>
            ))}
        </div>
    )
}