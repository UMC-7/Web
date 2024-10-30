import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  aspect-ratio: 16/9;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const CategoryTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
`;

const Movies = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "현재 상영중인",
            image: "https://images.unsplash.com/photo-1589802829985-817e51171b92",
            path: "now-playing"
        },
        {
            title: "인기있는",
            image: "https://images.unsplash.com/photo-1589802829985-817e51171b92",
            path: "popular"
        },
        {
            title: "높은 평가를 받은",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            path: "top-rated"
        },
        {
            title: "개봉 예정중인",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
            path: "upcoming"
        }
    ];

    const handleCategoryClick = (path) => {
        navigate(`/movies/${path}`);
    };

    return (
        <PageContainer>
            <PageTitle>카테고리</PageTitle>
            <CategoryGrid>
                {categories.map((category, index) => (
                    <CategoryCard 
                        key={index} 
                        onClick={() => handleCategoryClick(category.path)}
                    >
                        <CategoryImage src={category.image} alt={category.title} />
                        <CategoryTitle>{category.title}</CategoryTitle>
                    </CategoryCard>
                ))}
            </CategoryGrid>
        </PageContainer>
    );
};

export default Movies; 