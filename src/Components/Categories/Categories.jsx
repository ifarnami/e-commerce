import "./Categories.styles.scss";

import CategoryItem from "../CategoryItem/CategoryItem";

function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
