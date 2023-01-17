import Grid from '@mui/material/Grid'
import articlesArray from 'components/Articles/articlesArray'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import './News.scss'

type ArticlesProps = {
    category: string
    title: string
    author: string
    summary: string
    image: string
}

type Props = {}
const News = (props: Props) => {
    return (
        <>
            <h1 className="news-header">
                CATEGORY: <span className="category-name">NEWS</span>
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
                            ({ category }: ArticlesProps) => category === 'News'
                        )
                        .map(
                            ({
                                category,
                                title,
                                author,
                                summary,
                                image,
                            }: ArticlesProps) => (
                                <Grid item xs={12} sm={6} lg={4}>
                                    <ArticlesListItem
                                        category={category}
                                        title={title}
                                        author={author}
                                        summary={summary}
                                        image={image}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>
            </div>
        </>
    )
}
export default News