import Grid from '@mui/material/Grid'
import articlesArray from 'components/Articles/articlesArray'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import './Deals.scss'

type ArticlesProps = {
    id: number
    category: string
    title: string
    author: string
    summary: string
    image: string
}

type Props = {
    addToFavoriteArticles:(id:number) => void
    removeFromFavorites: (id: number) => void
}
const Deals = ({addToFavoriteArticles, removeFromFavorites}: Props) => {
    return (
        <>
            <h1 className="Deals-header">
                CATEGORY: <span className="category-name">DEALS</span>
            </h1>
            <div className="article-list">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    spacing={4}
                >
                    {articlesArray
                        .filter(
                            ({ category }: ArticlesProps) =>
                                category === 'Deals'
                        )
                        .map(
                            ({
                                id,
                                category,
                                title,
                                author,
                                summary,
                                image,
                            }: ArticlesProps) => (
                                <Grid item xs={12} sm={6} lg={4}>
                                    <ArticlesListItem
                                        id={id}
                                        category={category}
                                        title={title}
                                        author={author}
                                        summary={summary}
                                        image={image}
                                        addToFavoriteArticles={addToFavoriteArticles}
                                        removeFromFavorites={removeFromFavorites}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>
            </div>
        </>
    )
}
export default Deals
