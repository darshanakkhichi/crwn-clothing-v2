import './category.styles.scss';

const Category = ({category}) => {
    const {imageUrl , title} = category;
    return (
          <div className='category-container'>
            <div className='category-image'
            style={{
              backgroundImage:`url(${imageUrl})`
            }}
            />
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>Buy Now</p>
            </div>
          </div>
      )
}
export default Category;