export type ArticlesProps = {
    id: number,
    category: string
    title: string
    author: string
    summary: string
    articleText: string
    image: string
}


const articlesArray:ArticlesProps[] = [
    {
        id:1,
        category: 'Car Deals',
        title: 'CAR DEALERS ARE SLASHING PRICES AS MARKET SLOWS',
        author: 'by Gen | January 23, 2017',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/10.jpg',
    },

    {
        id:2,
        category: 'News',
        title: 'WAYMO WILL BUILD SELF-DRIVING CARS IN MICHIGAN',
        author: 'by Gen | January 23, 2018',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/11.jpg',
    },

    {
        id:3,
        category: 'Reviews',
        title: '2019 TOYOTA PRIUS AWD-E FIRST DRIVE REVIEW',
        author: 'by Gen | January 23, 2019',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/12.jpg',
    },

    {
        id:4,
        category: 'Car Deals',
        title: '‘BEST-EVER NEW CAR DEALS AVAILABLE’ AS SALES FALL',
        author: 'by Gen | January 23, 2020',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/13.jpg',
    },

    {
        id:5,
        category: 'News',
        title: 'FORD SAYS A COMPACT PICKUP TRUCK IS COMING',
        author: 'by Gen | January 23, 2021',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/14.jpg',
    },

    {
        id:6,
        category: 'Reviews',
        title: '2019 HERITAGE EDITION FORD MUSTANG REVIEW',
        author: 'by Gen | January 23, 2022',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/15.jpg',
    },

    {
        id:7,
        category: 'Car Deals',
        title: 'CASH IN ON THE BEST CAR DEALS RIGHT NOW',
        author: 'by Gen | January 23, 2017',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/16.jpg',
    },

    {
        id:8,
        category: 'News',
        title: 'NOVITEC SHOWS OFF ITS VERSION OF THE FERRARI 812',
        author: 'by Gen | January 23, 2018',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/17.jpg',
    },

    {
        id:9,
        category: 'Reviews',
        title: '2019 CHEVY SILVERADO 1500 TRAIL BOSS DRIVERS REVIEW',
        author: 'by Gen | January 23, 2019',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis et! Officiis dignissimos a accusantium?',
        articleText: '<div className="article-body"><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et ducimus at explicabo labore nisi ea voluptates veritatis aliquam voluptatum earum, ad obcaecati aspernatur, laudantium harum, ratione saepe aperiam natus! </p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><div className="qoute"><p>"When I was asked what my favorite car was, I always answered - the next"</p><p>Carroll Shelby</p></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p><h5 className="article-subtitle">Lorem, ipsum.</h5><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem nisi ducimus molestias odio sed dicta est aspernatur aliquam neque reiciendis necessitatibus alias quo, animi accusamus, harum eligendi beatae rerum.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt officia aliquid voluptates repellendus dolorum dolore! Fuga expedita veniam optio! Iure maiores nam dolor dolorum nisi reiciendis autem placeat excepturi odio temporibus blanditiis accusantium deserunt, corporis, facere exercitationem maxime perspiciatis odit. Eum sapiente natus dolore quia voluptatibus, laboriosam reiciendis similique.</p><h5 className="article-subtitle">Lorem, ipsum dolor.</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis tempora soluta architecto animi quidem similique eum numquam neque obcaecati, provident corrupti ipsum. Assumenda dolores magnam itaque maxime minima dignissimos quas esse excepturi dolorum beatae aut ullam, doloremque amet tempore?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ab corrupti culpa quo labore maiores laudantium atque, facilis magni cum temporibus placeat tenetur voluptas accusantium natus amet pariatur cumque nihil sint necessitatibus id! Molestiae placeat cumque possimus delectus dignissimos at magnam itaque dolorem minus enim, nisi eius. Reprehenderit, modi.</p></div>',
        image: '/images/18.jpg',
    }

]

export const getArticlesObject = (array:ArticlesProps[]) => array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

export default articlesArray