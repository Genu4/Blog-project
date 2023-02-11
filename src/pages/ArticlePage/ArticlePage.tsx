import './ArticlePage.scss'
import ArticlePageContent from 'components/ArticlePageContent/ArticlePageContent'
import Comments from 'components/Comments/Comments'
import Socials from 'components/Socials/Socials'

const ArticlePage = () => {
    return (
        <>
            <div className='article-page-content'>
                <ArticlePageContent />
            </div>
            <div className='article-page-comment'>
                <Comments />
            </div>
        </>
    )
}
export default ArticlePage
