import articlesArray, {
    getArticlesObject,
    ArticlesProps,
} from 'components/Articles/articlesArray'
import FavoriteArticlesListItem from './FavoriteArticlesListItem'

type Props = {
    favoriteArticles: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: ArticlesProps
    }
    removeFromFavorites: (id: number) => void
    ArticlesItem?: any
}
const FavoriteArticlesList = ({
    favoriteArticles,
    articlesObject = getArticlesObject(articlesArray),
    removeFromFavorites,
    ArticlesItem = FavoriteArticlesListItem,
}: Props) => {
    
    console.log(favoriteArticles)
    return (
        <>
            {Object.keys(favoriteArticles).map((articleId) => (
                <ArticlesItem
                    key={articleId}
                    removeFromFavorites={removeFromFavorites}
                    article={articlesObject[parseInt(articleId)]}
                />
            ))}
        </>
    )
}
export default FavoriteArticlesList
